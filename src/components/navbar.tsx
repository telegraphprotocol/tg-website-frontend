"use client";

import Link from "next/link";
import {
  ChevronDown,
  Coins,
  FileBarChart,
  FileText,
  Menu,
  Newspaper,
  Server,
  Terminal,
  X,
} from "lucide-react";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { CtaButton } from "./landing/cta-button";
import { GuideNavLink, GuideNavLinkOverlay } from "./guide-nav-link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MACHINA_REPORT_URL = "/Machina_Token_Price_Scenarios_v66.pdf";
const MACHINA_COINGECKO_URL = "https://www.coingecko.com/en/coins/machina-2";
const WHITEPAPER_URL = "/Whitepapers%20-%20Telegraph%20Protocol.pdf";
const RUN_A_NODE_URL = "/Telegraph_Validator_Proposal.pdf";

const tokenReportBtnMobileClass =
  "inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-sm border border-amber-500/80 bg-amber-500/10 px-2 py-[9px] text-[11px] font-semibold uppercase tracking-[0.04em] text-amber-400 no-underline transition-colors hover:border-amber-400 hover:bg-amber-500/15 hover:text-amber-300";
const runNodeBtnClass =
  "inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm border border-blue-500/80 bg-blue-500/10 px-[17px] py-[10px] text-[14px] font-semibold leading-none text-blue-400 no-underline transition-all hover:border-blue-400 hover:bg-blue-500/15 hover:text-blue-300";
const runNodeBtnOverlayClass =
  "inline-flex items-center gap-3 rounded-sm border border-blue-500/80 bg-blue-500/10 px-4 py-3 text-[14px] font-semibold text-blue-400 no-underline transition-colors hover:border-blue-400 hover:bg-blue-500/15 hover:text-blue-300";
