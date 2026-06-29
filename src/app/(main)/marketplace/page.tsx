import type { Metadata } from "next";
import { MarketplaceTable } from "@/components/marketplace-table";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://telegraphprotocol.com";

export const metadata: Metadata = {
  title: "Marketplace - Buy & Trade AI Signals",
  description:
    "Browse and purchase verified AI signals from Bittensor subnets. Turn subnet inference into tradeable commodities—buy and trade on-chain signals across supported chains. Real-time pricing, availability, and integration status.",
  openGraph: {
    title: "Telegraph Marketplace - Buy & Trade AI Signals",
    description:
      "Browse and purchase verified AI signals from Bittensor subnets. Turn subnet inference into tradeable commodities.",
    url: `${baseUrl}/marketplace`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/telegraph-social-card.jpg`,
        width: 1200,
        height: 630,
        alt: "Telegraph Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telegraph Marketplace - Buy & Trade AI Signals",
    description:
      "Browse and purchase verified AI signals from Bittensor subnets. Turn subnet inference into tradeable commodities.",
    images: [`${baseUrl}/telegraph-social-card.jpg`],
  },
  alternates: {
    canonical: `${baseUrl}/marketplace`,
  },
};

export default function MarketplacePage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto max-w-7xl px-4 lg:py-28 py-12">
        <div className="mb-10 text-center">
          <h1 className="font-space-grotesk leading-tight tracking-tight text-foreground text-4xl mb-4">
            Telegraph Marketplace
          </h1>
          <p className="mx-auto max-w-3xl lg:text-lg text-base leading-relaxed text-muted-foreground">
            Turn Bittensor subnet inference into a tradeable commodity—buy and
            trade on-chain signals across supported chains.
          </p>
        </div>
        <MarketplaceTable />
      </div>
    </main>
  );
}
