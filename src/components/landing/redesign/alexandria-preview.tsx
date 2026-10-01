"use client";

import { useEffect, useRef, useState } from "react";
import {
  Boxes,
  Hammer,
  Loader2,
  Plus,
  Search,
  Server,
  type LucideIcon,
} from "lucide-react";
import { DEMOS, RESOLVE_MS, TYPE_MS, matchDemo } from "./intent-demos";

// Quicker than the hero: the larger preview moves straight on to the next Intent
const FIRST_HOLD_MS = 1200;
const PRESS_MS = 250;
const HOLD_MS = 2400;
import { RankedSupplyRows } from "./ranked-supply";

const NAV: { label: string; hint: string; icon: LucideIcon }[] = [
  { label: "Build", hint: "Ship on Telegraph", icon: Hammer },
  { label: "Operate", hint: "Run validators", icon: Server },
  { label: "Supply", hint: "Compete as a miner", icon: Boxes },
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--tg-fg-faint)]">
      {children}
    </span>
  );
}

function Grade({ value }: { value: string }) {
  return (
    <span className="rounded-sm border border-[var(--tg-line-strong)] bg-[var(--tg-surface-hi)] px-2 py-1 font-mono text-[13px] tabular-nums text-[var(--tg-fg)]">
      {value}
    </span>
  );
}

