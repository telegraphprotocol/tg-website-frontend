"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDownLine } from "./shared";

const STEP_MS = 1600;

// Column centres for the 4-up desktop grid (gap-x-12): left edge of the track to the centre of step i
const center = (i: number) =>
  `calc((100% - 9rem) / 8 + ${i} * ((100% - 9rem) / 4 + 3rem))`;

// The economic loop. A ball walks through the steps on its own; clicking a step makes the
// sequence continue from that step straight away.
export function MachinaLoop({ steps }: { steps: string[] }) {
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => setVisible(entries.some((e) => e.isIntersecting)),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // The timer restarts on every click (tick), so the sequence continues from the clicked step
  useEffect(() => {
    if (!visible || reduced) return;
    const t = setTimeout(
      () => setActive((a) => (a + 1) % steps.length),
      STEP_MS,
    );
    return () => clearTimeout(t);
  }, [active, tick, visible, reduced, steps.length]);

  function go(i: number) {
    setActive(i);
    setTick((t) => t + 1);
  }

  const last = steps.length - 1;

  return (
    <div ref={ref}>
      {/* Desktop track: numbered stops with a ball that moves between them */}
      <div className="relative mb-4 hidden h-8 md:block">
        <span
          aria-hidden
          className="absolute top-1/2 h-px -translate-y-1/2 bg-[var(--tg-line-strong)]"
          style={{ left: center(0), right: center(0) }}
        />
        {steps.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Step ${i + 1}`}
            style={{ left: center(i) }}
            className="absolute top-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] font-mono text-[11px] text-[var(--tg-fg-dim)] transition-colors hover:border-[var(--tg-fg-dim)] hover:text-[var(--tg-fg)]"
          >
            {i + 1}
          </button>
        ))}
        <span
          aria-hidden
          style={{ left: center(active) }}
          className="pointer-events-none absolute top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--tg-fg)] font-mono text-[12px] font-medium text-[var(--tg-bg)] transition-[left] duration-500 ease-in-out"
        >
          {active + 1}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-y-0 md:grid-cols-4 md:gap-x-12">
        {steps.map((step, i) => (
          <div key={step} className="relative">
            {i > 0 ? (
              <div className="md:hidden">
                <ArrowDownLine />
              </div>
            ) : null}
            <button
              type="button"
              onClick={() => go(i)}
              aria-pressed={i === active}
              className={`flex min-h-[84px] w-full items-center justify-center gap-2 rounded-sm border px-4 py-3 text-center text-[13px] leading-[1.5] text-[var(--tg-fg)] transition-colors duration-300 ${
                i === active
                  ? "border-[var(--tg-fg)] bg-[var(--tg-surface-hi)]"
                  : "border-[var(--tg-line-strong)] bg-[var(--tg-bg)] hover:border-[var(--tg-fg-dim)]"
              }`}
            >
              <span className="font-mono text-[11px] text-[var(--tg-fg-faint)] md:hidden">
                {i + 1}
              </span>
              {step}
            </button>
            {i < last ? (
              <span
                aria-hidden
                className={`absolute left-full top-1/2 ml-1 hidden h-px w-10 -translate-y-1/2 transition-colors duration-300 md:block ${
                  i === active ? "bg-[var(--tg-fg)]" : "bg-[var(--tg-line-strong)]"
                }`}
              >
                <span
                  className={`absolute right-0 top-1/2 -translate-y-1/2 border-y-[4px] border-l-[7px] border-y-transparent transition-colors duration-300 ${
                    i === active
                      ? "border-l-[var(--tg-fg)]"
                      : "border-l-[var(--tg-line-strong)]"
                  }`}
                />
              </span>
            ) : null}
          </div>
        ))}
      </div>

      <div
        className={`relative mx-[calc((100%-9rem)/8)] mt-3 hidden h-9 rounded-b-sm border-x border-b transition-colors duration-300 md:block ${
          active === last
            ? "border-[var(--tg-fg)]"
            : "border-[var(--tg-line-strong)]"
        }`}
      >
        <span
          aria-hidden
          className={`absolute -left-[4.5px] -top-[1px] border-x-[4px] border-b-[7px] border-x-transparent transition-colors duration-300 ${
            active === last
              ? "border-b-[var(--tg-fg)]"
              : "border-b-[var(--tg-line-strong)]"
          }`}
        />
        <span className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 bg-[var(--tg-bg)] px-3 text-[11px] uppercase tracking-[0.2em] text-[var(--tg-fg-dim)]">
          repeat
        </span>
      </div>
      <p className="m-0 mt-3 text-center text-[11px] uppercase tracking-[0.2em] text-[var(--tg-fg-dim)] md:hidden">
        ↻ repeat
      </p>
    </div>
  );
}
