import { Suspense } from "react"
import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { InvoicesTable } from "./invoices-table"
import { api } from "@/lib/api-client"
import DataFetchWrapper from "@/components/data-fetch-wrapper"

export default function InvoicesPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Invoices</h1>
        <Button asChild>
          <Link href="/invoices/new">
            <Plus className="mr-2 h-4 w-4" /> Create Invoice
          </Link>
        </Button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <DataFetchWrapper
          fetch={api.getInvoices}
          loadingFallback={<div>Loading invoices...</div>}
          errorFallback={
            <div className="text-red-500">
              Failed to load invoices. Please check your API configuration.
            </div>
          }
        >
          {(invoices) => <InvoicesTable invoices={invoices} />}
        </DataFetchWrapper>
      </Suspense>
    </div>
  )
}

