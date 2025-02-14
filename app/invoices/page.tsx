import { Suspense } from "react"
import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { InvoicesTable } from "./invoices-table"
import * as api from "@/lib/api-client"
import { InvoicesClient } from "./invoices-client"
import { ErrorFallback } from "@/components/error-fallback"

export default async function InvoicesPage() {
  try {
    const invoices = await api.getInvoices()

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <InvoicesClient initialInvoices={invoices} />
      </Suspense>
    )
  } catch (error) {
    console.error("Failed to fetch invoices:", error)
    return <ErrorFallback message="Failed to load invoices. Please try again later." />
  }
}
