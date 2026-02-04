export interface PoolLatestResponse {
  data: SubnetData[]
}

export interface SubnetData {
  netuid: number
  name: string
  enabled_user_liquidity?: number
  tao_volume_24_hr?: number
  details?: SubnetDetails
}

export interface SubnetDetails {
  signal?: string
  signal_volume?: string
  api_availability?: string
  payment_method?: string
  integration_status?: string
  sell?: string
  description?: string
  Buyable?: string
  why?: string
  compute_type?: string
  price_per_inference?: string
  integration_ease?: string
  reliability_score?: string
  price_per_crosschain?: string
  other_notes?: string
  name?: string
  vol?: string
}

export interface PriceLatestResponse {
  pagination: {
    current_page: number
    per_page: number
    total_items: number
    total_pages: number
    next_page: number | null
    prev_page: number | null
  }
  data: PriceData[]
}

export interface PriceData {
  created_at: string
  updated_at: string
  name: string
  symbol: string
  slug: string
  circulating_supply: string
  max_supply: string
  total_supply: string
  last_updated: string
  price: string
  volume_24h: string
  market_cap: string
  percent_change_1h: string
  percent_change_24h: string
  percent_change_7d: string
  percent_change_30d: string
  percent_change_60d: string
  percent_change_90d: string
  market_cap_dominance: string
  fully_diluted_market_cap: string
}

export interface MarketplaceTableRow {
  id: string
  subnetName: string
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

