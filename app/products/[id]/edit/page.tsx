import * as api from "@/lib/api-client"
import { ProductForm } from "../product-form"

export default async function EditProductPage({
  params,
}: {
  params: { id: string }
}) {
  const [product, categories] = await Promise.all([
    api.getProducts().then((products: any) => 
      products.find((p: any) => p.id === params.id)
    ),
    api.getCategories()
  ])

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Edit Product</h1>
      <ProductForm product={product} categories={categories} />
    </div>
  )
}

