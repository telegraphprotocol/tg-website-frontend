import Image from "next/image";
import { PixelReveal } from "./fx/pixel-reveal";
import { Reveal } from "./fx/reveal";
import { Typewriter } from "./fx/typewriter";

const steps: { num: string; label: string; text: string }[] = [
  { num: "01", label: "REQUEST", text: "Set your intent and your price." },
  {
    num: "02",
    label: "ROUTE",
    text: "The protocol broadcasts the task to the network.",
  },
  { num: "03", label: "INFER", text: "Competing Miners compute the answer." },
  {
    num: "04",
    label: "VALIDATE",
    text: "Validators verify the output against ground truth.",
  },
  {
    num: "05",
    label: "PUBLISH",
    text: "The signal is delivered on-chain with a cryptographic receipt.",
  },
  {
    num: "06",
    label: "SETTLE",
    text: "Payment is settled instantly on-chain.",
  },
];

export function How() {
  return (
    <section className="relative bg-[var(--tg-bg)] pb-20 md:px-8 lg:pt-6 pt-20">
      <div className="relative mx-auto min-h-[640px] max-w-[1280px] overflow-hidden p-4 md:p-14">
        <PixelReveal
          effect="halftone"
          duration={1700}
          className="pointer-events-none absolute left-0 top-0 z-0 hidden h-[300px] w-[300px] opacity-20 md:block"
        >
          <Image
            src="/images/landing/liquidity-wheel.png"
            alt=""
            aria-hidden
            fill
            sizes="480px"
            className="object-contain"
            style={{
              maskImage:
                "radial-gradient(circle at 35% 35%, black 0%, black 55%, transparent 85%)",
              WebkitMaskImage:
                "radial-gradient(circle at 35% 35%, black 0%, black 55%, transparent 85%)",
            }}
          />
        </PixelReveal>

        <div className="relative z-10 flex flex-col gap-[60px] md:gap-36">
          <div className="max-w-[460px] md:ml-auto md:text-right">
            <Typewriter
              text="How Telegraph Works"
              className="block m-0 mb-3.5 text-[clamp(22px,2.2vw,30px)] font-normal tracking-[0.005em] text-[#f1f1f1]"
            />
            <Reveal
              as="p"
              delay={150}
              className="m-0 text-pretty text-[14px] leading-[1.8] text-[var(--tg-fg-dim)] md:ml-auto"
            >
              Every request becomes a market transaction for intelligence.
              Telegraph handles the high-speed orchestration, verification, and
              payouts — so you don&apos;t have to.
            </Reveal>
          </div>

          {/* Mobile: vertical flow */}
          <div className="relative md:hidden">
            <div
              aria-hidden
              className="absolute left-[15px] top-2 bottom-2 w-px bg-[var(--tg-line)]"
            />
            <div
              aria-hidden
              className="tg-flow-dot-vertical pointer-events-none absolute left-[15px] h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-[#f1f1f1] shadow-[0_0_8px_2px_rgba(241,241,241,0.5)]"
            />
            <div className="flex flex-col gap-7">
              {steps.map((s, i) => (
                <Reveal
                  key={s.num}
                  delay={i * 90}
                  className="group relative z-10 flex items-start gap-4"
                >
                  <span className="flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-full border border-[var(--tg-line-strong)] bg-[var(--tg-bg-deep)] text-[12px] font-medium text-[#f1f1f1] transition-all duration-300 group-hover:border-[var(--tg-fg)] group-hover:shadow-[0_0_14px_2px_rgba(241,241,241,0.35)]">
                    {s.num}
                  </span>
                  <div className="pt-1.5">
                    <p className="m-0 mb-1.5 text-[13px] font-medium tracking-[0.08em] text-[#f1f1f1]">
                      {s.label}
                    </p>
                    <p className="m-0 max-w-[280px] text-pretty text-[13px] leading-[1.6] text-[var(--tg-fg-dim)]">
                      {s.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Desktop: horizontal pipeline */}
          <div className="relative hidden md:flex md:items-start md:justify-between md:gap-2">
            <div
              aria-hidden
              className="absolute left-[15.5px] right-[15.5px] top-[15px] h-px bg-[var(--tg-line)]"
            />
            <div
              aria-hidden
              className="tg-flow-dot pointer-events-none absolute top-[11px] h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-[#f1f1f1] shadow-[0_0_8px_2px_rgba(241,241,241,0.5)]"
            />

            {steps.map((s, i) => (
              <Reveal
                key={s.num}
                delay={i * 90}
                className="group relative z-10 flex w-[150px] shrink-0 flex-col items-start"
              >
                <span className="mb-4 flex h-[31px] w-[31px] items-center justify-center rounded-full border border-[var(--tg-line-strong)] bg-[var(--tg-bg-deep)] text-[12px] font-medium text-[#f1f1f1] transition-all duration-300 group-hover:border-[var(--tg-fg)] group-hover:shadow-[0_0_14px_2px_rgba(241,241,241,0.35)]">
                  {s.num}
                </span>
                <p className="m-0 mb-2 text-[13px] font-medium tracking-[0.08em] text-[#f1f1f1] transition-colors duration-300 group-hover:text-white">
                  {s.label}
                </p>
                <p className="m-0 max-w-[150px] text-pretty text-[13px] leading-[1.6] text-[var(--tg-fg-dim)]">
                  {s.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
