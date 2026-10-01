"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Loader2, Search } from "lucide-react";
import { DEMOS, RESOLVE_MS, matchDemo } from "./intent-demos";
import { RankedSupplyRows } from "./ranked-supply";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--tg-fg-faint)]">
      {children}
    </span>
  );
}

export function HeroAsk() {
  const [demoId, setDemoId] = useState(DEMOS[0].id);
  const [query, setQuery] = useState(DEMOS[0].query);
  const [resolving, setResolving] = useState(false);
  const [answered, setAnswered] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const demo = DEMOS.find((d) => d.id === demoId) ?? DEMOS[0];
  const winner = demo.providers[0];

  // Picking a chip only sets up the question; the answer appears once Ask is pressed
  function select(id: string, nextQuery: string) {
    if (timer.current) clearTimeout(timer.current);
    setDemoId(id);
    setQuery(nextQuery);
    setResolving(false);
    setAnswered(false);
  }

  function ask(id: string) {
    if (timer.current) clearTimeout(timer.current);
    setDemoId(id);
    setAnswered(false);
    setResolving(true);
    timer.current = setTimeout(() => {
      setResolving(false);
      setAnswered(true);
    }, RESOLVE_MS);
  }

  return (
    <div className="mx-auto mt-12 w-full max-w-[1100px] overflow-hidden rounded-md border border-[var(--tg-line-strong)] bg-[var(--tg-surface-strong)] text-left shadow-[0_12px_40px_rgba(0,0,0,0.10)]">
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        {/* Left: ask + result */}
        <div className="p-5 md:p-7">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <Label>Ask the network</Label>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              ask(matchDemo(query) ?? demoId);
            }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <div className="relative flex-1">
              <Search
                aria-hidden
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--tg-fg-faint)]"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask for intelligence"
                aria-label="Ask for intelligence"
                className="h-12 w-full rounded-sm border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] pl-11 pr-4 text-[14px] text-[var(--tg-fg)] outline-none transition-colors placeholder:text-[var(--tg-fg-faint)] focus:border-[var(--tg-fg-dim)]"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-sm bg-[var(--tg-fg)] px-5 text-[14px] font-medium text-[var(--tg-bg)] transition-opacity hover:opacity-85"
            >
              Ask
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </form>

          <div className="mt-4 flex flex-wrap gap-2.5">
            {DEMOS.map((d) => {
              const active = d.id === demoId;
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => select(d.id, d.query)}
                  aria-pressed={active}
                  className={`rounded-full border px-4 py-2 text-[13px] transition-colors ${
                    active
                      ? "border-[var(--tg-fg-dim)] bg-[var(--tg-surface-hi)] text-[var(--tg-fg)]"
                      : "border-[var(--tg-line-strong)] bg-[var(--tg-bg)] text-[var(--tg-fg-dim)] hover:border-[var(--tg-fg-dim)] hover:text-[var(--tg-fg)]"
                  }`}
                >
                  {d.chip}
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex items-center gap-2.5">
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

          <div className="mt-3 min-h-[236px] rounded-md border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] p-5">
            {resolving ? (
              <div className="flex h-[194px] items-center gap-2.5 text-[13px] text-[var(--tg-fg-dim)]">
                <Loader2 className="h-4 w-4 animate-spin" />
                Resolving intent and routing to the top-ranked provider
              </div>
            ) : !answered ? (
              <div className="flex h-[194px] items-center text-[13px] leading-[1.7] text-[var(--tg-fg-faint)]">
                Press Ask. Telegraph resolves the intent and routes your request
                to the top-ranked provider.
              </div>
            ) : (
              <div key={demo.id} className="tg-row-in">
                <Label>Result</Label>
                <p className="m-0 mt-2 text-[clamp(30px,4vw,44px)] font-normal leading-[1.1] tracking-[0.005em] text-[var(--tg-fg)]">
                  {demo.result}
                </p>
                <p className="m-0 mt-2 text-[13px] leading-[1.6] text-[var(--tg-fg-dim)]">
                  {demo.detail}
                </p>
                <p
                  style={{ animationDelay: "700ms" }}
                  className="tg-row-in m-0 mt-3 flex items-center gap-1.5 text-[12px] text-[var(--tg-fg-dim)]"
                >
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  Verified by 43 of 64 validators
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-[var(--tg-line-soft)] pt-4 text-[13px]">
                  <span className="text-[var(--tg-fg)]">
                    Served by{" "}
                    <span className="font-medium">{winner.name}</span>
                    <span className="mt-1 flex items-center gap-1.5 text-[12px] text-[var(--tg-fg-dim)]">
                      <Check className="h-3.5 w-3.5" />
                      Rank #1 for {demo.intent}
                    </span>
                  </span>
                  <button
                    type="button"
                    className="group inline-flex cursor-default items-center gap-1.5 whitespace-nowrap text-[var(--tg-fg)] underline underline-offset-4"
                  >
                    View receipt
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: ranked supply */}
        <div className="border-t border-[var(--tg-line-strong)] bg-[var(--tg-bg)] p-5 md:p-7 lg:border-l lg:border-t-0">
          <div className="mb-5 flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <Label>Ranked supply · {demo.intent}</Label>
          </div>

          <RankedSupplyRows
            demo={demo}
            resolving={resolving}
            answered={answered}
          />

          <p className="m-0 mt-5 text-[12px] leading-[1.7] text-[var(--tg-fg-faint)]">
            You never pick the provider. Telegraph routes each request to the
            top-ranked provider for the intent, and every result ships with a
            receipt. Illustrative data.
          </p>
        </div>
      </div>
    </div>
  );
}
