import type { Metadata } from "next";
import { EarnHero } from "@/components/landing/earn/hero";
import { EconomicFlow } from "@/components/landing/earn/economic-flow";
import { WaysToEarn } from "@/components/landing/earn/ways-to-earn";
import { ThemeScope } from "@/components/landing/redesign/theme-scope";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://telegraphprotocol.com";

export const metadata: Metadata = {
  title: "Earn - Supply, Evaluate, Verify & Build on Telegraph",
  description:
    "Earn on Telegraph, the network that turns intelligence into a graded commodity. Supply intelligence as a Miner, build Evaluators, run a Validator, or build with the network - paid demand follows performance.",
  openGraph: {
    title: "Earn on Telegraph - Supply, Evaluate, Verify & Build",
    description:
      "Four ways to earn on Telegraph: supply intelligence as a Miner, build Evaluators, run a Validator, or build with the network.",
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
    title: "Earn on Telegraph - Supply, Evaluate, Verify & Build",
    description:
      "Four ways to earn on Telegraph: supply intelligence as a Miner, build Evaluators, run a Validator, or build with the network.",
    images: [`${baseUrl}/telegraph-social-card.jpg`],
  },
  alternates: {
    canonical: `${baseUrl}/earn`,
  },
};

export default function EarnPage() {
  return (
    <ThemeScope>
      <EarnHero />
      <WaysToEarn />
      <EconomicFlow />
    </ThemeScope>
  );
}
