import { Suspense } from "react"
import { InventoryTable } from "./inventory-table"
import { api } from "@/lib/api-client"

export default async function InventoryPage() {
  const inventory = await api.getInventory()

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Inventory</h1>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <InventoryTable inventory={inventory} />
      </Suspense>
    </div>
  )
}

