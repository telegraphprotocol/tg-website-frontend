import { Reveal } from "../fx/reveal";
import { Section, SectionHeading } from "./shared";

const cards = [
  {
    label: "Bitcoin",
    heading: "Miners are paid to secure blocks",
    rows: [
      { dt: "Supply", dd: "Fixed supply 21M BTC" },
      { dt: "The work", dd: "Securing the network" },
    ],
    highlight: false,
  },
  {
    label: "Telegraph",
    heading: "Miners are paid to supply the best answer",
    rows: [
      { dt: "Supply", dd: "Fixed supply 21M Machina" },
      { dt: "The work", dd: "Winning paid requests" },
    ],
    highlight: true,
  },
];

export function Mining() {
  return (
    <Section>
      <SectionHeading
        lede="Bitcoin-style economics. A fixed 21M Machina supply rewards the
peers who rank and verify intelligence, and every paid request
settles to the winning miner in Machina, an incentive no lab paying
in fiat could match."
      >
        Bitcoin opened the mine. Telegraph points it at evaluating
        intelligence.
      </SectionHeading>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {cards.map((card, i) => (
          <Reveal key={card.label} delay={i * 120}>
            <div
              className={`h-full rounded-sm border p-7 text-left ${
                card.highlight
                  ? "border-[var(--tg-line-strong)] bg-[var(--tg-surface-strong)]"
                  : "border-[var(--tg-line)] bg-[var(--tg-surface)]"
              }`}
            >
              <span className="block text-[11px] uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
                {card.label}
              </span>
              <h3 className="mt-4 text-[18px] font-normal text-[var(--tg-fg)]">
                {card.heading}
              </h3>
              <dl className="mt-6 border-t border-[var(--tg-line)]">
                {card.rows.map((row) => (
                  <div
                    key={row.dt}
                    className="grid grid-cols-[120px_1fr] border-b border-[var(--tg-line)] py-3 text-[13px]"
                  >
                    <dt className="text-[var(--tg-fg-faint)]">{row.dt}</dt>
                    <dd className="m-0 text-[var(--tg-fg)]">{row.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
