"use client";

import { useEffect, useState } from "react";
import { useInView } from "./use-in-view";

export type TerminalLine =
  | { kind: "head"; text: string }
  | { kind: "rule"; text: string }
  | { kind: "kv"; key: string; val: string }
  | { kind: "raw"; text: string }
  | { kind: "status"; text: string; cursor?: boolean };

type Props = {
  lines: TerminalLine[];
  className?: string;
  /** ms between lines */
  step?: number;
  /** ms typing each character within a line */
  charSpeed?: number;
  threshold?: number;
  /** Extra ms to wait after entering view before typing starts */
  delay?: number;
};

export function TerminalLines({
  lines,
  className = "",
  step = 110,
  charSpeed = 8,
  threshold = 0.3,
  delay = 0,
}: Props) {
  const { ref, inView } = useInView<HTMLDivElement>(threshold);
  const [progress, setProgress] = useState<{ line: number; char: number }>({
    line: 0,
    char: 0,
  });

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    let lineIdx = 0;

    const playLine = () => {
      if (cancelled || lineIdx >= lines.length) return;
      const line = lines[lineIdx];
      const fullText = lineLength(line);
      let charIdx = 0;
      const tick = () => {
        if (cancelled) return;
        charIdx++;
        setProgress({ line: lineIdx, char: charIdx });
        if (charIdx < fullText) {
          setTimeout(tick, charSpeed);
        } else {
          lineIdx++;
          setProgress({ line: lineIdx, char: 0 });
          setTimeout(playLine, step);
        }
      };
      tick();
    };

    const t = setTimeout(playLine, 200 + delay);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [inView, lines, step, charSpeed, delay]);

  return (
    <div
      ref={ref}
      className={`overflow-hidden text-[14px] leading-[1.7] text-[var(--tg-fg-dim)] ${className}`}
    >
      {lines.map((line, i) => {
        if (i > progress.line)
          return (
            <span key={i} className="block opacity-0">
              &nbsp;
            </span>
          );
        const visible = i < progress.line ? lineLength(line) : progress.char;
        return (
          <LineRender
            key={i}
            line={line}
            visible={visible}
            active={i === progress.line && visible < lineLength(line)}
          />
        );
      })}
    </div>
  );
}

function lineLength(line: TerminalLine): number {
  switch (line.kind) {
    case "head":
    case "rule":
    case "raw":
    case "status":
      return line.text.length;
    case "kv":
      return line.key.length + line.val.length;
  }
}

function LineRender({
  line,
  visible,
  active,
}: {
  line: TerminalLine;
  visible: number;
  active: boolean;
}) {
  const cursor = active ? <span className="tg-tw-cursor">_</span> : null;
  switch (line.kind) {
    case "head":
      return (
        <div className="text-[var(--tg-fg)]">
          {line.text.slice(0, visible)}
          {cursor}
        </div>
      );
    case "rule":
      return (
        <div className="mb-3 tracking-[-0.5px] text-[#555]">
          {line.text.slice(0, visible)}
          {cursor}
        </div>
      );
    case "kv": {
      const keyShown = Math.min(visible, line.key.length);
      const valShown = Math.max(0, visible - line.key.length);
      return (
        <span className="block">
          <span className="inline-block min-w-[130px] text-[var(--tg-fg)]">
            {line.key.slice(0, keyShown)}
          </span>
          <span className="text-[var(--tg-fg-dim)]">
            {line.val.slice(0, valShown)}
          </span>
          {cursor}
        </span>
      );
    }
    case "raw":
      return (
        <span className="block">
          {line.text.slice(0, visible)}
          {cursor}
        </span>
      );
    case "status": {
      const done = visible >= line.text.length;
      return (
        <span className="block text-[var(--tg-fg-dim)]">
          {line.text.slice(0, visible)}
          {active ? (
            <span className="tg-tw-cursor">_</span>
          ) : line.cursor && done ? (
            <span className="tg-tw-cursor">_</span>
          ) : null}
        </span>
      );
    }
  }
}
