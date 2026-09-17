import { NextResponse } from "next/server";

const LEADERBOARD_API_BASE_URL = "https://devnode.telegraphprotocol.com";
const DAEMON_API_BASE_URL = "https://devnode.telegraphprotocol.com/daemon";
const ALEXANDRIA_API_BASE_URL = "https://alexandria.telegraphprotocol.com";
// Comfortably exceeds any real daemon retention window -- stand-in for "all time"
// since there's no dedicated lifetime-count endpoint (same approach telegraph-explorer uses).
const ALL_TIME_SINCE_HOURS = 24 * 365 * 5;

export const revalidate = 300;

export async function GET() {
  const [minersRes, signalsRes, appsRes] = await Promise.allSettled([
    fetch(`${LEADERBOARD_API_BASE_URL}/miner-dispatcher/integrations`, {
      next: { revalidate: 300 },
    }),
    fetch(
      `${DAEMON_API_BASE_URL}/api/questions?sort=recent&order=desc&since_hours=${ALL_TIME_SINCE_HOURS}&limit=1&offset=0`,
      { next: { revalidate: 300 } },
    ),
    fetch(`${ALEXANDRIA_API_BASE_URL}/api/apps?page=1&limit=1`, {
      next: { revalidate: 300 },
    }),
  ]);

  let totalMiners: number | null = null;
  if (minersRes.status === "fulfilled" && minersRes.value.ok) {
    const data = (await minersRes.value.json()) as { kind?: string }[];
    if (Array.isArray(data)) {
      totalMiners = data.filter((entry) => entry.kind === "miner").length;
    }
  }

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

  return NextResponse.json({ totalMiners, totalTransactions, totalApps });
}
