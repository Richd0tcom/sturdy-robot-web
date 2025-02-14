import { Suspense } from "react"
import * as api from "@/lib/api-client"
import { CustomersClient } from "./customers-client"
import { ErrorFallback } from "@/components/error-fallback"

export default async function CustomersPage() {
  try {
    const customers = await api.getCustomers()

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <CustomersClient initialCustomers={customers} />
      </Suspense>
    )
  } catch (error) {
    console.error("Failed to fetch customers:", error)
    return <ErrorFallback message="Failed to load customers. Please try again later." />
  }
}

