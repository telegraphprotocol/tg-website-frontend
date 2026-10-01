import { Boxes, Hammer, Plus, Server, type LucideIcon } from "lucide-react";
import { Reveal } from "../fx/reveal";
import { CtaButton } from "../cta-button";
import { Section, SectionHeading } from "./shared";

const NAV: { label: string; hint: string; icon: LucideIcon }[] = [
  { label: "Build", hint: "Ship on Telegraph", icon: Hammer },
  { label: "Operate", hint: "Run validators", icon: Server },
  { label: "Supply", hint: "Compete as a miner", icon: Boxes },
];

const CERTIFICATE: { label: string; value: string }[] = [
  { label: "Produced by", value: "Forecast model" },
  { label: "Rank for intent", value: "#1 · weather-forecast" },
  { label: "Confidence", value: "0.91" },
  { label: "Verified by", value: "43 of 64 validators" },
  { label: "Price", value: "from $0.01" },
  { label: "Receipt", value: "0x7f3a…c91e" },
];

const BOARD = [
  { intent: "weather-forecast", meta: "Forecast model · from $0.01", grade: "0.93" },
  { intent: "fake-profile-detection", meta: "Identity API · from $0.01", grade: "0.94" },
  { intent: "price-direction", meta: "Quant model · from $0.01", grade: "0.90" },
  { intent: "fraud-check", meta: "Risk model · from $0.01", grade: "0.92" },
];

function Grade({ value }: { value: string }) {
  return (
    <span className="rounded-sm border border-[var(--tg-line-strong)] bg-[var(--tg-surface-hi)] px-2 py-1 font-mono text-[13px] tabular-nums text-[var(--tg-fg)]">
      {value}
    </span>
  );
}

function Label({ children }: { children: string }) {
  return (
    <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--tg-fg-faint)]">
      {children}
    </span>
  );
}

