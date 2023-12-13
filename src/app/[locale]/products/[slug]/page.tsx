import { BiteCareProductSlug } from "@/types/common/product"
import { ProductSlugs } from "@/constant/Products"
import useProducts from "@/hooks/useProducts"
import { notFound } from "next/navigation"
import ProductDetailLanding from "@/components/products/ProductDetail/ProductDetailLanding"

export const dynamicParams = false

export async function generateStaticParams() {
  return ProductSlugs.map((product) => ({
    slug: product,
  }))
}

export default async function ProductDetailPage({
  params: { slug },
}: {
  params: { slug: BiteCareProductSlug }
}) {
  const BiteCareProducts = await useProducts()
  const product = BiteCareProducts.find((product) => product.slug === slug)

  if (!product) return notFound()

  return (
    <div>
      <ProductDetailLanding product={product} />
    </div>
  )
}
