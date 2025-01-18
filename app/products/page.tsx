import { Suspense } from "react"
import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ProductsTable } from "./products-table"
import { api } from "@/lib/api-client"
import DataFetchWrapper from "@/components/data-fetch-wrapper"

export default function ProductsPage() {
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
      <Suspense fallback={<div>Loading...</div>}>
        <DataFetchWrapper
          fetch={api.getProducts}
          loadingFallback={<div>Loading products...</div>}
          errorFallback={
            <div className="text-red-500">
              Failed to load products. Please check your API configuration.
            </div>
          }
        >
          {(products) => <ProductsTable products={products} />}
        </DataFetchWrapper>
      </Suspense>
    </div>
  )
}

