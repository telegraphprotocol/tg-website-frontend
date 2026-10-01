import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Reveal } from "../fx/reveal";
import { Section, SectionHeading } from "./shared";

const specs = [
  {
    heading: "WASM Evaluators",
    text: "Evaluators run deterministically in a sandbox, so every validator computes the same score and no operator can alter the logic. One canonical Evaluator per Intent, replaceable at any time.",
  },
  {
    heading: "Authenticated provenance",
    text: "Every provider registers with one config file that maps its API response into a fixed, machine-readable format a contract can decode. zkTLS binds each provider to the answer it gave.",
  },
  {
    heading: "Validator consensus",
    text: "64 independent validators. Stake-weighted median, commit-reveal, BLS-aggregated, 43 of 64 to finalise.",
  },
  {
    heading: "Ranking computation",
    text: "Each Intent has its own ranking, computed continuously in the background, so a request never waits for it. Challengers are ranked on public workloads, then must pass validators running their code on hidden material.",
  },
  {
    heading: "Spot checks",
    text: "Fired from the block hash roughly every 20 seconds. A provider whose score drops 20% loses routing instantly.",
  },
  {
    heading: "Settlement",
    text: "USDC settles on Ethereum per request. 2% protocol fee, with 98% settled to providers in Machina.",
  },
  {
    heading: "Protocol state",
    text: "43 of 64 validators finalise the network state. Receipts live on Telegraph's own chain at zero marginal cost.",
  },
];

export function Hood() {
  return (
    <Section id="hood" className="border-b-0 bg-[var(--tg-surface)]">
      <SectionHeading lede="For anyone who wants to go deeper. The full detail is in the whitepaper.">
        Under the hood.
      </SectionHeading>

      <Reveal delay={150} className="mt-14">
        <div className="overflow-hidden rounded-md border border-[var(--tg-line-strong)] bg-[var(--tg-bg)]">
          {specs.map((spec, i) => (
            <details
              key={spec.heading}
              className="group border-b border-[var(--tg-line)]"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 transition-colors hover:bg-[var(--tg-surface)] [&::-webkit-details-marker]:hidden">
                <span className="w-6 font-mono text-[11px] text-[var(--tg-fg-faint)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[14px] text-[var(--tg-fg)]">
                  {spec.heading}
                </span>
                <ChevronDown className="h-4 w-4 text-[var(--tg-fg-dim)] transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="m-0 max-w-[760px] px-5 pb-5 pl-[3.75rem] text-[13px] leading-[1.7] text-[var(--tg-fg-dim)]">
                {spec.text}
              </p>
            </details>
          ))}

          <Link
            href="/whitepaper"
            className="group flex items-center gap-4 px-5 py-4 text-[var(--tg-fg)] no-underline transition-colors hover:bg-[var(--tg-surface)]"
          >
            <span className="w-6 font-mono text-[11px] text-[var(--tg-fg-faint)]">
              {String(specs.length + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 text-[14px]">
              Whitepaper
              <span className="ml-3 text-[12px] text-[var(--tg-fg-dim)]">
                the full protocol
              </span>
            </span>
            <ArrowRight className="h-4 w-4 text-[var(--tg-fg-dim)] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
