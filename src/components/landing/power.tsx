import { PixelReveal } from "./fx/pixel-reveal";
import { Reveal } from "./fx/reveal";
import { Typewriter } from "./fx/typewriter";

const chips = [
  "21M Machina",
  "7200 Machina emitted per day",
  "Halving schedule follows BTC",
];

export function Power() {
  return (
    <section className="relative min-h-[720px] bg-[var(--tg-bg)] lg:py-20 py-16">
      <PixelReveal
        effect="halftone"
        duration={1700}
        className="absolute inset-0 z-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/landing/power-bg.png')",
          backgroundPosition: "left center",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1280px] items-center justify-end px-4 py-14 md:px-14 md:py-20">
        <div className="max-w-[600px] md:text-right">
          <Typewriter
            text="Powered by Machina. A 21M Supply Bitcoin-Style Economy."
            className="lg:backdrop-blur-none backdrop-blur-xs lg:min-h-[82px] block m-0 mb-5 text-[clamp(22px,2.2vw,30px)] font-normal leading-[1.35] tracking-[0.005em] text-[var(--tg-fg)]"
          />
          <Reveal
            delay={150}
            className="lg:backdrop-blur-none backdrop-blur-xs"
          >
            <p className="m-0 mb-5 text-pretty text-[14px] leading-[1.85] text-[var(--tg-fg-dim)] ">
              Bitcoin gave the world a real currency. Bittensor gave the world
              an open network for intelligence. Telegraph gives the world a
              trusted market for verified machine decisions.
            </p>
            <p className="m-0 text-pretty text-[14px] leading-[1.85] text-[var(--tg-fg-dim)]">
              The protocol is secured by Machina — a hard-capped, 21-million
              fixed supply token with fair-launch emissions and regular halving
              cycles. Machina is the settlement layer for verified work, not a
              reward for pointless GPU burning.
            </p>
          </Reveal>
          <div className="mt-7 flex flex-wrap gap-3 md:justify-end">
            {chips.map((c, i) => (
              <Reveal key={c} delay={300 + i * 120}>
                <span className="inline-flex items-center whitespace-nowrap rounded-[4px] bg-[#1a1a1a] px-4 py-2.5 text-[14px] font-medium leading-none text-[var(--tg-fg)] tg-glitch-hover">
                  {c}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
