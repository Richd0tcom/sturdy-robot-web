"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { InvoicesTable } from "./invoices-table"

interface InvoicesClientProps {
  initialInvoices: any[] // Replace 'any' with your actual invoice type
}

export function InvoicesClient({ initialInvoices }: InvoicesClientProps) {
  const [invoices] = useState(initialInvoices)

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
      <InvoicesTable invoices={invoices} />
    </div>
  )
}