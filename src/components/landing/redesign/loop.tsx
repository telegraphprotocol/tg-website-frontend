import { Reveal } from "../fx/reveal";
import { Section, SectionHeading } from "./shared";

const CX = 400;
const CY = 230;
const HW = 380;
const HH = 150;
const LINE = "var(--tg-line-strong)";

const segTopLeft = `M${CX - HW},${CY} C${CX - HW},${CY - HH} ${CX - HW / 3},${CY - HH} ${CX},${CY}`;
const segTopRight = `M${CX},${CY} C${CX + HW / 3},${CY - HH} ${CX + HW},${CY - HH} ${CX + HW},${CY}`;
const segBottomRight = `M${CX + HW},${CY} C${CX + HW},${CY + HH} ${CX + HW / 3},${CY + HH} ${CX},${CY}`;
const segBottomLeft = `M${CX},${CY} C${CX - HW / 3},${CY + HH} ${CX - HW},${CY + HH} ${CX - HW},${CY}`;

function Arrow({ x, y, angle }: { x: number; y: number; angle: number }) {
  return (
    <polygon
      points="-7,-5 7,0 -7,5"
      transform={`translate(${x} ${y}) rotate(${angle})`}
      fill={LINE}
    />
  );
}

export function Loop() {
  return (
    <Section id="how">
      <SectionHeading
        lede="Requests flow from humans, apps and agents into the network. Miners
- people and machines - answer them. Telegraph sits in the middle: it
keeps a live ranking of supply, and routes the next request to
whoever is winning."
      >
        The free flow of intelligence.
      </SectionHeading>

      <Reveal delay={150} className="mt-14">
        <svg
          viewBox="0 0 800 460"
          className="mx-auto w-full max-w-[820px]"
          fill="none"
        >
          <text
            x="400"
            y="22"
            textAnchor="middle"
            className="fill-[var(--tg-fg)]"
            fontSize="13"
          >
            A request goes out.
          </text>
          <text
            x="400"
            y="450"
            textAnchor="middle"
            className="fill-[var(--tg-fg)]"
            fontSize="13"
          >
            A ranked answer comes back.
          </text>

          {/* infinity loop: the Telegraph box sits at the pinch, Demand and Supply in each lobe */}
          <path d={segTopLeft} stroke={LINE} strokeWidth={1.5} />
          <path d={segTopRight} stroke={LINE} strokeWidth={1.5} />
          <path d={segBottomRight} stroke={LINE} strokeWidth={1.5} />
          <path d={segBottomLeft} stroke={LINE} strokeWidth={1.5} />

          <Arrow x={251.9} y={132.1} angle={18.4} />
          <Arrow x={548.1} y={132.1} angle={-17} />
          <Arrow x={548.1} y={327.9} angle={-161.6} />
          <Arrow x={251.9} y={327.9} angle={163} />

          <rect
            x={105}
            y={185}
            width={190}
            height={90}
            rx={3}
            fill="var(--tg-bg)"
            stroke={LINE}
          />
          <text
            x={200}
            y={212}
            textAnchor="middle"
            className="fill-[var(--tg-fg)]"
            fontSize="14"
            fontWeight={500}
          >
            Demand
          </text>
          <text
            x={200}
            y={232}
            textAnchor="middle"
            className="fill-[var(--tg-fg-dim)]"
            fontSize="10"
          >
            A human asks in Alexandria.
          </text>
          <text
            x={200}
            y={248}
            textAnchor="middle"
            className="fill-[var(--tg-fg-dim)]"
            fontSize="10"
          >
            An app calls /ask.
          </text>
          <text
            x={200}
            y={264}
            textAnchor="middle"
            className="fill-[var(--tg-fg-dim)]"
            fontSize="10"
          >
            A machine pays over x402.
          </text>

          <rect
            x={505}
            y={185}
            width={190}
            height={90}
            rx={3}
            fill="var(--tg-bg)"
            stroke={LINE}
          />
          <text
            x={600}
            y={222}
            textAnchor="middle"
            className="fill-[var(--tg-fg)]"
            fontSize="14"
            fontWeight={500}
          >
            Supply
          </text>
          <text
            x={600}
            y={248}
            textAnchor="middle"
            className="fill-[var(--tg-fg-dim)]"
            fontSize="11"
          >
            Models, APIs, datasets.
          </text>

          <rect
            x={320}
            y={190}
            width={160}
            height={80}
            rx={3}
            fill="var(--tg-surface-strong)"
            stroke={LINE}
          />
          <text
            x={400}
            y={236}
            textAnchor="middle"
            className="fill-[var(--tg-fg)]"
            fontSize="14"
            fontWeight={500}
          >
            Telegraph
          </text>
        </svg>
      </Reveal>
    </Section>
  );
}
