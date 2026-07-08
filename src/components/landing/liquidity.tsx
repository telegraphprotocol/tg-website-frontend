"use client";

import { useEffect, useState } from "react";
import { NumberScramble } from "./fx/number-scramble";
import { PixelReveal } from "./fx/pixel-reveal";
import { Reveal } from "./fx/reveal";
import { Typewriter } from "./fx/typewriter";

type Row = {
  agent: string;
  type: string;
  payment: string;
  yieldPct: string;
  status: "Open" | "Pending";
};

const rows: Row[] = [
  {
    agent: "0X4A...9B2",
    type: "DEEPFAKE-DETECTION",
    payment: "1.50",
    yieldPct: "14.2%",
    status: "Open",
  },
  {
    agent: "0X34...567",
    type: "WEATHER-RISK",
    payment: "0.85",
    yieldPct: "9.1%",
    status: "Pending",
  },
  {
    agent: "0X4A...9B2",
    type: "CV-COMMODITY-YIELD",
    payment: "0.20",
    yieldPct: "12.4%",
    status: "Open",
  },
  {
    agent: "0X4A...9B2",
    type: "DEEPFAKE-DETECTON",
    payment: "12.20",
    yieldPct: "3.1%",
    status: "Pending",
  },
  {
    agent: "0X48...322",
    type: "WEATHER-RISK",
    payment: "0.65",
    yieldPct: "22.5%",
    status: "Pending",
  },
];

function StatusPill({ status }: { status: Row["status"] }) {
  const color =
    status === "Open" ? "text-[var(--tg-fg)]" : "text-[var(--tg-fg-dim)]";
  return (
    <span className={`inline-flex items-center gap-1.5 ${color}`}>
      <span className="inline-flex h-[11px] w-[11px] items-center justify-center rounded-full border border-current text-[8px] leading-none">
        {status === "Open" ? "✓" : ""}
      </span>
      {status}
    </span>
  );
}

