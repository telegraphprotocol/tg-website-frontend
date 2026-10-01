import { Reveal } from "../fx/reveal";
import { ArrowDownLine, Section, SectionHeading } from "./shared";

const CX = 400;
const CY = 300;
const RX = 330;
const RY = 230;
const LINE = "var(--tg-line-strong)";

// One causal loop, clockwise from the top. Each step names the participant driving it.
const nodes = [
  { x: 400, y: 70, tag: "Providers", lines: ["More + better", "intelligence supply"] },
  { x: 685.8, y: 185, tag: "Evaluators", lines: ["Better evaluation", "measures performance"] },
  { x: 685.8, y: 415, tag: "Validators", lines: ["Supply becomes", "comparable + ranked"] },
  { x: 400, y: 530, tag: "Consumers", lines: ["Paid demand flows", "toward performance"] },
  { x: 114.2, y: 415, tag: "Economics", lines: ["Graded intelligence gains", "economic value"] },
  { x: 114.2, y: 185, tag: "Participation", lines: ["Economic opportunity attracts", "better supply + evaluation"] },
];

const arrows = [
  { x: 565.0, y: 100.8, angle: 21.9 },
  { x: 730.0, y: 300.0, angle: 90 },
  { x: 565.0, y: 499.2, angle: 158.1 },
  { x: 235.0, y: 499.2, angle: -158.1 },
  { x: 70.0, y: 300.0, angle: -90 },
  { x: 235.0, y: 100.8, angle: -21.9 },
];

const BOX_W = 270;
const BOX_H = 84;

export function RedesignFlywheel() {
  return (
    <Section>
      <SectionHeading
        lede="Providers compete to improve the intelligence available. Evaluators compete to improve how it is measured. Validators verify and finalize the network state. Consumers create paid demand, demand rewards performance, and the opportunity attracts better participation."
      >
        Ranked by performance. Driven by demand.
      </SectionHeading>

      {/* Desktop: one loop with Telegraph at the center */}
      <Reveal delay={150} className="mt-14 hidden md:block">
        <svg
          viewBox="-40 0 880 600"
          className="mx-auto w-full max-w-[880px]"
          fill="none"
        >
          <ellipse cx={CX} cy={CY} rx={RX} ry={RY} stroke={LINE} strokeWidth={1.2} />

          {arrows.map((a, i) => (
            <polygon
              key={i}
              points="-6,-4.5 6,0 -6,4.5"
              transform={`translate(${a.x} ${a.y}) rotate(${a.angle})`}
              fill={LINE}
            />
          ))}

          <rect
            x={CX - 90}
            y={CY - 40}
            width={180}
            height={80}
            rx={3}
            fill="var(--tg-surface-strong)"
            stroke={LINE}
          />
          <text
            x={CX}
            y={CY - 6}
            textAnchor="middle"
            className="fill-[var(--tg-fg)]"
            fontSize="15"
            fontWeight={600}
          >
            Telegraph
          </text>
          <text
            x={CX}
            y={CY + 18}
            textAnchor="middle"
            className="fill-[var(--tg-fg-dim)]"
            fontSize="12"
          >
            repeat
          </text>

          {nodes.map((n, i) => (
            <g key={i}>
              <rect
                x={n.x - BOX_W / 2}
                y={n.y - BOX_H / 2}
                width={BOX_W}
                height={BOX_H}
                rx={3}
                fill="var(--tg-surface)"
                stroke={LINE}
                className="tg-pulse-stroke"
                style={{ animationDelay: `${i * 500}ms` }}
              />
              <text
                x={n.x}
                y={n.y - 18}
                textAnchor="middle"
                className="fill-[var(--tg-fg-faint)]"
                fontSize="10"
                letterSpacing="2"
              >
                {n.tag.toUpperCase()}
              </text>
              {n.lines.map((line, j) => (
                <text
                  key={j}
                  x={n.x}
                  y={n.y + 6 + j * 18}
                  textAnchor="middle"
                  className="fill-[var(--tg-fg)]"
                  fontSize="13"
                >
                  {line}
                </text>
              ))}
            </g>
          ))}
        </svg>
      </Reveal>

      {/* Mobile: the same loop as a vertical sequence */}
      <Reveal delay={150} className="mt-14 md:hidden">
        <div className="mx-auto max-w-[360px]">
          <div className="mb-2 text-center text-[11px] uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
            Telegraph
          </div>
          {nodes.map((n, i) => (
            <div key={n.tag}>
              {i > 0 ? <ArrowDownLine /> : null}
              <div
                style={{ animationDelay: `${i * 500}ms` }}
                className="tg-pulse rounded-sm border border-[var(--tg-line-strong)] bg-[var(--tg-surface)] px-4 py-3 text-center"
              >
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
                  {n.tag}
                </span>
                <span className="mt-1 block text-[13px] text-[var(--tg-fg)]">
                  {n.lines.join(" ")}
                </span>
              </div>
            </div>
          ))}
          <div className="mt-3 text-center text-[11px] uppercase tracking-[0.2em] text-[var(--tg-fg-dim)]">
            ↻ repeat
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
