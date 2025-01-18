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

export const api = {
  // Organizations
  getOrganizations: () => fetchApi('/organizations'),
  createOrganization: (data: any) => fetchApi('/organizations', { method: 'POST', body: data }),
  updateOrganization: (id: string, data: any) => fetchApi(`/organizations/${id}`, { method: 'PUT', body: data }),
  deleteOrganization: (id: string) => fetchApi(`/organizations/${id}`, { method: 'DELETE' }),

  // Branches
  getBranches: () => fetchApi('/branches'),
  createBranch: (data: any) => fetchApi('/branches', { method: 'POST', body: data }),
  updateBranch: (id: string, data: any) => fetchApi(`/branches/${id}`, { method: 'PUT', body: data }),
  deleteBranch: (id: string) => fetchApi(`/branches/${id}`, { method: 'DELETE' }),

  // Categories
  getCategories: () => fetchApi('/categories'),
  createCategory: (data: any) => fetchApi('/categories', { method: 'POST', body: data }),
  updateCategory: (id: string, data: any) => fetchApi(`/categories/${id}`, { method: 'PUT', body: data }),
  deleteCategory: (id: string) => fetchApi(`/categories/${id}`, { method: 'DELETE' }),

  // Products
  getProducts: () => fetchApi('/products'),
  createProduct: (data: any) => fetchApi('/products', { method: 'POST', body: data }),
  updateProduct: (id: string, data: any) => fetchApi(`/products/${id}`, { method: 'PUT', body: data }),
  deleteProduct: (id: string) => fetchApi(`/products/${id}`, { method: 'DELETE' }),

  // Product Versions
  getProductVersions: (productId: string) => fetchApi(`/products/${productId}/versions`),
  createProductVersion: (productId: string, data: any) => 
    fetchApi(`/products/${productId}/versions`, { method: 'POST', body: data }),

  // Customers
  getCustomers: () => fetchApi('/customers'),
  createCustomer: (data: any) => fetchApi('/customers', { method: 'POST', body: data }),
  updateCustomer: (id: string, data: any) => fetchApi(`/customers/${id}`, { method: 'PUT', body: data }),
  deleteCustomer: (id: string) => fetchApi(`/customers/${id}`, { method: 'DELETE' }),

  // Invoices
  getInvoices: () => fetchApi('/invoices'),
  createInvoice: (data: any) => fetchApi('/invoices', { method: 'POST', body: data }),
  updateInvoice: (id: string, data: any) => fetchApi(`/invoices/${id}`, { method: 'PUT', body: data }),
  deleteInvoice: (id: string) => fetchApi(`/invoices/${id}`, { method: 'DELETE' }),
  getInvoice: (id: string) => fetchApi(`/invoices/${id}`),

  // Invoice Items
  getInvoiceItems: (invoiceId: string) => fetchApi(`/invoices/${invoiceId}/items`),
  
  // Inventory
  getInventory: () => fetchApi('/inventory'),
  updateInventory: (id: string, data: any) => fetchApi(`/inventory/${id}`, { method: 'PUT', body: data }),
  
  // Currency
  getCurrencies: () => fetchApi('/currencies'),
  
  // Activity Logs
  getActivityLogs: () => fetchApi('/activity-logs'),
}

