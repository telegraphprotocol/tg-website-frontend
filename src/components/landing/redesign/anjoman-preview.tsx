"use client";

import { useEffect, useRef, useState } from "react";
import {
  Archive,
  ArrowUp,
  ArrowUpRight,
  Bell,
  Bot,
  Calendar,
  Database,
  Feather,
  FileText,
  Gauge,
  Globe,
  GraduationCap,
  House,
  Layers,
  LayoutDashboard,
  LogIn,
  Mic,
  PanelLeft,
  Paperclip,
  Plus,
  Scale,
  Search,
  Settings,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";
import { Red_Hat_Display, Red_Hat_Mono, Red_Hat_Text } from "next/font/google";
import { DEMOS, TYPE_MS } from "./intent-demos";

// The app's own typefaces, so the preview reads like the real thing
const display = Red_Hat_Display({ subsets: ["latin"], variable: "--font-anj-display" });
const text = Red_Hat_Text({ subsets: ["latin"], variable: "--font-anj-text" });
const mono = Red_Hat_Mono({ subsets: ["latin"], variable: "--font-anj-mono" });

const FIRST_HOLD_MS = 1200;
const HOLD_MS = 2600; // how long a finished question stays in the ask bar
const GAP_MS = 500; // pause between clearing the bar and typing the next question

const NAV: { label: string; Icon: LucideIcon; active?: boolean }[] = [
  { label: "Home", Icon: House, active: true },
  { label: "Search", Icon: Search },
  { label: "Jobs", Icon: Layers },
  { label: "Dashboard", Icon: LayoutDashboard },
];

const RECENT = [
  "Summarize this quarterly report",
  "Plan my week around two deadlines",
  "Will BTC be higher in 1 hour?",
  "Draft a launch post for our beta",
];

const SUGGESTIONS: { label: string; Icon: LucideIcon; tone: string }[] = [
  { label: "Plan my week", Icon: Calendar, tone: "text-[var(--anj-lapis)]" },
  { label: "Summarize a report", Icon: FileText, tone: "text-[var(--anj-gold)]" },
  { label: "Research a market", Icon: Globe, tone: "text-[var(--anj-teal)]" },
  { label: "Draft a launch post", Icon: Feather, tone: "text-[var(--anj-accent-text)]" },
];

const PORTALS: {
  verb: string;
  Icon: LucideIcon;
  tint: string;
  icon: string;
  soon?: boolean;
}[] = [
  {
    verb: "Apps & Agents",
    Icon: Bot,
    tint: "bg-[var(--anj-portal-validate)]",
    icon: "text-[var(--anj-teal)]",
  },
  {
    verb: "Providers",
    Icon: Database,
    tint: "bg-[var(--anj-portal-earn)]",
    icon: "text-[var(--anj-gold)]",
  },
  {
    verb: "Evaluators",
    Icon: Scale,
    tint: "bg-[var(--anj-portal-eval)]",
    icon: "text-[var(--anj-lapis)]",
  },
  {
    verb: "Train",
    Icon: GraduationCap,
    tint: "bg-[var(--anj-portal-train)]",
    icon: "text-[var(--anj-plum)]",
    soon: true,
  },
];

function Sparkle({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 7 7" className={`absolute fill-[var(--anj-gold)] ${className}`} aria-hidden>
      <path d="M3.5 0 4.2 2.8 7 3.5 4.2 4.2 3.5 7 2.8 4.2 0 3.5 2.8 2.8z" />
    </svg>
  );
}

function Logo() {
  return (
    <span className="relative block h-[26px] w-[118.6px] shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/anjoman/logo-mark.svg"
        alt=""
        className="absolute left-0 top-0 h-[24.449px] w-[19.586px] max-w-none"
        aria-hidden
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/anjoman/logo-wordmark.svg"
        alt="Anjoman"
        className="anj-wordmark absolute left-[25.39px] top-[0.68px] h-[25.323px] w-[93.218px] max-w-none"
      />
    </span>
  );
}

/** The seer in her gold doorway, ringed by gold circles: the poster frame of the app's home art. */
function Doorway() {
  return (
    <div className="relative mx-auto aspect-[540/840] w-full max-w-[330px]" role="img" aria-label="The Anjoman seer praying inside a gold arch">
      <div
        className="absolute left-[-2%] top-[3.5%] h-[66.7%] w-[103.7%] rounded-full"
        style={{ background: "radial-gradient(closest-side, var(--anj-gold-glow), transparent 72%)" }}
      />
      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 540 840" aria-hidden>
        <defs>
          <linearGradient id="anj-fade-grad" gradientUnits="userSpaceOnUse" x1="0" y1="270" x2="0" y2="490">
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#000" />
          </linearGradient>
          <mask id="anj-fade-mask" maskUnits="userSpaceOnUse" x="-100" y="-40" width="740" height="600">
            <rect x="-100" y="-40" width="740" height="600" fill="url(#anj-fade-grad)" />
          </mask>
        </defs>
        <g mask="url(#anj-fade-mask)" fill="none" strokeLinecap="round" style={{ stroke: "var(--anj-gold-line)" }}>
          <g transform="translate(270 308)">
            <circle r="262" strokeWidth="1.1" opacity=".55" />
            <circle r="246" strokeWidth="7" strokeDasharray="1 11.88" strokeLinecap="butt" opacity=".6" />
            <circle r="230" strokeWidth="1.8" opacity=".95" />
            <g strokeWidth="1" style={{ fill: "var(--anj-vermilion)", stroke: "var(--anj-gold-line)" }}>
              <rect x="-5" y="-235" width="10" height="10" transform="rotate(45 0 -230)" />
              <rect x="-235" y="-5" width="10" height="10" transform="rotate(45 -230 0)" />
              <rect x="225" y="-5" width="10" height="10" transform="rotate(45 230 0)" />
            </g>
            <circle r="212" strokeWidth="2.6" strokeDasharray="0.1 7" />
          </g>
        </g>
        <g style={{ fill: "var(--anj-gold)" }}>
          <path className="anj-twinkle" d="M270 16 272 22 278 24 272 26 270 32 268 26 262 24 268 22z" />
          <path className="anj-twinkle" style={{ animationDelay: "-1.6s" }} d="M80 90 82 95 87 97 82 99 80 104 78 99 73 97 78 95z" />
          <path className="anj-twinkle" style={{ animationDelay: "-3.1s" }} d="M460 90 462 95 467 97 462 99 460 104 458 99 453 97 458 95z" />
        </g>
      </svg>
      <div
        className="absolute left-[16.3%] top-[15%] h-[82.1%] w-[67.4%] rounded-t-full border border-b-0 border-dashed"
        style={{ borderColor: "var(--anj-gold-frame)" }}
      />
      <div
        className="absolute left-[18.5%] top-[16.4%] h-[79.8%] w-[63%] rounded-t-full bg-[var(--anj-card)]"
        style={{ boxShadow: "0 0 0 1.25px var(--anj-gold-frame)" }}
      >
        <div className="absolute inset-[2%] overflow-hidden rounded-t-full bg-[#1d2440]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/anjoman/seer-poster.jpg" alt="" className="h-full w-full object-cover object-[50%_22%]" />
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{ boxShadow: "inset 0 0 0 1px var(--anj-gold-frame-soft)" }}
          />
        </div>
      </div>
      <div className="absolute left-[13.7%] top-[97.1%] h-px w-[72.6%]" style={{ background: "var(--anj-gold-frame)" }} />
      <div className="absolute left-[10%] top-[97.9%] h-px w-[80%]" style={{ background: "var(--anj-gold-frame-soft)" }} />
    </div>
  );
}

