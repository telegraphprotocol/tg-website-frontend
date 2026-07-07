import { Reveal } from "./fx/reveal";
import { Typewriter } from "./fx/typewriter";

export function Inspire() {
  return (
    <section className="bg-[var(--tg-bg)] px-6 py-24 sm:px-8 md:py-[140px]">
      <div className="mx-auto max-w-[1080px]">
        <Typewriter
          text="Inspired By Bitcoin And Bittensor"
          className="block mb-12 text-center text-[clamp(22px,2.2vw,30px)] font-medium tracking-[0.005em] text-[var(--tg-fg)] md:mb-16"
        />
        <Reveal
          variant="blur"
          className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-14"
        >
          <p className="m-0 text-pretty text-[13.5px] leading-[1.85] text-[var(--tg-fg-dim)]">
            We believe the two greatest blockchain inventions of the past two
            decades are Bitcoin and Bittensor: Bitcoin secured the ledger
            through competition, and Bittensor created an open network for AI
            production. Influenced by their novelty and what they gave to the
            world, we created Telegraph: a hard-capped 21M-supply permissionless
            network where anyone with a service sitting behind an API — a
            model, a dataset, a scraper, a specialized tool — is paid in USDC to
            answer queries from machines. Instead of mining for token rewards,
            miners earn for real work. Miners produce signals: tokenized outputs
            such as probabilities, scores, alerts, or classifications. Each
            signal is published with a verifiable receipt showing who produced
            it, when, at what cost, and with what confidence. These signals
            become composable, auditable primitives that machines can use
            directly for automated decisions, pricing, risk, and more. Rather
            than relying on a single provider, agents can source intelligence
            from a competitive marketplace of answers.
          </p>
          <p className="m-0 text-pretty text-[13.5px] leading-[1.85] text-[var(--tg-fg-dim)]">
            Miners submit signals with varying confidence, price, and historical
            performance, allowing agents to compare, weight, and aggregate them
            into a single actionable outcome. This enables real-world use cases
            where decisions are driven by verifiable, market-priced intelligence
            instead of random or unverified outputs. Telegraph transforms any
            API response into a new asset class: fast, affordable, accurate, and
            verifiable answers built for machine consumption. By making
            intelligence something that can be priced, traded, and audited,
            Telegraph aligns incentives across the network and creates an open
            economy where machines buy answers and humans or other machines
            supply them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
