"use client";

import { useState } from "react";
import { DecodeText } from "./fx/decode-text";
import { Reveal } from "./fx/reveal";

type Node = {
  id: string;
  title: string;
  subtitle: string;
  note: string;
  x: number;
  y: number;
};

const nodes: Node[] = [
  {
    id: "apps",
    title: "Applications & Agents",
    subtitle: "The Demand Engine",
    note: "Triggers x402 Micropayments & ERC-8183 Job Escrows",
    x: 300,
    y: 60,
  },
  {
    id: "validators",
    title: "Validators",
    subtitle: "The Immunological Audit",
    note: "Generates zkTLS Proofs & Stake-Weighted Medians",
    x: 540,
    y: 300,
  },
  {
    id: "miners",
    title: "Miners & Providers",
    subtitle: "The Quality Supply",
    note: "Integrates Any Web2 API via Declarative YAML",
    x: 60,
    y: 300,
  },
  {
    id: "scripts",
    title: "WASM Script Authors",
    subtitle: "The Standard of Truth",
    note: "Earns Protocol Emissions for WASM Evaluation Code",
    x: 300,
    y: 540,
  },
];

// Validators are the hub: they take in the request/capital and the grading
// logic, execute the WASM script themselves, and are the ones who route
// traffic to the top-ranked Miners. Script Authors never rank or route
// anything directly — they only supply the logic Validators execute.
const arcs: {
  from: string;
  to: string;
  label: string;
  kind: "rim" | "spoke";
}[] = [
  {
    from: "apps",
    to: "validators",
    label: "1. Broadcasts Requests & USDC Capital",
    kind: "rim",
  },
  {
    from: "scripts",
    to: "validators",
    label: "2. Supplies Un-gameable Grading Logic",
    kind: "spoke",
  },
  {
    from: "validators",
    to: "miners",
    label: "3. Routes Traffic ONLY to Highest Ranked",
    kind: "rim",
  },
  {
    from: "miners",
    to: "apps",
    label: "4. Delivers Pristine, Verified Intelligence",
    kind: "rim",
  },
];

const CENTER = { x: 300, y: 300 };
const RIM_RADIUS = 240;

function angleOf(n: Node) {
  return Math.atan2(n.y - CENTER.y, n.x - CENTER.x);
}

// All four nodes sit on the same circle. The three edges that form the
// actual settlement loop (apps -> validators -> miners -> apps) trace that
// circle's rim end to end, so together they read as one complete wheel.
function rimPath(from: Node, to: Node) {
  let span = angleOf(to) - angleOf(from);
  while (span < 0) span += Math.PI * 2;
  const largeArc = span > Math.PI ? 1 : 0;
  return `M ${from.x} ${from.y} A ${RIM_RADIUS} ${RIM_RADIUS} 0 ${largeArc} 1 ${to.x} ${to.y}`;
}

