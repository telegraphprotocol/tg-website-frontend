"use client";

import { ReactNode } from "react";
import { CtaButton } from "@/components/landing/cta-button";

declare global {
  interface Window {
    twq?: (...args: unknown[]) => void;
  }
}

export const WHITEPAPER_PDF =
  "/Telegraph%20Whitepaper%20%26%20Specification%20V2.0.pdf";
export const THESIS_PDF = `${WHITEPAPER_PDF}#page=4`;

// X "whitepaper opened" conversion (pixel rcv9y). Fired on every link that opens the PDF.
function trackWhitepaperOpen() {
  window.twq?.("event", "tw-rcv9y-rg17q", {});
}

export function WhitepaperButton({
  href = WHITEPAPER_PDF,
  variant = "primary",
  className = "",
  children,
}: {
  href?: string;
  variant?: "primary" | "ghost" | "dark";
  className?: string;
  children: ReactNode;
}) {
  return (
    <CtaButton
      href={href}
      variant={variant}
      target="_blank"
      className={className}
      onClick={trackWhitepaperOpen}
    >
      {children}
    </CtaButton>
  );
}

export function WhitepaperCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={THESIS_PDF}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={trackWhitepaperOpen}
    >
      {children}
    </a>
  );
}
