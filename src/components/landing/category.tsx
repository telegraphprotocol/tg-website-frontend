import Image from "next/image";
import { DecodeText } from "./fx/decode-text";
import { PixelReveal } from "./fx/pixel-reveal";
import { Reveal } from "./fx/reveal";

const producers = [
  "Frontier models",
  "Chinese labs",
  "Academic labs",
  "Developers",
  "Enterprises",
  "Banks",
  "Prediction markets",
  "Autonomous agents",
];

function TickConnector({ delay = 0 }: { delay?: number }) {
  return (
    <span
      aria-hidden
      className="relative block h-5 w-px overflow-hidden bg-[var(--tg-line-strong)]"
    >
      <span
        className="tg-flow-dot-vertical absolute left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-[var(--tg-fg)] shadow-[0_0_6px_1px_rgba(241,241,241,0.5)]"
        style={{ animationDelay: `${delay}s` }}
      />
    </span>
  );
}

export function Category() {
  return (
    <section className="relative overflow-hidden bg-[var(--tg-bg)] px-5 py-16 sm:px-8 sm:py-20 md:py-[120px]">
      <PixelReveal
        effect="halftone"
        duration={1700}
        className="absolute inset-0 z-0 bg-contain bg-no-repeat opacity-40"
        style={{
          backgroundImage: "url('/images/landing/access-bg.png')",
          backgroundPosition: "center 25%",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[var(--tg-bg)]/20"
      />
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <DecodeText
          text="The Layer Where Intelligence Is Built, Bought, and Sold"
          className="block m-0 mb-5 max-w-[820px] text-pretty text-[clamp(22px,3vw,38px)] font-medium leading-[1.3] tracking-[-0.005em] text-[var(--tg-fg)] sm:mb-7"
        />
        <Reveal
          as="p"
          delay={100}
          className="m-0 mb-12 max-w-[820px] text-pretty text-[13.5px] leading-[1.8] text-[var(--tg-fg-dim)] sm:mb-16 sm:text-[14px] md:mb-20"
        >
          Telegraph is the commercial rail for the AI industry — the neutral
          layer where every producer of intelligence gets found, trusted, and
          paid. We own no models, we build no data centers. We are the
          payment layer the AI economy runs on.
        </Reveal>

        <Reveal variant="blur" className="mx-auto max-w-[1080px]">
          <span className="mb-4 block text-pretty text-center text-[10px] uppercase leading-[1.5] tracking-[0.14em] text-[var(--tg-fg-faint)] sm:mb-6 sm:text-[11px] sm:tracking-[0.2em]">
            The AI Industry — Producers &amp; Demand
          </span>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3 lg:grid-cols-8">
            {producers.map((p) => (
              <div
                key={p}
                className="tg-glitch-hover flex h-[56px] cursor-default items-center justify-center border border-[var(--tg-line)] bg-[var(--tg-bg-deep)] px-2.5 text-center transition-colors duration-300 hover:border-[var(--tg-line-strong)] sm:h-[64px] sm:px-3"
              >
                <span className="text-pretty text-[12px] leading-[1.35] text-[var(--tg-fg-dim)] sm:text-[12.5px] sm:leading-[1.4]">
                  {p}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <TickConnector delay={0} />
          </div>

          <div className="relative border border-[var(--tg-fg)] bg-[var(--tg-bg-deep)] px-4 py-7 text-center sm:px-6 sm:py-9 md:px-10">
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--tg-fg)] opacity-[0.06] blur-3xl sm:h-32 sm:w-32"
            />
            <span className="tg-corner tg-corner-tl" aria-hidden />
            <span className="tg-corner tg-corner-tr" aria-hidden />
            <span className="tg-corner tg-corner-bl" aria-hidden />
            <span className="tg-corner tg-corner-br" aria-hidden />

            <div className="relative flex items-center justify-center gap-2.5 sm:gap-3">
              <Image
                src="/t-logo.png"
                alt=""
                aria-hidden
                width={24}
                height={24}
                className="h-5 w-auto opacity-90 sm:h-6"
              />
              <h3 className="m-0 text-[22px] font-medium tracking-[0.06em] text-[var(--tg-fg)] sm:text-[26px] md:text-[30px]">
                TELEGRAPH
              </h3>
            </div>
            <p className="relative m-0 mt-3 mb-3 text-pretty text-[13px] text-[var(--tg-fg-dim)] sm:text-[14px]">
              The commercial &amp; payment rail for intelligence
            </p>
            <p className="relative m-0 text-pretty text-[11.5px] uppercase tracking-[0.14em] text-[var(--tg-fg-faint)] sm:text-[13px] sm:tracking-[0.18em]">
              Verify · Route · Settle · Receipt
            </p>
          </div>

          <div className="flex justify-center sm:hidden">
            <TickConnector delay={0} />
          </div>
          <div className="hidden justify-center gap-40 sm:flex">
            <TickConnector delay={0} />
            <TickConnector delay={0.4} />
            <TickConnector delay={0.8} />
          </div>

          <div className="border border-[var(--tg-line-soft)] bg-[var(--tg-bg)] px-4 py-5 text-center transition-colors duration-300 hover:border-[var(--tg-line-strong)] sm:px-6 sm:py-6">
            <p className="m-0 mb-1.5 text-pretty text-[11.5px] uppercase tracking-[0.14em] text-[var(--tg-fg-dim)] sm:text-[13px] sm:tracking-[0.18em]">
              End Users &amp; The Global Economy
            </p>
            <p className="m-0 text-pretty text-[12px] text-[var(--tg-fg-faint)] sm:text-[13px]">
              The people and machines that consume intelligence
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
