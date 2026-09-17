"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen } from "lucide-react";
import { useRedesignTheme } from "./landing/redesign/theme-context";

const GUIDE_URL = "https://guide.telegraphprotocol.com";

type GuideProgress = { completed: number; total: number };

function readGuideProgress(): GuideProgress | null {
  const match = document.cookie.match(/(?:^|; )tg_guide_overall_progress=([^;]*)/);
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match[1])) as GuideProgress;
  } catch {
    return null;
  }
}

function useGuideProgressPct() {
  const [progress, setProgress] = useState<GuideProgress | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read from a cookie set by guide.telegraphprotocol.com, not derivable at render time on the server
    setProgress(readGuideProgress());
  }, []);

  const pct = progress && progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0;
  return { progress, pct };
}

function MiniBar({ pct }: { pct: number }) {
  return (
    <span className="relative h-1 w-8 shrink-0 overflow-hidden rounded-full bg-current/15">
      <span
        className="absolute inset-y-0 left-0 rounded-full bg-emerald-400 transition-all duration-300"
        style={{ width: `${pct}%` }}
      />
    </span>
  );
}

function useGuideChipTone() {
  const pathname = usePathname();
  const { theme } = useRedesignTheme();
  const isLight = pathname === "/" && theme === "light";
  return isLight
    ? "bg-black/[0.05] text-[#101012] hover:bg-black/[0.09]"
    : "bg-[#1a1a1a] text-[var(--tg-fg)] hover:bg-[#222]";
}

export function GuideNavLink({ onClick }: { onClick?: () => void }) {
  const { progress, pct } = useGuideProgressPct();
  const chipTone = useGuideChipTone();

  return (
    <Link
      href={GUIDE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`inline-flex h-10 items-center gap-2 rounded-sm px-[18px] text-[14px] font-medium leading-none no-underline transition-colors ${chipTone}`}
    >
      <BookOpen className="h-4 w-4 opacity-80" aria-hidden />
      <span>Guide</span>
      {progress && (
        <>
          <MiniBar pct={pct} />
          <span className="text-[11px] opacity-60">{pct}%</span>
        </>
      )}
    </Link>
  );
}

export function GuideNavLinkOverlay({ onClick }: { onClick?: () => void }) {
  const { progress, pct } = useGuideProgressPct();
  const chipTone = useGuideChipTone();

  return (
    <Link
      href={GUIDE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`flex items-center gap-3 rounded-sm px-4 py-3 text-[14px] font-medium no-underline transition-colors ${chipTone}`}
    >
      <BookOpen className="h-4 w-4 opacity-80" aria-hidden />
      <span className="flex-1">Guide</span>
      {progress && (
        <span className="flex items-center gap-2">
          <MiniBar pct={pct} />
          <span className="text-[11px] opacity-60">{pct}%</span>
        </span>
      )}
    </Link>
  );
}
