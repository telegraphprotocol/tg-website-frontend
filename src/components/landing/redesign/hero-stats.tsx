"use client";

import { useEffect, useState } from "react";

const POLL_MS = 30_000;

function formatCount(n: number | null): string {
  if (n === null) return "—";
  return n.toLocaleString("en-US");
}

function Stat({
  value,
  label,
  live,
}: {
  value: string;
  label: string;
  live?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-1 px-4">
      <span className="flex items-center gap-1.5 text-[20px] font-medium tabular-nums text-[var(--tg-fg)] sm:text-[24px]">
        {value}
        {live ? (
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-emerald-400"
            title="Live"
          />
        ) : null}
      </span>
      <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--tg-fg-faint)]">
        {label}
      </span>
    </div>
  );
}

export function HeroStats() {
  const [stats, setStats] = useState<{
    totalMiners: number | null;
    totalTransactions: number | null;
    totalApps: number | null;
  }>({ totalMiners: null, totalTransactions: null, totalApps: null });

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const res = await fetch("/api/network-stats", { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        if (!cancelled) setStats(data);
      } catch {
        // silently keep last-known values on transient network failure
      }
    };
    load();
    const id = setInterval(load, POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center divide-x divide-[var(--tg-line)]">
      <Stat
        value={formatCount(stats.totalTransactions)}
        label="Transactions (testnet)"
        live
      />
      <Stat value={formatCount(stats.totalMiners)} label="Miners" live />
      <Stat value="45" label="Apps" live />
      <Stat value="8 / 64" label="Nodes secured" />
      <Stat value="Jan 2027" label="Mainnet" />
    </div>
  );
}
