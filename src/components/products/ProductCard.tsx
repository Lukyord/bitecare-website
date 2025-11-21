import React from "react"

import { Link } from "@/lib/navigation"

import ProductTag from "@/components/common/ProductTag"
import Image from "next/image"
import {
  Media,
  Product,
  ProductTag as ProductTagType,
} from "@/payload/type-gen"
import { resolveMediaRef } from "@/payload/service"
import { cn } from "@/lib/utils"

type ProductCardProps = {
  product: Product
  isSimilar?: boolean
}

export default async function ProductCard({
  product,
  isSimilar,
}: ProductCardProps) {
  const productFrontImg = await resolveMediaRef(product.front_img)
  return (
    <Link
      href={`/products/${product.slug}`}
      style={{ backgroundColor: product.primary_color }}
      className={`
          group relative flex aspect-[1.2] w-[100%] flex-shrink-0 flex-col  
          justify-between overflow-hidden rounded-3xl p-5 transition-all 
          duration-300 hover:shadow-xl xl:px-10 xl:py-14
          ${cn({
            "max-w-[83.3333333333vw] lg:max-w-[600px]": isSimilar,
          })}
          `}
    >
      <h2 className="w-[52.5%] text-h3 text-white xl:text-h2">
        {product.label}
      </h2>

      <div className="flex flex-col gap-3">
        {product.tags?.map((tag, index) => (
          <React.Fragment key={index}>
            <ProductTag tag={tag as ProductTagType} size="large" shadow />
          </React.Fragment>
        ))}
      </div>

      <Image
        alt={productFrontImg.alt}
        src={productFrontImg.url ?? ""}
        width={productFrontImg.width ?? 1192}
        height={productFrontImg.height ?? 2128}
        className="absolute right-[-5%] top-[12.5%]  h-[90%] w-auto transform shadow-lg transition-all duration-300 ease-in-out group-hover:right-[-6%] group-hover:top-[11%] group-hover:rotate-[-5deg] group-hover:scale-110 group-hover:shadow-2xl"
      />
    </Link>
  )
}
