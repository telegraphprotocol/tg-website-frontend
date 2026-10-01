import { Reveal } from "../fx/reveal";
import {
  ArrowDownLine,
  ArrowRightLine,
  Eyebrow,
  Section,
  SectionHeading,
} from "./shared";

const SUPPLY = [
  "Models",
  "APIs",
  "Datasets",
  "Algorithms",
  "Search systems",
  "Analytical services",
  "Tools",
];

const DEMAND = ["Humans", "Apps", "Agents", "Machines", "Robots"];

const INSIDE = ["Intents", "Provider ranking", "Routing", "Paid demand"];

const FLOW = [
  "evaluated per Intent",
  "comparable performance",
  "ranked supply",
  "paid demand flows by performance",
  "economic value created",
];

// Static class names so Tailwind can see them: step i sits on row 2i+1, arrows on the rows between
const ROW_START = [
  "lg:row-start-1",
  "lg:row-start-2",
  "lg:row-start-3",
  "lg:row-start-4",
  "lg:row-start-5",
  "lg:row-start-6",
  "lg:row-start-7",
  "lg:row-start-8",
  "lg:row-start-9",
];

function Side({
  title,
  items,
  startMs,
}: {
  title: string;
  items: string[];
  startMs: number;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="mb-1 text-center">
        <Eyebrow>{title}</Eyebrow>
      </div>
      {items.map((item, i) => (
        <div
          key={item}
          style={{ animationDelay: `${startMs + i * 100}ms` }}
          className="tg-pulse rounded-sm border border-[var(--tg-line)] bg-[var(--tg-surface)] px-3 py-2.5 text-center text-[13px] text-[var(--tg-fg)]"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

// Bracket segment joining a role box to the flow steps it applies to (desktop only).
// "first"/"last" rows carry a stub into a step; "mid" carries a stub into the role box.
function Bracket({
  side,
  kind,
  className,
}: {
  side: "left" | "right";
  kind: "first" | "mid" | "last";
  className: string;
}) {
  const line = "absolute bg-[var(--tg-line-strong)]";
  const vertical =
    kind === "first"
      ? "top-1/2 bottom-0"
      : kind === "last"
        ? "top-0 bottom-1/2"
        : "top-0 bottom-0";
  const towardFlow = side === "left" ? "left-1/2 right-0" : "left-0 right-1/2";
  const towardRole = side === "left" ? "left-0 right-1/2" : "left-1/2 right-0";
  return (
    <div aria-hidden className={`relative hidden lg:block ${className}`}>
      <span className={`${line} left-1/2 w-px ${vertical}`} />
      <span
        className={`${line} top-1/2 h-px ${kind === "mid" ? towardRole : towardFlow}`}
      />
    </div>
  );
}

function Role({
  title,
  sub,
  className,
  delayMs,
}: {
  title: string;
  sub: string;
  className: string;
  delayMs: number;
}) {
  return (
    <div
      style={{ animationDelay: `${delayMs}ms` }}
      className={`tg-pulse relative flex flex-col items-center justify-center rounded-sm border border-dashed border-[var(--tg-line-strong)] bg-[var(--tg-bg)] px-4 py-3 text-center ${className}`}
    >
      <span className="text-[14px] font-medium text-[var(--tg-fg)]">
        {title}
      </span>
      <span className="mt-1 text-[12px] text-[var(--tg-fg-dim)]">{sub}</span>
    </div>
  );
}

export function Network() {
  return (
    <Section>
      <SectionHeading
        lede="Suppliers compete for paid requests, evaluators set the grading standard, validators verify and finalize the resulting rankings, and anyone can propose a better standard."
      >
        Behind it, everyone plays their part.
      </SectionHeading>

      <Reveal delay={200} className="mt-14">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,3.2fr)_2.5rem_minmax(0,1fr)] lg:gap-x-4">
          <Side title="Supply" items={SUPPLY} startMs={0} />

          <div className="hidden lg:block">
            <ArrowRightLine pulseDelayMs={300} />
          </div>
          <div className="lg:hidden">
            <ArrowDownLine pulseDelayMs={300} />
          </div>

          {/* Telegraph */}
          <div className="rounded-md border border-[var(--tg-line-strong)] bg-[var(--tg-surface)] p-5 md:p-7">
            <div className="text-center">
              <Eyebrow>Telegraph</Eyebrow>
              <p className="m-0 mt-2 font-mono text-[11px] text-[var(--tg-fg-faint)]">
                {INSIDE.join(" · ")}
              </p>
            </div>

            <div className="mt-6 grid gap-y-0 lg:grid-cols-[minmax(0,1fr)_1.5rem_auto_1.5rem_minmax(0,1fr)]">
              {FLOW.map((step, i) => (
                <div key={step} className="contents">
                  {i > 0 ? (
                    <div
                      className={`lg:col-start-3 ${ROW_START[2 * i - 1]}`}
                    >
                      <ArrowDownLine pulseDelayMs={600 + i * 400 - 250} />
                    </div>
                  ) : null}
                  <div
                    style={{ animationDelay: `${600 + i * 400}ms` }}
                    className={`tg-pulse flex h-14 items-center justify-center rounded-sm border px-5 text-center text-[13px] lg:col-start-3 ${ROW_START[2 * i]} ${
                      i === FLOW.length - 1
                        ? "border-[var(--tg-fg)] bg-[var(--tg-fg)] text-[var(--tg-bg)]"
                        : "border-[var(--tg-line-strong)] bg-[var(--tg-bg)] text-[var(--tg-fg)]"
                    }`}
                  >
                    {step}
                  </div>
                </div>
              ))}

              <Role
                title="Evaluators"
                sub="measure performance, compete to improve it"
                delayMs={600}
                className="mt-6 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0 lg:self-stretch"
              />
              <Bracket side="left" kind="first" className="lg:col-start-2 lg:row-start-1" />
              <Bracket side="left" kind="mid" className="lg:col-start-2 lg:row-start-2" />
              <Bracket side="left" kind="last" className="lg:col-start-2 lg:row-start-3" />

              <Role
                title="Validators"
                sub="verify + finalize"
                delayMs={1800}
                className="mt-3 lg:col-start-5 lg:row-span-3 lg:row-start-5 lg:mt-0 lg:self-stretch"
              />
              <Bracket side="right" kind="first" className="lg:col-start-4 lg:row-start-5" />
              <Bracket side="right" kind="mid" className="lg:col-start-4 lg:row-start-6" />
              <Bracket side="right" kind="last" className="lg:col-start-4 lg:row-start-7" />
            </div>
          </div>

          <div className="hidden lg:block">
            <ArrowRightLine pulseDelayMs={2350} />
          </div>
          <div className="lg:hidden">
            <ArrowDownLine pulseDelayMs={2350} />
          </div>

          <Side title="Demand" items={DEMAND} startMs={2600} />
        </div>
      </Reveal>
    </Section>
  );
}
