import { Reveal } from "../fx/reveal";
import { Section, SectionHeading } from "./shared";

const lanes = [
  {
    title: "Weather forecast",
    intent: "weather-forecast",
    demand: "Weather request",
    outcome: "shows a hyperlocal forecast",
    ranking: [
      { name: "Forecast model", score: "0.93" },
      { name: "Sensor API", score: "0.88" },
      { name: "Satellite dataset", score: "0.81" },
    ],
  },
  {
    title: "Price direction",
    intent: "price-direction",
    demand: "Trading query",
    outcome: "decides whether to open a position",
    ranking: [
      { name: "Quant model", score: "0.90" },
      { name: "Sentiment API", score: "0.86" },
      { name: "Order-book dataset", score: "0.82" },
    ],
  },
  {
    title: "Fake profile detection",
    intent: "fake-profile-detection",
    demand: "Dating app",
    outcome: "removes a fake profile before a match",
    ranking: [
      { name: "Identity API", score: "0.94" },
      { name: "Image-forensics service", score: "0.91" },
      { name: "Behaviour dataset", score: "0.83" },
    ],
  },
];

export function Lanes() {
  return (
    <Section>
      <SectionHeading
        lede={
          <>
            <strong className="font-medium text-[var(--tg-fg)]">
              There is no single best source of intelligence.
            </strong>{" "}
            Telegraph ranks providers for the specific job being asked.
          </>
        }
      >
        One network. A different ranking for every job.
      </SectionHeading>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {lanes.map((lane, i) => (
          <Reveal key={lane.intent} delay={i * 120}>
            <div className="flex h-full flex-col rounded-md border border-[var(--tg-line-strong)] bg-[var(--tg-surface)] p-5">
              <h3 className="m-0 text-[12px] font-medium uppercase tracking-[0.2em] text-[var(--tg-fg)]">
                {lane.title}
              </h3>
              <p className="m-0 mt-1.5 font-mono text-[11px] text-[var(--tg-fg-faint)]">
                {lane.intent}
              </p>

              <ul className="m-0 mb-6 mt-5 flex list-none flex-col gap-1.5 p-0">
                {lane.ranking.map((r, idx) => (
                  <li
                    key={r.name}
                    className={`flex items-center gap-3 rounded-sm border px-3 py-2.5 text-[13px] ${
                      idx === 0
                        ? "border-[var(--tg-line-strong)] bg-[var(--tg-bg)] text-[var(--tg-fg)]"
                        : "border-transparent text-[var(--tg-fg-dim)]"
                    }`}
                  >
                    <span className="w-5 font-mono text-[var(--tg-fg-faint)]">
                      #{idx + 1}
                    </span>
                    <span className="flex-1">{r.name}</span>
                    <span className="font-mono tabular-nums">{r.score}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-[var(--tg-line)] pt-4">
                <p className="m-0 text-[13px] font-medium text-[var(--tg-fg)]">
                  {lane.demand}
                </p>
                <p className="m-0 mt-1 text-[12px] leading-[1.5] text-[var(--tg-fg-dim)]">
                  {lane.outcome}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={150} className="mt-8">
        <p className="m-0 max-w-[780px] text-pretty text-[14px] leading-[1.85] text-[var(--tg-fg-dim)]">
          A provider can rank highly for one Intent and differently for another.
          There is no universal provider leaderboard. These three Intents are
          current examples; the protocol can support many more.
        </p>
      </Reveal>
    </Section>
  );
}
