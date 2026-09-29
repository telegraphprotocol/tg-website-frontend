import type { Metadata } from "next";
import type { CSSProperties } from "react";
import {
  ArrowUpRight,
  Cpu,
  FileText,
  ListOrdered,
  MessageCircle,
  Plug,
  Route,
  Scale,
  Server,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow, Section, SectionHeading } from "@/components/landing/redesign/shared";
import { HeroViz } from "./hero-viz";
import { THESIS_PDF, WhitepaperButton, WhitepaperCard } from "./whitepaper-link";
import "./whitepaper.css";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://telegraphprotocol.com";

const description =
  "Read the Telegraph V2 thesis. Intelligence competes, and so does the way it is measured.";

export const metadata: Metadata = {
  title: "Whitepaper",
  description,
  openGraph: {
    title: "Whitepaper | Telegraph Protocol",
    description,
    url: `${baseUrl}/whitepaper`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whitepaper | Telegraph Protocol",
    description,
  },
  alternates: {
    canonical: `${baseUrl}/whitepaper`,
  },
};

const card = "rounded-sm border border-[var(--tg-line)] bg-[var(--tg-surface)] p-6";
const cardIdx = "text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]";
const cardTitle = "m-0 text-[15px] font-medium text-[var(--tg-fg)]";
const primaryBtn = "border border-black/10 hover:!bg-neutral-300";
const cardBody = "m-0 text-[13px] leading-[1.7] text-[var(--tg-fg-dim)]";

const STEPS = [
  { n: "01 / Tasks", title: "A specific task", body: "Intelligence is organized around the job being done." },
  { n: "02 / Providers", title: "Providers compete", body: "Models, APIs, datasets and tools compete to provide the strongest intelligence for each task." },
  { n: "03 / Evaluators", title: "Evaluation competes", body: "Independent Evaluators compete to determine how that performance is measured." },
  { n: "04 / Ranking", title: "Demand follows", body: "Verifiers finalize rankings. Consumer demand routes through those rankings." },
];

// Small illustration above each step, in the same order as STEPS.
const STEP_VIZ = [
  <div key="task" className="wp-viz-task">
    <small>Task</small>
    <span>Screen this wallet</span>
  </div>,
  <ul key="providers" className="wp-viz-grid">
    {["Model", "API", "Dataset", "Tool"].map((p) => <li key={p}>{p}</li>)}
  </ul>,
  <ul key="evaluators" className="wp-viz-bars">
    {([["Eval A", 82], ["Eval B", 64], ["Eval C", 45]] as const).map(([e, w]) => (
      <li key={e}>
        <span>{e}</span>
        <i style={{ width: `${w}%` }} />
      </li>
    ))}
  </ul>,
  <ol key="ranking" className="wp-viz-rank">
    {["Model A", "API B", "Dataset C"].map((r, i) => (
      <li key={r}>
        <b>{i + 1}</b>
        {r}
        {i === 0 && <em>demand →</em>}
      </li>
    ))}
  </ol>,
];

type Node = { text: string; tag: string; kind?: "fixed" | "stack" };
const COMPARE: { label: string; loop: boolean; nodes: Node[]; body: string }[] = [
  {
    label: "Traditional ranking",
    loop: false,
    nodes: [
      { text: "Models improve", tag: "Competitors change" },
      { text: "Fixed benchmark", tag: "Locked", kind: "fixed" },
      { text: "Ranking", tag: "Ends here" },
    ],
    body: "The competitors change, but the benchmark deciding who wins stays fixed.",
  },
  {
    label: "Telegraph",
    loop: true,
    nodes: [
      { text: "Intelligence improves", tag: "Providers compete" },
      { text: "Evaluators compete", tag: "Open", kind: "stack" },
      { text: "Ranking updates", tag: "Verifiers finalize" },
      { text: "Demand reroutes", tag: "To the top rank" },
    ],
    body: "A better competitor can take the top spot, and a better Evaluator can change how the top spot is decided.",
  },
];

const SYSTEM: [LucideIcon, string][] = [
  [Target, "Tasks"],
  [Cpu, "Providers"],
  [Scale, "Evaluators"],
  [ShieldCheck, "Verifiers"],
  [ListOrdered, "Ranking"],
  [Route, "Routing"],
];

const NEXT: { icon: LucideIcon; title: string; body: string; href: string; external: boolean }[] = [
  { icon: MessageCircle, title: "Join Discord", body: "Talk to the team and other builders.", href: "https://discord.gg/telegraphprotocol", external: true },
  { icon: Plug, title: "Connect an API", body: "Put your model or API on the network as a provider.", href: "https://integrate.telegraphprotocol.com/", external: true },
  { icon: Server, title: "Run a validator", body: "Enquire about running a validator.", href: "mailto:info@telegraphprotocol.com?subject=Validator%20enquiry", external: false },
];

function Actions() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <WhitepaperButton href={THESIS_PDF} className={primaryBtn}>Read the thesis</WhitepaperButton>
      <WhitepaperButton variant="dark" className="border border-[var(--tg-line)] !text-[#e9e9e9]">
        Open the full specification
      </WhitepaperButton>
    </div>
  );
}

