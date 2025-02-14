"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ProductsTable } from "./products-table"

interface ProductsClientProps {
  initialProducts: any[] // Replace 'any' with your actual product type
}

export function ProductsClient({ initialProducts }: ProductsClientProps) {
  const [products] = useState(initialProducts)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Products</h1>
        <Button asChild>
          <Link href="/products/new">
            <Plus className="mr-2 h-4 w-4" /> Add Product
          </Link>
        </Button>
      </div>
      <ProductsTable products={products} />
    </div>
  )
}

