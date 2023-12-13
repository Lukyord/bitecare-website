import { notFound } from "next/navigation"
import { BiteCareProductSlug } from "@/types/common/product"
import { ProductSlugs } from "@/constant/Products"

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
  // if (!ProductSlugs.includes(slug)) return notFound()

  return <div>{slug}</div>
}
