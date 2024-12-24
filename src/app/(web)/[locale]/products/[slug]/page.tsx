import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import Image from "next/image"

import {
  BiteCareProductImageSlug,
  BiteCareProductName,
  BiteCareProductSlug,
} from "@/types/common/product"
import { ProductSlugs, ProductsImage } from "@/constant/Products"

import ProductDetailLanding from "@/components/products/ProductDetail/ProductDetailLanding/ProductDetailLanding"
import ProductDetailSummarySection from "@/components/products/ProductDetail/ProductDetailSummarySection"
import FaqNavigateSection from "@/components/common/FaqNavigateSection"
import ProductDetailSimilarProductsSection from "@/components/products/ProductDetail/ProductDetailSimilarProductsSection"
import getProducts from "@/actions/getProducts"
import { getPayloadClient } from "@/lib/payload"
import { Metadata } from "next"
import { getProductBySlug, resolveMediaRef } from "@/payload/service"
import { allLocales, Locale } from "@/config/i18n.config"
import { Media } from "@/payload/type-gen"

export const dynamicParams = false

type Parameters = {
  locale: Locale
  slug: string
}

export async function generateStaticParams() {
  const payload = await getPayloadClient()

  const res = await payload.find({
    collection: "product",
    select: {
      slug: true,
    },
    pagination: false,
  })

  const mappedCombinations: Parameters[] = []

  allLocales.forEach((locale) =>
    res.docs.forEach(({ slug }) => {
      mappedCombinations.push({
        slug,
        locale,
      })
    })
  )

  return mappedCombinations
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: BiteCareProductSlug; locale: Locale }>
}): Promise<Metadata> {
  const { locale, slug } = await params

  const product = await getProductBySlug(slug, {
    select: {
      label: true,
      description: true,
    },
    locale,
  })

  if (!product) {
    return {
      title: "Unknown Product",
      description: "Unknown Product, please check back later",
    }
  }

  const { label, description } = product

  return {
    title: label,
    description: description,
  }
}

export default async function ProductDetailPage(props: {
  params: Promise<{ locale: string; slug: BiteCareProductSlug }>
}) {
  const { locale, slug } = await props.params

  setRequestLocale(locale)

  const product = await getProductBySlug(slug, {
    depth: 5,
  })

  if (!product) return notFound()

  const factSheetImg = await resolveMediaRef(product.fact_sheet_img)

  console.log("factSheetImg", factSheetImg)

  return (
    <div className="flex flex-col">
      <ProductDetailLanding product={product} />

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
        alt={factSheetImg.alt}
        src={factSheetImg.url ?? ""}
        height={factSheetImg.height ?? 3508}
        width={factSheetImg.width ?? 2840}
        className="mx-auto my-24 h-auto w-[90%] rounded-3xl shadow-lg"
      />

      <ProductDetailSummarySection product={product} />

      <FaqNavigateSection bottomDivider />

      <ProductDetailSimilarProductsSection product={product} />
    </div>
  )
}
