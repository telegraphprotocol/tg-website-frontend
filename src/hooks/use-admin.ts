import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { adminQueries } from "@/queries/admin"
import { CreateSubnetDto, UpdateSubnetDto } from "@/types/admin"

export function useSubnets() {
  return useQuery({
    queryKey: ["admin", "subnets"],
    queryFn: adminQueries.getAllSubnets,
  })
}

export function useSubnet(id: number) {
  return useQuery({
    queryKey: ["admin", "subnets", id],
    queryFn: () => adminQueries.getSubnetById(id),
    enabled: !!id,
  })
}

export function useCreateSubnet() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CreateSubnetDto) => adminQueries.createSubnet(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "subnets"] })
    },
  })
}

export function useUpdateSubnet() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateSubnetDto }) =>
      adminQueries.updateSubnet(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["admin", "subnets"] })
      queryClient.invalidateQueries({ queryKey: ["admin", "subnets", variables.id] })
    },
  })
}

export function useDeleteSubnet() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => adminQueries.deleteSubnet(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "subnets"] })
    },
  })
}

export function useSyncSubnets() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => adminQueries.syncSubnets(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "subnets"] })
    },
  })
}

