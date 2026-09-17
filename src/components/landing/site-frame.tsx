"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRedesignTheme } from "./redesign/theme-context";

export function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { theme } = useRedesignTheme();
  const isLight = pathname === "/" && theme === "light";

  useEffect(() => {
    document.body.style.backgroundColor = isLight ? "#ffffff" : "";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [isLight]);

  return (
    <div className="tg-frame" data-tg-theme={isLight ? "light" : "dark"}>
      {children}
    </div>
  );
}
