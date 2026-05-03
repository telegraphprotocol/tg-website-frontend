"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type LandingLoaderGateProps = {
  children: ReactNode;
  imageSources: string[];
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

export function LandingLoaderGate({
  children,
  imageSources,
}: LandingLoaderGateProps) {
  const [imagesReady, setImagesReady] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [totalImages, setTotalImages] = useState(0);
  const [loadedImages, setLoadedImages] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function preloadAll() {
      const uniqueSources = Array.from(new Set(imageSources.filter(Boolean)));
      setImagesReady(false);
      setIsFading(false);
      setShowLoader(true);
      setShowProgress(false);
      setTotalImages(uniqueSources.length);
      setLoadedImages(0);

      if (uniqueSources.length === 0) {
        setImagesReady(true);
        return;
      }

      let completed = 0;

      await Promise.all(
        uniqueSources.map(async (src) => {
          await preloadImage(src);
          completed += 1;

          if (!isMounted) return;
          setLoadedImages(completed);
        }),
      );

      if (!isMounted) return;
      setImagesReady(true);
    }

    preloadAll();

    return () => {
      isMounted = false;
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

  const progressPercent =
    totalImages === 0 ? 100 : Math.round((loadedImages / totalImages) * 100);

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
