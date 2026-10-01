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

function Step({
  children,
  process,
  final,
  muted,
}: {
  children: string;
  process?: boolean;
  final?: boolean;
  muted?: boolean;
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
      className={`flex h-14 items-center justify-center rounded-sm border px-4 text-center text-[13px] ${
        process ? "font-mono uppercase tracking-[0.12em] text-[12px]" : ""
      } ${tone}`}
    >
      {children}
    </div>
  );
}

function Column({
  title,
  steps,
  muted,
}: {
  title: string;
  steps: string[];
  muted?: boolean;
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
          {i > 0 ? <ArrowDownLine /> : null}
          <Step
            process={PROCESS_ROWS.includes(i)}
            final={!muted && i === steps.length - 1}
            muted={muted}
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
          <Column title="Raw intelligence" steps={INTELLIGENCE} />
        </div>
      </Reveal>
    </Section>
  );
}
