"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";

const POLL_MS = 30_000;
// Last good stats, so a returning visitor never sees "—" while the first request is in flight
const CACHE_KEY = "tg_network_stats_v1";

type Stats = {
  totalMiners: number | null;
  totalTransactions: number | null;
  totalApps: number | null;
};

// The cache is only written by this component, so there is nothing to subscribe to
function subscribeNever(): () => void {
  return () => {};
}

function readCachedRaw(): string | null {
  try {
    return window.localStorage.getItem(CACHE_KEY);
  } catch {
    return null;
  }
}

function parseCache(raw: string | null): Partial<Stats> | null {
  try {
    return raw ? (JSON.parse(raw) as Partial<Stats>) : null;
  } catch {
    return null;
  }
}

function writeCache(stats: Stats): void {
  try {
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(stats));
  } catch {
    // storage full or unavailable: skip caching
  }
}

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
  const [stats, setStats] = useState<Stats>({
    totalMiners: null,
    totalTransactions: null,
    totalApps: null,
  });

  // Cached numbers are used until fresh ones arrive (the server render has none, so hydration sees null first)
  const cachedRaw = useSyncExternalStore(subscribeNever, readCachedRaw, () => null);
  const cached = useMemo(() => parseCache(cachedRaw), [cachedRaw]);
  const transactions = stats.totalTransactions ?? cached?.totalTransactions ?? null;

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const res = await fetch("/api/network-stats", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as Stats;
        if (cancelled) return;
        // A null from the API means that upstream call failed: keep what is already shown
        setStats((prev) => {
          const next = {
            totalMiners: data.totalMiners ?? prev.totalMiners,
            totalTransactions: data.totalTransactions ?? prev.totalTransactions,
            totalApps: data.totalApps ?? prev.totalApps,
          };
          writeCache(next);
          return next;
        });
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
        value={formatCount(transactions)}
        label="Transactions (testnet)"
        live
      />
      <Stat value="1,509" label="Miners" live />
      <Stat value="45" label="Apps" live />
      <Stat value="8 / 64" label="Nodes secured" />
      <Stat value="Jan 2027" label="Mainnet" />
    </div>
  );
}
