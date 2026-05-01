import { ReactNode } from "react";

export function SiteFrame({ children }: { children: ReactNode }) {
  return <div className="tg-frame">{children}</div>;
}
