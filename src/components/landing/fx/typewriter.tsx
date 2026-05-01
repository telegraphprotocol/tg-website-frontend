"use client";

import { useEffect, useState } from "react";
import { useInView } from "./use-in-view";

type Props = {
  text: string;
  speed?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  threshold?: number;
};

export function Typewriter({ text, speed = 22, className = "", as = "h2", threshold = 0.4 }: Props) {
  const { ref, inView } = useInView<HTMLElement>(threshold);
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    let id: ReturnType<typeof setTimeout>;
    const tick = () => {
      i++;
      setShown(text.slice(0, i));
      if (i < text.length) id = setTimeout(tick, speed);
      else setDone(true);
    };
    id = setTimeout(tick, speed);
    return () => clearTimeout(id);
  }, [inView, text, speed]);

  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref}
      className={className}
      style={{ whiteSpace: "pre-wrap" }}
      aria-label={text}
    >
      <span>{shown || " "}</span>
      {!done ? <span className="tg-tw-cursor">_</span> : null}
    </Tag>
  );
}
