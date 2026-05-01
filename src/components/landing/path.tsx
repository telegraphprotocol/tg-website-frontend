import { PixelReveal } from "./fx/pixel-reveal";
import { Reveal } from "./fx/reveal";
import { Typewriter } from "./fx/typewriter";

const quarters = [
  {
    head: "Q2 2026",
    text: "Launch of the Global Demand Ledger and Miner Onboarding. We are bootstrapping the network by activating our Tender Board, allowing the first wave of global miners to plug in and capture immediate yield.",
  },
  {
    head: "Q3 2026",
    text: "Full Public Launch of the On-chain Intelligence + Payment Terminal. The protocol goes fully live, enabling agents and human developers to buy and sell verified intelligence seamlessly via our x402 payment rail.",
  },
  {
    head: "Q4 2026",
    text: "Autonomous Memory Layer & Multi-Chain Settlement Expansion. We will introduce on-chain memory primitives for agents to recall past inferences, and expand our settlement rails to support cross-chain liquidity.",
  },
];

export function Path() {
  return (
    <section className="relative min-h-[580px] bg-[var(--tg-bg)] lg:pt-32 py-16 ">
      <PixelReveal
        effect="halftone"
        duration={1800}
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/landing/path-bg.png')",
          backgroundPosition: "center 30%",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 35%, rgba(0,0,0,0) 20%, rgba(0,0,0,0.4) 80%), linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[580px] max-w-[1280px] flex-col justify-end gap-10 px-4 py-12 md:px-14 md:py-20">
        <Typewriter
          text="The Path to the Machine Economy"
          className="block m-0 text-[clamp(22px,2.2vw,30px)] font-normal tracking-[0.005em] text-[var(--tg-fg)]"
        />

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-10">
          {quarters.map((q, i) => (
            <Reveal key={q.head} delay={i * 150}>
              <div className="flex flex-col gap-2">
                <h3 className="m-0 mb-2 text-lg font-medium text-[var(--tg-fg)]">
                  {q.head}
                </h3>
                <p className="m-0 max-w-[280px] text-pretty text-[14px] leading-[1.75] text-[var(--tg-fg-dim)]">
                  {q.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
