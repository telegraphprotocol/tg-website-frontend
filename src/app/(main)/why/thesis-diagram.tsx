import { ArrowRight } from "lucide-react";

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

const LINE = "bg-[var(--tg-fg-dim)]";
const HEAD_DOWN =
  "absolute border-x-[4px] border-t-[6px] border-x-transparent border-t-[var(--tg-fg-dim)]";
const HEAD_UP =
  "absolute border-x-[4px] border-b-[6px] border-x-transparent border-b-[var(--tg-fg-dim)]";

// On wide containers the grid has 20 columns: top-row cells span 5, bottom-row cells span 4,
// so the connectors below can be positioned by percentage from the cell centres.
function Cell({ step, arrow }: { step: (typeof STEPS)[number]; arrow: boolean }) {
  const span = step.n <= "04" ? "@min-[760px]:col-span-5" : "@min-[760px]:col-span-4";
  return (
    <div className={`relative flex @min-[760px]:px-3 ${span}`}>
      <div
        className={`flex-1 rounded-sm border p-4 font-mono ${
          step.key
            ? "border-[var(--tg-fg)] bg-[var(--tg-fg)] text-[var(--tg-bg)]"
            : "border-[var(--tg-line)] bg-[var(--tg-bg)] text-[var(--tg-fg)]"
        }`}
      >
        <div className={`text-[11px] ${step.key ? "opacity-70" : "text-[var(--tg-fg-faint)]"}`}>
          {step.n}
        </div>
        <div className="mt-1.5 text-[15px] font-bold leading-[1.25]">{step.title}</div>
        <div
          className={`mt-1.5 text-[11.5px] leading-[1.5] ${step.key ? "opacity-80" : "text-[var(--tg-fg-dim)]"}`}
        >
          {step.body}
        </div>
      </div>
      {arrow ? (
        <span
          aria-hidden
          className={`absolute right-0 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-[var(--tg-line-strong)] bg-[var(--tg-surface)] text-[var(--tg-fg)] @min-[760px]:flex`}
        >
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.25} />
        </span>
      ) : null}
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

      <div className="mt-6 grid grid-cols-1 gap-3 @min-[480px]:grid-cols-2 @min-[760px]:-mx-3 @min-[760px]:grid-cols-[repeat(20,minmax(0,1fr))] @min-[760px]:gap-0">
        {STEPS.slice(0, 4).map((s, i) => (
          <Cell key={s.n} step={s} arrow={i < 3} />
        ))}

        {/* Step 04 -> 05: down, back across, down into 05 */}
        <div aria-hidden className="relative hidden h-10 col-span-20 @min-[760px]:block">
          <span className={`absolute right-[12.5%] top-0 h-1/2 w-px ${LINE}`} />
          <span className={`absolute left-[10%] right-[12.5%] top-1/2 h-px ${LINE}`} />
          <span className={`absolute left-[10%] top-1/2 bottom-[6px] w-px ${LINE}`} />
          <span className={`${HEAD_DOWN} bottom-0 left-[10%] -translate-x-1/2`} />
        </div>

        {STEPS.slice(4).map((s, i) => (
          <Cell key={s.n} step={s} arrow={i < 4} />
        ))}

        {/* Loop: 09 back to 05 */}
        <div aria-hidden className="relative hidden h-14 col-span-20 @min-[760px]:block">
          <span className={`absolute right-[10%] top-0 h-1/2 w-px ${LINE}`} />
          <span className={`absolute left-[10%] right-[10%] top-1/2 h-px ${LINE}`} />
          <span className={`absolute left-[10%] top-[6px] h-[calc(50%-6px)] w-px ${LINE}`} />
          <span className={`${HEAD_UP} left-[10%] top-0 -translate-x-1/2`} />
        </div>
      </div>

      <p className="m-0 mt-5 text-center text-[12px] leading-[1.6] text-[var(--tg-fg-dim)] @min-[760px]:-mt-[38px] @min-[760px]:relative @min-[760px]:mx-auto @min-[760px]:w-fit @min-[760px]:bg-[var(--tg-surface)] @min-[760px]:px-3">
        better intelligence → more demand → stronger supply + better ways to
        judge it → better intelligence
      </p>

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
