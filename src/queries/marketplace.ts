import axios from "axios"
import {
  PoolLatestResponse,
  PriceLatestResponse,
} from "@/types/marketplace"

const API_BASE_URL = process.env.NEXT_PUBLIC_TAOSTATS_API_BASE_URL || "https://api.taostats.io/api"
const API_KEY = process.env.NEXT_PUBLIC_TAOSTATS_API_KEY || ""

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: API_KEY,
    Accept: "application/json",
  },
  timeout: 15000,
})

export interface SubnetDetailItem {
  netuid: number
  name: string
  vol: string
  signal: string
  signal_volume: string
  api_availability: string
  payment_method: string
  integration_status: string
  sell: string
  description: string
  Buyable: string
  why: string
  compute_type: string
  price_per_inference: string
  integration_ease: string
  reliability_score: string
  price_per_crosschain: string
  other_notes: string
}

export type SubnetDetailsResponse = SubnetDetailItem[]

const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:15530"

export const marketplaceQueries = {
  getPoolLatest: async (): Promise<PoolLatestResponse> => {
    const response = await apiClient.get<PoolLatestResponse>(
      "/dtao/pool/latest/v1"
    )
    return response.data
  },

  getPriceLatest: async (): Promise<PriceLatestResponse> => {
    const response = await apiClient.get<PriceLatestResponse>(
      "/price/latest/v1",
      {
        params: {
          asset: "tao",
        },
      }
    )
    return response.data
  },

  getSubnetDetails: async (
    wordpressUrl?: string
  ): Promise<SubnetDetailsResponse> => {
    if (wordpressUrl) {
      try {
        const response = await axios.get<SubnetDetailsResponse>(
          `${wordpressUrl}/wp-json/telegraph/v1/subnet-details`
        )
        return response.data
      } catch (error) {
        console.error("Error fetching subnet details from WordPress:", error)
      }
    }
    return []
  },

  getSubnetsFromBackend: async (): Promise<any[]> => {
    try {
      const response = await axios.get<any[]>(
        `${BACKEND_API_URL}/api/subnets`
      )
      return response.data
    } catch (error) {
      console.error("Error fetching subnets from backend:", error)
      return []
    }
  },
}

