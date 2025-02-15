"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import * as api  from "@/lib/api-client"
import { useRouter } from "next/navigation"

const productSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2).max(255),
  sku: z.string().min(2).max(50),
  base_price: z.string().transform((val) => parseFloat(val)),
  category_id: z.string().uuid(),
})

type ProductFormValues = z.infer<typeof productSchema>

export function ProductForm({
  product,
  categories,
}: {
  product?: ProductFormValues
  categories: { id: string; name: string }[]
}) {
  const router = useRouter()
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: product,
  })

  async function onSubmit(data: ProductFormValues) {
    if (product) {
      await api.updateProduct(product.id, data)
    } else {
      await api.createProduct(data)
    }
    router.push("/products")
    router.refresh()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sku"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SKU</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="base_price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Base Price</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save</Button>
      </form>
    </Form>
  )
}

