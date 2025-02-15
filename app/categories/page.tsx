import { Suspense } from "react"
import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CategoriesTable } from "./categories-table"
import * as api from "@/lib/api-client"
import { ErrorFallback } from "@/components/error-fallback"

export default async function CategoriesPage() {

  try {
    const categories = await api.getCategories()
  
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <CategoriesTable categories={categories} />
        </Suspense>
      )
    } catch (error) {
      console.error("Failed to fetch invoices:", error)
      return <ErrorFallback message="Failed to load categories. Please try again later." />
    }
}

