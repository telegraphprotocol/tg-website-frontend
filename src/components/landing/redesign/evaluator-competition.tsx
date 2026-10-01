import { Reveal } from "../fx/reveal";
import {
  ArrowDownLine,
  ArrowRightLine,
  Section,
  SectionHeading,
} from "./shared";

function Challenger({
  className,
  delayMs,
}: {
  className: string;
  delayMs: number;
}) {
  return (
    <div
      style={{ animationDelay: `${delayMs}ms` }}
      className={`tg-chase flex h-14 flex-col items-center justify-center rounded-sm border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] px-4 text-center text-[13px] text-[var(--tg-fg-dim)] ${className}`}
    >
      Challenger Evaluator
      <span className="relative mt-0.5 block h-4 w-full text-[11px] text-[var(--tg-fg-faint)]">
        <span className="tg-swap-a absolute inset-0">proposes a better method</span>
        <span className="tg-swap-b absolute inset-0 text-[var(--tg-fg)]">
          outperforms the standard
        </span>
      </span>
    </div>
  );
}

export function EvaluatorCompetition() {
  return (
    <Section>
      <SectionHeading
        lede="Providers compete on performance. Evaluators compete over how that performance should be measured. If someone builds a better evaluation method, it can replace the current standard."
      >
        Even the grading standard competes.
      </SectionHeading>

      <Reveal delay={150} className="mt-14">
        <div className="mx-auto grid max-w-[780px] gap-y-0 lg:grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,1fr)]">
          <Challenger className="lg:col-start-1 lg:row-start-1" delayMs={0} />
          <div className="lg:col-start-1 lg:row-start-2">
            <ArrowDownLine pulseDelayMs={250} chase />
          </div>

          <div
            style={{ animationDelay: "500ms" }}
            className="tg-chase flex h-14 flex-col items-center justify-center rounded-sm border border-[var(--tg-fg)] bg-[var(--tg-bg)] px-4 text-center text-[13px] font-medium text-[var(--tg-fg)] lg:col-start-1 lg:row-start-3"
          >
            Canonical Evaluator
            <span className="mt-0.5 text-[11px] font-normal text-[var(--tg-fg-faint)]">
              the current standard
            </span>
          </div>

          <div className="lg:col-start-1 lg:row-start-4">
            <ArrowDownLine className="rotate-180" pulseDelayMs={250} chase />
          </div>
          <Challenger className="lg:col-start-1 lg:row-start-5" delayMs={0} />

          <div className="hidden self-center lg:col-start-2 lg:row-start-3 lg:block">
            <ArrowRightLine pulseDelayMs={800} chase />
          </div>
          <div className="lg:hidden">
            <ArrowDownLine pulseDelayMs={800} chase />
          </div>

          <div className="flex h-14 items-center justify-center rounded-sm border border-[var(--tg-fg)] bg-[var(--tg-fg)] px-4 text-center text-[13px] text-[var(--tg-bg)] lg:col-start-3 lg:row-start-3">
            Provider evaluation / ranking
          </div>

          <div
            aria-hidden
            className="mx-auto hidden h-9 w-px bg-[var(--tg-line-strong)] lg:col-start-3 lg:row-start-4 lg:block"
          />
          <div
            style={{ animationDelay: "1100ms" }}
            className="tg-chase mt-3 flex h-14 flex-col items-center justify-center rounded-sm border border-dashed border-[var(--tg-line-strong)] bg-[var(--tg-bg)] px-4 text-center text-[13px] text-[var(--tg-fg)] lg:col-start-3 lg:row-start-5 lg:mt-0">
            Validators
            <span className="mt-0.5 text-[11px] text-[var(--tg-fg-dim)]">
              verify + finalize
            </span>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
