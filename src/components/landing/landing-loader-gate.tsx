"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type LandingLoaderGateProps = {
  children: ReactNode;
  imageSources: string[];
};

type ImageProgress = {
  loaded: number;
  total: number | null;
  done: boolean;
};

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const image = new Image();
    image.src = src;

    if (image.complete) {
      resolve();
      return;
    }

    image.onload = () => resolve();
    image.onerror = () => resolve();
  });
}

async function preloadImageWithProgress(
  src: string,
  onProgress: (progress: ImageProgress) => void,
  signal: AbortSignal,
): Promise<void> {
  const response = await fetch(src, { signal, cache: "force-cache" });

  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${src}`);
  }

  const contentLengthHeader = response.headers.get("content-length");
  const total = contentLengthHeader ? Number(contentLengthHeader) : null;

  if (!response.body) {
    onProgress({
      loaded: total ?? 1,
      total: total ?? 1,
      done: true,
    });
    await preloadImage(src);
    return;
  }

  const reader = response.body.getReader();
  let loaded = 0;

  while (true) {
    const { value, done } = await reader.read();

    if (done) {
      break;
    }

    loaded += value.byteLength;
    onProgress({ loaded, total, done: false });
  }

  onProgress({
    loaded: total ?? loaded,
    total: total ?? loaded,
    done: true,
  });
  await preloadImage(src);
}

export function LandingLoaderGate({
  children,
  imageSources,
}: LandingLoaderGateProps) {
  const [imagesReady, setImagesReady] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [showProgress, setShowProgress] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const abortController = new AbortController();

    async function preloadAll() {
      const uniqueSources = Array.from(new Set(imageSources.filter(Boolean)));
      setImagesReady(false);
      setIsFading(false);
      setShowLoader(true);
      setShowProgress(false);
      setProgressPercent(0);

      if (uniqueSources.length === 0) {
        setProgressPercent(100);
        setImagesReady(true);
        return;
      }

      const progressBySource = new Map<string, ImageProgress>(
        uniqueSources.map((src) => [
          src,
          { loaded: 0, total: null, done: false } as ImageProgress,
        ]),
      );

      const updateOverallPercent = () => {
        const progressItems = Array.from(progressBySource.values());

        if (progressItems.length === 0) {
          if (isMounted) {
            setProgressPercent(100);
          }
          return;
        }

        const totalRatio = progressItems.reduce((sum, item) => {
          if (item.total && item.total > 0) {
            return sum + Math.min(item.loaded / item.total, 1);
          }

          return sum + (item.done ? 1 : 0);
        }, 0);

        const nextPercent = Math.round((totalRatio / progressItems.length) * 100);

        if (isMounted) {
          setProgressPercent(nextPercent);
        }
      };

      await Promise.all(
        uniqueSources.map(async (src) => {
          try {
            await preloadImageWithProgress(
              src,
              (progress) => {
                progressBySource.set(src, progress);
                updateOverallPercent();
              },
              abortController.signal,
            );
          } catch {
            progressBySource.set(src, { loaded: 1, total: 1, done: true });
            updateOverallPercent();
          }
        }),
      );

      if (!isMounted) return;
      setProgressPercent(100);
      setImagesReady(true);
    }

    preloadAll();

    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, [imageSources]);

  useEffect(() => {
    if (!imagesReady) return;

    const startFadeTimeout = window.setTimeout(() => {
      setIsFading(true);
    }, 1000);

    const hideTimeout = window.setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    return () => {
      window.clearTimeout(startFadeTimeout);
      window.clearTimeout(hideTimeout);
    };
  }, [imagesReady]);

  useEffect(() => {
    if (imagesReady || !showLoader) return;

    const progressDelayTimeout = window.setTimeout(() => {
      setShowProgress(true);
    }, 2000);

    return () => {
      window.clearTimeout(progressDelayTimeout);
    };
  }, [imagesReady, showLoader]);

  return (
    <>
      {children}

      {showLoader ? (
        <div
          role="status"
          aria-live="polite"
          className={`fixed inset-0 z-[120] flex items-center justify-center bg-black transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}
        >
          <div className="flex w-full max-w-[320px] flex-col items-center gap-4 px-6 text-[var(--tg-fg-dim)]">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--tg-line-strong)] border-t-[var(--tg-fg)]" />
            <div className="min-h-[34px] w-full">
              {showProgress ? (
                <p className="text-center text-[12px] tracking-[0.12em] uppercase">
                  Loading {progressPercent}%
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
