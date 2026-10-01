import type { Demo } from "./intent-demos";

const ROW_H = 60;
// Provider i sits at row SHUFFLE[i] while the request resolves, so the reorder is visible
const SHUFFLE = [2, 0, 1];

// Column headers + provider rows for one Intent. Rows are positioned by rank so they visibly
// shuffle while a request resolves, then settle into the ranking with #1 selected.
export function RankedSupplyRows({
  demo,
  resolving,
  answered,
}: {
  demo: Demo;
  resolving: boolean;
  answered: boolean;
}) {
  return (
    <>
      <div className="grid grid-cols-[2rem_1fr_5.5rem_4rem] items-center gap-x-3 px-3 pb-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--tg-fg-faint)]">
        <span>Rank</span>
        <span>Provider</span>
        <span>Performance</span>
        <span className="text-right">Price</span>
      </div>

      <div
        key={demo.id}
        className="relative"
        style={{ height: demo.providers.length * ROW_H }}
      >
        {demo.providers.map((p, i) => {
          const selected = answered && i === 0;
          const pos = resolving ? SHUFFLE[i] : i;
          return (
            <div
              key={p.name}
              style={{
                top: pos * ROW_H,
                height: ROW_H,
                animationDelay: `${i * 80}ms`,
              }}
              className={`tg-row-in absolute inset-x-0 grid grid-cols-[2rem_1fr_5.5rem_4rem] items-center gap-x-3 border-l-2 px-3 text-[14px] transition-[top,background-color] duration-500 ease-in-out ${
                selected
                  ? "border-l-[var(--tg-fg)] bg-[var(--tg-surface-hi)]"
                  : "border-l-transparent"
              } ${pos > 0 ? "border-t border-t-[var(--tg-line-soft)]" : ""}`}
            >
              <span className="font-mono text-[var(--tg-fg-dim)]">
                {resolving ? "–" : `#${i + 1}`}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[var(--tg-fg)]">
                  {p.name}
                </span>
                {selected ? (
                  <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--tg-fg-dim)]">
                    Served
                  </span>
                ) : null}
              </span>
              <span className="flex items-center gap-2">
                <span className="font-mono text-[13px] tabular-nums text-[var(--tg-fg)]">
                  {p.grade.toFixed(2)}
                </span>
                <span
                  aria-hidden
                  className="h-1 w-8 overflow-hidden rounded-full bg-[var(--tg-line)]"
                >
                  <span
                    className="block h-full rounded-full bg-[var(--tg-fg)]"
                    style={{ width: `${p.grade * 100}%` }}
                  />
                </span>
              </span>
              <span className="text-right font-mono text-[13px] text-[var(--tg-fg-dim)]">
                {p.price}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
