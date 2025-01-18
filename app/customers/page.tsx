import { Suspense } from "react"
import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CustomersTable } from "./customers-table"
import { api } from "@/lib/api-client"

export default async function CustomersPage() {
  const customers = await api.getCustomers()

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
      <Suspense fallback={<div>Loading...</div>}>
        <CustomersTable customers={customers} />
      </Suspense>
    </div>
  )
}

