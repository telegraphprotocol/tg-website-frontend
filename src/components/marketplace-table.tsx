"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Search, Loader2 } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useMarketplaceData } from "@/hooks/use-marketplace"

type SortField =
  | "subnetName"
  | "tradingVol"
  | "signal"
  | "signalVolume"
  | "apiAvailability"
  | "paymentMethod"
  | "integrationStatus"

type SortDirection = "asc" | "desc" | null

export function MarketplaceTable() {
  const { data, isLoading } = useMarketplaceData()
  const [currency, setCurrency] = useState<"TAO" | "USD">("TAO")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortField, setSortField] = useState<SortField | null>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>(null)
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set())

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      if (sortDirection === "asc") {
        setSortDirection("desc")
      } else if (sortDirection === "desc") {
        setSortField(null)
        setSortDirection(null)
      } else {
        setSortDirection("asc")
      }
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const toggleRow = (id: string) => {
    const newExpanded = new Set(expandedRows)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedRows(newExpanded)
  }

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ChevronUp className="h-4 w-4 opacity-30" />
    }
    if (sortDirection === "asc") {
      return <ChevronUp className="h-4 w-4" />
    }
    if (sortDirection === "desc") {
      return <ChevronDown className="h-4 w-4" />
    }
    return <ChevronUp className="h-4 w-4 opacity-30" />
  }

  const filteredData = (data || []).filter((item) =>
    item.subnetName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.uid.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortField || !sortDirection) return 0

    let aValue: string | number = ""
    let bValue: string | number = ""

    switch (sortField) {
      case "subnetName":
        aValue = a.subnetName
        bValue = b.subnetName
        break
      case "tradingVol":
        aValue = parseFloat(a.tradingVol24h.replace(/[^0-9.]/g, ""))
        bValue = parseFloat(b.tradingVol24h.replace(/[^0-9.]/g, ""))
        break
      case "signal":
        aValue = a.signal
        bValue = b.signal
        break
      case "signalVolume":
        aValue = a.signalVolume
        bValue = b.signalVolume
        break
      case "apiAvailability":
        aValue = a.apiAvailability
        bValue = b.apiAvailability
        break
      case "paymentMethod":
        aValue = a.paymentMethod
        bValue = b.paymentMethod
        break
      case "integrationStatus":
        aValue = a.integrationStatus
        bValue = b.integrationStatus
        break
    }

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue
    }

    const comparison = String(aValue).localeCompare(String(bValue))
    return sortDirection === "asc" ? comparison : -comparison
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs value={currency} onValueChange={(v) => setCurrency(v as "TAO" | "USD")}>
          <TabsList>
            <TabsTrigger value="TAO">TAO</TabsTrigger>
            <TabsTrigger value="USD">USD</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="relative w-full sm:w-auto sm:min-w-[300px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search subnet"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                className="cursor-pointer select-none"
                onClick={() => handleSort("subnetName")}
              >
                <div className="flex items-center gap-2">
                  Subnet Name
                  {getSortIcon("subnetName")}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer select-none"
                onClick={() => handleSort("tradingVol")}
              >
                <div className="flex items-center gap-2">
                  Volume (24h)
                  {getSortIcon("tradingVol")}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer select-none"
                onClick={() => handleSort("signal")}
              >
                <div className="flex items-center gap-2">
                  Signal
                  {getSortIcon("signal")}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer select-none"
                onClick={() => handleSort("signalVolume")}
              >
                <div className="flex items-center gap-2">
                  Signal Volume
                  {getSortIcon("signalVolume")}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer select-none"
                onClick={() => handleSort("apiAvailability")}
              >
                <div className="flex items-center gap-2">
                  API Availability
                  {getSortIcon("apiAvailability")}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer select-none"
                onClick={() => handleSort("paymentMethod")}
              >
                <div className="flex items-center gap-2">
                  Payment Method
                  {getSortIcon("paymentMethod")}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer select-none"
                onClick={() => handleSort("integrationStatus")}
              >
                <div className="flex items-center gap-2">
                  Integration Status
                  {getSortIcon("integrationStatus")}
                </div>
              </TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                  No subnets found
                </TableCell>
              </TableRow>
            ) : (
              sortedData.map((row) => {
              const isExpanded = expandedRows.has(row.id)
              return (
                <>
                  <TableRow key={row.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">
                      <div>
                        <div>{row.subnetName}</div>
                        <div className="text-sm text-muted-foreground">
                          UID: {row.uid}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{row.tradingVol24h}</TableCell>
                    <TableCell>{row.signal}</TableCell>
                    <TableCell>{row.signalVolume}</TableCell>
                    <TableCell>{row.apiAvailability}</TableCell>
                    <TableCell>{row.paymentMethod}</TableCell>
                    <TableCell>{row.integrationStatus}</TableCell>
                    <TableCell>
                      <button
                        onClick={() => toggleRow(row.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted transition-colors border"
                      >
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                    </TableCell>
                  </TableRow>
                  {isExpanded && (
                    <TableRow>
                      <TableCell colSpan={8} className="bg-muted/30">
                        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
                          <div>
                            <div className="mb-2 font-medium text-foreground">
                              What They Sell:
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {row.details.whatTheySell}
                            </div>
                          </div>
                          <div>
                            <div className="mb-2 font-medium text-foreground">
                              Description:
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {row.details.description}
                            </div>
                          </div>
                          <div>
                            <div className="mb-2 font-medium text-foreground">
                              Buyable Signals:
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {row.details.buyableSignals}
                            </div>
                          </div>
                          <div>
                            <div className="mb-2 font-medium text-foreground">
                              Why It's Valuable:
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {row.details.whyValuable}
                            </div>
                          </div>
                          <div>
                            <div className="mb-2 font-medium text-foreground">
                              Compute Type:
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {row.details.computeType}
                            </div>
                          </div>
                          <div>
                            <div className="mb-2 font-medium text-foreground">
                              Price per Inference Call:
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {row.details.pricePerInferenceCall}
                            </div>
                          </div>
                          <div>
                            <div className="mb-2 font-medium text-foreground">
                              Integration Ease:
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {row.details.integrationEase}
                            </div>
                          </div>
                          <div>
                            <div className="mb-2 font-medium text-foreground">
                              Reliability Score:
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {row.details.reliabilityScore}
                            </div>
                          </div>
                          <div>
                            <div className="mb-2 font-medium text-foreground">
                              Price per Cross-Chain Call:
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {row.details.pricePerCrossChainCall}
                            </div>
                          </div>
                          <div>
                            <div className="mb-2 font-medium text-foreground">
                              Other Notes:
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {row.details.otherNotes}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              )
              })
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

