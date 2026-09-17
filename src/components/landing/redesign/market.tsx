import { Reveal } from "../fx/reveal";
import { Box, Eyebrow, Section, SectionHeading } from "./shared";

function ConvergeConnector({ emphasizeMiddle = false }: { emphasizeMiddle?: boolean }) {
  const lineColor = "var(--tg-line-strong)";
  return (
    <div className="relative min-w-10 flex-1 self-stretch">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full overflow-visible"
        fill="none"
      >
        <path
          d={
            emphasizeMiddle
              ? "M0,16.67 C45,16.67 55,38 78,42"
              : "M0,16.67 C55,16.67 45,50 100,50"
          }
          stroke={lineColor}
          strokeWidth={1.5}
          strokeDasharray={emphasizeMiddle ? "4 3" : undefined}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0,50 L100,50"
          stroke={emphasizeMiddle ? "var(--tg-fg)" : lineColor}
          strokeWidth={emphasizeMiddle ? 2 : 1.5}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={
            emphasizeMiddle
              ? "M0,83.33 C45,83.33 55,62 78,58"
              : "M0,83.33 C55,83.33 45,50 100,50"
          }
          stroke={lineColor}
          strokeWidth={1.5}
          strokeDasharray={emphasizeMiddle ? "4 3" : undefined}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

export function Market() {
  return (
    <Section>
      <SectionHeading
        lede={
          <>
            Today, a benchmark author or platform decides what &ldquo;good&rdquo;
            means, and that standard stops improving the day it ships. On
            Telegraph, anyone can build a better test, prove it on data it has
            never seen, and take over scoring for that intent, along with the
            rewards from its paid demand. Evaluation becomes a competitive,
            replaceable market layer.
          </>
        }
      >
        A market for measuring intelligence.
      </SectionHeading>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Reveal delay={100}>
          <Box className="h-full text-left">
            <Eyebrow>Everywhere else</Eyebrow>
            <div className="mt-6 flex items-stretch gap-0">
              <div className="flex w-[132px] shrink-0 flex-col gap-2">
                {["Supplier", "Supplier", "Supplier"].map((s, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm border border-[var(--tg-line)] bg-[var(--tg-bg)] px-3 py-2 text-center text-[12px] text-[var(--tg-fg-dim)]"
                  >
                    {s}
                  </div>
                ))}
              </div>
              <ConvergeConnector />
              <div className="flex w-[132px] shrink-0 flex-col items-center justify-center rounded-sm border border-[var(--tg-line)] bg-[var(--tg-bg)] px-3 py-4 text-center text-[12px] text-[var(--tg-fg)]">
                Fixed test
                <span className="mt-1 block text-[11px] text-[var(--tg-fg-faint)]">
                  written once
                </span>
              </div>
            </div>
            <p className="mt-6 text-pretty text-[13px] leading-[1.7] text-[var(--tg-fg-dim)]">
              One test, written once. Suppliers learn it, and nobody is paid
              to improve it.
            </p>
          </Box>
        </Reveal>

        <Reveal delay={200}>
          <Box className="h-full border-[var(--tg-line-strong)] bg-[var(--tg-surface-strong)] text-left">
            <Eyebrow>On Telegraph</Eyebrow>
            <div className="mt-6 flex items-stretch gap-0">
              <div className="flex w-[132px] shrink-0 flex-col gap-2">
                {[
                  { label: "Challenger", canonical: false },
                  { label: "Canonical", canonical: true },
                  { label: "Challenger", canonical: false },
                ].map((c, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-sm border px-3 py-2 text-center text-[12px] ${
                      c.canonical
                        ? "border-[var(--tg-fg)] bg-[var(--tg-bg)] font-medium text-[var(--tg-fg)]"
                        : "border-[var(--tg-line-strong)] bg-[var(--tg-bg)] text-[var(--tg-fg-dim)]"
                    }`}
                  >
                    {c.label}
                  </div>
                ))}
              </div>
              <ConvergeConnector emphasizeMiddle />
              <div className="flex w-[132px] shrink-0 flex-col items-center justify-center rounded-sm border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] px-3 py-4 text-center text-[12px] text-[var(--tg-fg)]">
                Every miner
                <span className="mt-1 block text-[11px] text-[var(--tg-fg-faint)]">
                  scored
                </span>
              </div>
            </div>
            <p className="mt-6 text-pretty text-[13px] leading-[1.7] text-[var(--tg-fg-dim)]">
              Tests compete. The best one scores every miner, until someone
              builds a better one.
            </p>
          </Box>
        </Reveal>
      </div>
    </Section>
  );
}
