import { PixelReveal } from "@/components/landing/fx/pixel-reveal";
import { Typewriter } from "@/components/landing/fx/typewriter";
import { Reveal } from "@/components/landing/fx/reveal";
import { CtaButton } from "@/components/landing/cta-button";
import { LiveFeed } from "./live-feed";
import { StatStrip } from "./stat-strip";
import { VerificationSeal } from "./verification-seal";
import { ReactNode } from "react";

function MockHero({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[var(--tg-line)]">
      <PixelReveal
        effect="halftone"
        duration={1200}
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
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

      <div className="mx-auto w-full max-w-[880px] px-5 py-16 text-center md:px-8">
        <div className="mb-10">
          <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[#5fd48a]">
            {title}
          </span>
          <p className="mx-auto max-w-[520px] text-[12.5px] leading-[1.7] text-[var(--tg-fg-faint)]">
            {description}
          </p>
        </div>

        <Typewriter
          as="h1"
          text={`A machine intelligence protocol\nfor autonomous systems.`}
          speed={26}
          className="m-0 mb-5 text-balance text-[clamp(20px,2.4vw,30px)] font-medium leading-[1.35] tracking-[-0.005em] text-[#f1f1f1]"
        />
        <Reveal
          as="p"
          delay={200}
          className="mx-auto m-0 mb-9 max-w-[520px] text-pretty text-[13px] leading-[1.75] text-[var(--tg-fg-dim)]"
        >
          Telegraph is a protocol that turns models, data, tools, and live
          feeds into verified intelligence that autonomous agents can
          discover, pay for, and act on.
        </Reveal>

        <div className="mb-10 flex flex-col items-center gap-3.5">
          <div className="flex flex-wrap justify-center gap-3.5">
            <CtaButton href="#" target="_self">
              Explore Alexandria
              <span className="ml-1 rounded-sm border border-current/30 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] opacity-70">
                Beta
              </span>
            </CtaButton>
            <CtaButton href="#" target="_self" variant="dark">
              Read the Docs &amp; Build
            </CtaButton>
          </div>
          <CtaButton href="#" target="_self" variant="ghost">
            Join Hackathon
          </CtaButton>
        </div>

        <div className="relative">{children}</div>
      </div>
    </section>
  );
}

export default function HeroDemoPage() {
  return (
    <main className="bg-[var(--tg-bg)]">
      <div className="border-b border-[var(--tg-line)] px-5 py-6 text-center">
        <h1 className="m-0 text-[15px] font-medium text-[var(--tg-fg)]">
          Hero — space below CTA buttons, 3 options
        </h1>
        <p className="m-0 mt-1 text-[12px] text-[var(--tg-fg-faint)]">
          Internal review only — not linked from the live site.
        </p>
      </div>

      <MockHero
        title="Option 1 — Live Protocol Activity"
        description="A terminal-style ticker of simulated agent transactions. Reinforces the 'discover, pay for, act on' copy directly."
      >
        <LiveFeed />
      </MockHero>

      <MockHero
        title="Option 3 — Live Stat Strip"
        description="Minimal, data-driven metrics strip that re-scrambles periodically to feel alive, without adding visual noise."
      >
        <StatStrip />
      </MockHero>

      <MockHero
        title="Option 4 — Verification Seal"
        description="A wax-seal-style badge that assembles itself, then flips on hover to reveal a mock proof: hash, block, signature. Literal about 'verified intelligence.'"
      >
        <VerificationSeal />
      </MockHero>
    </main>
  );
}
