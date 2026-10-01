// The economic loop, kept deliberately simple: the steps light up in sequence and the
// dashed connectors (including the return line) flow in the direction of travel.
export function MachinaLoop({ steps }: { steps: string[] }) {
  const last = steps.length - 1;

  return (
    <div>
      <div className="grid grid-cols-1 gap-y-0 md:grid-cols-4 md:gap-x-12">
        {steps.map((step, i) => (
          <div key={step} className="relative">
            {i > 0 ? (
              <div className="relative mx-auto h-9 w-px md:hidden">
                <span aria-hidden className="tg-flow-y absolute inset-0" />
                <span
                  aria-hidden
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 border-x-[4px] border-t-[7px] border-x-transparent border-t-[var(--tg-fg-dim)]"
                />
              </div>
            ) : null}
            <div
              style={{ animationDelay: `${i * 500}ms` }}
              className="tg-pulse flex min-h-[84px] items-center justify-center rounded-sm border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] px-4 py-3 text-center text-[13px] leading-[1.5] text-[var(--tg-fg)]"
            >
              {step}
            </div>
            {i < last ? (
              <span
                aria-hidden
                className="absolute left-full top-1/2 ml-1 hidden h-px w-10 -translate-y-1/2 md:block"
              >
                <span className="tg-flow-x absolute inset-0" />
                <span className="absolute right-0 top-1/2 -translate-y-1/2 border-y-[4px] border-l-[7px] border-y-transparent border-l-[var(--tg-fg-dim)]" />
              </span>
            ) : null}
          </div>
        ))}
      </div>

      {/* Return line: from the last step back to the first, flowing right to left */}
      <div className="relative mx-[calc((100%-9rem)/8)] mt-3 hidden h-9 md:block">
        <svg
          aria-hidden
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <path
            d="M100,0 L100,100 L0,100 L0,0"
            stroke="var(--tg-fg-dim)"
            strokeWidth={1.2}
            strokeDasharray="6 6"
            vectorEffect="non-scaling-stroke"
            className="tg-flow-path"
          />
        </svg>
        <span
          aria-hidden
          className="absolute -left-[4.5px] -top-[1px] border-x-[4px] border-b-[7px] border-x-transparent border-b-[var(--tg-fg-dim)]"
        />
        <span className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 bg-[var(--tg-bg)] px-3 text-[11px] uppercase tracking-[0.2em] text-[var(--tg-fg-dim)]">
          repeat
        </span>
      </div>
      <p className="m-0 mt-3 text-center text-[11px] uppercase tracking-[0.2em] text-[var(--tg-fg-dim)] md:hidden">
        ↻ repeat
      </p>
    </div>
  );
}
