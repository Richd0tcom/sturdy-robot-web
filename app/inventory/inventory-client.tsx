"use client"

import { useState } from "react"
import { InventoryTable } from "./inventory-table"

interface InventoryClientProps {
  initialInventory: any[] // Replace 'any' with your actual inventory item type
}

export function InventoryClient({ initialInventory }: InventoryClientProps) {
  const [inventory] = useState(initialInventory)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Inventory</h1>
      </div>
      <InventoryTable inventory={inventory} />
    </div>
  )
}

