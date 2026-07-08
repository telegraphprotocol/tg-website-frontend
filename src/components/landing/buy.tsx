import { PixelReveal } from "./fx/pixel-reveal";
import { Reveal } from "./fx/reveal";
import { TerminalLines, type TerminalLine } from "./fx/terminal-lines";
import { Typewriter } from "./fx/typewriter";
import { ReactNode } from "react";

function TerminalWindow({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <span className="tg-corner tg-corner-tl" aria-hidden />
      <span className="tg-corner tg-corner-tr" aria-hidden />
      <span className="tg-corner tg-corner-bl" aria-hidden />
      <span className="tg-corner tg-corner-br" aria-hidden />

      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-[9px] w-[9px] rounded-full bg-[#ff5f57]/70" />
          <span className="h-[9px] w-[9px] rounded-full bg-[#febc2e]/70" />
          <span className="h-[9px] w-[9px] rounded-full bg-[#28c840]/70" />
        </span>
        <span className="ml-1 text-[11px] tracking-[0.08em] text-[var(--tg-fg-faint)]">
          {title}
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-emerald-400/90">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Live
        </span>
      </div>

      <div className="relative p-5">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 3px)",
          }}
        />
        {children}
      </div>
    </div>
  );
}

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
  { kind: "rule", text: "--------------------------------------------" },
  { kind: "raw", text: "> INITIALIZING SIGNAL #14562" },
  { kind: "kv", key: "  [TARGET]", val: "DEEPFAKE DETECTION" },
  { kind: "kv", key: "  [CLASSIFICATION]", val: "MULTI-MODAL DEFENSE" },
  { kind: "kv", key: "  [ORIGIN]", val: "TECHNICAL MINER STRATEGY" },
  { kind: "kv", key: "  [MINER]", val: "BITMIND SUBNET_34" },
  { kind: "status", text: "STATUS: OPTIMIZING_WEIGHTS", cursor: true },
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
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
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
              You&apos;re not just calling an API. You&apos;re buying a unit of
              verified intelligence. Telegraph turns any service behind an
              API — a model, a dataset, a tool, a live feed — into a
              standardized, verifiable signal — probabilities, alerts, scores,
              and classifications — published on-chain with full receipts.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-2 md:gap-14">
            <TerminalWindow title="session_a.log">
              <TerminalLines
                lines={leftLog}
                step={140}
                charSpeed={6}
                className="max-md:whitespace-normal md:whitespace-nowrap"
              />
            </TerminalWindow>
            <TerminalWindow title="session_b.log">
              <TerminalLines
                lines={rightLog}
                step={170}
                charSpeed={6}
                delay={3100}
                className="max-md:whitespace-normal md:whitespace-nowrap"
              />
            </TerminalWindow>
          </div>
        </div>
      </div>
    </section>
  );
}
