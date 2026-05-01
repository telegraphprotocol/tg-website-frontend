"use client";

import { useEffect, useState } from "react";
import { useInView } from "./use-in-view";

const POOL = "0123456789";

export function NumberScramble({
  value,
  duration = 900,
  className = "",
  threshold = 0.5,
}: {
  value: string;
  duration?: number;
  className?: string;
  threshold?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(threshold);
  const [shown, setShown] = useState(value.replace(/[0-9]/g, "0"));

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const reveal = Math.floor(value.length * t);
      let out = "";
      for (let i = 0; i < value.length; i++) {
        if (i < reveal || /[^0-9]/.test(value[i])) out += value[i];
        else out += POOL[(Math.random() * 10) | 0];
      }
      setShown(out);
      if (t < 1) raf = requestAnimationFrame(step);
      else setShown(value);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {shown}
    </span>
  );
}
