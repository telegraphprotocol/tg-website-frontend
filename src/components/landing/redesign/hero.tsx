import Image from "next/image";
import { CtaButton } from "../cta-button";
import { Reveal } from "../fx/reveal";
import { Typewriter } from "../fx/typewriter";
import { HeroStats } from "./hero-stats";

export function RedesignHero() {
  return (
    <section className="relative flex min-h-[calc(100vh-72px)] flex-col items-center justify-center border-b border-[var(--tg-line)] px-4 py-20 text-center md:px-8">
      <Reveal variant="fade" className="mb-7">
        <Image
          src="/images/landing/mascot.png"
          alt=""
          aria-hidden
          width={340}
          height={340}
          priority
          className="h-auto w-[clamp(150px,20vw,260px)] mx-auto drop-shadow-[0_0_40px_rgba(233,233,233,0.08)]"
        />
      </Reveal>

      <Typewriter
        as="h1"
        text="Telegraph"
        speed={40}
        className="m-0 mb-6 text-[clamp(42px,8vw,96px)] font-normal leading-[1.05] tracking-[0.01em] text-[var(--tg-fg)]"
      />

      <Reveal delay={150} as="p">
        <span className="mx-auto block max-w-[640px] text-pretty text-[clamp(14px,1.3vw,17px)] leading-[1.7] text-[var(--tg-fg)]">
          A peer-to-peer ranking protocol for machine intelligence.
        </span>
      </Reveal>
      <Reveal delay={280} as="p">
        <span className="mx-auto mt-3 block max-w-[600px] text-pretty text-[13px] leading-[1.8] text-[var(--tg-fg-dim)]">
          Anything behind an API can plug in and compete per intent. Demand
          gets routed to the best intelligence for that specific job.
        </span>
      </Reveal>

      <Reveal delay={420} className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
        <CtaButton
          href="https://alexandria.telegraphprotocol.com"
          target="_blank"
          className="h-10 w-[220px] justify-center border border-black/10 hover:!bg-neutral-300"
        >
          Explore Alexandria
        </CtaButton>
        <CtaButton
          href="#how"
          variant="dark"
          arrow={false}
          className="h-10 w-[220px] justify-center !text-[#e9e9e9]"
        >
          See how it works
        </CtaButton>
      </Reveal>

      <Reveal delay={520}>
        <HeroStats />
      </Reveal>
    </section>
  );
}
