import { Reveal } from "../fx/reveal";
import { Section, SectionHeading } from "./shared";

const CX = 400;
const CY = 300;
const RX = 330;
const RY = 230;
const LINE = "var(--tg-line-strong)";

const nodes = [
  { angle: -90, x: 400, y: 70, lines: ["People integrate", "supply"] },
  { angle: -30, x: 685.8, y: 185, lines: ["People build", "evaluations"] },
  { angle: 30, x: 685.8, y: 415, lines: ["Validators", "verify"] },
  {
    angle: 90,
    x: 400,
    y: 530,
    lines: ["Apps, agents and", "machines consume"],
  },
  {
    angle: 150,
    x: 114.2,
    y: 415,
    lines: ["Paid demand rewards", "the best supply"],
  },
  {
    angle: 210,
    x: 114.2,
    y: 185,
    lines: ["Better economics attract", "more supply and evaluation"],
  },
];

const arrows = [
  { x: 565.0, y: 100.8, angle: 21.9 },
  { x: 730.0, y: 300.0, angle: 90 },
  { x: 565.0, y: 499.2, angle: 158.1 },
  { x: 235.0, y: 499.2, angle: -158.1 },
  { x: 70.0, y: 300.0, angle: -90 },
  { x: 235.0, y: 100.8, angle: -21.9 },
];

const BOX_W = 230;
const BOX_H = 70;

export function RedesignFlywheel() {
  return (
    <Section>
      <SectionHeading
        lede="Paid demand rewards the best supply. Better economics attract more
supply and better evaluation. Then the loop repeats, and the network
grows toward global intelligence."
      >
        Intelligence that keeps evolving.
      </SectionHeading>

      <Reveal delay={150} className="mt-14">
        <svg
          viewBox="-15 0 830 600"
          className="mx-auto w-full max-w-[820px]"
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
            and repeat
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
              />
              {n.lines.map((line, j) => (
                <text
                  key={j}
                  x={n.x}
                  y={n.y - (n.lines.length - 1) * 9 + j * 18 + 5}
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
    </Section>
  );
}
