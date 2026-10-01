import { Reveal } from "../fx/reveal";
import { ArrowDownLine, Section, SectionHeading } from "./shared";

const DIAMONDS = [
  "different quality",
  "grading",
  "comparable value",
  "priced + traded",
];

const INTELLIGENCE = [
  "models / APIs / datasets / tools",
  "continuous evaluation",
  "comparable performance",
  "ranked + routed demand",
  "graded intelligence commodity",
];

// Rows that are a process (grading / evaluation) rather than a state
const PROCESS_ROWS = [1];

// Dashed connector whose dashes flow downward to the next step (animated column only)
function FlowDown() {
  return (
    <div className="relative mx-auto h-9 w-px">
      <span aria-hidden className="tg-flow-y absolute inset-0" />
      <span
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 border-x-[4px] border-t-[7px] border-x-transparent border-t-[var(--tg-fg-dim)]"
      />
    </div>
  );
}

function Step({
  children,
  process,
  final,
  muted,
  delayMs,
  animated,
}: {
  children: string;
  process?: boolean;
  final?: boolean;
  muted?: boolean;
  delayMs: number;
  animated?: boolean;
}) {
  const tone = final
    ? "border-[var(--tg-fg)] bg-[var(--tg-fg)] text-[var(--tg-bg)]"
    : process
      ? "border-[var(--tg-line-strong)] bg-[var(--tg-surface-hi)] text-[var(--tg-fg)]"
      : `border-[var(--tg-line)] bg-[var(--tg-surface)] ${
          muted ? "text-[var(--tg-fg-dim)]" : "text-[var(--tg-fg)]"
        }`;
  return (
    <div
      style={animated ? { animationDelay: `${delayMs}ms` } : undefined}
      className={`${animated && !final ? "tg-chase" : ""} flex h-14 items-center justify-center rounded-sm border px-4 text-center text-[13px] ${
        process ? "font-mono uppercase tracking-[0.12em] text-[12px]" : ""
      } ${tone}`}
    >
      {children}
    </div>
  );
}

// Only the Raw intelligence column moves, so it is the one the eye follows;
// the rough-diamond analogy beside it stays still.
function Column({
  title,
  steps,
  muted,
  animated,
}: {
  title: string;
  steps: string[];
  muted?: boolean;
  animated?: boolean;
}) {
  return (
    <div className="mx-auto w-full max-w-[340px]">
      <div className="mb-6 border-b border-[var(--tg-line-strong)] pb-4 text-center">
        <h3
          className={`m-0 text-[17px] font-medium uppercase tracking-[0.2em] ${
            muted ? "text-[var(--tg-fg-dim)]" : "text-[var(--tg-fg)]"
          }`}
        >
          {title}
        </h3>
      </div>
      {steps.map((step, i) => (
        <div key={step}>
          {i > 0 ? animated ? <FlowDown /> : <ArrowDownLine /> : null}
          <Step
            process={PROCESS_ROWS.includes(i)}
            final={!muted && i === steps.length - 1}
            muted={muted}
            delayMs={i * 500}
            animated={animated}
          >
            {step}
          </Step>
        </div>
      ))}
    </div>
  );
}

export function Rough() {
  return (
    <Section>
      <SectionHeading>Intelligence is still rough.</SectionHeading>

      <Reveal delay={150}>
        <div className="mt-5 flex max-w-[780px] flex-col gap-4 text-pretty text-[14px] leading-[1.85] text-[var(--tg-fg-dim)]">
          <p className="m-0">
            A rough diamond is hard to value until it is graded. Intelligence
            has the same problem. Thousands of models, APIs, datasets and tools
            can serve the same job, but their performance can differ enormously.
          </p>
          <p className="m-0">
            Telegraph continuously evaluates competing providers for each
            Intent, making heterogeneous intelligence comparable and rankable by
            performance. Paid demand can then flow through those rankings,
            turning intelligence from scattered supply into a graded economic
            commodity.
          </p>
          <p className="m-0">
            The better the supply performs, the more economic opportunity it
            can earn. And because Evaluators themselves compete to improve how
            performance is measured, both the intelligence and the market around
            it can keep improving.
          </p>
        </div>
      </Reveal>

      <Reveal delay={250} className="mt-14">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8">
          <Column title="Rough diamonds" steps={DIAMONDS} muted />
          <Column title="Raw intelligence" steps={INTELLIGENCE} animated />
        </div>
      </Reveal>
    </Section>
  );
}
