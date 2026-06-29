import type { Metadata } from "next";
import { EarnHero } from "@/components/landing/earn/hero";
import { EarnUseCases } from "@/components/landing/earn/use-cases";
import { WaysToEarn } from "@/components/landing/earn/ways-to-earn";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://telegraphprotocol.com";

export const metadata: Metadata = {
  title: "Earn — Mine, Validate & Build on Telegraph",
  description:
    "Earn on Telegraph Protocol. Become a miner, script author, run a node, build with verified signal APIs, or query the Terminal — every contribution to the machine economy is rewarded.",
  openGraph: {
    title: "Earn on Telegraph — Mine, Validate & Build",
    description:
      "Five ways to earn on Telegraph: mine signals, author scripts, run a node, build with signal APIs, or launch the Terminal.",
    url: `${baseUrl}/earn`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/telegraph-social-card.jpg`,
        width: 1200,
        height: 630,
        alt: "Earn on Telegraph Protocol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Earn on Telegraph — Mine, Validate & Build",
    description:
      "Five ways to earn on Telegraph: mine signals, author scripts, run a node, build with signal APIs, or launch the Terminal.",
    images: [`${baseUrl}/telegraph-social-card.jpg`],
  },
  alternates: {
    canonical: `${baseUrl}/earn`,
  },
};

export default function EarnPage() {
  return (
    <>
      <EarnHero />
      <EarnUseCases />
      <WaysToEarn />
    </>
  );
}
