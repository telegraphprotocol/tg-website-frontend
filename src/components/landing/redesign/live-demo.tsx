"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Loader2, Search } from "lucide-react";
import {
  DEMOS,
  FIRST_HOLD_MS,
  HOLD_MS,
  PRESS_MS,
  RESOLVE_MS,
  TYPE_MS,
} from "./intent-demos";
import { RankedSupplyRows } from "./ranked-supply";
import { Section, SectionHeading } from "./shared";

// Pause after the section comes back into view before the cycle continues
const RESUME_MS = 600;

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--tg-fg-faint)]">
      {children}
    </span>
  );
}

// A fully automatic, watch-only demo: nothing in it can be clicked, typed into or focused
function DemoCard() {
  const rootRef = useRef<HTMLDivElement>(null);
  // Starts on a finished answer so the card is never empty, even before the demo runs
  const [demoId, setDemoId] = useState(DEMOS[0].id);
  const [query, setQuery] = useState(DEMOS[0].query);
  const [resolving, setResolving] = useState(false);
  const [typing, setTyping] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const typer = useRef<ReturnType<typeof setInterval> | null>(null);
  const nextIndex = useRef(1);
  const lastAnswered = useRef(DEMOS[0].id);
  const started = useRef(false);

  function clearAll() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    if (typer.current) clearInterval(typer.current);
    typer.current = null;
  }

  function later(fn: () => void, ms: number) {
    timers.current.push(setTimeout(fn, ms));
  }

  // Back to the last finished answer, e.g. after the section scrolled out mid-cycle
  function settle() {
    const d = DEMOS.find((x) => x.id === lastAnswered.current) ?? DEMOS[0];
    setDemoId(d.id);
    setQuery(d.query);
    setResolving(false);
    setTyping(false);
  }

  // One automatic cycle: type the question, press Ask, resolve, hold the answer, next Intent
  function playDemo(index: number) {
    const d = DEMOS[index];
    nextIndex.current = (index + 1) % DEMOS.length;
    // The previous answer stays on screen while the next question types, so the card never looks empty
    setQuery("");
    setTyping(true);
    let n = 0;
    typer.current = setInterval(() => {
      n += 1;
      setQuery(d.query.slice(0, n));
      if (n >= d.query.length) {
        if (typer.current) clearInterval(typer.current);
        typer.current = null;
        later(() => {
          setTyping(false);
          setDemoId(d.id);
          setResolving(true);
          later(() => {
            setResolving(false);
            lastAnswered.current = d.id;
            later(() => playDemo(nextIndex.current), HOLD_MS);
          }, RESOLVE_MS);
        }, PRESS_MS);
      }
    }, TYPE_MS);
  }

  // Run only while the card is on screen: starts when scrolled into view, pauses when it leaves
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const delay = started.current ? RESUME_MS : FIRST_HOLD_MS;
          started.current = true;
          later(() => playDemo(nextIndex.current), delay);
        } else {
          clearAll();
          settle();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearAll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const demo = DEMOS.find((d) => d.id === demoId) ?? DEMOS[0];
  const winner = demo.providers[0];

  return (
    <div
      ref={rootRef}
      className="pointer-events-none mx-auto mt-14 w-full max-w-[1100px] select-none overflow-hidden rounded-md border border-[var(--tg-line-strong)] bg-[var(--tg-surface-strong)] text-left shadow-[0_12px_40px_rgba(0,0,0,0.10)]"
    >
      {/* Top: the question, full width so it is always readable */}
      <div className="border-b border-[var(--tg-line-strong)] p-4 md:p-5">
        <div className="flex gap-3">
          <div className="relative flex h-11 min-w-0 flex-1 items-center rounded-sm border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] pl-11 pr-4 text-[14px] text-[var(--tg-fg)]">
            <Search
              aria-hidden
              className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--tg-fg-faint)]"
            />
            <span className="truncate">{query}</span>
            {typing ? (
              <span
                aria-hidden
                className="ml-0.5 inline-block h-4 w-px shrink-0 animate-pulse bg-[var(--tg-fg-dim)]"
              />
            ) : null}
          </div>
          <div
            className={`inline-flex h-11 items-center justify-center gap-2.5 whitespace-nowrap rounded-sm bg-[var(--tg-fg)] px-5 text-[14px] font-medium text-[var(--tg-bg)] transition-all ${
              resolving ? "scale-[0.97] opacity-80" : ""
            }`}
          >
            Ask
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {DEMOS.map((d) => {
            const active = d.id === demoId;
            return (
              <span
                key={d.id}
                className={`rounded-full border px-3.5 py-1.5 text-[12px] transition-colors ${
                  active
                    ? "border-[var(--tg-fg-dim)] bg-[var(--tg-surface-hi)] text-[var(--tg-fg)]"
                    : "border-[var(--tg-line-strong)] bg-[var(--tg-bg)] text-[var(--tg-fg-dim)]"
                }`}
              >
                {d.chip}
              </span>
            );
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        {/* Left: resolved Intent + result */}
        <div className="p-4 md:p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Label>Intent</Label>
              <span className="rounded-sm border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] px-2 py-1 font-mono text-[12px] text-[var(--tg-fg)]">
                {resolving ? (
                  <span className="animate-pulse text-[var(--tg-fg-dim)]">
                    resolving…
                  </span>
                ) : (
                  demo.intent
                )}
              </span>
            </div>
            {!resolving ? (
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[12px] text-[var(--tg-fg-dim)]">
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                Receipt issued
              </span>
            ) : null}
          </div>

          <div className="h-[190px] rounded-md border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] p-4">
            {resolving ? (
              <div className="flex h-[156px] items-center gap-2.5 text-[13px] text-[var(--tg-fg-dim)]">
                <Loader2 className="h-4 w-4 animate-spin" />
                Routing to the top-ranked provider
              </div>
            ) : (
              <div key={demo.id} className="tg-row-in">
                <p className="m-0 text-[clamp(26px,3vw,36px)] font-normal leading-[1.1] tracking-[0.005em] text-[var(--tg-fg)]">
                  {demo.result}
                </p>
                <p className="m-0 mt-1.5 min-h-[38px] text-[12px] leading-[1.6] text-[var(--tg-fg-dim)]">
                  {demo.detail}
                </p>
                <div className="mt-3 flex flex-col gap-1 border-t border-[var(--tg-line-soft)] pt-3 text-[12px]">
                  <span className="text-[var(--tg-fg)]">
                    Served by{" "}
                    <span className="font-medium">{winner.name}</span>
                    <span className="text-[var(--tg-fg-dim)]"> · Rank #1</span>
                  </span>
                  <span
                    style={{ animationDelay: "600ms" }}
                    className="tg-row-in flex items-center gap-1.5 text-[var(--tg-fg-dim)]"
                  >
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    Verified by 43 of 64 validators
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: ranked supply */}
        <div className="border-t border-[var(--tg-line-strong)] bg-[var(--tg-bg)] p-4 md:p-5 lg:border-l lg:border-t-0">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <Label>Live board · top-ranked supply per Intent</Label>
            </div>
          </div>

          <RankedSupplyRows
            demo={demo}
            resolving={resolving}
            answered={!resolving}
            rowHeight={46}
          />
        </div>
      </div>
    </div>
  );
}

export function LiveDemo() {
  return (
    <Section>
      <SectionHeading lede="Each request resolves to an Intent, is served by the top-ranked provider for it, and is verified by validators. This is the network running live.">
        Ask for intelligence. Get the top-ranked answer.
      </SectionHeading>
      <DemoCard />
    </Section>
  );
}
