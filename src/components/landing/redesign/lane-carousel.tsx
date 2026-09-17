"use client";

import { useRef, useState } from "react";
import { ArrowDownLine } from "./shared";

type Lane = {
  intent: string;
  query: string;
  outcome: string;
  supply: string[];
  ranking: { name: string; score: string; top?: boolean }[];
};

function Slide({ lane }: { lane: Lane }) {
  return (
    <div className="flex w-full shrink-0 flex-col items-stretch gap-2.5 px-0.5">
      <div className="flex flex-wrap justify-center gap-1.5">
        {lane.supply.map((s) => (
          <span
            key={s}
            className="rounded-sm border border-[var(--tg-line)] bg-[var(--tg-bg)] px-2 py-1 text-[10px] text-[var(--tg-fg-dim)]"
          >
            {s}
          </span>
        ))}
      </div>

      <ArrowDownLine className="h-4" />

      <div className="rounded-sm border border-[var(--tg-line-strong)] bg-[var(--tg-surface-strong)] px-3 py-3">
        <p className="m-0 mb-1.5 text-[12px] font-medium text-[var(--tg-fg)]">
          {lane.intent}
        </p>
        <ul className="m-0 space-y-1 p-0 text-[11px]">
          {lane.ranking.map((r, idx) => (
            <li
              key={r.name}
              className={`flex items-center gap-2 rounded-sm px-2 py-1 ${
                r.top
                  ? "border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] text-[var(--tg-fg)]"
                  : "text-[var(--tg-fg-dim)]"
              }`}
            >
              <span className="w-3 text-[var(--tg-fg-faint)]">{idx + 1}</span>
              <span className="flex-1">{r.name}</span>
              <span className="tabular-nums">{r.score}</span>
            </li>
          ))}
        </ul>
      </div>

      <ArrowDownLine className="h-4" />

      <div className="rounded-sm border border-[var(--tg-line)] bg-[var(--tg-surface)] px-3 py-2.5">
        <p className="m-0 text-[12px] font-medium text-[var(--tg-fg)]">{lane.query}</p>
        <p className="m-0 mt-0.5 text-[11px] leading-[1.4] text-[var(--tg-fg-dim)]">
          {lane.outcome}
        </p>
      </div>
    </div>
  );
}

export function LaneCarousel({ lanes }: { lanes: Lane[] }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const goTo = (i: number) => setIndex((i + lanes.length) % lanes.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 40) {
      goTo(touchDeltaX.current < 0 ? index + 1 : index - 1);
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <div className="md:hidden">
      <div
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {lanes.map((lane) => (
            <Slide key={lane.intent} lane={lane} />
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {lanes.map((l, i) => (
          <button
            key={l.intent}
            type="button"
            aria-label={`Show ${l.intent}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index
                ? "w-5 bg-[var(--tg-fg)]"
                : "w-1.5 bg-[var(--tg-line-strong)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
