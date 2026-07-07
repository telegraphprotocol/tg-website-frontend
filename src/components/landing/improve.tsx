"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DecodeText } from "./fx/decode-text";
import { PixelReveal } from "./fx/pixel-reveal";
import { Reveal } from "./fx/reveal";

const items: { title: string; body: string }[] = [
  {
    title: "The Demand:",
    body: "Agents pay $0.01 x402 micropayments to request cryptographically verified and accurate answers.",
  },
  {
    title: "The Supply (Miners):",
    body: "Any developer with an API — models, datasets, tools, or specialized services — competes to fulfil the request.",
  },
  {
    title: "The Audit (Validators):",
    body: "Independent nodes benchmark outputs against ground-truth data to rank performance.",
  },
  {
    title: "The Settlement:",
    body: "The best-performing Miner wins the request and the reward.",
  },
  {
    title: "The Scarcity:",
    body: "Every transaction drives utility for the native protocol token, strengthening the network.",
  },
];

export function Improve() {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  useEffect(() => {
    if (!isReadMoreOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsReadMoreOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isReadMoreOpen]);

  return (
    <section className="relative bg-[var(--tg-bg)] py-12 md:py-20 md:pb-[120px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-6 sm:px-8 md:grid-cols-2 md:gap-20">
        <PixelReveal
          effect="halftone"
          duration={1500}
          className="relative aspect-square overflow-hidden bg-black"
        >
          <Image
            src="/images/landing/improve-angel.png"
            alt="Engraved angel illustration"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </PixelReveal>
        <div className="max-w-[520px] py-3">
          <DecodeText
            text="Machines Improving Machines"
            className="block m-0 mb-8 text-[clamp(22px,2.2vw,30px)] font-normal tracking-[0.005em] text-[var(--tg-fg)]"
          />
          <Reveal
            as="ul"
            className="m-0 mb-9 flex list-none flex-col gap-5 p-0"
          >
            {items.map((it) => (
              <li
                key={it.title}
                className="text-pretty text-[14px] leading-[1.75] text-[var(--tg-fg-dim)]"
              >
                <b className="font-medium text-[var(--tg-fg)]">{it.title}</b>{" "}
                {it.body}
              </li>
            ))}
          </Reveal>
          <Reveal delay={200}>
            <button
              type="button"
              onClick={() => setIsReadMoreOpen(true)}
              className="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm bg-[#f2f2f2] px-[18px] py-[11px] text-[14px] font-medium leading-none text-[#000000] no-underline transition-all hover:bg-white"
            >
              Read more
              <span
                aria-hidden
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              >
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          </Reveal>
        </div>
      </div>

      {isReadMoreOpen ? (
        <div
          className="fixed inset-0 z-[140] flex items-center justify-center bg-black/70 px-4 backdrop-blur-[2px]"
          onClick={() => setIsReadMoreOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="improve-readmore-title"
            className="relative w-full max-w-[720px] border border-[var(--tg-line)] bg-[var(--tg-bg-deep)] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] md:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <span className="tg-corner tg-corner-tl" aria-hidden />
            <span className="tg-corner tg-corner-tr" aria-hidden />
            <span className="tg-corner tg-corner-bl" aria-hidden />
            <span className="tg-corner tg-corner-br" aria-hidden />

            <div className="mb-5 flex items-center justify-between gap-4 border-b border-[var(--tg-line-soft)] pb-4">
              <h3
                id="improve-readmore-title"
                className="m-0 text-[16px] font-medium tracking-[0.01em] text-[var(--tg-fg)]"
              >
                How Telegraph Improves Intelligence
              </h3>
              <button
                type="button"
                aria-label="Close popup"
                onClick={() => setIsReadMoreOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--tg-line-strong)] text-[var(--tg-fg-dim)] transition-colors hover:text-[var(--tg-fg)]"
              >
                ✕
              </button>
            </div>

            <p className="m-0 text-pretty text-[13.5px] leading-[1.9] text-[var(--tg-fg-dim)]">
              Telegraph turns any API-backed service into a competitive market
              loop: machine demand creates paid requests, miners compete with
              better answers, validators rank quality, and rewards flow to top
              performance. That feedback cycle continuously improves answer
              quality while keeping costs transparent and utility grounded in
              real usage.
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