const alexandriaBtnMobileClass =
  "inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-sm border border-blue-500/80 bg-blue-500/10 px-2 py-[9px] text-[11px] font-semibold uppercase tracking-[0.04em] text-blue-400 no-underline transition-colors hover:border-blue-400 hover:bg-blue-500/15 hover:text-blue-300";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!moreOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMoreOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [moreOpen]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 flex h-[72px] items-center border-b border-[var(--tg-line)] bg-[#010101]/50 backdrop-blur-md supports-[backdrop-filter]:bg-[#010101]/55">
      <div className="flex w-full min-w-0 items-center justify-between gap-3 px-4 sm:px-6 md:px-10">
        <Link
          href="/"
          aria-label="Telegraph home"
          className="flex min-w-0 shrink items-center gap-2.5 text-[17px] font-medium text-[var(--tg-fg)] no-underline"
        >
          <Image
            src="/t-logo.png"
            alt="Telegraph"
            width={28}
            height={28}
            className="h-5 w-auto"
          />
          <span className="font-medium hidden md:block">Telegraph</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-3">
          {/* Temporarily hidden — Token Report
          <Link
            href={MACHINA_REPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm border border-amber-500/80 bg-amber-500/10 px-[17px] py-[10px] text-[14px] font-semibold leading-none text-amber-400 no-underline transition-all hover:border-amber-400 hover:bg-amber-500/15 hover:text-amber-300"
          >
            <FileBarChart className="h-4 w-4" aria-hidden />
            <span>Token Report</span>
          </Link>
          */}
          <CtaButton
            href="https://alexandria.telegraphprotocol.com"
            target="_blank"
            arrow={false}
          >
            <Terminal className="h-4 w-4" strokeWidth={2.5} aria-hidden />
            <span className="font-semibold">Alexandria</span>
            <span className="rounded-sm border border-current/30 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] opacity-70">
              Beta
            </span>
          </CtaButton>

          <GuideNavLink />

          <div ref={moreRef} className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={moreOpen}
              className="inline-flex items-center gap-1.5 rounded-sm bg-[#1a1a1a] px-[14px] py-[10px] text-[14px] font-medium text-[var(--tg-fg)] transition-colors hover:bg-[#222]"
            >
              <span>More</span>
              <ChevronDown
                className={`h-4 w-4 opacity-70 transition-transform ${
                  moreOpen ? "rotate-180" : ""
                }`}
                aria-hidden
              />
            </button>

            <div
              role="menu"
              className={`absolute right-0 top-[calc(100%+8px)] w-64 rounded-sm border border-[var(--tg-line)] bg-[#0a0a0a] p-2 shadow-xl transition-all ${
                moreOpen
                  ? "pointer-events-auto opacity-100 translate-y-0"
                  : "pointer-events-none opacity-0 -translate-y-1"
              }`}
            >
              <Link
                href={RUN_A_NODE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMoreOpen(false)}
                className="flex items-center gap-3 rounded-sm px-3 py-2.5 text-[14px] font-medium text-[var(--tg-fg)] no-underline transition-colors hover:bg-[#1a1a1a]"
              >
                <Server className="h-4 w-4 opacity-80" aria-hidden />
                <span>Validator Opportunity</span>
              </Link>
              <Link
                href={WHITEPAPER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMoreOpen(false)}
                className="flex items-center gap-3 rounded-sm px-3 py-2.5 text-[14px] font-medium text-[var(--tg-fg)] no-underline transition-colors hover:bg-[#1a1a1a]"
              >
                <FileText className="h-4 w-4 opacity-80" aria-hidden />
                <span>Whitepaper</span>
              </Link>
              <Link
                href="/earn"
                onClick={() => setMoreOpen(false)}
                className="flex items-center gap-3 rounded-sm px-3 py-2.5 text-[14px] font-medium text-[var(--tg-fg)] no-underline transition-colors hover:bg-[#1a1a1a]"
              >
                <Coins className="h-4 w-4 opacity-80" aria-hidden />
                <span>Earn</span>
              </Link>
              <Link
                href="/media"
                onClick={() => setMoreOpen(false)}
                className="flex items-center gap-3 rounded-sm px-3 py-2.5 text-[14px] font-medium text-[var(--tg-fg)] no-underline transition-colors hover:bg-[#1a1a1a]"
              >
                <Newspaper className="h-4 w-4 opacity-80" aria-hidden />
                <span>Media</span>
              </Link>

              <span
                aria-hidden
                className="my-2 block h-px w-full bg-[var(--tg-line)]"
              />

              <div className="flex items-center gap-2 px-1">
                <Link
                  href="https://x.com/Telegraphprotoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegraph on X"
                  onClick={() => setMoreOpen(false)}
                  className="inline-flex items-center justify-center rounded-sm bg-[#1a1a1a] p-[11px] text-[var(--tg-fg)] transition-colors hover:bg-[#222]"
                >
                  <FaXTwitter className="h-5 w-5" aria-hidden />
                </Link>
                <Link
                  href="https://discord.gg/telegraphprotocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegraph on Discord"
                  onClick={() => setMoreOpen(false)}
                  className="inline-flex items-center justify-center rounded-sm bg-[#1a1a1a] p-[11px] text-[var(--tg-fg)] transition-colors hover:bg-[#222]"
                >
                  <FaDiscord className="h-5 w-5 opacity-90" aria-hidden />
                </Link>
                <Link
                  href={MACHINA_COINGECKO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="MACHINA Token on CoinGecko"
                  onClick={() => setMoreOpen(false)}
                  className="inline-flex items-center justify-center rounded-sm bg-[#1a1a1a] p-[11px] text-[var(--tg-fg)] transition-colors hover:bg-[#222]"
                >
                  <Image
                    src="/coingecko-white.46524c06.png"
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 opacity-90"
                    aria-hidden
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex shrink-0 items-center gap-2">
          {/* Temporarily hidden — Token Report
          <Link
            href={MACHINA_REPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MACHINA Token Report"
            className={tokenReportBtnMobileClass}
          >
            <FileBarChart className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <span>Report</span>
          </Link>
          */}
          <Link
            href="https://alexandria.telegraphprotocol.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore Alexandria (beta)"
            className={alexandriaBtnMobileClass}
          >
            <Terminal className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <span>Alexandria</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="tg-mobile-nav"
            className="inline-flex shrink-0 items-center justify-center rounded-sm bg-[#1a1a1a] p-[11px] text-[var(--tg-fg)] transition-colors hover:bg-[#222]"
          >
            {open ? (
              <X className="h-4 w-4" aria-hidden />
            ) : (
              <Menu className="h-4 w-4" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        id="tg-mobile-nav"
        className={`md:hidden fixed inset-x-0 top-[72px] bottom-0 z-40 transition-opacity duration-200 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div
          onClick={close}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        <nav className="relative mx-auto flex w-full flex-col gap-3 border-b border-[var(--tg-line)] bg-[#010101] px-6 py-6">
          {/* Temporarily hidden — Token Report
          <Link
            href={MACHINA_REPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="inline-flex items-center gap-3 rounded-sm border border-amber-500/80 bg-amber-500/10 px-4 py-3 text-[14px] font-semibold text-amber-400 no-underline transition-colors hover:border-amber-400 hover:bg-amber-500/15 hover:text-amber-300"
          >
            <FileBarChart className="h-4 w-4" aria-hidden />
            <span>MACHINA: Token Report</span>
          </Link>
          */}

          <Link
            href="https://alexandria.telegraphprotocol.com"
            target="_blank"
            onClick={close}
            className="inline-flex items-center gap-3 rounded-sm bg-[#f2f2f2] px-4 py-3 text-[14px] font-semibold text-black no-underline transition-colors hover:bg-white"
          >
            <Terminal className="h-4 w-4" strokeWidth={2.5} aria-hidden />
            <span>Alexandria</span>
            <span className="rounded-sm border border-black/30 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] opacity-70">
              Beta
            </span>
          </Link>

          <GuideNavLinkOverlay onClick={close} />

          <span
            aria-hidden
            className="my-1 block h-px w-full bg-[var(--tg-line)]"
          />

          <Link
            href={RUN_A_NODE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className={runNodeBtnOverlayClass}
          >
            <Server className="h-4 w-4" aria-hidden />
            <span>Validator Opportunity</span>
          </Link>

          <Link
            href={WHITEPAPER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="inline-flex items-center gap-3 rounded-sm bg-[#1a1a1a] px-4 py-3 text-[14px] font-medium text-[var(--tg-fg)] no-underline transition-colors hover:bg-[#222]"
          >
            <FileText className="h-4 w-4 opacity-80" aria-hidden />
            <span>Whitepaper</span>
          </Link>

          <Link
            href="/earn"
            onClick={close}
            className="inline-flex items-center gap-3 rounded-sm bg-[#1a1a1a] px-4 py-3 text-[14px] font-medium text-[var(--tg-fg)] no-underline transition-colors hover:bg-[#222]"
          >
            <Coins className="h-4 w-4 opacity-80" aria-hidden />
            <span>Earn</span>
          </Link>

          <Link
            href="/media"
            onClick={close}
            className="inline-flex items-center gap-3 rounded-sm bg-[#1a1a1a] px-4 py-3 text-[14px] font-medium text-[var(--tg-fg)] no-underline transition-colors hover:bg-[#222]"
          >
            <Newspaper className="h-4 w-4 opacity-80" aria-hidden />
            <span>Media</span>
          </Link>

          <div className="flex items-center gap-3 pt-1">
            <Link
              href="https://x.com/Telegraphprotoc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegraph on X"
              onClick={close}
              className="inline-flex items-center justify-center rounded-sm bg-[#1a1a1a] p-[11px] text-[var(--tg-fg)] transition-colors hover:bg-[#222]"
            >
              <FaXTwitter className="h-5 w-5" aria-hidden />
            </Link>
            <Link
              href="https://discord.gg/telegraphprotocol"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegraph on Discord"
              onClick={close}
              className="inline-flex items-center justify-center rounded-sm bg-[#1a1a1a] p-[11px] text-[var(--tg-fg)] transition-colors hover:bg-[#222]"
            >
              <FaDiscord className="h-5 w-5 opacity-90" aria-hidden />
            </Link>
            <Link
              href={MACHINA_COINGECKO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MACHINA Token on CoinGecko"
              onClick={close}
              className="inline-flex items-center justify-center rounded-sm bg-[#1a1a1a] p-[11px] text-[var(--tg-fg)] transition-colors hover:bg-[#222]"
            >
              <Image
                src="/coingecko-white.46524c06.png"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5 opacity-90"
                aria-hidden
              />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
