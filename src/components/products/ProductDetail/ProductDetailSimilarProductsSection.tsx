import { getTranslations } from "next-intl/server"
import React from "react"

import ProductCard from "../ProductCard"
import { getAllProducts } from "@/payload/service"
import { Product } from "@/payload/type-gen"

type ProductDetailSimilarProductsSectionProps = {
  product: Product
}

export default async function ProductDetailSimilarProductsSection({
  product,
}: ProductDetailSimilarProductsSectionProps) {
  const tMiscellaneous = await getTranslations("miscellaneous")
  const products = await getAllProducts()

  return (
    <section className="my-24 w-full pl-[5vw]">
      <h2 className="ml-[5vw] text-h3 md:text-h2">
        {tMiscellaneous("you-may-also-like")}:
      </h2>

      <div
        className="
                mt-10 flex w-full gap-[5vw] 
                overflow-x-auto pb-6
                pr-[5vw]
              "
      >
        {products
          .filter((p) => p.id !== product.id)
          .map((product, index) => (
            <React.Fragment key={index}>
              <ProductCard product={product} isSimilar />
            </React.Fragment>
          ))}
      </div>
    </section>
  )
}
