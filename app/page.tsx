import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { api } from "@/lib/api-client"
import Link from "next/link"
import { BarChart3, Package, Users, FileText } from 'lucide-react'

async function getOverviewData() {
  const [products, customers, invoices] = await Promise.all([
    api.getProducts(),
    api.getCustomers(),
    api.getInvoices(),
  ])

  const totalRevenue = invoices.reduce((sum: any, invoice: any) => sum + invoice.total, 0)

  return {
    totalProducts: products.length,
    totalCustomers: customers.length,
    totalInvoices: invoices.length,
    totalRevenue,
  }
}

export default async function DashboardPage() {
  const { totalProducts, totalCustomers, totalInvoices, totalRevenue } = await getOverviewData()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-slate-500 dark:text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProducts}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
            <Users className="h-4 w-4 text-slate-500 dark:text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCustomers}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invoices</CardTitle>
            <FileText className="h-4 w-4 text-slate-500 dark:text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalInvoices}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <BarChart3 className="h-4 w-4 text-slate-500 dark:text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalRevenue)}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Link href="/products/new" className="text-blue-600 hover:underline dark:text-blue-400">
                  Add New Product
                </Link>
              </li>
              <li>
                <Link href="/invoices/new" className="text-blue-600 hover:underline dark:text-blue-400">
                  Create New Invoice
                </Link>
              </li>
              <li>
                <Link href="/customers/new" className="text-blue-600 hover:underline dark:text-blue-400">
                  Add New Customer
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            {/* We'll implement this in a future iteration */}
            <p className="text-sm text-slate-500 dark:text-slate-400">Recent activity will be shown here.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Inventory Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            {/* We'll implement this in a future iteration */}
            <p className="text-sm text-slate-500 dark:text-slate-400">Low stock alerts will be shown here.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

