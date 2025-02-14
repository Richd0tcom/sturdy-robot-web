"use server"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

type FetchOptions = {
  method?: string
  body?: any
  headers?: Record<string, string>
}

async function fetchApi(endpoint: string, options: FetchOptions = {}) {
  const { method = 'GET', body, headers = {} } = options

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`)
  }

  return response.json()
}

// Organizations
export const getOrganizations = () => fetchApi('/organizations')
export const createOrganization = (data: any) => fetchApi('/organizations', { method: 'POST', body: data })
export const updateOrganization = (id: string, data: any) => fetchApi(`/organizations/${id}`, { method: 'PUT', body: data })
export const deleteOrganization = (id: string) => fetchApi(`/organizations/${id}`, { method: 'DELETE' })

// Branches
export const getBranches = () => fetchApi('/branches')
export const createBranch = (data: any) => fetchApi('/branches', { method: 'POST', body: data })
export const updateBranch = (id: string, data: any) => fetchApi(`/branches/${id}`, { method: 'PUT', body: data })
export const deleteBranch = (id: string) => fetchApi(`/branches/${id}`, { method: 'DELETE' })

// Categories
export const getCategories = () => fetchApi('/categories')
export const createCategory = (data: any) => fetchApi('/categories', { method: 'POST', body: data })
export const updateCategory = (id: string, data: any) => fetchApi(`/categories/${id}`, { method: 'PUT', body: data })
export const deleteCategory = (id: string) => fetchApi(`/categories/${id}`, { method: 'DELETE' })

// Products
export const getProducts = () => fetchApi('/products/branch/eef92b41-efe4-45f4-b223-4891e285d9a5')
export const createProduct = (data: any) => fetchApi('/products', { method: 'POST', body: data })
export const updateProduct = (id: string, data: any) => fetchApi(`/products/${id}`, { method: 'PUT', body: data })
export const deleteProduct = (id: string) => fetchApi(`/products/${id}`, { method: 'DELETE' })

// Product Versions
export const getProductVersions = (productId: string) => fetchApi(`/products/${productId}/versions`)
export const createProductVersion = (productId: string, data: any) => fetchApi(`/products/${productId}/versions`, { method: 'POST', body: data })

// Customers
export const getCustomers = () => fetchApi('/customers/branch/eef92b41-efe4-45f4-b223-4891e285d9a5')
export const createCustomer = (data: any) => fetchApi('/customers', { method: 'POST', body: data })
export const updateCustomer = (id: string, data: any) => fetchApi(`/customers/${id}`, { method: 'PUT', body: data })
export const deleteCustomer = (id: string) => fetchApi(`/customers/${id}`, { method: 'DELETE' })

// Invoices
export const getInvoices = () => fetchApi('/invoices')
export const createInvoice = (data: any) => fetchApi('/invoices', { method: 'POST', body: data })
export const updateInvoice = (id: string, data: any) => fetchApi(`/invoices/${id}`, { method: 'PUT', body: data })
export const deleteInvoice = (id: string) => fetchApi(`/invoices/${id}`, { method: 'DELETE' })
export const getInvoice = (id: string) => fetchApi(`/invoices/${id}`)

// Invoice Items
export const getInvoiceItems = (invoiceId: string) => fetchApi(`/invoices/${invoiceId}/items`)

// Inventory
export const getInventory = () => fetchApi('/inventory')
export const updateInventory = (id: string, data: any) => fetchApi(`/inventory/${id}`, { method: 'PUT', body: data })

// Currency
export const getCurrencies = () => fetchApi('/currencies')

// Activity Logs
export const getActivityLogs = () => fetchApi('/activity-logs')


