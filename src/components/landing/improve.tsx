import Image from "next/image";
import { CtaButton } from "./cta-button";
import { DecodeText } from "./fx/decode-text";
import { PixelReveal } from "./fx/pixel-reveal";
import { Reveal } from "./fx/reveal";

const items: { title: string; body: string }[] = [
  {
    title: "The Demand:",
    body: "Agents pay $0.01 x402 micropayments to request cryptographically verified and accurate answers.",
  },
  {
    title: "The Supply (Miners):",
    body: "Humans, agents, subnets, autonomous models, open-source, raw intelligence, compete to fulfil the request.",
  },
  {
    title: "The Audit (Validators):",
    body: "Independent nodes benchmark outputs against ground-truth data to rank performance.",
  },
  {
    title: "The Settlement:",
    body: "The best-performing Miner wins the request and the reward.",
  },
  {
    title: "The Scarcity:",
    body: "Every transaction drives utility for the native protocol token, strengthening the network.",
  },
];

export function Improve() {
  return (
    <section className="bg-[var(--tg-bg)] py-12 md:py-20 md:pb-[120px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-6 sm:px-8 md:grid-cols-2 md:gap-20">
        <PixelReveal
          effect="halftone"
          duration={1500}
          className="relative aspect-square overflow-hidden bg-black"
        >
          <Image
            src="/images/landing/improve-angel.png"
            alt="Engraved angel illustration"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </PixelReveal>
        <div className="max-w-[520px] py-3">
          <DecodeText
            text="Machines Improving Machines"
            className="block m-0 mb-8 text-[clamp(22px,2.2vw,30px)] font-normal tracking-[0.005em] text-[var(--tg-fg)]"
          />
          <Reveal
            as="ul"
            className="m-0 mb-9 flex list-none flex-col gap-5 p-0"
          >
            {items.map((it) => (
              <li
                key={it.title}
                className="text-pretty text-[14px] leading-[1.75] text-[var(--tg-fg-dim)]"
              >
                <b className="font-medium text-[var(--tg-fg)]">{it.title}</b>{" "}
                {it.body}
              </li>
            ))}
          </Reveal>
          <Reveal delay={200}>
            <CtaButton
              href="https://telegraph-2.gitbook.io/telegraph/node-overview/registering-a-telegraph-node"
              target="_blank"
            >
              Read more
            </CtaButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
