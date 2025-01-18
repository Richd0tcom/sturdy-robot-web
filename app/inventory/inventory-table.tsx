"use client"

import { DataTable } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { api } from "@/lib/api-client"
import { useRouter } from "next/navigation"

type InventoryItem = {
  id: string
  version_id: string
  branch_id: string
  quantity: number
  unit_cost: number
  last_counted: string
}

export function InventoryTable({ inventory }: { inventory: InventoryItem[] }) {
  const router = useRouter()

  const columns = [
    {
      accessorKey: "product_name",
      header: "Product",
    },
    {
      accessorKey: "quantity",
      header: "Quantity",
    },
    {
      accessorKey: "unit_cost",
      header: "Unit Cost",
      cell: ({ row }) => {
        const cost = parseFloat(row.getValue("unit_cost"))
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(cost)
        return formatted
      },
    },
    {
      accessorKey: "last_counted",
      header: "Last Counted",
      cell: ({ row }) => {
        return new Date(row.getValue("last_counted")).toLocaleDateString()
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const item = row.original

        return (
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const newQuantity = prompt("Enter new quantity:")
              if (newQuantity) {
                api.updateInventory(item.id, {
                  quantity: parseInt(newQuantity, 10),
                  last_counted: new Date().toISOString(),
                })
                router.refresh()
              }
            }}
          >
            Update Quantity
          </Button>
        )
      },
    },
  ]

  return <DataTable columns={columns} data={inventory} />
}

