export interface Organization {
  id: string
  name: string
  email: string
  active: boolean
  created_at: string
}

export interface Branch {
  id: string
  name: string
  address: string
  is_default: boolean
  organization_id: string
  created_at: string
}

export interface Category {
  id: string
  name: string
  parent_id: string | null
  branch_id: string
  description: string
  created_at: string
}

export interface Product {
  id: string
  name: string
  sku: string
  category_id: string
  branch_id: string
  product_type: string
  service_pricing_model: string | null
  default_unit: string
  is_bundle: boolean
  description: string
  base_price: number
  custom_fields: any
  created_at: string
  updated_at: string
}

export interface ProductVersion {
  id: string
  product_id: string
  branch_id: string
  sku: string
  name: string
  price_adjustment: number
  attributes: any
  stock_quantity: number
  reorder_point: number
  created_at: string
}

export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  billing_address: any
  created_at: string
}

export interface Invoice {
  id: string
  customer_id: string
  invoice_number: string
  subtotal: number
  discount: number
  total: number
  status: string
  created_by: string
  currency_id: string
  due_date: string
  reminders: any
  metadata: any
  amount_paid: number
  balance_due: number
  created_at: string
}

export interface InvoiceItem {
  id: string
  invoice_id: string
  version_id: string
  quantity: number
  unit_price: number
  subtotal: number
  metadata: any
}

export interface InventoryItem {
  id: string
  version_id: string
  branch_id: string
  quantity: number
  unit_cost: number
  last_counted: string
}

export interface Currency {
  id: string
  name: string
  symbol: string
  created_at: string
}

export interface ActivityLog {
  id: string
  entity_type: string
  entity_id: string
  action: string
  changes: any
  created_at: string
  user_id: string
}

export interface PaymentInfo {
  id: string
  invoice_id: string
  payment_method: string
  payment_amount: number
  payment_ref: string
  payment_date: string
  metadata: any
  created_at: string
  created_by: string
}

