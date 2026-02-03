import Image from "next/image"
import { Shield, Receipt, Eye, RefreshCw, Cog, FileQuestion } from "lucide-react"

export function TheShiftSection() {
  return (
    <section
      id="shift"
      className="relative overflow-hidden px-4 py-20"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-muted">
            <Shield className="h-4 w-4 text-foreground" />
          </div>
          <h2 className="text-4xl font-semibold text-foreground md:text-5xl">
            THE SHIFT
          </h2>
        </div>

        <div className="relative my-16 flex items-center justify-center">
          <div className="relative z-10">
            <Image
              src="/section/globe.png"
              alt="Globe"
              width={600}
              height={600}
              className="mx-auto opacity-20"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 md:relative md:translate-x-0 md:translate-y-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-foreground">
                  <Shield className="h-6 w-6 text-background" />
                </div>
                <div className="mt-4 rounded-lg bg-muted p-4">
                  <p className="text-sm font-medium text-foreground">
                    Verifiable Inference
                  </p>
                </div>
              </div>

              <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 md:relative md:translate-x-0 md:translate-y-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-foreground">
                  <Receipt className="h-6 w-6 text-background" />
                </div>
                <div className="mt-4 rounded-lg bg-muted p-4">
                  <p className="text-sm font-medium text-foreground">
                    On-Chain Receipts
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 md:relative md:translate-x-0 md:translate-y-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-foreground">
                  <Eye className="h-6 w-6 text-background" />
                </div>
                <div className="mt-4 rounded-lg bg-muted p-4">
                  <p className="text-sm font-medium text-foreground">
                    Transparent Signal Production
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 text-right">
          <p className="text-lg font-semibold text-foreground">
            Prediction markets are scaling.
          </p>
          <p className="text-muted-foreground">
            But the most valuable input — the edge — still lives off-chain
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <RefreshCw className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-lg font-semibold text-foreground">
                Private research lorem Ipsum
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              dolor sit amet, consectetur adipiscing sed do eiusmod tempor
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Cog className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-lg font-semibold text-foreground">
                Black-box AI lorem Ipsum
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              dolor sit amet, consectetur adipiscing sed do eiusmod tempor
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FileQuestion className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-lg font-semibold text-foreground">
                Unverifiable sources lorem Ipsum
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              dolor sit amet, consectetur adipiscing sed do eiusmod tempor
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