// WASM Script Authors only feed grading logic into Validators — they are
// not part of the settlement loop, so this connector is drawn as an inner
// spoke rather than a rim segment.
function spokePath(from: Node, to: Node) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const cx = CENTER.x + (mx - CENTER.x) * 0.45;
  const cy = CENTER.y + (my - CENTER.y) * 0.45;
  return `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
}

export function Flywheel() {
  const [active, setActive] = useState<string | null>(null);

  const isArcActive = (a: (typeof arcs)[number]) =>
    active === null || active === a.from || active === a.to;

  return (
    <section className="relative bg-[var(--tg-bg)] px-6 py-20 sm:px-8 md:py-[120px]">
      <div className="mx-auto max-w-[1080px] text-center">
        <DecodeText
          text="The Autonomous Intelligence Loop"
          className="block m-0 mb-3 text-[clamp(22px,2.2vw,30px)] font-normal tracking-[0.005em] text-[var(--tg-fg)]"
        />
        <Reveal
          as="p"
          delay={100}
          className="m-0 mb-8 text-[11px] uppercase tracking-[0.18em] text-[var(--tg-fg-faint)]"
        >
          The Compounding Moat: Performance Directly Drives Demand
        </Reveal>
        <Reveal
          as="p"
          delay={150}
          className="mx-auto m-0 mb-14 max-w-[640px] text-pretty text-[14px] leading-[1.85] text-[var(--tg-fg-dim)]"
        >
          Validators sit at the center: they take in demand from Applications
          &amp; Agents and grading logic from WASM Script Authors, execute
          that logic themselves to rank every Miner, then route traffic only
          to the best. Better rankings earn more traffic, more traffic earns
          more revenue, and more revenue attracts better Miners — compounding
          the network with every request. Hover a node to trace the loop.
        </Reveal>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
        <Reveal
          delay={250}
          variant="blur"
          className="relative mx-auto aspect-square w-full max-w-[420px] shrink-0 lg:max-w-[440px]"
        >
          <svg
            viewBox="0 0 600 600"
            className="h-full w-full overflow-visible"
            role="img"
            aria-label="Diagram of the Telegraph autonomous intelligence loop: Applications & Agents and WASM Script Authors both feed Validators, who execute the grading logic to rank Miners & Providers and route traffic to the best, which deliver verified intelligence back to Applications & Agents."
          >
            <defs>
              <marker
                id="fw-arrow"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="4"
                orient="auto"
              >
                <path d="M0,0 L8,4 L0,8 Z" fill="var(--tg-fg)" />
              </marker>
              <filter id="fw-glow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {arcs.map((a) => {
              const from = nodes.find((n) => n.id === a.from)!;
              const to = nodes.find((n) => n.id === a.to)!;
              const path =
                a.kind === "rim" ? rimPath(from, to) : spokePath(from, to);
              const arcActive = isArcActive(a);
              return (
                <g key={a.from + a.to} opacity={arcActive ? 1 : 0.22}>
                  <path
                    id={`fw-path-${a.from}-${a.to}`}
                    d={path}
                    fill="none"
                    stroke="var(--tg-fg-dim)"
                    strokeWidth={arcActive ? 1.5 : 1.1}
                    markerEnd="url(#fw-arrow)"
                    className="transition-all duration-300"
                  />
                  <circle r="3" fill="var(--tg-fg)" filter="url(#fw-glow)">
                    <animateMotion
                      dur="3.2s"
                      repeatCount="indefinite"
                      keyPoints="0;1"
                      keyTimes="0;1"
                      calcMode="linear"
                    >
                      <mpath href={`#fw-path-${a.from}-${a.to}`} />
                    </animateMotion>
                  </circle>
                </g>
              );
            })}

            {nodes.map((n) => {
              const nodeActive = active === n.id;
              const dimmed = active !== null && !nodeActive;
              return (
                <g
                  key={n.id}
                  onMouseEnter={() => setActive(n.id)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(n.id)}
                  onBlur={() => setActive(null)}
                  tabIndex={0}
                  className="cursor-pointer outline-none"
                >
                  <rect
                    x={n.x - 90}
                    y={n.y - 34}
                    width="180"
                    height="68"
                    rx="2"
                    fill="var(--tg-bg-deep)"
                    stroke={
                      nodeActive ? "var(--tg-fg)" : "var(--tg-line-strong)"
                    }
                    strokeWidth={nodeActive ? 1.5 : 1}
                    strokeOpacity={dimmed ? 0.4 : 1}
                    filter={nodeActive ? "url(#fw-glow)" : undefined}
                    className="transition-all duration-300"
                  />
                  <text
                    x={n.x}
                    y={n.y - 6}
                    textAnchor="middle"
                    fill="var(--tg-fg)"
                    fillOpacity={dimmed ? 0.4 : 1}
                    fontSize="13"
                    fontWeight={500}
                    className="transition-all duration-300"
                  >
                    {n.title}
                  </text>
                  <text
                    x={n.x}
                    y={n.y + 14}
                    textAnchor="middle"
                    fill="var(--tg-fg-dim)"
                    fillOpacity={dimmed ? 0.4 : 1}
                    fontSize="11"
                    letterSpacing="0.02em"
                    className="transition-all duration-300"
                  >
                    {n.subtitle}
                  </text>
                </g>
              );
            })}
          </svg>
        </Reveal>

        <div className="grid w-full max-w-[900px] grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:max-w-[380px] lg:grid-cols-1">
          {arcs.map((a, i) => {
            const from = nodes.find((n) => n.id === a.from)!;
            const highlighted = isArcActive(a);
            return (
              <Reveal key={a.label} delay={300 + i * 100}>
                <p
                  onMouseEnter={() => setActive(a.from)}
                  onMouseLeave={() => setActive(null)}
                  className={`m-0 text-pretty text-[13px] leading-[1.7] transition-opacity duration-300 ${
                    highlighted
                      ? "text-[var(--tg-fg-dim)]"
                      : "opacity-40 text-[var(--tg-fg-dim)]"
                  }`}
                >
                  <b className="font-medium text-[var(--tg-fg)]">{a.label}</b>{" "}
                  — {from.note}
                </p>
              </Reveal>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
