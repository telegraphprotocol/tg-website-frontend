import axios from "axios"
import { Subnet, CreateSubnetDto, UpdateSubnetDto } from "@/types/admin"

const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:15530"

const adminApiClient = axios.create({
  baseURL: BACKEND_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
})

adminApiClient.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("admin_token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

adminApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("admin_token")
        window.location.href = "/admin/login"
      }
    }
    return Promise.reject(error)
  }
)

export const adminQueries = {
  getAllSubnets: async (): Promise<Subnet[]> => {
    const response = await adminApiClient.get<Subnet[]>("/admin/subnets")
    return response.data
  },

  getSubnetById: async (id: number): Promise<Subnet> => {
    const response = await adminApiClient.get<Subnet>(`/admin/subnets/${id}`)
    return response.data
  },

  createSubnet: async (data: CreateSubnetDto): Promise<Subnet> => {
    const response = await adminApiClient.post<Subnet>("/admin/subnets", data)
    return response.data
  },

  updateSubnet: async (id: number, data: UpdateSubnetDto): Promise<Subnet> => {
    const response = await adminApiClient.patch<Subnet>(`/admin/subnets/${id}`, data)
    return response.data
  },

  deleteSubnet: async (id: number): Promise<void> => {
    await adminApiClient.delete(`/admin/subnets/${id}`)
  },

  syncSubnets: async (): Promise<{ message: string }> => {
    const response = await adminApiClient.get<{ message: string }>("/admin/subnets/sync")
    return response.data
  },
}

