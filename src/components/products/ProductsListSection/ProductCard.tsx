import React from "react"

import { Link } from "@/lib/navigation"
import { BiteCareProduct } from "@/types/common/product"

import ProductTag from "@/components/common/ProductTag"
import Image from "next/image"

type ProductCardProps = {
  product: BiteCareProduct
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={product.href}
      className={`
              relative flex h-[275px] w-[325px]
              flex-col justify-between rounded-3xl 
              p-5 ${product.productCardBgColor}
              group overflow-hidden transition-all duration-300
              hover:shadow-xl 
              xl:h-[500px] xl:w-[600px] xl:px-10 xl:py-14
            `}
    >
      <h2 className="w-[52.5%] text-h3 text-white xl:text-h2">
        {product.name}
      </h2>

      <div className="flex flex-col gap-3">
        {product.tags.map((tag, index) => (
          <React.Fragment key={index}>
            <ProductTag tag={tag} size="large" shadow />
          </React.Fragment>
        ))}
      </div>

      <Image
        alt={product.name}
        src={product.imageFront}
        width={1192}
        height={2128}
        className="
              absolute right-[-5%] top-[12.5%] 
              h-[90%] w-auto transform
              shadow-lg transition-all
              duration-300 ease-in-out group-hover:right-[-6%]
              group-hover:top-[11%] group-hover:rotate-[-5deg]
              group-hover:scale-110 group-hover:shadow-2xl
            "
      />
    </Link>
  )
}