export function AlexandriaPreview() {
  const [demoId, setDemoId] = useState(DEMOS[0].id);
  const [query, setQuery] = useState(DEMOS[0].query);
  const [resolving, setResolving] = useState(false);
  // Starts on a finished answer so the record is never empty, even before the demo runs
  const [answered, setAnswered] = useState(true);
  const [history, setHistory] = useState<string[]>([DEMOS[0].query]);
  // The question the shown answer belongs to. It only changes when Ask is pressed, never while typing.
  const [asked, setAsked] = useState(DEMOS[0].query);
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

  // The user has taken over: stop the automatic demo for good
  function stopAuto() {
    auto.current = false;
    clearAll();
  }

  function remember(text: string) {
    setHistory((h) => [text, ...h.filter((x) => x !== text)].slice(0, 4));
  }

  function ask(id: string, text: string) {
    clearAll();
    setDemoId(id);
    setQuery(text);
    setAsked(text);
    remember(text);
    setAnswered(false);
    setResolving(true);
    later(() => {
      setResolving(false);
      setAnswered(true);
    }, RESOLVE_MS);
  }

  // One automatic cycle: type the question, press Ask, resolve, hold the answer, next Intent
  function playDemo(index: number) {
    if (!auto.current) return;
    const d = DEMOS[index];
    // The previous answer stays on screen while the next question types, so the card never looks empty
    setQuery("");
    let n = 0;
    typer.current = setInterval(() => {
      n += 1;
      setQuery(d.query.slice(0, n));
      if (n >= d.query.length) {
        if (typer.current) clearInterval(typer.current);
        typer.current = null;
        later(() => {
          remember(d.query);
          setAsked(d.query);
          setDemoId(d.id);
          setAnswered(false);
          setResolving(true);
          later(() => {
            setResolving(false);
            setAnswered(true);
            later(() => playDemo((index + 1) % DEMOS.length), HOLD_MS);
          }, RESOLVE_MS);
        }, PRESS_MS);
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
          later(() => playDemo(1), FIRST_HOLD_MS);
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

  const demo = DEMOS.find((d) => d.id === demoId) ?? DEMOS[0];
  const winner = demo.providers[0];

  function newQuery() {
    stopAuto();
    setQuery("");
    setResolving(false);
    setAnswered(false);
  }

  const record: { label: string; value: string }[] = [
    { label: "Served by", value: winner.name },
    { label: "Intent", value: demo.intent },
    { label: "Performance", value: winner.grade.toFixed(2) },
    { label: "Confidence", value: demo.confidence },
    { label: "Verified by", value: "43 of 64 validators" },
    { label: "Price", value: winner.price },
    { label: "Receipt", value: demo.receipt },
  ];

  return (
    <div
      ref={rootRef}
      className="overflow-hidden rounded-md border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] shadow-[0_20px_60px_rgba(0,0,0,0.14)]"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-[var(--tg-line)] bg-[var(--tg-surface-strong)] px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--tg-line-strong)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--tg-line-strong)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--tg-line-strong)]" />
        </span>
        <span className="mx-auto rounded-sm border border-[var(--tg-line)] bg-[var(--tg-bg)] px-4 py-1 font-mono text-[11px] text-[var(--tg-fg-faint)]">
          alexandria.telegraphprotocol.com
        </span>
        <span className="w-[42px]" />
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-[240px] shrink-0 flex-col gap-7 border-r border-[var(--tg-line)] bg-[var(--tg-surface)] p-5 md:flex">
          <div className="flex items-center gap-2.5">
            <span className="text-[20px] text-[var(--tg-fg)]">Alexandria</span>
            <span className="rounded-sm border border-[var(--tg-line-strong)] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-[var(--tg-fg-dim)]">
              Beta
            </span>
          </div>
          <button
            type="button"
            onClick={newQuery}
            className="flex items-center justify-center gap-2 rounded-sm bg-[var(--tg-fg)] py-3 text-[14px] font-medium text-[var(--tg-bg)] transition-opacity hover:opacity-85"
          >
            <Plus className="h-4 w-4" />
            New query
          </button>
          <nav className="flex flex-col gap-2">
            {NAV.map(({ label, hint, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-sm border border-[var(--tg-line)] bg-[var(--tg-bg)] px-3.5 py-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-[var(--tg-line-strong)] bg-[var(--tg-surface-hi)]">
                  <Icon className="h-4 w-4 text-[var(--tg-fg)]" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[15px] font-medium text-[var(--tg-fg)]">
                    {label}
                  </span>
                  <span className="block truncate text-[11px] text-[var(--tg-fg-faint)]">
                    {hint}
                  </span>
                </span>
              </div>
            ))}
          </nav>
          <div className="mt-auto">
            <Label>History</Label>
            {history.length === 0 ? (
              <p className="m-0 mt-2 text-[13px] text-[var(--tg-fg-faint)]">
                No chats yet.
              </p>
            ) : (
              <ul className="m-0 mt-2 flex list-none flex-col gap-1.5 p-0">
                {history.map((h) => (
                  <li
                    key={h}
                    className="tg-row-in truncate text-[12px] text-[var(--tg-fg-dim)]"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>

        {/* Main */}
        <div className="min-w-0 flex-1 p-5 md:p-8">
          <h3 className="m-0 text-[clamp(20px,2.4vw,30px)] font-normal leading-[1.2] text-[var(--tg-fg)]">
            What do you need answered today?
          </h3>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              stopAuto();
              const text = query.trim() || demo.query;
              ask(matchDemo(text) ?? demoId, text);
            }}
            className="mt-5 flex gap-3"
          >
            <div className="relative min-w-0 flex-1">
              <Search
                aria-hidden
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--tg-fg-faint)]"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={stopAuto}
                placeholder="Ask for intelligence"
                aria-label="Ask for intelligence"
                className="h-11 w-full rounded-sm border border-[var(--tg-line-strong)] bg-[var(--tg-surface)] pl-11 pr-4 text-[14px] text-[var(--tg-fg)] outline-none transition-colors placeholder:text-[var(--tg-fg-faint)] focus:border-[var(--tg-fg-dim)]"
              />
            </div>
            <button
              type="submit"
              className="h-11 rounded-sm bg-[var(--tg-fg)] px-5 text-[14px] font-medium text-[var(--tg-bg)] transition-opacity hover:opacity-85"
            >
              Ask
            </button>
          </form>

          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-[var(--tg-fg-dim)] bg-[var(--tg-surface-hi)] px-4 py-2 text-[13px] text-[var(--tg-fg)]">
              Auto routing
            </span>
            <span className="font-mono text-[11px] text-[var(--tg-fg-faint)]">
              Pay per answer
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2.5">
            {DEMOS.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => {
                  stopAuto();
                  ask(d.id, d.query);
                }}
                aria-pressed={d.id === demoId}
                className={`rounded-full border px-4 py-2 text-[13px] transition-colors ${
                  d.id === demoId
                    ? "border-[var(--tg-fg-dim)] bg-[var(--tg-surface-hi)] text-[var(--tg-fg)]"
                    : "border-[var(--tg-line-strong)] bg-[var(--tg-bg)] text-[var(--tg-fg-dim)] hover:border-[var(--tg-fg-dim)] hover:text-[var(--tg-fg)]"
                }`}
              >
                {d.chip}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {/* Answer */}
            <div className="min-h-[430px] rounded-md border border-[var(--tg-line)] bg-[var(--tg-surface)] p-5">
              <Label>Your answer</Label>
              {resolving ? (
                <div className="flex h-[360px] items-center gap-2.5 text-[13px] text-[var(--tg-fg-dim)]">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Resolving intent and routing to the top-ranked provider
                </div>
              ) : !answered ? (
                <div
                  aria-label="Waiting for a question"
                  className="mt-5 flex flex-col gap-3"
                >
                  <span className="h-6 w-2/3 rounded-sm bg-[var(--tg-line-soft)]" />
                  <span className="h-9 w-28 rounded-sm bg-[var(--tg-line)] opacity-60" />
                  <span className="h-2.5 w-3/4 rounded-sm bg-[var(--tg-line-soft)]" />
                  <div className="mt-4 rounded-md border border-[var(--tg-line)] bg-[var(--tg-bg)] p-4">
                    {[0, 1, 2, 3, 4].map((n) => (
                      <span
                        key={n}
                        className="my-3 block h-2.5 rounded-sm bg-[var(--tg-line-soft)]"
                        style={{ width: `${88 - n * 9}%` }}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--tg-fg-faint)]">
                    Press Ask
                  </span>
                </div>
              ) : (
                <div key={demo.id} className="tg-row-in">
                  <p className="m-0 mt-4 text-[15px] text-[var(--tg-fg)]">
                    {asked}
                  </p>
                  <p className="m-0 mt-3 text-[26px] leading-[1.2] text-[var(--tg-fg)]">
                    {demo.result}
                  </p>
                  <p className="m-0 mt-2 text-[13px] leading-[1.7] text-[var(--tg-fg-dim)]">
                    {demo.detail}
                  </p>

                  <div className="mt-5 rounded-md border border-[var(--tg-line-strong)] bg-[var(--tg-bg)]">
                    <div className="flex items-center justify-between px-4 py-3.5">
                      <span className="text-[16px] text-[var(--tg-fg)]">
                        Provider record
                      </span>
                      <Grade value="Rank #1" />
                    </div>
                    {record.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between gap-4 border-t border-[var(--tg-line-soft)] px-4 py-2.5 text-[13px]"
                      >
                        <span className="text-[var(--tg-fg-faint)]">
                          {row.label}
                        </span>
                        <span className="flex items-center gap-2.5 text-right font-mono text-[var(--tg-fg)]">
                          {row.label === "Verified by" ? (
                            <span className="h-1 w-16 overflow-hidden rounded-full bg-[var(--tg-line)]">
                              <span
                                className="block h-full rounded-full bg-emerald-400"
                                style={{ width: `${(43 / 64) * 100}%` }}
                              />
                            </span>
                          ) : null}
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Ranked supply for the resolved Intent */}
            <div className="rounded-md border border-[var(--tg-line)] bg-[var(--tg-surface)] p-5">
              <div className="mb-5 flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <Label>
                  Ranked supply · {resolving ? "resolving…" : demo.intent}
                </Label>
              </div>
              <RankedSupplyRows
                demo={demo}
                resolving={resolving}
                answered={answered}
              />
              <p className="m-0 mt-5 text-[12px] leading-[1.7] text-[var(--tg-fg-faint)]">
                Illustrative data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
