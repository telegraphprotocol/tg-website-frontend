import { Reveal } from "../fx/reveal";
import { MachinaLoop } from "./machina-loop";
import { Section, SectionHeading } from "./shared";

const prices = [
  { label: "Stocks", text: "price a company", highlight: false },
  { label: "Most tokens", text: "price a project", highlight: false },
  { label: "Machina", text: "prices graded intelligence", highlight: true },
];

const loop = [
  "Paid demand flows toward performance",
  "Settled in Machina",
  "Rewards validators and evaluators",
  "Economic opportunity attracts better participation",
];

export function Machina() {
  return (
    <Section>
      <SectionHeading
        lede="Stocks and most tokens price a company or a project. Machina prices the intelligence commodity itself, rewarding the validators and evaluators who verify the network and continually improve how intelligence is measured."
      >
        Machina is the unit cost of graded intelligence.
      </SectionHeading>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        {prices.map((p, i) => (
          <Reveal key={p.label} delay={i * 120}>
            <div
              style={{ animationDelay: `${i * 500}ms` }}
              className={`tg-pulse h-full rounded-sm border p-6 text-left ${
                p.highlight
                  ? "border-[var(--tg-fg)] bg-[var(--tg-surface-strong)]"
                  : "border-[var(--tg-line)] bg-[var(--tg-surface)]"
              }`}
            >
              <span className="block text-[11px] uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
                {p.label}
              </span>
              <p
                className={`m-0 mt-4 text-[18px] ${
                  p.highlight
                    ? "font-medium text-[var(--tg-fg)]"
                    : "text-[var(--tg-fg-dim)]"
                }`}
              >
                {p.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* The economic loop, kept deliberately simple */}
      <Reveal delay={150} className="mt-16">
        <MachinaLoop steps={loop} />
      </Reveal>
    </Section>
  );
}
