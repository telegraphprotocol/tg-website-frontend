import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SiteFrame } from "@/components/landing/site-frame"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function UpdatesLayout({ children }: { children: ReactNode }) {
  return (
    <SiteFrame>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </SiteFrame>
  )
}
