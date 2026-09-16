"use client";

import { useEffect, useState } from "react";
import { NumberScramble } from "@/components/landing/fx/number-scramble";

const STATS = [
  { label: "agents online", value: "1,284" },
  { label: "requests routed", value: "48,902" },
  { label: "TGRAPH settled", value: "6,113.4" },
];

export function StatStrip() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-[520px] items-stretch justify-center divide-x divide-[var(--tg-line)] rounded-sm border border-[var(--tg-line)] bg-[rgba(10,10,10,0.4)] backdrop-blur-sm">
      {STATS.map((s) => (
        <div
          key={s.label}
          className="flex flex-1 flex-col items-center gap-1.5 px-4 py-4"
        >
          <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--tg-fg-faint)]">
            <span className="h-1 w-1 rounded-full bg-[var(--tg-fg-dim)]" />
            {s.label}
          </span>
          <NumberScramble
            key={`${s.label}-${tick}`}
            value={s.value}
            duration={800}
            className="text-[18px] font-medium tabular-nums text-[var(--tg-fg)]"
          />
        </div>
      ))}
    </div>
  );
}
