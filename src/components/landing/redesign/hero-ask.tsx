"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Loader2, Search } from "lucide-react";

const RESOLVE_MS = 900;
const ROW_H = 60;
// Provider i sits at row SHUFFLE[i] while the request resolves, so the reorder is visible
const SHUFFLE = [2, 0, 1];

type Provider = { name: string; grade: number; price: string };

type Demo = {
  id: string;
  chip: string;
  query: string;
  intent: string;
  keywords: string[];
  result: string;
  detail: string;
  providers: Provider[];
};

// Illustrative data only
const DEMOS: Demo[] = [
  {
    id: "weather",
    chip: "Weather Forecast",
    query: "Will wind generation exceed 4GW in Texas tomorrow?",
    intent: "weather-forecast",
    keywords: ["wind", "weather", "forecast", "rain", "temperature"],
    result: "4.7 GW",
    detail: "Forecast peak wind generation, Texas, tomorrow. Above the 4 GW threshold.",
    providers: [
      { name: "Forecast model", grade: 0.93, price: "$0.010" },
      { name: "Sensor API", grade: 0.88, price: "$0.008" },
      { name: "Satellite dataset", grade: 0.81, price: "$0.006" },
    ],
  },
  {
    id: "price",
    chip: "Price Direction",
    query: "Will BTC be higher in 1 hour?",
    intent: "price-direction",
    keywords: ["price", "btc", "eth", "higher", "lower", "direction"],
    result: "Up",
    detail: "Direction call for BTC over the next 1 hour.",
    providers: [
      { name: "Quant model", grade: 0.9, price: "$0.010" },
      { name: "Sentiment API", grade: 0.86, price: "$0.008" },
      { name: "Order-book dataset", grade: 0.82, price: "$0.006" },
    ],
  },
  {
    id: "profile",
    chip: "Fake Profile Detection",
    query: "Is this dating profile fake?",
    intent: "fake-profile-detection",
    keywords: ["fake", "profile", "bot", "scam", "fraud"],
    result: "Likely fake",
    detail: "Profile flagged before a match is made.",
    providers: [
      { name: "Identity API", grade: 0.94, price: "$0.010" },
      { name: "Image-forensics service", grade: 0.91, price: "$0.008" },
      { name: "Behaviour dataset", grade: 0.83, price: "$0.006" },
    ],
  },
];

function matchDemo(text: string): string | null {
  const q = text.toLowerCase();
  return DEMOS.find((d) => d.keywords.some((k) => q.includes(k)))?.id ?? null;
}

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
            <span className="rounded-full border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--tg-fg-dim)]">
              Preview · Mainnet Jan 2027
            </span>
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

          <div className="grid grid-cols-[2rem_1fr_5.5rem_4rem] items-center gap-x-3 px-3 pb-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--tg-fg-faint)]">
            <span>Rank</span>
            <span>Provider</span>
            <span>Performance</span>
            <span className="text-right">Price</span>
          </div>

          {/* Rows are positioned by rank so they visibly shuffle while resolving, then settle into the ranking */}
          <div
            key={demo.id}
            className="relative"
            style={{ height: demo.providers.length * ROW_H }}
          >
            {demo.providers.map((p, i) => {
              const selected = answered && i === 0;
              const pos = resolving ? SHUFFLE[i] : i;
              return (
                <div
                  key={p.name}
                  style={{
                    top: pos * ROW_H,
                    height: ROW_H,
                    animationDelay: `${i * 80}ms`,
                  }}
                  className={`tg-row-in absolute inset-x-0 grid grid-cols-[2rem_1fr_5.5rem_4rem] items-center gap-x-3 border-l-2 px-3 text-[14px] transition-[top,background-color] duration-500 ease-in-out ${
                    selected
                      ? "border-l-[var(--tg-fg)] bg-[var(--tg-surface-hi)]"
                      : "border-l-transparent"
                  } ${pos > 0 ? "border-t border-t-[var(--tg-line-soft)]" : ""}`}
                >
                  <span className="font-mono text-[var(--tg-fg-dim)]">
                    {resolving ? "–" : `#${i + 1}`}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[var(--tg-fg)]">
                      {p.name}
                    </span>
                    {selected ? (
                      <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--tg-fg-dim)]">
                        Served
                      </span>
                    ) : null}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-[13px] tabular-nums text-[var(--tg-fg)]">
                      {p.grade.toFixed(2)}
                    </span>
                    <span
                      aria-hidden
                      className="h-1 w-8 overflow-hidden rounded-full bg-[var(--tg-line)]"
                    >
                      <span
                        className="block h-full rounded-full bg-[var(--tg-fg)]"
                        style={{ width: `${p.grade * 100}%` }}
                      />
                    </span>
                  </span>
                  <span className="text-right font-mono text-[13px] text-[var(--tg-fg-dim)]">
                    {p.price}
                  </span>
                </div>
              );
            })}
          </div>

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
