import { CtaButton } from "./cta-button";
import { PixelReveal } from "./fx/pixel-reveal";
import { Reveal } from "./fx/reveal";
import { Typewriter } from "./fx/typewriter";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden">
      <PixelReveal
        effect="halftone"
        duration={1700}
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat lg:right-0 -right-128"
        style={{ backgroundImage: "url('/images/landing/hero-bg.png')" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0) 75%), linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div className="w-full max-w-[720px] px-5 py-20 text-center md:px-8">
        <Typewriter
          as="h1"
          text={`A machine intelligence protocol\nfor autonomous systems.`}
          speed={26}
          className="lg:backdrop-blur-none backdrop-blur-xs lg:min-h-[90px] m-0 mb-5 text-balance text-[clamp(22px,2.6vw,34px)] font-medium leading-[1.35] tracking-[-0.005em] text-[#f1f1f1]"
        />
        <Reveal
          as="p"
          delay={200}
          className="lg:backdrop-blur-none backdrop-blur-xs mx-auto m-0 mb-9 max-w-[560px] text-pretty text-[14px] leading-[1.75] text-[var(--tg-fg-dim)]"
        >
          Telegraph is a messaging protocol built on Base that transforms raw AI
          outputs — from any open or closed-source model — into verified,
          tradable answers that machines can use to make decisions and execute
          tasks autonomously.
        </Reveal>
        <Reveal delay={400} className="flex flex-wrap justify-center gap-3.5">
          <CtaButton
            href="https://terminal.telegraphprotocol.com/intelligence-terminal"
            target="_blank"
          >
            Launch Terminal
          </CtaButton>
          <CtaButton
            href="https://docs.telegraphprotocol.com/"
            target="_blank"
            variant="dark"
          >
            Read the Docs &amp; Build
          </CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
