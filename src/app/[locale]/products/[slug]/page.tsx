import { notFound } from "next/navigation"

import {
  BiteCareProductImageSlug,
  BiteCareProductSlug,
} from "@/types/common/product"
import { ProductSlugs, ProductsImage } from "@/constant/Products"

import useProducts from "@/hooks/useProducts"
import ProductDetailLanding from "@/components/products/ProductDetail/ProductDetailLanding/ProductDetailLanding"
import { unstable_setRequestLocale } from "next-intl/server"

export const dynamicParams = false

export async function generateStaticParams() {
  return ProductSlugs.map((product) => ({
    slug: product,
  }))
}

export default async function ProductDetailPage({
  params: { locale, slug },
  searchParams,
}: {
  params: { locale: string; slug: BiteCareProductSlug }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  unstable_setRequestLocale(locale)

  const BiteCareProducts = await useProducts()
  const product = BiteCareProducts.find((product) => product.slug === slug)

  if (!product) return notFound()

  let selectedImage = searchParams.image as BiteCareProductImageSlug
  if (!ProductsImage.includes(selectedImage)) selectedImage = "front"

  return (
    <div>
      <ProductDetailLanding product={product} selectedImage={selectedImage} />
      <div className="my-20">Testimonial</div>
    </div>
  )
}
