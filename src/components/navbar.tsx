"use client";

import Link from "next/link";
import { Coins, FileBarChart, FileText, Menu, Terminal, X } from "lucide-react";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { CtaButton } from "./landing/cta-button";
import Image from "next/image";
import { useEffect, useState } from "react";

const MACHINA_REPORT_URL = "/Machina_Token_Price_Scenarios_v66.pdf";
const WHITEPAPER_URL = "/Whitepapers%20-%20Telegraph%20Protocol.pdf";

export function Navbar() {
  const [open, setOpen] = useState(false);

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

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 flex h-[72px] items-center border-b border-[var(--tg-line)] bg-[#010101]/50 backdrop-blur-md supports-[backdrop-filter]:bg-[#010101]/55">
      <div className="flex w-full items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          aria-label="Telegraph home"
          className="flex items-center gap-2.5 text-[17px] font-medium text-[var(--tg-fg)] no-underline"
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
          <Link
            href={MACHINA_REPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm border border-amber-500/80 bg-amber-500/10 px-[17px] py-[10px] text-[14px] font-semibold leading-none text-amber-400 no-underline transition-all hover:border-amber-400 hover:bg-amber-500/15 hover:text-amber-300"
          >
            <FileBarChart className="h-4 w-4" aria-hidden />
            <span>MACHINA: Token Report</span>
          </Link>
          <CtaButton
            href={WHITEPAPER_URL}
            target="_blank"
            variant="dark"
            arrow={false}
          >
            <FileText className="h-4 w-4 opacity-80" aria-hidden />
            <span>Whitepaper</span>
          </CtaButton>
          <CtaButton href="/earn" variant="dark" arrow={false}>
            <Coins className="h-4 w-4 opacity-80" aria-hidden />
            <span>Earn</span>
          </CtaButton>
          <CtaButton
            href="https://terminal.telegraphprotocol.com"
            target="_blank"
            arrow={false}
          >
            <Terminal className="h-4 w-4" strokeWidth={2.5} aria-hidden />
            <span className="font-semibold">Launch Terminal</span>
          </CtaButton>
          <span
            aria-hidden
            className="mx-1 h-5 w-px bg-[var(--tg-line)]"
          />
          <Link
            href="https://x.com/Telegraphprotoc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegraph on X"
            className="inline-flex items-center justify-center rounded-sm bg-[#1a1a1a] p-[11px] text-[var(--tg-fg)] transition-colors hover:bg-[#222]"
          >
            <FaXTwitter className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="https://discord.gg/telegraphprotocol"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegraph on Discord"
            className="inline-flex items-center justify-center rounded-sm bg-[#1a1a1a] p-[11px] text-[var(--tg-fg)] transition-colors hover:bg-[#222]"
          >
            <FaDiscord className="h-4 w-4 opacity-90" aria-hidden />
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href={MACHINA_REPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MACHINA Token Report"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm border border-amber-500/80 bg-amber-500/10 px-2.5 py-[9px] text-[11px] font-semibold uppercase tracking-[0.06em] text-amber-400 no-underline transition-colors hover:border-amber-400 hover:bg-amber-500/15 hover:text-amber-300"
          >
            <FileBarChart className="h-3.5 w-3.5" aria-hidden />
            <span>Token Report</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="tg-mobile-nav"
            className="inline-flex items-center justify-center rounded-sm bg-[#1a1a1a] p-[11px] text-[var(--tg-fg)] transition-colors hover:bg-[#222]"
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

          <Link
            href="/earn"
            onClick={close}
            className="inline-flex items-center gap-3 rounded-sm bg-[#1a1a1a] px-4 py-3 text-[14px] font-medium text-[var(--tg-fg)] no-underline transition-colors hover:bg-[#222]"
          >
            <Coins className="h-4 w-4 opacity-80" aria-hidden />
            <span>Earn</span>
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
            href="https://terminal.telegraphprotocol.com"
            target="_blank"
            onClick={close}
            className="inline-flex items-center gap-3 rounded-sm bg-[#f2f2f2] px-4 py-3 text-[14px] font-semibold text-black no-underline transition-colors hover:bg-white"
          >
            <Terminal className="h-4 w-4" strokeWidth={2.5} aria-hidden />
            <span>Launch Terminal</span>
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
              <FaXTwitter className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="https://discord.gg/telegraphprotocol"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegraph on Discord"
              onClick={close}
              className="inline-flex items-center justify-center rounded-sm bg-[#1a1a1a] p-[11px] text-[var(--tg-fg)] transition-colors hover:bg-[#222]"
            >
              <FaDiscord className="h-4 w-4 opacity-90" aria-hidden />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
