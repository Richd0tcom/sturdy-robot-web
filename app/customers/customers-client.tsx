"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CustomersTable } from "./customers-table"

interface CustomersClientProps {
  initialCustomers: any[] // Replace 'any' with your actual customer type
}

export function CustomersClient({ initialCustomers }: CustomersClientProps) {
  const [customers] = useState(initialCustomers)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Customers</h1>
        <Button asChild>
          <Link href="/customers/new">
            <Plus className="mr-2 h-4 w-4" /> Add Customer
          </Link>
        </Button>
      </div>
      <CustomersTable customers={customers} />
    </div>
  )
}

