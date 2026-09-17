import { Reveal } from "../fx/reveal";
import { Section, SectionHeading } from "./shared";

const LINE = "var(--tg-line-strong)";

const CX = 400;
const CY = 230;
const HW = 380;
const HH = 150;

const segTopLeft = `M${CX - HW},${CY} C${CX - HW},${CY - HH} ${CX - HW / 3},${CY - HH} ${CX},${CY}`;
const segTopRight = `M${CX},${CY} C${CX + HW / 3},${CY - HH} ${CX + HW},${CY - HH} ${CX + HW},${CY}`;
const segBottomRight = `M${CX + HW},${CY} C${CX + HW},${CY + HH} ${CX + HW / 3},${CY + HH} ${CX},${CY}`;
const segBottomLeft = `M${CX},${CY} C${CX - HW / 3},${CY + HH} ${CX - HW},${CY + HH} ${CX - HW},${CY}`;

const VCX = 250;
const VCY = 410;
const VH = 330;
const VW = 140;

const segA = `M${VCX},${VCY - VH} C${VCX - VW},${VCY - VH} ${VCX - VW},${VCY - VH / 3} ${VCX},${VCY}`;
const segB = `M${VCX},${VCY} C${VCX - VW},${VCY + VH / 3} ${VCX - VW},${VCY + VH} ${VCX},${VCY + VH}`;
const segC = `M${VCX},${VCY + VH} C${VCX + VW},${VCY + VH} ${VCX + VW},${VCY + VH / 3} ${VCX},${VCY}`;
const segD = `M${VCX},${VCY} C${VCX + VW},${VCY - VH / 3} ${VCX + VW},${VCY - VH} ${VCX},${VCY - VH}`;

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

      {/* Desktop: horizontal infinity loop */}
      <Reveal delay={150} className="mt-14 hidden md:block">
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

          <path d={segTopLeft} stroke={LINE} strokeWidth={1.5} />
          <path d={segTopRight} stroke={LINE} strokeWidth={1.5} />
          <path d={segBottomRight} stroke={LINE} strokeWidth={1.5} />
          <path d={segBottomLeft} stroke={LINE} strokeWidth={1.5} />

          <Arrow x={251.9} y={132.1} angle={18.4} />
          <Arrow x={548.1} y={132.1} angle={-17} />
          <Arrow x={548.1} y={327.9} angle={-161.6} />
          <Arrow x={251.9} y={327.9} angle={163} />

          <rect x={105} y={185} width={190} height={90} rx={3} fill="var(--tg-bg)" stroke={LINE} />
          <text x={200} y={212} textAnchor="middle" className="fill-[var(--tg-fg)]" fontSize="14" fontWeight={500}>
            Demand
          </text>
          <text x={200} y={232} textAnchor="middle" className="fill-[var(--tg-fg-dim)]" fontSize="10">
            A human asks in Alexandria.
          </text>
          <text x={200} y={248} textAnchor="middle" className="fill-[var(--tg-fg-dim)]" fontSize="10">
            An app calls /ask.
          </text>
          <text x={200} y={264} textAnchor="middle" className="fill-[var(--tg-fg-dim)]" fontSize="10">
            A machine pays over x402.
          </text>

          <rect x={505} y={185} width={190} height={90} rx={3} fill="var(--tg-bg)" stroke={LINE} />
          <text x={600} y={222} textAnchor="middle" className="fill-[var(--tg-fg)]" fontSize="14" fontWeight={500}>
            Supply
          </text>
          <text x={600} y={248} textAnchor="middle" className="fill-[var(--tg-fg-dim)]" fontSize="11">
            Models, APIs, datasets.
          </text>

          <rect x={320} y={190} width={160} height={80} rx={3} fill="var(--tg-surface-strong)" stroke={LINE} />
          <text x={400} y={236} textAnchor="middle" className="fill-[var(--tg-fg)]" fontSize="14" fontWeight={500}>
            Telegraph
          </text>
        </svg>
      </Reveal>

      {/* Mobile: vertical infinity loop */}
      <Reveal delay={150} className="mt-14 md:hidden">
        <svg
          viewBox="0 0 500 820"
          className="mx-auto w-full max-w-[440px]"
          fill="none"
        >
          <text x="20" y="405" textAnchor="start" className="fill-[var(--tg-fg)]" fontSize="11">
            request out
          </text>
          <text x="480" y="415" textAnchor="end" className="fill-[var(--tg-fg)]" fontSize="11">
            answer back
          </text>

          <path d={segA} stroke={LINE} strokeWidth={1.5} />
          <path d={segB} stroke={LINE} strokeWidth={1.5} />
          <path d={segC} stroke={LINE} strokeWidth={1.5} />
          <path d={segD} stroke={LINE} strokeWidth={1.5} />

          <Arrow x={158.6} y={281.4} angle={70.7} />
          <Arrow x={158.6} y={538.6} angle={108.7} />
          <Arrow x={341.4} y={538.6} angle={-109.3} />
          <Arrow x={341.4} y={281.4} angle={-71.3} />

          <rect x={140} y={40} width={220} height={90} rx={3} fill="var(--tg-bg)" stroke={LINE} />
          <text x={250} y={67} textAnchor="middle" className="fill-[var(--tg-fg)]" fontSize="14" fontWeight={500}>
            Demand
          </text>
          <text x={250} y={87} textAnchor="middle" className="fill-[var(--tg-fg-dim)]" fontSize="10">
            A human asks in Alexandria.
          </text>
          <text x={250} y={103} textAnchor="middle" className="fill-[var(--tg-fg-dim)]" fontSize="10">
            An app calls /ask.
          </text>
          <text x={250} y={119} textAnchor="middle" className="fill-[var(--tg-fg-dim)]" fontSize="10">
            A machine pays over x402.
          </text>

          <rect x={140} y={690} width={220} height={90} rx={3} fill="var(--tg-bg)" stroke={LINE} />
          <text x={250} y={727} textAnchor="middle" className="fill-[var(--tg-fg)]" fontSize="14" fontWeight={500}>
            Supply
          </text>
          <text x={250} y={753} textAnchor="middle" className="fill-[var(--tg-fg-dim)]" fontSize="11">
            Models, APIs, datasets.
          </text>

          <rect x={175} y={375} width={150} height={70} rx={3} fill="var(--tg-surface-strong)" stroke={LINE} />
          <text x={250} y={416} textAnchor="middle" className="fill-[var(--tg-fg)]" fontSize="14" fontWeight={500}>
            Telegraph
          </text>
        </svg>
      </Reveal>
    </Section>
  );
}
