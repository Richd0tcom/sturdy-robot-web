import Link from "next/link"
import { cn } from "@/lib/utils"
import { Package, LayoutGrid, Users, Building2, FileText, BarChart3 } from 'lucide-react'

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/products"
        className="flex items-center text-sm font-medium transition-colors hover:text-primary"
      >
        <Package className="mr-2 h-4 w-4" />
        Products
      </Link>
      <Link
        href="/categories"
        className="flex items-center text-sm font-medium transition-colors hover:text-primary"
      >
        <LayoutGrid className="mr-2 h-4 w-4" />
        Categories
      </Link>
      <Link
        href="/customers"
        className="flex items-center text-sm font-medium transition-colors hover:text-primary"
      >
        <Users className="mr-2 h-4 w-4" />
        Customers
      </Link>
      <Link
        href="/branches"
        className="flex items-center text-sm font-medium transition-colors hover:text-primary"
      >
        <Building2 className="mr-2 h-4 w-4" />
        Branches
      </Link>
      <Link
        href="/invoices"
        className="flex items-center text-sm font-medium transition-colors hover:text-primary"
      >
        <FileText className="mr-2 h-4 w-4" />
        Invoices
      </Link>
      <Link
        href="/inventory"
        className="flex items-center text-sm font-medium transition-colors hover:text-primary"
      >
        <BarChart3 className="mr-2 h-4 w-4" />
        Inventory
      </Link>
    </nav>
  )
}

