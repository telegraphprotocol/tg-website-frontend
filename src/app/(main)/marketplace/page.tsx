import { MarketplaceTable } from "@/components/marketplace-table"

export default function MarketplacePage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto max-w-7xl px-4 lg:py-24 py-20">
        <div className="mb-8 text-center">
          <h1 className="font-space-grotesk leading-tight tracking-tight text-foreground text-5xl mb-4">
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
  )
}

