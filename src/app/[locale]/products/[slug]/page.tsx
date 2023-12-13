import { notFound } from "next/navigation"

import {
  BiteCareProductImageSlug,
  BiteCareProductSlug,
} from "@/types/common/product"
import { ProductSlugs, ProductsImage } from "@/constant/Products"

import useProducts from "@/hooks/useProducts"
import ProductDetailLanding from "@/components/products/ProductDetail/ProductDetailLanding/ProductDetailLanding"

export const dynamicParams = false

export async function generateStaticParams() {
  return ProductSlugs.map((product) => ({
    slug: product,
  }))
}

export default async function ProductDetailPage({
  params: { slug },
  searchParams,
}: {
  params: { slug: BiteCareProductSlug }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const BiteCareProducts = await useProducts()
  const product = BiteCareProducts.find((product) => product.slug === slug)

  if (!product) return notFound()

  let selectedImage = searchParams.image as BiteCareProductImageSlug
  if (!ProductsImage.includes(selectedImage)) selectedImage = "front"

  return (
    <div>
      <ProductDetailLanding product={product} selectedImage={selectedImage} />
    </div>
  )
}
