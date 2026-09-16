"use client";

import { useEffect, useState } from "react";

const LOGS = [
  "agent_0x9f2c → discover: dataset.market.v3",
  "verifying signature... ok",
  "agent_0x9f2c → pay: 0.004 TGRAPH",
  "settled on-chain · block #2,481,902",
  "agent_0x71ab → discover: model.inference.gpt-r",
  "verifying signature... ok",
  "agent_0x71ab → pay: 0.011 TGRAPH",
  "settled on-chain · block #2,481,905",
];

export function LiveFeed() {
  const [lines, setLines] = useState<string[]>([]);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    let cancelled = false;
    let i = 0;

    const typeLine = (full: string, done: () => void) => {
      let c = 0;
      const tick = () => {
        if (cancelled) return;
        c++;
        setTyping(full.slice(0, c));
        if (c < full.length) setTimeout(tick, 14);
        else done();
      };
      tick();
    };

    const step = () => {
      if (cancelled) return;
      const full = LOGS[i % LOGS.length];
      typeLine(full, () => {
        setTimeout(() => {
          if (cancelled) return;
          setLines((prev) => {
            const next = [...prev, full];
            return next.length > 4 ? next.slice(next.length - 4) : next;
          });
          setTyping("");
          i++;
          setTimeout(step, 260);
        }, 700);
      });
    };

    const t = setTimeout(step, 400);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-[460px] rounded-sm border border-[var(--tg-line)] bg-[rgba(10,10,10,0.55)] px-4 py-3.5 text-left backdrop-blur-sm">
      <div className="mb-2.5 flex items-center gap-2 border-b border-[var(--tg-line-soft)] pb-2">
        <span className="relative flex h-[7px] w-[7px]">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5fd48a] opacity-50" />
          <span className="relative h-[7px] w-[7px] rounded-full bg-[#5fd48a]" />
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--tg-fg-faint)]">
          live protocol activity
        </span>
      </div>
      <div className="min-h-[92px] font-mono text-[12px] leading-[1.9] text-[var(--tg-fg-dim)]">
        {lines.map((l, idx) => (
          <div key={idx} className="truncate opacity-70">
            {l}
          </div>
        ))}
        <div className="truncate text-[var(--tg-fg)]">
          {typing}
          <span className="tg-tw-cursor">_</span>
        </div>
      </div>
    </div>
  );
}
