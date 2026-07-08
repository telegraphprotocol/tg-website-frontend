import Image from "next/image";
import { PixelReveal } from "./fx/pixel-reveal";
import { Reveal } from "./fx/reveal";
import { Typewriter } from "./fx/typewriter";

const quarters = [
  {
    num: "01",
    head: "Q2 2026",
    text: "Launch of the Global Demand Ledger and Miner Onboarding. We are bootstrapping the network by activating our Tender Board, allowing the first wave of global miners to plug in and capture immediate yield.",
  },
  {
    num: "02",
    head: "Q3 2026",
    text: "Full Public Launch of the On-chain Intelligence + Payment Terminal. The protocol goes fully live, enabling agents and human developers to buy and sell verified intelligence seamlessly via our x402 payment rail.",
    current: true,
  },
  {
    num: "03",
    head: "Q4 2026",
    text: "Autonomous Memory Layer & Multi-Chain Settlement Expansion. We will introduce on-chain memory primitives for agents to recall past inferences, and expand our settlement rails to support cross-chain liquidity.",
  },
];

export function Path() {
  return (
    <section className="relative bg-[var(--tg-bg)] px-6 py-20 sm:px-8 md:py-[140px]">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <PixelReveal
          effect="halftone"
          duration={1800}
          className="absolute -right-[10%] top-0 h-[420px] w-[420px] opacity-60 sm:h-[560px] sm:w-[560px]"
        >
          <Image
            src="/images/landing/path-time.jpg"
            alt=""
            aria-hidden
            fill
            sizes="560px"
            className="object-cover"
            style={{
              objectPosition: "center 20%",
              maskImage:
                "radial-gradient(circle at 65% 35%, black 0%, black 38%, transparent 74%)",
              WebkitMaskImage:
                "radial-gradient(circle at 65% 35%, black 0%, black 38%, transparent 74%)",
            }}
          />
        </PixelReveal>
      </div>

      <div className="relative z-10 mx-auto max-w-[1080px]">
        <span className="mb-4 block text-[11px] uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
          Roadmap
        </span>
        <Typewriter
          text="The Path to the Machine Economy"
          className="block m-0 mb-16 max-w-[640px] text-[clamp(22px,2.2vw,30px)] font-normal tracking-[0.005em] text-[var(--tg-fg)] md:mb-20"
        />

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-[19px] top-[19px] bottom-[19px] w-px bg-[var(--tg-line)] md:left-0 md:right-0 md:top-[19px] md:bottom-auto md:h-px md:w-auto"
          />
          <div
            aria-hidden
            className="tg-flow-dot-vertical pointer-events-none absolute left-[19px] h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-[#f1f1f1] shadow-[0_0_8px_2px_rgba(241,241,241,0.5)] md:hidden"
          />
          <div
            aria-hidden
            className="tg-flow-dot pointer-events-none absolute top-[15px] hidden h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-[#f1f1f1] shadow-[0_0_8px_2px_rgba(241,241,241,0.5)] md:block"
          />

          <div className="flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-10">
            {quarters.map((q, i) => (
              <Reveal
                key={q.head}
                delay={i * 150}
                className="relative flex gap-5 md:flex-col md:gap-0"
              >
                <div className="relative z-10 shrink-0 md:mb-5">
                  <span
                    className={`flex h-[38px] w-[38px] items-center justify-center rounded-full border bg-[var(--tg-bg)] text-[12px] font-medium ${
                      q.current
                        ? "border-[var(--tg-fg)] text-[var(--tg-fg)]"
                        : "border-[var(--tg-line-strong)] text-[var(--tg-fg-dim)]"
                    }`}
                  >
                    {q.num}
                  </span>
                </div>

                <div className="flex-1 pt-1 md:pt-0">
                  <div className="mb-2 flex flex-wrap items-center gap-2.5">
                    <h3 className="m-0 text-lg font-medium text-[var(--tg-fg)]">
                      {q.head}
                    </h3>
                    {q.current ? (
                      <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-emerald-400">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        </span>
                        Up Next
                      </span>
                    ) : null}
                  </div>
                  <p className="m-0 max-w-[300px] text-pretty text-[14px] leading-[1.75] text-[var(--tg-fg-dim)]">
                    {q.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
