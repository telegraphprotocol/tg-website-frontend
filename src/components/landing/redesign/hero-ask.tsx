"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

const ALEXANDRIA_URL = "https://alexandria.telegraphprotocol.com";

const CHIPS = [
  "Wind forecast, next 6 hours",
  "Fraud check on a payment",
  "Is this profile fake?",
  "Price direction, 1 hour",
];

const BOARD = [
  {
    intent: "weather-forecast",
    supplier: "Forecast model",
    grade: 0.93,
    runnerUp: "Sensor network API · 0.88",
  },
  {
    intent: "fake-profile-detection",
    supplier: "Identity API",
    grade: 0.94,
    runnerUp: "Image forensics model · 0.91",
  },
  {
    intent: "price-direction",
    supplier: "Quant model",
    grade: 0.9,
    runnerUp: "Sentiment API · 0.86",
  },
  {
    intent: "fraud-check",
    supplier: "Risk model",
    grade: 0.92,
    runnerUp: "Behavioral API · 0.87",
  },
];

const ROW_GRID =
  "grid grid-cols-[1fr_auto] items-center gap-x-4 md:grid-cols-[1.5fr_1fr_1fr_1.8fr_0.7fr_auto]";

export function HeroAsk() {
  const [query, setQuery] = useState("");

  return (
    <div className="mx-auto mt-12 w-full max-w-[1100px] overflow-hidden rounded-md border border-[var(--tg-line-strong)] bg-[var(--tg-surface-strong)] text-left shadow-[0_12px_40px_rgba(0,0,0,0.10)]">
      <div className="p-5 md:p-7">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="m-0 text-[clamp(18px,2vw,24px)] font-normal text-[var(--tg-fg)]">
            What graded answers do you need today?
          </h2>
          <span className="rounded-full border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--tg-fg-dim)]">
            Preview · Mainnet Jan 2027
          </span>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open(ALEXANDRIA_URL, "_blank", "noopener,noreferrer");
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
              placeholder="Ask anything, from a fraud check to a wind forecast"
              className="h-12 w-full rounded-sm border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] pl-11 pr-4 text-[14px] text-[var(--tg-fg)] outline-none transition-colors placeholder:text-[var(--tg-fg-faint)] focus:border-[var(--tg-fg-dim)]"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-sm bg-[var(--tg-fg)] px-5 text-[14px] font-medium text-[var(--tg-bg)] transition-opacity hover:opacity-85"
          >
            Get graded answer
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </form>

        <div className="mt-4 flex flex-wrap gap-2.5">
          {CHIPS.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => setQuery(chip)}
              className="rounded-full border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] px-4 py-2 text-[13px] text-[var(--tg-fg-dim)] transition-colors hover:border-[var(--tg-fg-dim)] hover:text-[var(--tg-fg)]"
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-[var(--tg-line-strong)] bg-[var(--tg-bg)]">
        <div className="flex items-center gap-2 px-5 pt-5 font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--tg-fg-faint)] md:px-7">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Live board · top-graded supply per intent (illustrative)
        </div>

        <div
          className={`${ROW_GRID} px-5 pb-2 pt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--tg-fg-faint)] md:px-7`}
        >
          <span>Intent</span>
          <span className="hidden md:block">Top-graded supplier</span>
          <span className="hidden md:block">Grade</span>
          <span className="hidden md:block">Runner-up</span>
          <span className="hidden md:block">Price</span>
          <span className="hidden md:block" />
        </div>

        {BOARD.map((row) => (
          <div
            key={row.intent}
            className={`${ROW_GRID} border-t border-[var(--tg-line-soft)] px-5 py-4 text-[14px] text-[var(--tg-fg)] transition-colors hover:bg-[var(--tg-surface)] md:px-7`}
          >
            <span className="font-mono">{row.intent}</span>
            <span className="hidden md:block">{row.supplier}</span>
            <span className="hidden items-center gap-2.5 md:flex">
              <span className="rounded-sm border border-[var(--tg-line-strong)] bg-[var(--tg-surface-hi)] px-2 py-1 font-mono text-[13px] tabular-nums">
                {row.grade.toFixed(2)}
              </span>
              <span
                aria-hidden
                className="h-1 w-10 overflow-hidden rounded-full bg-[var(--tg-line)]"
              >
                <span
                  className="block h-full rounded-full bg-[var(--tg-fg)]"
                  style={{ width: `${row.grade * 100}%` }}
                />
              </span>
            </span>
            <span className="hidden whitespace-nowrap text-[13px] text-[var(--tg-fg-dim)] md:block">
              {row.runnerUp}
            </span>
            <span className="hidden whitespace-nowrap font-mono text-[13px] text-[var(--tg-fg-dim)] md:block">
              from $0.01
            </span>
            <Link
              href={ALEXANDRIA_URL}
              target="_blank"
              className="group inline-flex items-center gap-1.5 justify-self-end whitespace-nowrap text-[var(--tg-fg)] underline underline-offset-4"
            >
              Ask this intent
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        ))}

        <p className="m-0 border-t border-[var(--tg-line-soft)] px-5 py-4 text-[12px] text-[var(--tg-fg-faint)] md:px-7">
          Every answer ships with a receipt: who produced it, its grade for that
          intent, and the validators who verified it.
        </p>
      </div>
    </div>
  );
}
