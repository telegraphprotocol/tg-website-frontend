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
    subtitle: "The Demand",
    note: "Broadcasts requests and capital",
    x: 300,
    y: 60,
  },
  {
    id: "validators",
    title: "Validators",
    subtitle: "The Audit",
    note: "Generates verified, stake-weighted rankings",
    x: 540,
    y: 300,
  },
  {
    id: "scripts",
    title: "WASM Script Authors",
    subtitle: "The Grading Logic",
    note: "Supplies un-gameable evaluation logic",
    x: 300,
    y: 540,
  },
  {
    id: "miners",
    title: "Miners & Providers",
    subtitle: "The Supply",
    note: "Integrates any API via a simple YAML file",
    x: 60,
    y: 300,
  },
];

const arcs = [
  { from: "apps", to: "validators", label: "1. Routes requests & capital" },
  { from: "validators", to: "scripts", label: "2. Enforces grading logic" },
  { from: "scripts", to: "miners", label: "3. Ranks & routes to the best" },
  { from: "miners", to: "apps", label: "4. Delivers verified intelligence" },
];

const RING_RADIUS = 240;

// Nodes sit on a shared circle; connectors are arc segments of that same
// circle (not separate bezier curves), so the loop reads as one ring.
function arcPath(from: Node, to: Node) {
  return `M ${from.x} ${from.y} A ${RING_RADIUS} ${RING_RADIUS} 0 0 1 ${to.x} ${to.y}`;
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
          className="block m-0 mb-5 text-[clamp(22px,2.2vw,30px)] font-normal tracking-[0.005em] text-[var(--tg-fg)]"
        />
        <Reveal
          as="p"
          delay={150}
          className="mx-auto m-0 mb-14 max-w-[640px] text-pretty text-[14px] leading-[1.85] text-[var(--tg-fg-dim)]"
        >
          Performance directly drives demand. Every loop through the network
          routes more traffic to the best providers, which earns more revenue,
          which attracts better supply — compounding the quality of the
          network with every request. Hover a node to trace the loop.
        </Reveal>

        <Reveal
          delay={250}
          variant="blur"
          className="relative mx-auto aspect-square w-full max-w-[600px]"
        >
          <svg
            viewBox="0 0 600 600"
            className="h-full w-full overflow-visible"
            role="img"
            aria-label="Diagram of the Telegraph autonomous intelligence flywheel: Applications & Agents, Validators, WASM Script Authors, and Miners & Providers form a self-reinforcing loop."
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
              const path = arcPath(from, to);
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
                  opacity={dimmed ? 0.45 : 1}
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
                    filter={nodeActive ? "url(#fw-glow)" : undefined}
                    className="transition-all duration-300"
                  />
                  <text
                    x={n.x}
                    y={n.y - 6}
                    textAnchor="middle"
                    fill="var(--tg-fg)"
                    fontSize="13"
                    fontWeight={500}
                  >
                    {n.title}
                  </text>
                  <text
                    x={n.x}
                    y={n.y + 14}
                    textAnchor="middle"
                    fill="var(--tg-fg-dim)"
                    fontSize="11"
                    letterSpacing="0.02em"
                  >
                    {n.subtitle}
                  </text>
                </g>
              );
            })}
          </svg>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-[900px] grid-cols-1 gap-6 text-left sm:grid-cols-2">
          {arcs.map((a, i) => {
            const from = nodes.find((n) => n.id === a.from)!;
            const highlighted = isArcActive(a);
            return (
              <Reveal key={a.label} delay={300 + i * 100}>
                <p
                  onMouseEnter={() => setActive(a.from)}
                  onMouseLeave={() => setActive(null)}
                  className={`m-0 text-pretty text-[13px] leading-[1.7] transition-opacity duration-300 ${
                    highlighted ? "text-[var(--tg-fg-dim)]" : "opacity-40 text-[var(--tg-fg-dim)]"
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
    </section>
  );
}
