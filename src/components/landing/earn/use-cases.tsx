"use client";

import { ArrowUpRight } from "lucide-react";
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
  href: string;
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
    href: `${REPO_BASE}/telegraph-truthwire`,
  },
  {
    id: "02",
    name: "TrustFilter",
    subtitle: "Scam & Phishing Analysis",
    description:
      "Submit a URL or message — the Groq LLM returns scam / suspicious / likely_safe with plain-English reasoning, metered per call on-chain.",
    subnets: [{ id: 102, label: "Groq" }],
    payment: "Solana · USDC",
    href: `${REPO_BASE}/telegraph-trustfilter`,
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
    href: `${REPO_BASE}/telegraph-scholarguard`,
  },
  {
    id: "04",
    name: "ReviewRadar",
    subtitle: "Amazon Review Authenticity",
    description:
      "Paste a product URL — pulls recent reviews, scores each through ItsAI, and surfaces an AI-vs-human signal summary with per-review transaction proofs.",
    subnets: [{ id: 32, label: "ItsAI" }],
    payment: "Solana · USDC",
    href: `${REPO_BASE}/telegraph-reviewradar`,
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
    href: `${REPO_BASE}/telegraph-polymarket-bot`,
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
    href: `${REPO_BASE}/telegraph-adguard`,
  },
];

function SubnetChip({ id, label }: { id: number; label: string }) {
  return (
    <span className="inline-flex flex-col items-start gap-0.5 border border-[var(--tg-line-strong)] bg-[#0c0c0c] px-3 py-2 transition-colors duration-200 group-hover:border-[var(--tg-fg-faint)] group-hover:bg-[#111]">
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
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${item.name} on GitHub`}
      draggable={false}
      className="group relative mx-3 flex w-[320px] shrink-0 snap-start flex-col border border-[var(--tg-line)] bg-[var(--tg-bg)] no-underline outline-none transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--tg-line-strong)] hover:bg-[#0c0c0c] focus-visible:border-[var(--tg-fg-dim)] md:w-[380px]"
    >
      <span className="tg-corner tg-corner-tl" aria-hidden />
      <span className="tg-corner tg-corner-tr" aria-hidden />
      <span className="tg-corner tg-corner-bl" aria-hidden />
      <span className="tg-corner tg-corner-br" aria-hidden />

      <header className="flex items-center gap-3 border-b border-[var(--tg-line-soft)] px-6 py-5">
        <span className="text-[11px] tracking-[0.22em] text-[var(--tg-fg-faint)]">
          USE / {item.id}
        </span>
        <span className="ml-auto text-[10px] uppercase tracking-[0.18em] text-[var(--tg-fg-faint)]">
          {item.payment}
        </span>
        <ArrowUpRight
          className="h-3.5 w-3.5 text-[var(--tg-fg-faint)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--tg-fg)]"
          aria-hidden
        />
      </header>

      <div className="flex flex-1 flex-col gap-3 px-6 py-6">
        <h3 className="m-0 text-[18px] font-medium leading-[1.25] tracking-[0.005em] text-[var(--tg-fg)] transition-colors duration-200">
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
        <div className="flex flex-wrap items-stretch gap-2">
          {item.subnets.map((sn) => (
            <SubnetChip
              key={`${item.id}-${sn.id}`}
              id={sn.id}
              label={sn.label}
            />
          ))}
        </div>
      </footer>
    </a>
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
      // Mouse / pen only — touch uses native scrolling
      if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
      if (e.button !== 0) return;
      activePointer = e.pointerId;
      didDrag = false;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      // Don't capture yet — capturing redirects the synthesized click
      // away from the anchor and would break plain clicks.
    };

    const onPointerMove = (e: PointerEvent) => {
      if (activePointer === null || e.pointerId !== activePointer) return;
      const dx = e.clientX - startX;
      if (!didDrag && Math.abs(dx) > DRAG_THRESHOLD) {
        didDrag = true;
        setDragging(true);
        // Once we know it's a drag, capture so the cursor can leave the
        // element without us losing pointer events.
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
        // Swallow the click that follows a drag so the card link doesn't open
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

    // Block native link / image drag that would otherwise hijack the gesture
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

      <div
        className="relative md:[-webkit-mask-image:linear-gradient(90deg,transparent_0,#000_5%,#000_95%,transparent_100%)] md:[mask-image:linear-gradient(90deg,transparent_0,#000_5%,#000_95%,transparent_100%)]"
      >
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
