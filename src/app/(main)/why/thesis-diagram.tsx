import { ChevronRight } from "lucide-react";

const STEPS = [
  { n: "01", title: "More intelligence.", body: "Models, tools and services keep multiplying." },
  { n: "02", title: "Too many choices.", body: "No one can compare everything by hand." },
  { n: "03", title: "Anyone can join and compete.", body: "That is how supply can scale." },
  { n: "04", title: "Now you can't trust everyone.", body: "Open participation creates a quality problem." },
  { n: "05", title: "So you rank it.", body: "But \"best\" depends on the job." },
  { n: "06", title: "Now the test becomes powerful.", body: "If the test decides who wins, people optimize for the test." },
  { n: "07", title: "So the test must compete too.", body: "Better ways of judging quality must be able to replace weaker ones.", key: true },
  { n: "08", title: "The result has to be checked.", body: "Before real demand follows a ranking, the process has to be verified." },
  { n: "09", title: "Real demand closes the loop.", body: "Better-performing intelligence gets more opportunity." },
];

function Card({ step }: { step: (typeof STEPS)[number] }) {
  return (
    <div
      className={`flex-1 rounded-sm border p-4 font-mono ${
        step.key
          ? "border-[var(--tg-fg)] bg-[var(--tg-fg)] text-[var(--tg-bg)]"
          : "border-[var(--tg-line)] bg-[var(--tg-bg)] text-[var(--tg-fg)]"
      }`}
    >
      <div className={`text-[12px] ${step.key ? "opacity-70" : "text-[var(--tg-fg-faint)]"}`}>
        {step.n}
      </div>
      <div className="mt-2 text-[16px] font-bold leading-[1.25]">{step.title}</div>
      <div
        className={`mt-2 text-[12px] leading-[1.5] ${step.key ? "opacity-80" : "text-[var(--tg-fg-dim)]"}`}
      >
        {step.body}
      </div>
    </div>
  );
}

function Row({ steps }: { steps: typeof STEPS }) {
  return (
    <div className="grid grid-cols-1 gap-3 @min-[480px]:grid-cols-2 @min-[760px]:flex @min-[760px]:items-stretch @min-[760px]:gap-0">
      {steps.map((s, i) => (
        <div key={s.n} className="contents">
          {i > 0 ? (
            <span
              aria-hidden
              className="hidden items-center px-1 text-[var(--tg-fg-faint)] @min-[760px]:flex"
            >
              <ChevronRight className="h-4 w-4" />
            </span>
          ) : null}
          <Card step={s} />
        </div>
      ))}
    </div>
  );
}

/** Recreation of the causal diagram from the original essay. */
export function ThesisDiagram() {
  return (
    <figure className="@container m-0 my-4 rounded-sm border border-[var(--tg-line)] bg-[var(--tg-surface)] p-5 font-mono @min-[760px]:p-8">
      <figcaption>
        <div className="text-[22px] font-bold leading-[1.15] text-[var(--tg-fg)] @min-[760px]:text-[30px]">
          Too much intelligence creates a new problem.
        </div>
        <p className="m-0 mt-2 text-[12px] leading-[1.6] text-[var(--tg-fg-dim)] @min-[760px]:text-[13px]">
          As models, tools and services multiply, the hard part stops being
          access. It becomes knowing which one is actually best for each job.
        </p>
      </figcaption>

      <div className="mt-6 flex flex-col gap-3 @min-[760px]:gap-6">
        <Row steps={STEPS.slice(0, 4)} />
        <Row steps={STEPS.slice(4)} />
      </div>

      <div className="mt-5 text-center text-[12px] leading-[1.6] text-[var(--tg-fg-dim)] @min-[760px]:relative @min-[760px]:mx-6 @min-[760px]:h-7 @min-[760px]:rounded-b-xl @min-[760px]:border-x @min-[760px]:border-b @min-[760px]:border-[var(--tg-line-strong)]">
        <span className="@min-[760px]:absolute @min-[760px]:left-1/2 @min-[760px]:top-[calc(100%-10px)] @min-[760px]:-translate-x-1/2 @min-[760px]:whitespace-nowrap @min-[760px]:bg-[var(--tg-surface)] @min-[760px]:px-3">
          better intelligence → more demand → stronger supply + better ways to
          judge it → better intelligence
        </span>
      </div>

      <div className="mt-8 rounded-sm border border-[var(--tg-line)] bg-[var(--tg-bg)] px-4 py-6 text-center">
        <div className="text-[clamp(28px,6cqw,48px)] font-bold leading-none tracking-wide text-[var(--tg-fg)]">
          TELEGRAPH
        </div>
        <p className="m-0 mt-3 text-[14px] leading-[1.5] text-[var(--tg-fg)] @min-[760px]:text-[17px]">
          The market that keeps finding the best available intelligence for each job.
        </p>
        <p className="m-0 mt-1 text-[12px] leading-[1.5] text-[var(--tg-fg-faint)]">
          An app asks for a job. The market keeps deciding what should serve it.
        </p>
        <div className="mx-auto mt-3 w-fit border-t border-[var(--tg-line-strong)] pt-2 text-[12px] uppercase tracking-[0.12em] text-[var(--tg-fg)]">
          The ranking is the market.
        </div>
      </div>
    </figure>
  );
}
