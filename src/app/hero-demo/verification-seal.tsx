"use client";

import { useState } from "react";
import { useInView } from "@/components/landing/fx/use-in-view";
import { DecodeText } from "@/components/landing/fx/decode-text";
import { NumberScramble } from "@/components/landing/fx/number-scramble";

const TICKS = 28;

export function VerificationSeal() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        ref={ref}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((o) => !o)}
        className="group relative h-[190px] w-[190px] cursor-pointer select-none"
        style={{ perspective: "900px" }}
      >
        <div
          className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transformStyle: "preserve-3d",
            transform: open ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* front — the seal */}
          <div
            className="absolute inset-0 flex items-center justify-center rounded-full"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-3 rounded-full opacity-30 blur-md"
              style={{
                background:
                  "radial-gradient(circle, rgba(241,241,241,0.5) 0%, transparent 70%)",
              }}
            />

            {Array.from({ length: TICKS }).map((_, i) => {
              const angle = (360 / TICKS) * i;
              const long = i % 7 === 0;
              return (
                <span
                  key={i}
                  aria-hidden
                  className="absolute left-1/2 top-1/2 origin-top bg-[var(--tg-fg-dim)]"
                  style={{
                    width: 1,
                    height: long ? 9 : 5,
                    transform: `rotate(${angle}deg) translateY(-93px)`,
                    opacity: inView ? (long ? 0.7 : 0.35) : 0,
                    transition: "opacity 500ms ease, transform 500ms ease",
                    transitionDelay: `${i * 16}ms`,
                  }}
                />
              );
            })}

            <div
              className="absolute inset-[14px] rounded-full border transition-all duration-700"
              style={{
                borderColor: "var(--tg-line-strong)",
                opacity: inView ? 1 : 0,
                transform: inView ? "scale(1)" : "scale(0.85)",
                transitionDelay: "260ms",
              }}
            />
            <div
              className="absolute inset-[26px] rounded-full border border-dashed transition-all duration-700"
              style={{
                borderColor: "var(--tg-line)",
                opacity: inView ? 1 : 0,
                transform: inView ? "scale(1) rotate(0deg)" : "scale(0.7) rotate(-25deg)",
                transitionDelay: "340ms",
              }}
            />

            <div
              className="relative z-10 flex flex-col items-center gap-1.5 transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(6px)",
                transitionDelay: "500ms",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" className="text-[var(--tg-fg)]">
                <path
                  d="M8 1l6 3v4c0 4-2.6 6.4-6 7-3.4-.6-6-3-6-7V4l6-3z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path d="M5.2 8l2 2 3.6-4" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--tg-fg)]">
                Verified
              </span>
              <span className="text-[9px] uppercase tracking-[0.14em] text-[var(--tg-fg-faint)]">
                machine-readable proof
              </span>
            </div>
          </div>

          {/* back — the proof */}
          <div
            className="absolute inset-0 flex items-center justify-center rounded-full border border-[var(--tg-line)] bg-[rgba(10,10,10,0.7)] backdrop-blur-sm"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="flex flex-col items-start gap-2.5 px-6 text-left font-mono text-[10px] leading-[1.5]">
              <div>
                <div className="text-[9px] uppercase tracking-[0.16em] text-[var(--tg-fg-faint)]">
                  hash
                </div>
                <DecodeText
                  as="span"
                  text="0x8f2c91af…c4a91"
                  duration={700}
                  threshold={0}
                  className="text-[var(--tg-fg)]"
                />
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-[0.16em] text-[var(--tg-fg-faint)]">
                  block
                </div>
                <NumberScramble
                  value="2,481,902"
                  duration={600}
                  threshold={0}
                  className="text-[var(--tg-fg)]"
                />
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-[0.16em] text-[var(--tg-fg-faint)]">
                  signature
                </div>
                <DecodeText
                  as="span"
                  text="valid ✓"
                  duration={500}
                  threshold={0}
                  className="text-[var(--tg-fg)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--tg-fg-faint)]">
        hover to inspect proof
      </span>
    </div>
  );
}