export function Alexandria() {
  return (
    <Section>
      <SectionHeading
        lede={
          <>
            Alexandria is the interface. Telegraph is the ranking network
            underneath. Closed products can only serve what their company
            built.{" "}
            <strong className="font-medium text-[var(--tg-fg)]">
              Alexandria routes to whatever is currently best for the intent -
              ChatGPT, Claude and every other model are just miners competing
              for it.
            </strong>
          </>
        }
      >
        Alexandria.
      </SectionHeading>

      <Reveal delay={150} className="mt-14">
        <div
          aria-hidden
          className="overflow-hidden rounded-md border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] shadow-[0_20px_60px_rgba(0,0,0,0.14)]"
        >
          {/* Window chrome */}
          <div className="flex items-center gap-3 border-b border-[var(--tg-line)] bg-[var(--tg-surface-strong)] px-4 py-2.5">
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--tg-line-strong)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--tg-line-strong)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--tg-line-strong)]" />
            </span>
            <span className="mx-auto rounded-sm border border-[var(--tg-line)] bg-[var(--tg-bg)] px-4 py-1 font-mono text-[11px] text-[var(--tg-fg-faint)]">
              alexandria.telegraphprotocol.com
            </span>
            <span className="w-[42px]" />
          </div>

          <div className="flex">
          {/* Sidebar */}
          <aside className="hidden w-[240px] shrink-0 flex-col gap-7 border-r border-[var(--tg-line)] bg-[var(--tg-surface)] p-5 md:flex">
            <div className="flex items-center gap-2.5">
              <span className="text-[20px] text-[var(--tg-fg)]">Alexandria</span>
              <span className="rounded-sm border border-[var(--tg-line-strong)] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-[var(--tg-fg-dim)]">
                Beta
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-sm bg-[var(--tg-fg)] py-3 text-[14px] font-medium text-[var(--tg-bg)]">
              <Plus className="h-4 w-4" />
              New query
            </div>
            <nav className="flex flex-col gap-2">
              {NAV.map(({ label, hint, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-sm border border-[var(--tg-line)] bg-[var(--tg-bg)] px-3.5 py-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-[var(--tg-line-strong)] bg-[var(--tg-surface-hi)]">
                    <Icon className="h-4 w-4 text-[var(--tg-fg)]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[15px] font-medium text-[var(--tg-fg)]">
                      {label}
                    </span>
                    <span className="block truncate text-[11px] text-[var(--tg-fg-faint)]">
                      {hint}
                    </span>
                  </span>
                </div>
              ))}
            </nav>
            <div className="mt-auto">
              <Label>History</Label>
              <p className="m-0 mt-2 text-[13px] text-[var(--tg-fg-faint)]">
                No chats yet.
              </p>
            </div>
          </aside>

          {/* Main */}
          <div className="min-w-0 flex-1 p-5 md:p-8">
            <h3 className="m-0 text-[clamp(20px,2.4vw,30px)] font-normal leading-[1.2] text-[var(--tg-fg)]">
              What graded answers do you need today?
            </h3>

            <div className="mt-5 flex gap-3">
              <div className="flex h-11 min-w-0 flex-1 items-center rounded-sm border border-[var(--tg-line-strong)] bg-[var(--tg-surface)] px-4 text-[14px] text-[var(--tg-fg-faint)]">
                <span className="truncate">
                  Ask anything, from a fraud check to a wind forecast
                </span>
              </div>
              <div className="flex h-11 items-center rounded-sm bg-[var(--tg-fg)] px-5 text-[14px] font-medium text-[var(--tg-bg)]">
                Ask
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-[var(--tg-fg-dim)] bg-[var(--tg-surface-hi)] px-4 py-2 text-[13px] text-[var(--tg-fg)]">
                Auto routing
              </span>
              <span className="rounded-full border border-[var(--tg-line-strong)] px-4 py-2 text-[13px] text-[var(--tg-fg-dim)]">
                Agentic mode
              </span>
              <span className="font-mono text-[11px] text-[var(--tg-fg-faint)]">
                Pay per answer
              </span>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {/* Answer */}
              <div className="rounded-md border border-[var(--tg-line)] bg-[var(--tg-surface)] p-5">
                <Label>Your graded answer</Label>
                <p className="m-0 mt-4 text-[15px] text-[var(--tg-fg)]">
                  Wind at the harbour, next 6 hours?
                </p>
                <p className="m-0 mt-3 text-[13px] leading-[1.7] text-[var(--tg-fg-dim)]">
                  South-westerly 14-18 knots, gusting 24 by early evening,
                  easing overnight.
                </p>

                <div className="mt-5 rounded-md border border-[var(--tg-line-strong)] bg-[var(--tg-bg)]">
                  <div className="flex items-center justify-between px-4 py-3.5">
                    <span className="text-[16px] text-[var(--tg-fg)]">
                      Grading certificate
                    </span>
                    <Grade value="0.93" />
                  </div>
                  {CERTIFICATE.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-4 border-t border-[var(--tg-line-soft)] px-4 py-2.5 text-[13px]"
                    >
                      <span className="text-[var(--tg-fg-faint)]">
                        {row.label}
                      </span>
                      <span className="flex items-center gap-2.5 text-right font-mono text-[var(--tg-fg)]">
                        {row.label === "Verified by" ? (
                          <span className="h-1 w-16 overflow-hidden rounded-full bg-[var(--tg-line)]">
                            <span
                              className="block h-full rounded-full bg-[var(--tg-fg)]"
                              style={{ width: `${(43 / 64) * 100}%` }}
                            />
                          </span>
                        ) : null}
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live board */}
              <div className="rounded-md border border-[var(--tg-line)] bg-[var(--tg-surface)] p-5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  <Label>Live board (illustrative)</Label>
                </div>
                <div className="mt-4">
                  {BOARD.map((row) => (
                    <div
                      key={row.intent}
                      className="flex items-center justify-between gap-4 border-t border-[var(--tg-line-soft)] py-4"
                    >
                      <div className="min-w-0">
                        <p className="m-0 truncate font-mono text-[14px] text-[var(--tg-fg)]">
                          {row.intent}
                        </p>
                        <p className="m-0 mt-1 text-[12px] text-[var(--tg-fg-faint)]">
                          {row.meta}
                        </p>
                      </div>
                      <Grade value={row.grade} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={250} className="mt-10 text-center">
        <CtaButton
          href="https://alexandria.telegraphprotocol.com"
          target="_blank"
          className="h-10 border border-black/10 hover:!bg-neutral-300"
        >
          Try Alexandria
        </CtaButton>
      </Reveal>
    </Section>
  );
}
