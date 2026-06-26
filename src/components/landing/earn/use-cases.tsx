"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { DecodeText } from "../fx/decode-text";
import { Reveal } from "../fx/reveal";

type UseCase = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  subnets: { id: number; label: string }[];
  payment: string;
  githubHref: string;
  liveHref?: string;
};

const REPO_BASE =
  "https://github.com/telegraphprotocol/telegraph-truthwire/tree/main";

const useCases: UseCase[] = [
  {
    id: "01",
    name: "TruthWire",
    subtitle: "X-Post AI Detection",
    description:
      "Paste an X post URL — fetches the post and runs AI-content detection on the text and any attached images. Verdicts ship with on-chain payment proof.",
    subnets: [
      { id: 32, label: "ItsAI" },
      { id: 34, label: "Bitmind" },
    ],
    payment: "Solana · USDC",
    githubHref: `${REPO_BASE}/telegraph-truthwire`,
    liveHref: "https://truthwire.telegraphprotocol.com",
  },
  {
    id: "02",
    name: "TrustFilter",
    subtitle: "Scam & Phishing Analysis",
    description:
      "Submit a URL or message — the Groq LLM returns scam / suspicious / likely_safe with plain-English reasoning, metered per call on-chain.",
    subnets: [{ id: 102, label: "Groq" }],
    payment: "Solana · USDC",
    githubHref: `${REPO_BASE}/telegraph-trustfilter`,
  },
  {
    id: "03",
    name: "ScholarGuard",
    subtitle: "Academic Document Integrity",
    description:
      "Upload a PDF or DOCX — extracted text runs through ItsAI for AI-writing detection while embedded images flow to Bitmind. Every call returns its own tx hash.",
    subnets: [
      { id: 32, label: "ItsAI" },
      { id: 34, label: "Bitmind" },
    ],
    payment: "Solana · USDC",
    githubHref: `${REPO_BASE}/telegraph-scholarguard`,
    liveHref: "https://scholarguard.telegraphprotocol.com",
  },
  {
    id: "04",
    name: "ReviewReward",
    subtitle: "Amazon Review Authenticity",
    description:
      "Paste a product URL — pulls recent reviews, scores each through ItsAI, and surfaces an AI-vs-human signal summary with per-review transaction proofs.",
    subnets: [{ id: 32, label: "ItsAI" }],
    payment: "Solana · USDC",
    githubHref: `${REPO_BASE}/telegraph-reviewreward`,
    liveHref: "https://reviewradar.telegraphprotocol.com",
  },
  {
    id: "05",
    name: "Polymarket Sniper",
    subtitle: "Autonomous Prediction Trading",
    description:
      "Connect a wallet — every two hours the bot pulls Polymarket positions, gathers context via DeSearch, and asks the Groq LLM to decide YES / NO / HOLD.",
    subnets: [
      { id: 101, label: "DeSearch" },
      { id: 102, label: "Groq" },
    ],
    payment: "Polygon · USDC",
    githubHref: `${REPO_BASE}/telegraph-polymarket-bot`,
  },
  {
    id: "06",
    name: "AdGuard",
    subtitle: "Brand-Safe Ad Pausing",
    description:
      "Score articles for deepfakes via Bitmind and AI-written copy via ItsAI. If the weighted threat score crosses your threshold, AdGuard pauses the matching Google Ads campaigns automatically.",
    subnets: [
      { id: 34, label: "Bitmind" },
      { id: 32, label: "ItsAI" },
    ],
    payment: "Solana · USDC",
    githubHref: `${REPO_BASE}/telegraph-adguard`,
  },
];

function SubnetChip({ id, label }: { id: number; label: string }) {
  return (
    <span className="inline-flex flex-col items-start gap-0.5 border border-[var(--tg-line-strong)] bg-[#0c0c0c] px-3 py-2">
      <span className="flex items-baseline gap-1.5 leading-none">
        <span className="text-[9px] uppercase tracking-[0.22em] text-[var(--tg-fg-faint)]">
          SN
        </span>
        <span className="text-[15px] font-medium tracking-[0.01em] text-[var(--tg-fg)]">
          {id}
        </span>
      </span>
      <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--tg-fg-dim)]">
        {label}
      </span>
    </span>
  );
}

