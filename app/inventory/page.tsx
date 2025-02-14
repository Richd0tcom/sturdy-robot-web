import { Suspense } from "react"
import { InventoryTable } from "./inventory-table"
import * as api from "@/lib/api-client"
import DataFetchWrapper from "@/components/data-fetch-wrapper"
import { ErrorFallback } from "@/components/error-fallback"
import { InventoryClient } from "./inventory-client"

export default async function InventoryPage() {
  try {
    const inventory = await api.getInventory()

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <InventoryClient initialInventory={inventory} />
      </Suspense>
    )
  } catch (error) {
    console.error("Failed to fetch inventory:", error)
    return <ErrorFallback message="Failed to load inventory. Please try again later." />
  }
}

