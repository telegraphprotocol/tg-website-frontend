import { useQuery } from "@tanstack/react-query"
import { marketplaceQueries } from "@/queries/marketplace"
import { MarketplaceTableRow } from "@/types/marketplace"

interface BackendSubnetResponse {
  id: number
  netuid: number
  name: string
  uid: string
  tradingVol24h: string
  signal: string
  signalVolume: string
  apiAvailability: string
  paymentMethod: string
  integrationStatus: string
  details: {
    whatTheySell: string
    description: string
    buyableSignals: string
    whyValuable: string
    computeType: string
    pricePerInferenceCall: string
    integrationEase: string
    reliabilityScore: string
    pricePerCrossChainCall: string
    otherNotes: string
  }
}

export function useMarketplaceData() {
  const { data, isLoading } = useQuery({
    queryKey: ["marketplace-subnets"],
    queryFn: async () => {
      const result = await marketplaceQueries.getSubnetsFromBackend()
      return result as BackendSubnetResponse[]
    },
    staleTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
  })

  return {
    data: (data || []).map((subnet: BackendSubnetResponse) => ({
      id: `subnet-${subnet.netuid}`,
      subnetName: subnet.name,
      uid: subnet.uid,
      tradingVol24h: subnet.tradingVol24h,
      signal: subnet.signal,
      signalVolume: subnet.signalVolume,
      apiAvailability: subnet.apiAvailability,
      paymentMethod: subnet.paymentMethod,
      integrationStatus: subnet.integrationStatus,
      details: subnet.details,
    })) as MarketplaceTableRow[],
    isLoading,
    taoPriceUSD: 0,
  }
}

