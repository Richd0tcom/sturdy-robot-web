import { Suspense } from "react"
import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CategoriesTable } from "./categories-table"
import * as api from "@/lib/api-client"

export default async function CategoriesPage() {
  const categories = await api.getCategories()

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Categories</h1>
        <Button asChild>
          <Link href="/categories/new">
            <Plus className="mr-2 h-4 w-4" /> Add Category
          </Link>
        </Button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <CategoriesTable categories={categories} />
      </Suspense>
    </div>
  )
}

