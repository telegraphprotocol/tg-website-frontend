import { PixelReveal } from "./fx/pixel-reveal";
import { Reveal } from "./fx/reveal";
import { TerminalLines, type TerminalLine } from "./fx/terminal-lines";
import { Typewriter } from "./fx/typewriter";

const leftLog: TerminalLine[] = [
  { kind: "head", text: "A:: SECURE_DATA_STREAM [SIGNAL_INDEX_v4.02]" },
  { kind: "rule", text: "--------------------------------------------" },
  { kind: "raw", text: "> INITIALIZING SIGNAL #0402" },
  { kind: "kv", key: "  [TARGET]", val: "ZEUS" },
  { kind: "kv", key: "  [CLASSIFICATION]", val: "MARKET ALPHA" },
  { kind: "kv", key: "  [ORIGIN]", val: "AUTONOMOUS_AGENT_X" },
  { kind: "kv", key: "  [VALUE]", val: "0.05 BTC" },
  { kind: "status", text: "STATUS: SEALED_AND_VERIFIED", cursor: true },
];

const rightLog: TerminalLine[] = [
  { kind: "head", text: "B:: SECURE_DATA_STREAM [SIGNAL_INDEX_v4.03]" },
  { kind: "rule", text: "-------------------------------------- >" },
  { kind: "raw", text: "> INITIALIZING SIGNAL >" },
  { kind: "raw", text: "#14562 [TARGET]" },
  {
    kind: "raw",
    text: "DEEPFAKE DETECTION: MULTI-MODAL DEFENSE [CLASSIFICATION]",
  },
  { kind: "raw", text: "TECHNICAL MINER STRATEGY [ORIGIN]" },
  { kind: "raw", text: "BITMIND SUBNET_34 [MINER]" },
  { kind: "status", text: "MINER_88 STATUS: OPTIMIZING_WEIGHTS", cursor: true },
];

export function Buy() {
  return (
    <section className="relative bg-[var(--tg-bg)] pb-10 pt-20 md:px-8">
      <div className="relative mx-auto min-h-[720px] max-w-[1280px] overflow-hidden lg:p-9 p-4 md:p-14">
        <span className="tg-corner tg-corner-tl" aria-hidden />
        <span className="tg-corner tg-corner-tr" aria-hidden />
        <span className="tg-corner tg-corner-bl" aria-hidden />
        <span className="tg-corner tg-corner-br" aria-hidden />

        <PixelReveal
          effect="halftone"
          duration={1600}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/landing/buy-bg.png')" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.7) 100%), linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        <div className="relative z-10 flex min-h-[460px] flex-col justify-between gap-12 md:gap-20">
          <div className="max-w-[380px]">
            <Typewriter
              text="Buy Verified Intelligence"
              className="lg:backdrop-blur-none backdrop-blur-xs lg:min-h-[97px] block m-0 mb-4 text-[clamp(22px,2.2vw,30px)] font-normal tracking-[0.005em] text-[var(--tg-fg)]"
            />
            <Reveal
              as="p"
              delay={150}
              className="lg:backdrop-blur-none backdrop-blur-xs m-0 text-pretty text-[14px] leading-[1.8] text-[var(--tg-fg-dim)]"
            >
              You&apos;re not calling an API. You&apos;re buying a unit of
              intelligence. Telegraph turns raw AI outputs into standardized,
              verifiable signals — probabilities, alerts, scores, and
              classifications — published on-chain with full receipts.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-2 md:gap-14">
            <TerminalLines
              lines={leftLog}
              step={140}
              charSpeed={6}
              className="lg:backdrop-blur-none backdrop-blur-xs max-md:whitespace-normal md:whitespace-nowrap"
            />
            <TerminalLines
              lines={rightLog}
              step={170}
              charSpeed={6}
              delay={3100}
              className="lg:backdrop-blur-none backdrop-blur-xs max-md:whitespace-normal md:whitespace-nowrap"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
