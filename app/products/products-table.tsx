"use client"

import { DataTable } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Pencil, Trash } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import * as api from "@/lib/api-client"
import { useRouter } from "next/navigation"

type Product = {
  id: string
  name: string
  sku: string
  base_price: number
  category_id: string
  created_at: string
  branch_id: string
  product_type: string
  service_pricing_model: string
  default_unit: string
  is_billable: boolean
  description: string
  custom_fields: any
  updated_at: string

}

export function ProductsTable({ products }: { products: Product[] }) {
  const router = useRouter()

  const columns = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "sku",
      header: "SKU",
    },
    {
      accessorKey: "base_price",
      header: "Base Price",
      cell: ({ row }: { row:  any } ) => {
        const price = row["base_price"]
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price)
        return formatted
      },
    },
    {
      id: "actions",
      cell: ({ row }: { row: any }) => {
        const product = row

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => router.push(`/products/${product.id}/edit`)}
              >
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-red-600"
                onClick={async () => {
                  await api.deleteProduct(product.id)
                  router.refresh()
                }}
              >
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  return <DataTable columns={columns} data={products} />
}