export default function WhitepaperPage() {
  return (
    <div className="wp">
      <section className="border-b border-[var(--tg-line)] px-4 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Eyebrow>Whitepaper</Eyebrow>
            <h1 className="m-0 mt-5 max-w-[640px] text-balance text-[clamp(34px,4.6vw,58px)] font-normal leading-[1.1] tracking-[0.005em] text-[var(--tg-fg)]">
              Intelligence competes. So does the way it is measured.
            </h1>
            <p className="m-0 mt-6 max-w-[600px] text-pretty text-[15px] leading-[1.85] text-[var(--tg-fg-dim)]">
              Telegraph is a peer-to-peer ranking protocol for machine intelligence. Models, APIs, datasets and tools
              compete for each task, while independent evaluation methods compete to improve how that intelligence is
              measured.
            </p>
            <Actions />
          </div>
          <HeroViz />
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="How a task moves through Telegraph">
          Tasks. Providers. Evaluators. Ranking.
        </SectionHeading>
        <ol className="wp-steps mt-14">
          {STEPS.map((s, i) => (
            <li key={s.n} className={`${card} wp-card wp-step flex flex-col gap-2.5`} style={{ "--i": i } as CSSProperties}>
              <div className="wp-viz" aria-hidden="true">{STEP_VIZ[i]}</div>
              <span className={cardIdx}>{s.n}</span>
              <h3 className={cardTitle}>{s.title}</h3>
              <p className={cardBody}>{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-col items-start gap-7 border-t border-[var(--tg-line)] pt-8 md:flex-row md:items-center md:justify-between">
          <p className="m-0 max-w-[60ch] text-[clamp(16px,1.6vw,20px)] leading-[1.5] text-[var(--tg-fg)]">
            Better intelligence can earn more demand. A better Evaluator can replace a weaker one. The system can
            improve on both sides without Telegraph deciding the winner.
          </p>
          <WhitepaperButton href={THESIS_PDF} className={primaryBtn}>Read the thesis</WhitepaperButton>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="The difference"
          lede="A fixed benchmark can become stale. In Telegraph, both the intelligence and the method used to measure it remain open to competition."
        >
          Most ranking systems let the competitors improve. Telegraph lets the measurement improve too.
        </SectionHeading>
        <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-2">
          {COMPARE.map((c) => (
            <article key={c.label} className={`${card} flex flex-col gap-2.5`}>
              <span className={cardIdx}>{c.label}</span>
              <div className={`wp-diagram${c.loop ? " wp-loop" : ""}`}>
                <ol className="wp-nodes">
                  {c.nodes.map((n, j) => (
                    <li
                      key={n.text}
                      className={`wp-node${n.kind ? ` is-${n.kind}` : ""}`}
                      style={{ "--i": j } as CSSProperties}
                    >
                      <span className="wp-node-n">{String(j + 1).padStart(2, "0")}</span>
                      <span className="wp-node-text">{n.text}</span>
                      <small>{n.tag}</small>
                    </li>
                  ))}
                </ol>
                {c.loop && (
                  <span className="wp-return" aria-hidden="true">
                    <span>Repeats every task</span>
                  </span>
                )}
              </div>
              <p className={cardBody}>{c.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-b-0">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Read the thesis">Read how the full system works.</SectionHeading>
            <ol className="wp-chain" aria-label="Tasks, Providers, Evaluators, Verifiers, Ranking, Routing: one system">
              {SYSTEM.map(([Icon, label]) => (
                <li key={label}>
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden />
                  <span>{label}</span>
                </li>
              ))}
            </ol>
            <p className="m-0 mt-4 text-[11px] uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
              Six parts. One system.
            </p>
            <Actions />
          </div>
          <WhitepaperCard className="wp-doc">
            <span className="wp-doc-top">
              <FileText className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden />
              <span>PDF · V2.0</span>
            </span>
            <span className="wp-doc-title">Telegraph Whitepaper &amp; Specification</span>
            <span className="wp-doc-lines" aria-hidden="true"><i /><i /><i /></span>
            <span className="wp-doc-mark">
              <span className="wp-doc-mark-top"><span>Thesis</span><span>p. 4</span></span>
              <span>How Telegraph works, end to end</span>
            </span>
            <span className="wp-doc-lines" aria-hidden="true"><i /><i /></span>
            <span className="wp-doc-open">
              Open the thesis <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
            </span>
          </WhitepaperCard>
        </div>

        <p className="m-0 mt-16 text-[11px] uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
          After the whitepaper
        </p>
        <ul className="m-0 mt-3 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-3">
          {NEXT.map(({ icon: Icon, ...n }) => (
            <li key={n.title}>
              <a
                href={n.href}
                {...(n.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`${card} wp-next-card flex h-full items-center gap-4 no-underline transition-colors hover:bg-[var(--tg-surface-hi)]`}
              >
                <span className="wp-next-icon grid h-11 w-11 flex-none place-items-center border border-[var(--tg-line-strong)] text-[var(--tg-fg)] transition-colors">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                </span>
                <span className="grid min-w-0 flex-1 gap-1">
                  <span className={cardTitle}>{n.title}</span>
                  <span className={cardBody}>{n.body}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 flex-none text-[var(--tg-fg-faint)]" strokeWidth={1.5} aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
