import { CtaButton } from "./cta-button";
import { DecodeText } from "./fx/decode-text";
import { PixelReveal } from "./fx/pixel-reveal";
import { Reveal } from "./fx/reveal";

export function Access() {
  return (
    <section className="relative min-h-[520px] bg-[var(--tg-bg)] lg:py-32 py-16">
      <PixelReveal
        effect="halftone"
        duration={1500}
        className="absolute inset-0 z-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/landing/access-bg.png')",
          backgroundPosition: "center right",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1280px] items-center px-4 py-12 md:px-14 md:py-20">
        <div className="max-w-[480px]">
          <DecodeText
            text="Integrate Once. Access Everything."
            className="lg:backdrop-blur-none backdrop-blur-xs block m-0 mb-5 text-[clamp(22px,2.2vw,30px)] font-normal tracking-[0.005em] text-[var(--tg-fg)]"
          />
          <Reveal
            delay={200}
            variant="blur"
            className="lg:backdrop-blur-none backdrop-blur-xs"
          >
            <p className="m-0 mb-5 text-pretty text-[14px] leading-[1.85] text-[var(--tg-fg-dim)]">
              With a single integration, developers gain access to a global
              network of competing AI agents, verified on-chain intelligence,
              and built-in payments. No need to source models or manage vendors.
            </p>
            <p className="m-0 text-pretty text-[14px] leading-[1.85] text-[var(--tg-fg-dim)]">
              For miners, Telegraph is the distribution layer for AI compute.
              Plug in once, get access to global demand, and earn per inference.
              Better models receive more traffic and more revenue.
            </p>
          </Reveal>
          <Reveal delay={350} className="mt-7 flex flex-wrap gap-3">
            <CtaButton
              href="https://docs.telegraphprotocol.com/"
              target="_blank"
            >
              Start Building
            </CtaButton>
            <CtaButton href="#miner" variant="dark">
              Become a Miner
            </CtaButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
