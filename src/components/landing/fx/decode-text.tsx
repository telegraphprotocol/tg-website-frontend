"use client";

import { useEffect, useState } from "react";
import { useInView } from "./use-in-view";

const POOL = "0123456789ABCDEFΣΩΨ#$%@&*<>{};/";

type Props = {
  text: string;
  className?: string;
  duration?: number;
  threshold?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
};

/**
 * Each character cycles through random glyphs from POOL, settling into the final
 * letter in left-to-right order over `duration` ms. Spaces and existing punctuation
 * settle instantly so the silhouette stays readable.
 */
export function DecodeText({
  text,
  className = "",
  duration = 1100,
  threshold = 0.45,
  as = "h2",
}: Props) {
  const { ref, inView } = useInView<HTMLElement>(threshold);
  const [shown, setShown] = useState(text);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const reveal = Math.floor(text.length * t);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === " " || ch === "\n") {
          out += ch;
          continue;
        }
        if (i < reveal) out += ch;
        else out += POOL[(Math.random() * POOL.length) | 0];
      }
      setShown(out);
      if (t < 1) raf = requestAnimationFrame(step);
      else setShown(text);
    };
    // Hide content until first frame fires to avoid flash of final text
    setShown(scramble(text));
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, text, duration]);

  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {shown}
    </Tag>
  );
}

function scramble(text: string): string {
  let out = "";
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === " " || ch === "\n") out += ch;
    else out += POOL[(Math.random() * POOL.length) | 0];
  }
  return out;
}
