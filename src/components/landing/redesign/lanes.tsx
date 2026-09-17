import { Fragment } from "react";
import { Reveal } from "../fx/reveal";
import { Section, SectionHeading } from "./shared";

const lanes = [
  {
    intent: "weather-forecast",
    query: "Weather request",
    outcome: "shows a hyperlocal forecast",
    supply: ["Forecast model", "Satellite dataset", "Sensor network API"],
    ranking: [
      { name: "Forecast model", score: "0.93", top: true },
      { name: "Sensor network API", score: "0.88" },
      { name: "Satellite dataset", score: "0.81" },
    ],
  },
  {
    intent: "price-direction",
    query: "Trading query",
    outcome: "decides whether to open a position",
    supply: ["Quant model", "Order book dataset", "Sentiment API"],
    ranking: [
      { name: "Quant model", score: "0.90", top: true },
      { name: "Sentiment API", score: "0.86" },
      { name: "Order book dataset", score: "0.82" },
    ],
  },
  {
    intent: "fake-profile-detection",
    query: "Dating app",
    outcome: "removes a fake profile before a match",
    supply: ["Image forensics model", "Identity API", "Behaviour dataset"],
    ranking: [
      { name: "Identity API", score: "0.94", top: true },
      { name: "Image forensics model", score: "0.91" },
      { name: "Behaviour dataset", score: "0.83" },
    ],
  },
];

function SupplyConverge() {
  const c = "var(--tg-line-strong)";
  return (
    <div className="relative hidden w-8 shrink-0 self-stretch sm:block">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full overflow-visible"
        fill="none"
      >
        <path d="M0,16.67 C55,16.67 45,50 100,50" stroke={c} strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
        <path d="M0,50 L100,50" stroke={c} strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
        <path d="M0,83.33 C55,83.33 45,50 100,50" stroke={c} strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

function PayArrows() {
  return (
    <div className="hidden w-24 shrink-0 flex-col items-center justify-center gap-2 sm:flex">
      <div className="w-full text-center">
        <span className="block text-[9px] text-[var(--tg-fg-dim)]">answer + receipt</span>
        <div className="relative mt-0.5 h-px w-full bg-[var(--tg-fg)]">
          <span
            aria-hidden
            className="absolute right-0 top-1/2 -translate-y-1/2 border-y-[3px] border-l-[5px] border-y-transparent border-l-[var(--tg-fg)]"
          />
        </div>
      </div>
      <div className="w-full text-center">
        <div className="relative h-px w-full border-t border-dashed border-[var(--tg-line-strong)]">
          <span
            aria-hidden
            className="absolute left-0 top-1/2 -translate-y-1/2 border-y-[3px] border-r-[5px] border-y-transparent border-r-[var(--tg-line-strong)]"
          />
        </div>
        <span className="mt-0.5 block text-[9px] text-[var(--tg-fg-dim)]">pays per request</span>
      </div>
    </div>
  );
}

export function Lanes() {
  return (
    <Section>
      <SectionHeading
        lede={
          <>
            <strong className="font-medium text-[var(--tg-fg)]">
              Telegraph ranks intelligence from anywhere, but every answer
              stays specific.
            </strong>{" "}
            Each intent has its own supply, its own ranking and its own
            buyers, so any human, app, or agent gets an answer narrow enough
            to act on.
          </>
        }
      >
        Global intelligence, local answers.
      </SectionHeading>

      <Reveal delay={150} className="mt-14 overflow-x-auto">
        <div className="grid min-w-[880px] grid-cols-[1fr_auto_1.5fr_auto_1fr] items-start gap-x-2">
          <div className="pb-4">
            <h3 className="m-0 text-[14px] font-medium text-[var(--tg-fg)]">
              Open supply
            </h3>
            <p className="m-0 mt-1 text-[10px] uppercase tracking-[0.15em] text-[var(--tg-fg-faint)]">
              Anything behind an API competes
            </p>
          </div>
          <div />
          <div className="rounded-t-sm border border-b-0 border-[var(--tg-line-strong)] bg-[var(--tg-surface-strong)] px-5 pb-4 pt-4 text-center">
            <h3 className="m-0 text-[14px] font-medium text-[var(--tg-fg)]">
              Telegraph
            </h3>
            <p className="m-0 mt-1 text-[10px] uppercase tracking-[0.15em] text-[var(--tg-fg-faint)]">
              Ranked per intent
            </p>
            <p className="m-0 text-[10px] uppercase tracking-[0.15em] text-[var(--tg-fg-faint)]">
              The evaluation competes too
            </p>
          </div>
          <div />
          <div className="pb-4">
            <h3 className="m-0 text-[14px] font-medium text-[var(--tg-fg)]">
              Specific demand
            </h3>
            <p className="m-0 mt-1 text-[10px] uppercase tracking-[0.15em] text-[var(--tg-fg-faint)]">
              Any human, app, or agent
            </p>
          </div>

          {lanes.map((lane, i) => {
            const isLast = i === lanes.length - 1;
            return (
              <Fragment key={lane.intent}>
                <div
                  className={`flex flex-col justify-center gap-2 ${isLast ? "pb-0" : "pb-8"}`}
                >
                  {lane.supply.map((s) => (
                    <div
                      key={s}
                      className="rounded-sm border border-[var(--tg-line)] bg-[var(--tg-bg)] px-3 py-2 text-[11px] text-[var(--tg-fg-dim)]"
                    >
                      {s}
                    </div>
                  ))}
                </div>

                <SupplyConverge />

                <div
                  className={`border-x border-[var(--tg-line-strong)] bg-[var(--tg-surface-strong)] px-5 pb-5 ${
                    isLast ? "rounded-b-sm border-b" : "border-b border-b-[var(--tg-line)]"
                  }`}
                >
                  <p className="m-0 mb-2 pt-1 text-[12px] font-medium text-[var(--tg-fg)]">
                    {lane.intent}
                  </p>
                  <ul className="m-0 space-y-1 p-0 text-[11px]">
                    {lane.ranking.map((r, idx) => (
                      <li
                        key={r.name}
                        className={`flex items-center gap-2 rounded-sm px-2.5 py-1.5 ${
                          r.top
                            ? "border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] text-[var(--tg-fg)]"
                            : "text-[var(--tg-fg-dim)]"
                        }`}
                      >
                        <span className="w-3 text-[var(--tg-fg-faint)]">{idx + 1}</span>
                        <span className="flex-1">{r.name}</span>
                        <span className="tabular-nums">{r.score}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <PayArrows />

                <div
                  className={`rounded-sm border border-[var(--tg-line)] bg-[var(--tg-surface)] px-4 py-3 ${
                    isLast ? "" : "mb-8"
                  }`}
                >
                  <p className="m-0 text-[13px] font-medium text-[var(--tg-fg)]">
                    {lane.query}
                  </p>
                  <p className="m-0 mt-1 text-[11px] leading-[1.5] text-[var(--tg-fg-dim)]">
                    {lane.outcome}
                  </p>
                </div>
              </Fragment>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
