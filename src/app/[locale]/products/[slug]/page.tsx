import { notFound } from "next/navigation"
import { unstable_setRequestLocale } from "next-intl/server"
import Image from "next/image"

import {
  BiteCareProductImageSlug,
  BiteCareProductName,
  BiteCareProductSlug,
} from "@/types/common/product"
import { ProductSlugs, ProductsImage } from "@/constant/Products"

import useProducts from "@/hooks/useProducts"
import ProductDetailLanding from "@/components/products/ProductDetail/ProductDetailLanding/ProductDetailLanding"
import ProductDetailSummarySection from "@/components/products/ProductDetail/ProductDetailSummarySection"
import FaqNavigateSection from "@/components/common/FaqNavigateSection"
import ProductDetailSimilarProductsSection from "@/components/products/ProductDetail/ProductDetailSimilarProductsSection"

export const dynamicParams = false

export async function generateStaticParams() {
  return ProductSlugs.map((product) => ({
    slug: product,
  }))
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: BiteCareProductSlug }
}) {
  const productTitleMap: Record<BiteCareProductSlug, BiteCareProductName> = {
    "skin-care": "Skin Care",
    "low-fat": "Low Fat",
    "senior-care": "Senior Care",
    "renal-care": "Renal Care",
  }

  const title: BiteCareProductName | undefined = productTitleMap[slug]

  if (!title) {
    return {
      title: "Unknown Product",
    }
  }

  return {
    title,
  }
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
    <div className="flex flex-col">
      <ProductDetailLanding product={product} selectedImage={selectedImage} />

      {/* Testimonial */}
      {/* <section className="mx-auto my-20 w-[70%] text-center xl:my-36 2xl:my-48">
        <p className="text-h3 lg:text-h2">
          {product.productInfo.testimonial.text}
        </p>
        <p className="mt-[5vh] text-paragraph lg:text-h3">
          {product.productInfo.testimonial.name}
        </p>
      </section> */}

      {/* FactSheet */}

      <Image
        alt={product.name + " Factsheet"}
        src={product.imageFactSheet}
        className="mx-auto my-24 h-auto w-[90%] rounded-3xl shadow-lg"
      />

      <ProductDetailSummarySection product={product} />

      <FaqNavigateSection bottomDivider />

      <ProductDetailSimilarProductsSection product={product} />
    </div>
  )
}
