"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSubnets, useCreateSubnet, useUpdateSubnet, useDeleteSubnet, useSyncSubnets } from "@/hooks/use-admin"
import { Subnet, CreateSubnetDto } from "@/types/admin"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Plus, RefreshCw, Edit, Trash2, Loader2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AdminPage() {
  const router = useRouter()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingSubnet, setEditingSubnet] = useState<Subnet | null>(null)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("admin_token")
      if (!token) {
        router.push("/admin/login")
      } else {
        setIsCheckingAuth(false)
      }
    }
  }, [router])
  const [formData, setFormData] = useState<CreateSubnetDto>({
    netuid: 0,
    name: "",
    active: false,
    signal: "",
    signalVolume: "",
    apiAvailability: "Unavailable",
    paymentMethod: "Token",
    integrationStatus: "Blocked",
    whatTheySell: "",
    description: "",
    buyableSignals: "",
    whyValuable: "",
    computeType: "",
    pricePerInference: "",
    integrationEase: "",
    reliabilityScore: "",
    pricePerCrossChain: "",
    otherNotes: "",
  })

  const { data: subnets, isLoading } = useSubnets()
  const createMutation = useCreateSubnet()
  const updateMutation = useUpdateSubnet()
  const deleteMutation = useDeleteSubnet()
  const syncMutation = useSyncSubnets()

  const handleOpenDialog = (subnet?: Subnet) => {
    if (subnet) {
      setEditingSubnet(subnet)
      setFormData({
        netuid: subnet.netuid,
        name: subnet.name || "",
        active: subnet.active,
        signal: subnet.signal || "",
        signalVolume: subnet.signalVolume || "",
        apiAvailability: subnet.apiAvailability,
        paymentMethod: subnet.paymentMethod,
        integrationStatus: subnet.integrationStatus,
        whatTheySell: subnet.whatTheySell || "",
        description: subnet.description || "",
        buyableSignals: subnet.buyableSignals || "",
        whyValuable: subnet.whyValuable || "",
        computeType: subnet.computeType || "",
        pricePerInference: subnet.pricePerInference || "",
        integrationEase: subnet.integrationEase || "",
        reliabilityScore: subnet.reliabilityScore || "",
        pricePerCrossChain: subnet.pricePerCrossChain || "",
        otherNotes: subnet.otherNotes || "",
      })
    } else {
      setEditingSubnet(null)
      setFormData({
        netuid: 0,
        name: "",
        active: false,
        signal: "",
        signalVolume: "",
        apiAvailability: "Unavailable",
        paymentMethod: "Token",
        integrationStatus: "Blocked",
        whatTheySell: "",
        description: "",
        buyableSignals: "",
        whyValuable: "",
        computeType: "",
        pricePerInference: "",
        integrationEase: "",
        reliabilityScore: "",
        pricePerCrossChain: "",
        otherNotes: "",
      })
    }
    setIsDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
    setEditingSubnet(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingSubnet) {
        await updateMutation.mutateAsync({ id: editingSubnet.id, data: formData })
      } else {
        await createMutation.mutateAsync(formData)
      }
      handleCloseDialog()
    } catch (error) {
      console.error("Error saving subnet:", error)
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this subnet?")) {
      try {
        await deleteMutation.mutateAsync(id)
      } catch (error) {
        console.error("Error deleting subnet:", error)
      }
    }
  }

  const handleSync = async () => {
    try {
      await syncMutation.mutateAsync()
      alert("Sync completed successfully!")
    } catch (error) {
      console.error("Error syncing subnets:", error)
      alert("Error syncing subnets. Please check the console.")
    }
  }

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="container mx-auto py-20 px-4 max-w-7xl">
      <div className="flex justify-between items-center mb-6 lg:flex-row flex-col gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">Subnets</h1>
          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 font-medium rounded-md">{subnets?.filter((subnet) => subnet.active).length || 0} active</span>
        </div>
        <div className="flex gap-2 lg:flex-row flex-col lg:w-fit w-full">
          <Button
            onClick={handleSync}
            disabled={syncMutation.isPending}
            variant="outline"
          >
            {syncMutation.isPending ? (
              <RefreshCw className="h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4" />
            )}
            Sync from Taostats
          </Button>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => handleOpenDialog()} variant="outline">
                <Plus className="h-4 w-4" />
                Add Subnet
              </Button>
            </DialogTrigger>
            <DialogContent 
              className="max-w-2xl max-h-[90vh] pr-3"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <DialogHeader>
                <DialogTitle>
                  {editingSubnet ? "Edit Subnet" : "Add New Subnet"}
                </DialogTitle>
                <DialogDescription>
                  {editingSubnet
                    ? "Update the subnet information below."
                    : "Fill in the subnet information below."}
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="max-h-[60vh] pr-3">
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="netuid">NetUID *</Label>
                      <Input
                        id="netuid"
                        type="number"
                        value={formData.netuid}
                        onChange={(e) =>
                          setFormData({ ...formData, netuid: parseInt(e.target.value) || 0 })
                        }
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="active">Active</Label>
                      <select
                        id="active"
                        value={formData.active ? "true" : "false"}
                        onChange={(e) =>
                          setFormData({ ...formData, active: e.target.value === "true" })
                        }
                        className="h-10 rounded-md border border-input bg-background px-3 py-2"
                      >
                        <option value="false">Inactive</option>
                        <option value="true">Active</option>
                      </select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="apiAvailability">API Availability</Label>
                      <Input
                        id="apiAvailability"
                        value={formData.apiAvailability}
                        onChange={(e) =>
                          setFormData({ ...formData, apiAvailability: e.target.value })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="paymentMethod">Payment Method</Label>
                      <Input
                        id="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={(e) =>
                          setFormData({ ...formData, paymentMethod: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="integrationStatus">Integration Status</Label>
                    <Input
                      id="integrationStatus"
                      value={formData.integrationStatus}
                      onChange={(e) =>
                        setFormData({ ...formData, integrationStatus: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="signal">Signal</Label>
                    <Input
                      id="signal"
                      value={formData.signal}
                      onChange={(e) =>
                        setFormData({ ...formData, signal: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="signalVolume">Signal Volume</Label>
                    <Input
                      id="signalVolume"
                      value={formData.signalVolume}
                      onChange={(e) =>
                        setFormData({ ...formData, signalVolume: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="whatTheySell">What They Sell</Label>
                    <Textarea
                      id="whatTheySell"
                      value={formData.whatTheySell}
                      onChange={(e) =>
                        setFormData({ ...formData, whatTheySell: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="buyableSignals">Buyable Signals</Label>
                    <Textarea
                      id="buyableSignals"
                      value={formData.buyableSignals}
                      onChange={(e) =>
                        setFormData({ ...formData, buyableSignals: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="whyValuable">Why It's Valuable</Label>
                    <Textarea
                      id="whyValuable"
                      value={formData.whyValuable}
                      onChange={(e) =>
                        setFormData({ ...formData, whyValuable: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="computeType">Compute Type</Label>
                      <Input
                        id="computeType"
                        value={formData.computeType}
                        onChange={(e) =>
                          setFormData({ ...formData, computeType: e.target.value })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="pricePerInference">Price per Inference</Label>
                      <Input
                        id="pricePerInference"
                        value={formData.pricePerInference}
                        onChange={(e) =>
                          setFormData({ ...formData, pricePerInference: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="integrationEase">Integration Ease</Label>
                      <Input
                        id="integrationEase"
                        value={formData.integrationEase}
                        onChange={(e) =>
                          setFormData({ ...formData, integrationEase: e.target.value })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="reliabilityScore">Reliability Score</Label>
                      <Input
                        id="reliabilityScore"
                        value={formData.reliabilityScore}
                        onChange={(e) =>
                          setFormData({ ...formData, reliabilityScore: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="pricePerCrossChain">Price per Cross-Chain Call</Label>
                    <Input
                      id="pricePerCrossChain"
                      value={formData.pricePerCrossChain}
                      onChange={(e) =>
                        setFormData({ ...formData, pricePerCrossChain: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="otherNotes">Other Notes</Label>
                    <Textarea
                      id="otherNotes"
                      value={formData.otherNotes}
                      onChange={(e) =>
                        setFormData({ ...formData, otherNotes: e.target.value })
                      }
                    />
                  </div>
                </div>
                <DialogFooter>
                    <Button type="button" variant="outline" onClick={handleCloseDialog}>
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={createMutation.isPending || updateMutation.isPending}
                    >
                      {createMutation.isPending || updateMutation.isPending ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : null}
                      {editingSubnet ? "Update" : "Create"}
                    </Button>
                  </DialogFooter>
                </form>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>

                <TableHead>NetUID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Active</TableHead>
                <TableHead>Signal</TableHead>
                <TableHead>API Availability</TableHead>
                <TableHead>Integration Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subnets && subnets.length > 0 ? (
                subnets.map((subnet) => (
                  <TableRow key={subnet.id}>
                    <TableCell><span className="text-sm text-muted-foreground">#{subnet.netuid}</span></TableCell>
                    <TableCell><span className="font-medium text-foreground">{subnet.name || "-"}</span></TableCell>
                    <TableCell>
                      <Badge variant={subnet.active ? "outline" : "secondary"} className={`font-medium ${subnet.active ? "opacity-100" : "opacity-50"}`}>
                        <span>
                          {subnet.active ? "Active" : "Inactive"}
                        </span>
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-xs truncate text-sm">
                      {subnet.signal || "-"}
                    </TableCell>
                    <TableCell className="text-sm">{subnet.apiAvailability}</TableCell>
                    <TableCell className="text-sm">{subnet.integrationStatus}</TableCell>
                    <TableCell>
                      <div className="flex gap-2 lg:justify-end">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleOpenDialog(subnet)}
                          className="h-7 w-7 rounded-full"
                        >
                          <Edit className="h-2.5 w-2.5 flex-shrink-0" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(subnet.id)}
                          disabled={deleteMutation.isPending}
                          className="h-7 w-7 rounded-full"
                        >
                          <Trash2 className="h-2.5 w-2.5 flex-shrink-0" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8">
                    No subnets found. Click "Add Subnet" to create one.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}

