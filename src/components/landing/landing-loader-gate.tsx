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

  useEffect(() => {
    let isMounted = true;

    async function preloadAll() {
      const uniqueSources = Array.from(new Set(imageSources));
      await Promise.all(uniqueSources.map((src) => preloadImage(src)));

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

    setIsFading(true);

    const timeout = window.setTimeout(() => {
      setShowLoader(false);
    }, 500);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [imagesReady]);

  return (
    <>
      {children}

      {showLoader ? (
        <div
          aria-hidden
          className={`fixed inset-0 z-[120] flex items-center justify-center bg-black transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}
        >
          <div className="flex flex-col items-center gap-4 text-[var(--tg-fg-dim)]">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--tg-line-strong)] border-t-[var(--tg-fg)]" />
          </div>
        </div>
      ) : null}
    </>
  );
}
