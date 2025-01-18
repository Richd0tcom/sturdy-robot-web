import { Suspense } from "react"
import { InventoryTable } from "./inventory-table"
import { api } from "@/lib/api-client"
import DataFetchWrapper from "@/components/data-fetch-wrapper"

export default function InventoryPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Inventory</h1>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <DataFetchWrapper
          fetch={api.getInventory}
          loadingFallback={<div>Loading inventory...</div>}
          errorFallback={
            <div className="text-red-500">
              Failed to load inventory. Please check your API configuration.
            </div>
          }
        >
          {(inventory) => <InventoryTable inventory={inventory} />}
        </DataFetchWrapper>
      </Suspense>
    </div>
  )
}

