import { PixelReveal } from "./fx/pixel-reveal";
import { Reveal } from "./fx/reveal";
import { Typewriter } from "./fx/typewriter";

const steps: { num: string; label: string; text: string }[] = [
  { num: "01", label: "REQUEST", text: "Set your intent and your price." },
  {
    num: "02",
    label: "ROUTE",
    text: "The protocol broadcasts the task to the libp2p mesh.",
  },
  { num: "03", label: "INFER", text: "Competing miners compute the answer." },
  {
    num: "04",
    label: "VALIDATE",
    text: "Nodes verify the output against the intent benchmark.",
  },
  {
    num: "05",
    label: "PUBLISH",
    text: "The signal is delivered on-chain with a cryptographic receipt.",
  },
  {
    num: "06",
    label: "SETTLE",
    text: "Payment is settled instantly via the x402 rail.",
  },
];

export function How() {
  return (
    <section className="relative bg-[var(--tg-bg)] pb-20 md:px-8 lg:pt-6 pt-20">
      <div className="relative mx-auto min-h-[720px] max-w-[1280px] overflow-hidden p-4 md:p-14">
        <PixelReveal
          effect="halftone"
          duration={1700}
          className="absolute inset-0 z-0 bg-contain bg-no-repeat"
          style={{
            backgroundImage: "url('/images/landing/how-bg.png')",
            backgroundPosition: "center 60%",
          }}
        />

        <div className="relative z-10 flex flex-col gap-[60px] md:gap-[320px]">
          <div className="max-w-[460px]">
            <Typewriter
              text="How Telegraph Works"
              className="block m-0 mb-3.5 text-[clamp(22px,2.2vw,30px)] font-normal tracking-[0.005em] text-[#f1f1f1]"
            />
            <Reveal
              as="p"
              delay={150}
              className="m-0 text-pretty text-[14px] leading-[1.8] text-[var(--tg-fg-dim)]"
            >
              Every request becomes a market transaction for intelligence.
              Telegraph handles the high-speed orchestration, verification, and
              payouts — so you don&apos;t have to.
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 md:gap-x-14 md:gap-y-14">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 90}>
                <p className="m-0 mb-3.5 text-[14px] font-medium tracking-[0.06em] text-[#f1f1f1] text-balance">
                  <b className="mr-2.5 font-medium text-[var(--tg-fg)]">
                    {s.num}
                  </b>
                  {s.label}
                </p>
                <p className="m-0 max-w-[240px] text-pretty text-[14px] leading-[1.7] text-[var(--tg-fg-dim)]">
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
