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
  return (
    <section className="relative min-h-[940px] bg-[var(--tg-bg)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <PixelReveal
          effect="halftone"
          duration={1500}
          className="absolute inset-0 bg-cover bg-no-repeat -left-48"
          style={{
            backgroundImage: "url('/images/landing/liquidity-warrior.png')",
            backgroundPosition: "left center",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 z-[1] lg:hidden block"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.45) 100%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 0%), linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-1 py-12 md:px-8 md:py-[100px]">
        <div className="grid min-h-[560px] grid-cols-1 items-stretch md:grid-cols-[1.05fr_1fr]">
          <div aria-hidden className="hidden md:block" />

          <div className="flex flex-col gap-7 px-4 py-4 md:col-start-2 md:px-6 justify-end items-end">
            <div className="md:text-right mb-8 max-w-[520px]">
              <Typewriter
                text="Instant Liquidity. Direct Market Signals."
                className="lg:min-h-[78px] block m-0 mb-4 text-[clamp(22px,2.2vw,30px)] font-normal leading-[1.3] tracking-[0.01em] text-[var(--tg-fg)]"
              />
              <Reveal
                as="p"
                delay={150}
                className="m-0 max-w-[520px] text-pretty text-[14px] leading-[1.8] text-[var(--tg-fg-dim)] md:ml-auto"
              >
                Telegraph eliminates market friction by indexing a global
                library of over 1,000 standardized AI skills (sourced directly
                from the most utilized agent frameworks like LangChain, OpenAI
                schemas, and Base44).{" "}
                <a
                  href="#read"
                  className="text-[var(--tg-fg)] no-underline hover:underline underline-offset-[3px]"
                >
                  Read more
                </a>
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
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[14px]">
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
                          className="whitespace-nowrap border-b border-[#1a1a1a] bg-[var(--tg-bg-deep)] px-[18px] py-3 text-left text-[14px] font-medium tracking-[0.01em] text-[var(--tg-fg-dim)]"
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
                        <td className="whitespace-nowrap border-b border-[#111] px-[18px] py-4 text-[var(--tg-fg)]">
                          {r.agent}
                        </td>
                        <td className="whitespace-nowrap border-b border-[#111] px-[18px] py-4 text-[var(--tg-fg)]">
                          {r.type}
                        </td>
                        <td className="whitespace-nowrap border-b border-[#111] px-[18px] py-4 text-[var(--tg-fg)]">
                          {r.payment}
                        </td>
                        <td className="whitespace-nowrap border-b border-[#111] px-[18px] py-4 text-[var(--tg-fg)]">
                          {r.yieldPct}
                        </td>
                        <td className="whitespace-nowrap border-b border-[#111] px-[18px] py-4 last:[&]:border-b-0">
                          <StatusPill status={r.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