function Card({ item }: { item: UseCase }) {
  return (
    <div
      draggable={false}
      className="group relative mx-3 flex w-[320px] shrink-0 snap-start flex-col border border-[var(--tg-line)] bg-[var(--tg-bg)] md:w-[380px]"
    >
      <span className="tg-corner tg-corner-tl" aria-hidden />
      <span className="tg-corner tg-corner-tr" aria-hidden />
      <span className="tg-corner tg-corner-bl" aria-hidden />
      <span className="tg-corner tg-corner-br" aria-hidden />

      <header className="flex items-center gap-3 border-b border-[var(--tg-line-soft)] px-6 py-5">
        <span className="text-[11px] tracking-[0.22em] text-[var(--tg-fg-faint)]">
          USE / {item.id}
        </span>
        {item.liveHref && (
          <span className="inline-flex items-center gap-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_1px_rgba(52,211,153,0.6)]"
              aria-hidden
            />
            <span className="text-[9px] uppercase tracking-[0.22em] text-emerald-500">
              Live
            </span>
          </span>
        )}
        <span className="ml-auto text-[10px] uppercase tracking-[0.18em] text-[var(--tg-fg-faint)]">
          {item.payment}
        </span>
      </header>

      <div className="flex flex-1 flex-col gap-3 px-6 py-6">
        <h3 className="m-0 text-[18px] font-medium leading-[1.25] tracking-[0.005em] text-[var(--tg-fg)]">
          {item.name}
        </h3>
        <p className="m-0 text-[12px] uppercase tracking-[0.12em] text-[var(--tg-fg-dim)]">
          {item.subtitle}
        </p>
        <p className="m-0 mt-1 text-pretty text-[13px] leading-[1.75] text-[var(--tg-fg-dim)]">
          {item.description}
        </p>
      </div>

      <footer className="border-t border-[var(--tg-line-soft)] px-6 py-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--tg-fg-faint)]">
            Powered By
          </span>
          <span className="h-px flex-1 bg-[var(--tg-line-soft)]" />
        </div>
        <div className="mb-5 flex flex-wrap items-stretch gap-2">
          {item.subnets.map((sn) => (
            <SubnetChip
              key={`${item.id}-${sn.id}`}
              id={sn.id}
              label={sn.label}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={item.githubHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${item.name} on GitHub`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 border border-[var(--tg-line)] bg-transparent px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[var(--tg-fg-dim)] no-underline outline-none transition-colors duration-200 hover:border-[var(--tg-line-strong)] hover:text-[var(--tg-fg)] focus-visible:border-[var(--tg-fg-dim)]"
          >
            <Github className="h-3 w-3" aria-hidden />
            GitHub
          </a>
          {item.liveHref && (
            <a
              href={item.liveHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${item.name} live app`}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 border border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-emerald-500 no-underline outline-none transition-colors duration-200 hover:border-emerald-500/60 hover:bg-emerald-500/10 focus-visible:border-emerald-500"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_1px_rgba(52,211,153,0.5)]"
                aria-hidden
              />
              Live App
              <ArrowUpRight className="h-3 w-3" aria-hidden />
            </a>
          )}
        </div>
      </footer>
    </div>
  );
}

function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const DRAG_THRESHOLD = 4;
    let activePointer: number | null = null;
    let didDrag = false;
    let startX = 0;
    let startScroll = 0;

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
      if (e.button !== 0) return;
      activePointer = e.pointerId;
      didDrag = false;
      startX = e.clientX;
      startScroll = el.scrollLeft;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (activePointer === null || e.pointerId !== activePointer) return;
      const dx = e.clientX - startX;
      if (!didDrag && Math.abs(dx) > DRAG_THRESHOLD) {
        didDrag = true;
        setDragging(true);
        try {
          el.setPointerCapture(e.pointerId);
        } catch {}
      }
      if (didDrag) {
        e.preventDefault();
        el.scrollLeft = startScroll - dx;
      }
    };

    const finish = (e: PointerEvent) => {
      if (activePointer === null || e.pointerId !== activePointer) return;
      if (didDrag) {
        try {
          el.releasePointerCapture(activePointer);
        } catch {}
        const swallow = (ev: MouseEvent) => {
          ev.preventDefault();
          ev.stopPropagation();
        };
        el.addEventListener("click", swallow, { capture: true, once: true });
        setTimeout(
          () => el.removeEventListener("click", swallow, { capture: true }),
          50,
        );
      }
      activePointer = null;
      setDragging(false);
    };

    const onDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", finish);
    el.addEventListener("pointercancel", finish);
    el.addEventListener("dragstart", onDragStart);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", finish);
      el.removeEventListener("pointercancel", finish);
      el.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  return { ref, dragging };
}

export function EarnUseCases() {
  const { ref, dragging } = useDragScroll<HTMLDivElement>();

  return (
    <section className="bg-[var(--tg-bg)] px-0 py-20 md:py-[110px]">
      <div className="mx-auto mb-12 max-w-[1080px] px-6 sm:px-8 md:mb-16">
        <DecodeText
          text="What's Being Built on Telegraph"
          className="block m-0 mb-5 text-[clamp(22px,2.2vw,30px)] font-normal tracking-[0.005em] text-[var(--tg-fg)]"
        />
        <Reveal
          as="p"
          variant="blur"
          delay={150}
          className="m-0 max-w-[620px] text-pretty text-[13.5px] leading-[1.85] text-[var(--tg-fg-dim)]"
        >
          Real apps routing inference through Telegraph subnets and settling
          micro-fees on-chain via x402. Every card below is a workflow live
          today — calling specialised AI models like any REST API.
        </Reveal>
      </div>

      <div className="relative md:[-webkit-mask-image:linear-gradient(90deg,transparent_0,#000_5%,#000_95%,transparent_100%)] md:[mask-image:linear-gradient(90deg,transparent_0,#000_5%,#000_95%,transparent_100%)]">
        <div
          ref={ref}
          className={`flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-px-3 px-3 py-2 select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:snap-none md:cursor-grab ${
            dragging ? "md:!cursor-grabbing" : ""
          }`}
          style={{ scrollBehavior: "auto" }}
        >
          {useCases.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
