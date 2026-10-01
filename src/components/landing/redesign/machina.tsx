import { Reveal } from "../fx/reveal";
import { ArrowDownLine, Section, SectionHeading } from "./shared";

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
        lede="Stocks and most tokens price a company or a project. Machina prices the intelligence commodity itself, rewarding the validators and evaluators who check and grade every answer."
      >
        Machina is the unit cost of graded intelligence.
      </SectionHeading>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        {prices.map((p, i) => (
          <Reveal key={p.label} delay={i * 120}>
            <div
              className={`h-full rounded-sm border p-6 text-left ${
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
        <div className="grid grid-cols-1 gap-y-0 md:grid-cols-4 md:gap-x-12">
          {loop.map((step, i) => (
            <div key={step} className="relative">
              {i > 0 ? (
                <div className="md:hidden">
                  <ArrowDownLine />
                </div>
              ) : null}
              <div className="flex min-h-[84px] items-center justify-center rounded-sm border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] px-4 py-3 text-center text-[13px] leading-[1.5] text-[var(--tg-fg)]">
                {step}
              </div>
              {i < loop.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute left-full top-1/2 ml-1 hidden h-px w-10 -translate-y-1/2 bg-[var(--tg-line-strong)] md:block"
                >
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 border-y-[4px] border-l-[7px] border-y-transparent border-l-[var(--tg-line-strong)]" />
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <div className="relative mx-[calc((100%-9rem)/8)] mt-3 hidden h-9 rounded-b-sm border-x border-b border-[var(--tg-line-strong)] md:block">
          <span
            aria-hidden
            className="absolute -left-[4.5px] -top-[1px] border-x-[4px] border-b-[7px] border-x-transparent border-b-[var(--tg-line-strong)]"
          />
          <span className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 bg-[var(--tg-bg)] px-3 text-[11px] uppercase tracking-[0.2em] text-[var(--tg-fg-dim)]">
            repeat
          </span>
        </div>
        <p className="m-0 mt-3 text-center text-[11px] uppercase tracking-[0.2em] text-[var(--tg-fg-dim)] md:hidden">
          ↻ repeat
        </p>
      </Reveal>
    </Section>
  );
}
