import { NextResponse } from "next/server";

const LEADERBOARD_API_BASE_URL = "https://devnode.telegraphprotocol.com";
const DAEMON_API_BASE_URL = "https://devnode.telegraphprotocol.com/daemon";
const ANJOMAN_API_BASE_URL = "https://anjoman.ai";
// Comfortably exceeds any real daemon retention window -- stand-in for "all time"
// since there's no dedicated lifetime-count endpoint (same approach telegraph-explorer uses).
const ALL_TIME_SINCE_HOURS = 24 * 365 * 5;

const MINERS_CACHE_TTL_MS = 5 * 60 * 1000;
const MINERS_RETRY_DELAY_MS = 30 * 1000;
const MINERS_FETCH_TIMEOUT_MS = 15 * 1000;
const FALLBACK_MINERS = 2189;

// Fetched at request time so a flaky upstream can't fail `next build`; each fetch below is cached for 5 min
export const dynamic = "force-dynamic";

type NetworkStats = {
  totalMiners: number | null;
  totalTransactions: number | null;
  totalApps: number | null;
};

// Last successful values, kept in server memory between requests
let lastGood: NetworkStats = { totalMiners: null, totalTransactions: null, totalApps: null };
let nextMinersFetchAt = 0;
let minersRefreshPromise: Promise<number | null> | null = null;

function startMinersRefresh(): Promise<number | null> {
  if (!minersRefreshPromise) {
    minersRefreshPromise = (async () => {
      try {
        // Bypass Next.js Data Cache (2MB cap): /miner-dispatcher/integrations is >5MB,
        // so caching it in Next's fetch cache fails and can trap a stale empty [] response.
        const res = await fetch(`${LEADERBOARD_API_BASE_URL}/miner-dispatcher/integrations`, {
          cache: "no-store",
          signal: AbortSignal.timeout(MINERS_FETCH_TIMEOUT_MS),
        });
        if (!res.ok) {
          nextMinersFetchAt = Date.now() + MINERS_RETRY_DELAY_MS;
          return null;
        }
        const data = (await res.json()) as { kind?: string }[];
        if (!Array.isArray(data)) {
          nextMinersFetchAt = Date.now() + MINERS_RETRY_DELAY_MS;
          return null;
        }
        const count = data.filter((entry) => entry.kind === "miner").length;
        // Ignore transient empty responses (e.g. during node restart) so we never publish 0 miners
        if (count <= 0) {
          nextMinersFetchAt = Date.now() + MINERS_RETRY_DELAY_MS;
          return null;
        }
        lastGood.totalMiners = count;
        nextMinersFetchAt = Date.now() + MINERS_CACHE_TTL_MS;
        return count;
      } catch {
        nextMinersFetchAt = Date.now() + MINERS_RETRY_DELAY_MS;
        return null;
      } finally {
        minersRefreshPromise = null;
      }
    })();
  }
  return minersRefreshPromise;
}

async function getTotalMiners(): Promise<number> {
  const now = Date.now();
  if (now < nextMinersFetchAt) {
    return lastGood.totalMiners ?? FALLBACK_MINERS;
  }

  const refresh = startMinersRefresh();
  // Stale-while-revalidate: serve last known count immediately while refreshing in the background
  if (lastGood.totalMiners !== null) {
    return lastGood.totalMiners;
  }

  // On cold start, wait for the first fetch and fall back to FALLBACK_MINERS if unavailable
  const fresh = await refresh;
  return fresh ?? lastGood.totalMiners ?? FALLBACK_MINERS;
}

export async function GET() {
  const [totalMiners, signalsRes, appsRes] = await Promise.all([
    getTotalMiners(),
    fetch(
      `${DAEMON_API_BASE_URL}/api/questions?sort=recent&order=desc&since_hours=${ALL_TIME_SINCE_HOURS}&limit=1&offset=0`,
      { next: { revalidate: 300 } },
    ).then(
      (value) => ({ status: "fulfilled" as const, value }),
      (reason) => ({ status: "rejected" as const, reason }),
    ),
    fetch(`${ANJOMAN_API_BASE_URL}/api/apps?page=1&limit=1`, {
      next: { revalidate: 300 },
    }).then(
      (value) => ({ status: "fulfilled" as const, value }),
      (reason) => ({ status: "rejected" as const, reason }),
    ),
  ]);

  let totalTransactions: number | null = null;
  if (signalsRes.status === "fulfilled" && signalsRes.value.ok) {
    const data = (await signalsRes.value.json()) as { total?: number };
    totalTransactions = typeof data.total === "number" ? data.total : null;
  }

  let totalApps: number | null = null;
  if (appsRes.status === "fulfilled" && appsRes.value.ok) {
    const data = (await appsRes.value.json()) as { total?: number };
    totalApps = typeof data.total === "number" ? data.total : null;
  }

  // A failed upstream call must not blank a stat that was fine a moment ago: fall back to the last good value
  const stats = {
    totalMiners,
    totalTransactions: totalTransactions ?? lastGood.totalTransactions,
    totalApps: totalApps ?? lastGood.totalApps,
  };
  lastGood = {
    totalMiners: lastGood.totalMiners,
    totalTransactions: stats.totalTransactions,
    totalApps: stats.totalApps,
  };

  return NextResponse.json(stats);
}
