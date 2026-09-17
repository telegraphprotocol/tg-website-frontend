import { Reveal } from "../fx/reveal";
import { CtaButton } from "../cta-button";
import { Section, SectionHeading } from "./shared";

const specs = [
  {
    heading: "Miner adapters",
    text: "Every miner registers with one config file that maps its API response into a fixed, machine-readable format a contract can decode.",
  },
  {
    heading: "Authenticated answers",
    text: "zkTLS binds each miner to the answer it gave.",
  },
  {
    heading: "WASM-based evaluation",
    text: "Evaluators run deterministically in a sandbox, so every validator computes the same score and no operator can alter the logic.",
  },
  {
    heading: "Evaluator competition",
    text: "Challengers are ranked on public workloads, then must pass validators running their code on hidden material. One canonical Evaluator per intent, replaceable at any time.",
  },
  {
    heading: "Validators and consensus",
    text: "64 independent validators. Stake-weighted median, commit-reveal, BLS-aggregated, 43 of 64 to finalise.",
  },
  {
    heading: "Spot checks",
    text: "Fired from the block hash roughly every 20 seconds. A miner whose score drops 20% loses routing instantly.",
  },
  {
    heading: "Settlement",
    text: "USDC settles on Ethereum per request. Receipts live on Telegraph's own chain at zero marginal cost. 2% protocol fee, with 98% settled to miners in Machina.",
  },
];

export function Hood() {
  return (
    <Section id="hood" className="border-b-0 bg-[var(--tg-surface)]">
      <SectionHeading lede="For anyone who wants to go deeper. The full detail is in the whitepaper.">
        Under the hood.
      </SectionHeading>

      <div className="mt-14 grid grid-cols-1 gap-3">
        {specs.map((spec, i) => (
          <Reveal key={spec.heading} delay={i * 60}>
            <div className="grid grid-cols-1 gap-2 rounded-sm border border-[var(--tg-line)] bg-[var(--tg-bg)] px-6 py-5 md:grid-cols-[260px_1fr] md:gap-6">
              <h3 className="m-0 text-[13px] font-medium text-[var(--tg-fg)]">
                {spec.heading}
              </h3>
              <p className="m-0 text-[13px] leading-[1.7] text-[var(--tg-fg-dim)]">
                {spec.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={450} className="mt-10 text-center">
        <CtaButton
          href="/Telegraph%20Protocol%20Whitepaper%20V2.0.pdf"
          target="_blank"
          className="h-10 border border-black/10 hover:!bg-neutral-300"
        >
          Read the whitepaper
        </CtaButton>
      </Reveal>
    </Section>
  );
}
