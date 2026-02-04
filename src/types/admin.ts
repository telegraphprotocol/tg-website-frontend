export interface Subnet {
  id: number
  netuid: number
  name: string | null
  active: boolean
  signal: string | null
  signalVolume: string | null
  apiAvailability: string
  paymentMethod: string
  integrationStatus: string
  whatTheySell: string | null
  description: string | null
  buyableSignals: string | null
  whyValuable: string | null
  computeType: string | null
  pricePerInference: string | null
  integrationEase: string | null
  reliabilityScore: string | null
  pricePerCrossChain: string | null
  otherNotes: string | null
  createdAt: string
  updatedAt: string
}

export interface CreateSubnetDto {
  netuid: number
  name?: string
  active?: boolean
  signal?: string
  signalVolume?: string
  apiAvailability?: string
  paymentMethod?: string
  integrationStatus?: string
  whatTheySell?: string
  description?: string
  buyableSignals?: string
  whyValuable?: string
  computeType?: string
  pricePerInference?: string
  integrationEase?: string
  reliabilityScore?: string
  pricePerCrossChain?: string
  otherNotes?: string
}

export type UpdateSubnetDto = Partial<CreateSubnetDto>

