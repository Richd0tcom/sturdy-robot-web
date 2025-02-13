import { Suspense } from "react"
import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CustomersTable } from "./customers-table"
import * as api from "@/lib/api-client"
import DataFetchWrapper from "@/components/data-fetch-wrapper"

export default function CustomersPage() {
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
        <DataFetchWrapper
          fetch={api.getCustomers}
          loadingFallback={<div>Loading customers...</div>}
          errorFallback={
            <div className="text-red-500">
              Failed to load customers. Please check your API configuration.
            </div>
          }
        >
          {(customers: any[]) => <CustomersTable customers={customers} />}
        </DataFetchWrapper>
      </Suspense>
    </div>
  )
}

