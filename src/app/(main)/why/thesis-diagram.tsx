const CELL =
  "flex h-12 items-center justify-center rounded-sm border border-[var(--tg-line)] bg-[var(--tg-surface)] px-3 text-center text-[12px] text-[var(--tg-fg-dim)]";
const LABEL =
  "text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--tg-fg)]";

/** The central argument: intelligence competes, and the way it is measured competes too. */
export function ThesisDiagram() {
  return (
    <figure className="m-0 my-4 rounded-sm border border-[var(--tg-line)] p-5 md:p-6">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <span className={LABEL}>Intelligence competes</span>
          <div className={CELL}>Provider A</div>
          <div className={CELL}>Provider B</div>
          <div className={CELL}>Provider C</div>
        </div>
        <div className="flex flex-col gap-2">
          <span className={LABEL}>Measurement competes</span>
          <div className={CELL}>Evaluator X</div>
          <div className={CELL}>Evaluator Y</div>
          <div className={CELL}>Evaluator Z</div>
        </div>
      </div>
      <div aria-hidden className="mx-auto h-6 w-px bg-[var(--tg-line-strong)]" />
      <div className="rounded-sm border border-[var(--tg-fg)] bg-[var(--tg-fg)] px-4 py-3 text-center text-[13px] text-[var(--tg-bg)]">
        Verified ranking → real demand follows
      </div>
      <figcaption className="mt-4 text-center text-[12px] leading-[1.6] text-[var(--tg-fg-faint)]">
        Intelligence competes. The way intelligence is measured must compete too.
      </figcaption>
    </figure>
  );
}
