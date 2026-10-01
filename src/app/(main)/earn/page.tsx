import type { Metadata } from "next";
import { EarnHero } from "@/components/landing/earn/hero";
import { EarnUseCases } from "@/components/landing/earn/use-cases";
import { WaysToEarn } from "@/components/landing/earn/ways-to-earn";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://telegraphprotocol.com";

export const metadata: Metadata = {
  title: "Earn - Supply, Evaluate, Verify & Build on Telegraph",
  description:
    "Earn on Telegraph, the network that turns intelligence into a graded commodity. Supply intelligence as a provider, build Evaluators, run a Validator, build with the network, or query through Alexandria - paid demand follows performance.",
  openGraph: {
    title: "Earn on Telegraph - Supply, Evaluate, Verify & Build",
    description:
      "Five ways to earn on Telegraph: supply intelligence, build Evaluators, query with Alexandria, build with the network, or run a Validator.",
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
      "Five ways to earn on Telegraph: supply intelligence, build Evaluators, query with Alexandria, build with the network, or run a Validator.",
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