function Stat({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3.5 border-r border-[#1f1f1f] px-5 lg:py-6 py-3 last:border-r-0 max-md:border-b max-md:border-r-0 max-md:last:border-b-0">
      <div className="flex flex-col lg:gap-1.5 gap-1">
        <NumberScramble
          value={value}
          className="lg:text-[18px] text-[16px] font-medium leading-[1.1] tracking-[-0.01em] text-[var(--tg-fg)]"
        />
        <span className="lg:text-[14px] text-[13px] tracking-[0.02em] text-[var(--tg-fg-faint)]">
          {label}
        </span>
      </div>
      <span
        aria-hidden
        className="flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full border border-[#d4d4d4] text-[14px] leading-none text-[#d4d4d4]"
      >
        {icon}
      </span>
    </div>
  );
}

export function Liquidity() {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  useEffect(() => {
    if (!isReadMoreOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsReadMoreOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isReadMoreOpen]);

  return (
    <section className="relative min-h-[820px] bg-[var(--tg-bg)]">
      <PixelReveal
        effect="halftone"
        duration={1500}
        className="absolute inset-0 z-0 bg-no-repeat opacity-40"
        style={{
          backgroundImage: "url('/images/landing/category-cave.png')",
          backgroundPosition: "140% center",
          backgroundSize: "auto 100%",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.65) 35%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1280px] items-center px-1 py-12 md:px-8 md:py-[100px]">
        <div className="flex w-full max-w-[820px] flex-col gap-7 px-4 py-4 md:px-6">
            <div className="mb-8 max-w-[520px]">
              <Typewriter
                text="Instant Liquidity. Direct Market Signals."
                className="block m-0 mb-4 text-[clamp(22px,2.2vw,30px)] font-normal leading-[1.3] tracking-[0.01em] text-[var(--tg-fg)]"
              />
              <Reveal
                as="p"
                delay={150}
                className="m-0 max-w-[520px] text-pretty text-[14px] leading-[1.8] text-[var(--tg-fg-dim)]"
              >
                Telegraph eliminates market friction by indexing a global
                library of over 1,000 standardized AI skills (sourced directly
                from the most utilized agent frameworks like LangChain, OpenAI
                schemas, and Base44).{" "}
                <button
                  type="button"
                  onClick={() => setIsReadMoreOpen(true)}
                  className="text-[var(--tg-fg)] no-underline hover:underline underline-offset-[3px]"
                >
                  Read more
                </button>
              </Reveal>
            </div>

            <Reveal
              delay={250}
              className="relative w-full grid grid-cols-1 border border-[var(--tg-line)] bg-[var(--tg-bg-deep)]/20 backdrop-blur-lg md:grid-cols-3"
            >
              <span className="tg-corner tg-corner-tl" aria-hidden />
              <span className="tg-corner tg-corner-tr" aria-hidden />
              <span className="tg-corner tg-corner-bl" aria-hidden />
              <span className="tg-corner tg-corner-br" aria-hidden />
              <Stat value="$1,240,500" label="Total Volume" icon="$" />
              <Stat value="1,980" label="Active Tenders" icon="✓" />
              <Stat value="+12.3%" label="Avg. Yield" icon="%" />
            </Reveal>

            <Reveal
              delay={400}
              className="relative border border-[var(--tg-line)] bg-[var(--tg-bg-deep)]/20 backdrop-blur-lg w-full"
            >
              <span className="tg-corner tg-corner-tl" aria-hidden />
              <span className="tg-corner tg-corner-tr" aria-hidden />
              <span className="tg-corner tg-corner-bl" aria-hidden />
              <span className="tg-corner tg-corner-br" aria-hidden />
              <table className="w-full table-fixed border-collapse text-[14px]">
                <thead>
                  <tr>
                    {[
                      "Agent ID",
                      "Request Type",
                      "Payment ($)",
                      "Yield",
                      "Status",
                    ].map((h) => (
                      <th
                        key={h}
                        className="truncate border-b border-[#1a1a1a] bg-[var(--tg-bg-deep)] px-2 py-3 text-left text-[12px] font-medium tracking-[0.01em] text-[var(--tg-fg-dim)] sm:px-[18px] sm:text-[14px]"
                      >
                        {h}{" "}
                        <span className="ml-1 inline-block -translate-y-px text-[14px] text-[var(--tg-fg-faint)]">
                          ⇅
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr
                      key={r.agent + i}
                      className={`${i % 2 === 1 ? "bg-white/[0.025]" : "bg-white/[0.025]"} hover:bg-white/[0.05] transition-colors`}
                    >
                      <td className="truncate border-b border-[#111] px-2 py-4 text-[12px] text-[var(--tg-fg)] sm:px-[18px] sm:text-[14px]">
                        {r.agent}
                      </td>
                      <td className="truncate border-b border-[#111] px-2 py-4 text-[12px] text-[var(--tg-fg)] sm:px-[18px] sm:text-[14px]">
                        {r.type}
                      </td>
                      <td className="truncate border-b border-[#111] px-2 py-4 text-[12px] text-[var(--tg-fg)] sm:px-[18px] sm:text-[14px]">
                        {r.payment}
                      </td>
                      <td className="truncate border-b border-[#111] px-2 py-4 text-[12px] text-[var(--tg-fg)] sm:px-[18px] sm:text-[14px]">
                        {r.yieldPct}
                      </td>
                      <td className="truncate border-b border-[#111] px-2 py-4 text-[12px] last:[&]:border-b-0 sm:px-[18px] sm:text-[14px]">
                        <StatusPill status={r.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
      </div>

      {isReadMoreOpen ? (
        <div
          className="fixed inset-0 z-[140] flex items-center justify-center bg-black/70 px-4 backdrop-blur-[2px]"
          onClick={() => setIsReadMoreOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="liquidity-readmore-title"
            className="relative w-full max-w-[760px] border border-[var(--tg-line)] bg-[var(--tg-bg-deep)] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] md:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <span className="tg-corner tg-corner-tl" aria-hidden />
            <span className="tg-corner tg-corner-tr" aria-hidden />
            <span className="tg-corner tg-corner-bl" aria-hidden />
            <span className="tg-corner tg-corner-br" aria-hidden />

            <div className="mb-5 flex items-center justify-between gap-4 border-b border-[var(--tg-line-soft)] pb-4">
              <h3
                id="liquidity-readmore-title"
                className="m-0 text-[16px] font-medium tracking-[0.01em] text-[var(--tg-fg)]"
              >
                Instant Utility For Developers
              </h3>
              <button
                type="button"
                aria-label="Close popup"
                onClick={() => setIsReadMoreOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--tg-line-strong)] text-[var(--tg-fg-dim)] transition-colors hover:text-[var(--tg-fg)]"
              >
                ✕
              </button>
            </div>

            <p className="m-0 text-pretty text-[13.5px] leading-[1.9] text-[var(--tg-fg-dim)]">
              We ensure instant utility for developers through a unified gateway
              that guarantees high-fidelity responses from day one. Every
              request is logged on our live dashboard. This acts as a real-time,
              public tender for the supply side. Miners and developers
              don&apos;t have to guess what to build; they watch the ledger,
              identify exactly what intelligence the market is paying for, and
              deploy models to capture that revenue instantly. We provide the
              demand; you provide the compute.
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
