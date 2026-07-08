import { DecodeText } from "./fx/decode-text";
import { PixelReveal } from "./fx/pixel-reveal";
import { Reveal } from "./fx/reveal";

export function Marketplace() {
  return (
    <section className="relative min-h-[520px] bg-[var(--tg-bg)] lg:py-32">
      <PixelReveal
        effect="halftone"
        duration={1700}
        className="absolute inset-y-0 right-0 z-0 hidden w-[45%] bg-no-repeat opacity-50 md:block"
        style={{
          backgroundImage: "url('/images/landing/marketplace-bg.png')",
          backgroundPosition: "65% center",
          backgroundSize: "cover",
          transform: "scaleX(-1)",
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 55%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 55%, black 85%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1280px] items-center px-4 py-12 md:px-14 md:py-20">
        <div className="max-w-[540px]">
          <DecodeText
            text="A Marketplace for Humans and Machines"
            className="lg:backdrop-blur-none backdrop-blur-xs block m-0 mb-7 text-[clamp(22px,2.2vw,30px)] font-normal tracking-[0.005em] text-[var(--tg-fg)]"
          />
          <Reveal
            delay={150}
            variant="blur"
            className="lg:backdrop-blur-none backdrop-blur-xs"
          >
            <p className="m-0 mb-5 text-pretty text-[14px] leading-[1.85] text-[var(--tg-fg-dim)]">
              We are building a single source of intelligence that humanity and
              agents can trust.
            </p>
            <p className="m-0 mb-5 text-pretty text-[14px] leading-[1.85] text-[var(--tg-fg-dim)]">
              Everyone is a Miner: whether you are an indie developer wrapping
              an existing API, a research lab, a quant trader, or a human
              operator providing ground-truth verification, anyone with a
              service that machines need to make better decisions can earn. No
              ML background required — just a request in, a response out, and a
              simple YAML file to plug it into Telegraph.
            </p>
            <p className="m-0 text-pretty text-[14px] leading-[1.85] text-[var(--tg-fg-dim)]">
              As an open, permissionless economy, the best-performing providers
              are rewarded most. Humans can also launch, train, and deploy
              agents to work on their behalf — creating a system where machines
              earn and humans own.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