function Portal({ index, item }: { index: number; item: (typeof PORTALS)[number] }) {
  const { verb, Icon, tint, icon, soon } = item;
  return (
    // The wrapper is the size container: the dome's radius is half the tile's width, as in the app
    <div className="@container">
      <div className="relative block h-[164px] rounded-b-[18px] rounded-t-[50cqw] bg-[var(--anj-card)] text-center shadow-[var(--anj-shadow-card)]">
        <span className="absolute inset-x-0 top-3 font-[family-name:var(--font-anj-mono)] text-[12px] uppercase leading-none tracking-[0.05em] text-[var(--anj-faint)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`absolute left-1/2 top-7 block h-[78px] w-[66px] -translate-x-1/2 rounded-t-[33px] border border-b-0 bg-[var(--anj-card)] ${
            soon ? "border-dashed" : ""
          }`}
          style={{ borderColor: "var(--anj-gold-frame)" }}
        >
          <span
            className={`absolute left-[5px] top-[5px] block h-[72px] w-[54px] rounded-t-[28px] border border-b-0 ${tint}`}
            style={{ borderColor: "var(--anj-gold-frame-soft)" }}
          >
            <Icon size={18} strokeWidth={1.5} className={`absolute left-[17px] top-[31px] ${icon}`} aria-hidden />
            {!soon && <Sparkle className="left-[11px] top-[14px] h-[7px] w-[7px]" />}
          </span>
        </span>
        <span
          className={`absolute left-1/2 top-[106px] h-px w-[86px] -translate-x-1/2 ${soon ? "border-t border-dashed" : ""}`}
          style={soon ? { borderColor: "var(--anj-gold-frame)" } : { background: "var(--anj-gold-frame)" }}
        />
        <span className="absolute left-1/2 top-[110px] h-px w-[110px] -translate-x-1/2 bg-[var(--anj-line)]" />
        <span className="absolute inset-x-2.5 top-[120px] flex flex-col items-center gap-0.5">
          <span className="font-[family-name:var(--font-anj-display)] text-[16px] font-semibold leading-none tracking-[-0.01em] text-[var(--anj-ink)]">
            {verb}
          </span>
        </span>
      </div>
    </div>
  );
}

export function AnjomanPreview() {
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const typer = useRef<ReturnType<typeof setInterval> | null>(null);
  const auto = useRef(true);

  function clearAll() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    if (typer.current) clearInterval(typer.current);
    typer.current = null;
  }

  function later(fn: () => void, ms: number) {
    timers.current.push(setTimeout(fn, ms));
  }

  // The visitor has taken over: stop the automatic demo for good
  function stopAuto() {
    auto.current = false;
    clearAll();
  }

  // One automatic cycle: type a question into the ask bar, hold it, clear it, next question
  function playDemo(index: number) {
    if (!auto.current) return;
    const q = DEMOS[index].query;
    setQuery("");
    let n = 0;
    typer.current = setInterval(() => {
      n += 1;
      setQuery(q.slice(0, n));
      if (n >= q.length) {
        if (typer.current) clearInterval(typer.current);
        typer.current = null;
        later(() => {
          setQuery("");
          later(() => playDemo((index + 1) % DEMOS.length), GAP_MS);
        }, HOLD_MS);
      }
    }, TYPE_MS);
  }

  // The preview sits far down the page, so the demo starts when it scrolls into view
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      auto.current = false;
      return;
    }
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          later(() => playDemo(0), FIRST_HOLD_MS);
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearAll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={rootRef}
      className={`anj ${display.variable} ${text.variable} ${mono.variable} overflow-hidden rounded-md border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] font-[family-name:var(--font-anj-text)] shadow-[0_20px_60px_rgba(0,0,0,0.14)]`}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-[var(--tg-line)] bg-[var(--tg-surface-strong)] px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--tg-line-strong)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--tg-line-strong)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--tg-line-strong)]" />
        </span>
        <span className="mx-auto rounded-sm border border-[var(--tg-line)] bg-[var(--tg-bg)] px-4 py-1 font-mono text-[11px] text-[var(--tg-fg-faint)]">
          anjoman.ai
        </span>
        <span className="w-[42px]" />
      </div>

      {/* The app: sidebar on the shell, main panel inset beside it */}
      <div className="flex bg-[var(--anj-shell)] text-[var(--anj-ink)] md:py-2 md:pr-2">
        <aside
          aria-hidden
          className="hidden w-[212px] shrink-0 flex-col gap-3.5 pb-1.5 pl-3.5 pr-3 pt-2 md:flex"
        >
          <div className="flex h-9 items-center gap-2 pl-2 pr-1">
            <Logo />
            <span className="rounded-md bg-[var(--anj-sunken)] px-1.5 pb-0.5 pt-[3px] font-[family-name:var(--font-anj-mono)] text-[12px] uppercase leading-none tracking-[0.05em] text-[var(--anj-mute)] shadow-[var(--anj-shadow-inset)]">
              Beta
            </span>
            <PanelLeft size={16} strokeWidth={1.5} className="ml-auto text-[var(--anj-mute)]" />
          </div>

          <div className="flex h-[38px] items-center gap-[9px] rounded-[11px] bg-[var(--anj-card)] pl-2 pr-2 text-[14px] font-medium shadow-[var(--anj-shadow-card)]">
            <span className="flex h-[22px] w-[22px] items-center justify-center rounded-[7px] bg-[var(--anj-vermilion)] text-white shadow-[var(--anj-shadow-accent)]">
              <Plus size={12} strokeWidth={2} />
            </span>
            <span className="flex-1">New job</span>
            <kbd className="rounded-md bg-[var(--anj-sunken)] px-1.5 pb-0.5 pt-[3px] font-[family-name:var(--font-anj-mono)] text-[12px] leading-none text-[var(--anj-faint)] shadow-[var(--anj-shadow-inset)]">
              ⌘K
            </kbd>
          </div>

          <nav className="flex flex-col gap-0.5">
            {NAV.map(({ label, Icon, active }) => (
              <span
                key={label}
                className={`relative flex h-8 items-center gap-2.5 rounded-[9px] px-2.5 text-[14px] font-medium ${
                  active
                    ? "bg-[var(--anj-card)] text-[var(--anj-ink)] shadow-[var(--anj-shadow-pill)]"
                    : "text-[var(--anj-ink-2)]"
                }`}
              >
                {active && (
                  <span className="absolute -left-[9px] top-2 h-4 w-[3px] rounded-sm bg-[var(--anj-vermilion)]" />
                )}
                <Icon
                  size={16}
                  strokeWidth={1.5}
                  className={active ? "text-[var(--anj-vermilion)]" : "text-[var(--anj-mute)]"}
                />
                {label}
              </span>
            ))}
          </nav>

          <div className="min-h-0 flex-1">
            <p className="px-2.5 pb-1 pt-1 font-[family-name:var(--font-anj-mono)] text-[12px] uppercase leading-none tracking-[0.05em] text-[var(--anj-faint)]">
              Recent
            </p>
            <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
              {RECENT.map((title) => (
                <li
                  key={title}
                  className="flex min-h-[30px] items-center gap-[9px] rounded-lg py-1.5 pl-2.5 pr-2.5 text-[13px] font-medium text-[var(--anj-ink-2)]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--anj-teal)]" />
                  <span className="truncate">{title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="flex h-8 items-center gap-2.5 px-2.5 text-[14px] font-medium text-[var(--anj-ink-2)]">
              <Archive size={16} strokeWidth={1.5} className="text-[var(--anj-mute)]" />
              <span className="flex-1">Archived</span>
              <span className="font-[family-name:var(--font-anj-mono)] text-[12px] text-[var(--anj-faint)]">0</span>
            </span>
            <span className="flex h-8 items-center gap-2.5 px-2.5 text-[14px] font-medium text-[var(--anj-ink-2)]">
              <Settings size={16} strokeWidth={1.5} className="text-[var(--anj-mute)]" />
              Settings
            </span>
            <div className="mt-1.5 flex h-12 items-center gap-2.5 rounded-[14px] bg-[var(--anj-card)] px-2 shadow-[var(--anj-shadow-card)]">
              <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[var(--anj-sunken)] text-[13px] font-semibold text-[var(--anj-ink-2)] shadow-[var(--anj-shadow-inset)]">
                G
              </span>
              <span className="flex-1 text-[14px] font-semibold">Guest</span>
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[var(--anj-card)] text-[var(--anj-ink-2)] shadow-[var(--anj-shadow-card)]">
                <LogIn size={16} strokeWidth={1.5} />
              </span>
            </div>
          </div>
        </aside>

        <main className="relative flex min-w-0 flex-1 flex-col overflow-hidden bg-[var(--anj-panel)] md:rounded-2xl md:shadow-[var(--anj-shadow-panel)]">
          {/* Top bar */}
          <header className="flex min-h-[52px] shrink-0 items-center gap-1.5 px-3">
            <span className="flex items-center gap-2 md:hidden">
              <Logo />
            </span>
            <div className="ml-auto flex items-center gap-1.5">
              <nav className="hidden items-center gap-0.5 md:flex">
                {["Docs", "Hackathon", "Protocol"].map((label) => (
                  <span
                    key={label}
                    className="inline-flex h-8 items-center gap-1 px-[11px] text-[14px] font-medium text-[var(--anj-ink-2)]"
                  >
                    {label}
                    {label !== "Hackathon" ? <ArrowUpRight size={13} strokeWidth={1.5} /> : null}
                  </span>
                ))}
                <span className="inline-flex h-8 items-center px-[11px] text-[14px] font-medium text-[var(--anj-ink-2)]">
                  How it works
                </span>
              </nav>
              <span className="mx-1 hidden h-[18px] w-px bg-[var(--anj-line)] md:block" />
              <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[var(--anj-card)] text-[var(--anj-ink-2)] shadow-[var(--anj-shadow-card)]">
                <Bell size={16} strokeWidth={1.5} />
              </span>
              <span className="inline-flex h-8 items-center rounded-[9px] bg-[var(--anj-card)] px-3 text-[13px] font-semibold shadow-[var(--anj-shadow-card)]">
                Log in
              </span>
            </div>
          </header>

          {/* Home screen: the doorway beside the intro, the ask bar, suggestions and the four ways in */}
          <div className="grid w-full grid-cols-1 content-start px-4 pb-8 pt-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:content-center lg:gap-x-8 lg:px-8 lg:pb-6 lg:pt-0">
            <div className="hidden lg:block">
              <Doorway />
            </div>
            <div className="mx-auto flex w-full max-w-[640px] flex-col justify-center">
              <div className="flex flex-col items-center gap-3 px-1 text-center lg:items-start lg:gap-4 lg:px-0 lg:text-left">
                <p className="font-[family-name:var(--font-anj-mono)] text-[12px] uppercase leading-none tracking-[0.05em] text-[var(--anj-accent-text)]">
                  Don&apos;t choose the AI. Choose the outcome.
                </p>
                <h3 className="m-0 font-[family-name:var(--font-anj-display)] text-[clamp(2rem,1.3rem+2vw,3rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-[var(--anj-ink)]">
                  <span className="block">Tell Anjoman</span>
                  <span className="block">what you want done.</span>
                </h3>
                <p className="m-0 max-w-[470px] text-[16px] leading-normal text-[var(--anj-mute)]">
                  You decide what. Anjoman figures out what the job needs, does the work, checks it, and hands you the
                  finished result.
                </p>
              </div>

              {/* Ask bar */}
              <div className="mt-6">
                <div className="rounded-[14px] bg-[var(--anj-card)] p-3 shadow-[var(--anj-shadow-card)]">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={stopAuto}
                    placeholder="What do you want done? e.g. plan my week, summarize this report…"
                    aria-label="What do you want done?"
                    className="h-9 w-full bg-transparent px-1 text-[15px] text-[var(--anj-ink)] outline-none placeholder:text-[var(--anj-faint)]"
                  />
                  <div className="mt-2 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--anj-sunken)] text-[var(--anj-mute)] shadow-[var(--anj-shadow-inset)]">
                      <Paperclip size={14} strokeWidth={1.5} />
                    </span>
                    <span className="ml-auto inline-flex h-7 items-center gap-1.5 rounded-full bg-[var(--anj-sunken)] px-2.5 text-[12px] font-medium text-[var(--anj-ink-2)] shadow-[var(--anj-shadow-inset)]">
                      <SlidersHorizontal size={13} strokeWidth={1.5} />
                      By intent
                    </span>
                    <span className="inline-flex h-7 items-center gap-1.5 rounded-full bg-[var(--anj-sunken)] px-2.5 text-[12px] font-medium text-[var(--anj-ink-2)] shadow-[var(--anj-shadow-inset)]">
                      <Gauge size={13} strokeWidth={1.5} />
                      No limit
                    </span>
                    <Mic size={15} strokeWidth={1.5} className="text-[var(--anj-mute)]" aria-hidden />
                    <a
                      href="https://anjoman.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ask Anjoman"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--anj-vermilion)] text-white shadow-[var(--anj-shadow-accent)] transition-opacity hover:opacity-85"
                    >
                      <ArrowUp size={16} strokeWidth={2} />
                    </a>
                  </div>
                </div>
                <p className="m-0 mt-1.5 flex items-center gap-2 px-1 font-[family-name:var(--font-anj-mono)] text-[11px] uppercase tracking-[0.05em] text-[var(--anj-faint)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--anj-teal)]" />
                  Routed on Telegraph protocol
                </p>
              </div>

              {/* Suggestions: each puts its text in the ask bar */}
              <ul className="m-0 mt-4 flex list-none flex-wrap justify-center gap-2 p-0 lg:justify-start" aria-label="Suggestions">
                {SUGGESTIONS.map(({ label, Icon, tone }) => (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={() => {
                        stopAuto();
                        setQuery(label);
                      }}
                      className="inline-flex h-8 items-center gap-1.5 rounded-full bg-[var(--anj-card)] pl-2.5 pr-[11px] text-[13px] font-medium text-[var(--anj-ink-2)] shadow-[var(--anj-shadow-card)] transition-colors hover:text-[var(--anj-ink)]"
                    >
                      <Icon size={14} strokeWidth={1.5} className={tone} aria-hidden />
                      {label}
                    </button>
                  </li>
                ))}
              </ul>

              <ul className="m-0 -mx-2 mt-8 grid list-none grid-cols-2 gap-3 p-0 px-2 sm:grid-cols-4">
                {PORTALS.map((item, i) => (
                  <li key={item.verb}>
                    <Portal index={i} item={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
