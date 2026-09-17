"use client";

import { ReactNode } from "react";
import { useRedesignTheme } from "./theme-context";

export function ThemeScope({ children }: { children: ReactNode }) {
  const { theme } = useRedesignTheme();

  return (
    <div data-tg-theme={theme} className="bg-[var(--tg-bg)]">
      {children}
    </div>
  );
}
