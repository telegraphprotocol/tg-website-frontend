"use client";

import { ReactNode } from "react";
import { useRedesignTheme } from "./theme-context";

// react-tweet themes itself from the nearest data-theme attribute and exposes
// --tweet-* variables; remap them onto the site's --tg-* tokens so the card
// matches the other boxes on the page.
const TOKENS = [
  "[&_.react-tweet-theme]:![--tweet-container-margin:0]",
  "[&_.react-tweet-theme]:![--tweet-bg-color:var(--tg-surface)]",
  "[&_.react-tweet-theme]:![--tweet-bg-color-hover:var(--tg-surface-strong)]",
  "[&_.react-tweet-theme]:![--tweet-border:1px_solid_var(--tg-line)]",
  "[&_.react-tweet-theme]:![--tweet-font-color:var(--tg-fg)]",
  "[&_.react-tweet-theme]:![--tweet-font-color-secondary:var(--tg-fg-faint)]",
  "[&_article]:!rounded-sm",
].join(" ");

export function TweetFrame({ children }: { children: ReactNode }) {
  const { theme } = useRedesignTheme();

  return (
    <div data-theme={theme} className={TOKENS}>
      {children}
    </div>
  );
}
