"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CategoriesTable } from "./categories-table"

interface CategoriesClientProps {
  initialCategories: any[] // Replace 'any' with your actual invoice type
}

export function CategoriesClient({ initialCategories }: CategoriesClientProps) {
  const [categories] = useState(initialCategories)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Categories</h1>
        <Button asChild>
          <Link href="/categories/new">
            <Plus className="mr-2 h-4 w-4" /> Create Category
          </Link>
        </Button>
      </div>
      <CategoriesTable categories={categories} />
    </div>
  )
}