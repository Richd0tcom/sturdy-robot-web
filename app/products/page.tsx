'use client'

import { Suspense } from "react"
import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ProductsTable } from "./products-table"
import * as api from "@/lib/api-client"
import DataFetchWrapper from "@/components/data-fetch-wrapper"
import { ErrorFallback } from "@/components/error-fallback"
import { ProductsClient } from "./products-client"

export default async function ProductsPage() {
  try {
    const products = await api.getProducts()

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsClient initialProducts={products} />
      </Suspense>
    )
  } catch (error) {
    console.error("Failed to fetch products:", error)
    return <ErrorFallback message="Failed to load products. Please try again later." />
  }
}

