import { ReactNode } from "react";
import { Reveal } from "../fx/reveal";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`border-b border-[var(--tg-line)] px-4 py-20 md:px-8 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-[1180px]">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="block text-[11px] font-medium uppercase tracking-[0.32em] text-[var(--tg-fg-faint)]">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  children,
  lede,
  align = "left",
  wide = false,
}: {
  eyebrow?: string;
  children: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  wide?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow ? (
        <Reveal className="mb-4">
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      ) : null}
      <Reveal>
        <h2 className={`m-0 ${wide ? "max-w-[900px]" : "max-w-[720px]"} text-balance text-[clamp(26px,3.4vw,44px)] font-normal leading-[1.15] tracking-[0.005em] text-[var(--tg-fg)]`}>
          {children}
        </h2>
      </Reveal>
      {lede ? (
        <Reveal delay={150} className={align === "center" ? "mx-auto" : ""}>
          <p className="m-0 mt-5 max-w-[780px] text-pretty text-[14px] leading-[1.85] text-[var(--tg-fg-dim)]">
            {lede}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function Box({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-sm border border-[var(--tg-line)] bg-[var(--tg-surface)] p-6 ${className}`}
    >
      {children}
    </div>
  );
}

// pulseDelayMs: when set, the line lights up in the section's looping activation sequence (see .tg-line-pulse)
export function ArrowRightLine({
  className = "",
  pulseDelayMs,
  chase,
}: {
  className?: string;
  pulseDelayMs?: number;
  // chase: use the quick continuous 2.5s cycle instead of the shared 6s one
  chase?: boolean;
}) {
  return (
    <div
      style={pulseDelayMs === undefined ? undefined : { animationDelay: `${pulseDelayMs}ms` }}
      className={`relative h-px w-full bg-[var(--tg-line-strong)] ${
        pulseDelayMs === undefined ? "" : chase ? "tg-line-chase" : "tg-line-pulse"
      } ${className}`}
    >
      <span
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 border-y-[4px] border-l-[7px] border-y-transparent border-l-[var(--tg-line-strong)]"
      />
    </div>
  );
}

export function ArrowDownLine({
  className = "",
  pulseDelayMs,
  chase,
}: {
  className?: string;
  pulseDelayMs?: number;
  chase?: boolean;
}) {
  return (
    <div
      style={pulseDelayMs === undefined ? undefined : { animationDelay: `${pulseDelayMs}ms` }}
      className={`relative mx-auto h-9 w-px bg-[var(--tg-line-strong)] ${
        pulseDelayMs === undefined ? "" : chase ? "tg-line-chase" : "tg-line-pulse"
      } ${className}`}
    >
      <span
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 border-x-[4px] border-t-[7px] border-x-transparent border-t-[var(--tg-line-strong)]"
      />
    </div>
  );
}
