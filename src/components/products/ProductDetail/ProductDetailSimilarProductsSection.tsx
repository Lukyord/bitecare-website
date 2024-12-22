import { getTranslations } from "next-intl/server"
import React from "react"

import { BiteCareProduct } from "@/types/common/product"

import getProducts from "@/actions/getProducts"
import ProductCard from "../ProductCard"

type ProductDetailSimilarProductsSectionProps = {
  product: BiteCareProduct
}

export default async function ProductDetailSimilarProductsSection({
  product,
}: ProductDetailSimilarProductsSectionProps) {
  const tMiscellaneous = await getTranslations("miscellaneous")
  const BiteCareProducts = await getProducts()

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
        {BiteCareProducts.filter((p) => p.name !== product.name).map(
          (product, index) => (
            <React.Fragment key={index}>
              <ProductCard product={product} />
            </React.Fragment>
          )
        )}
      </div>
    </section>
  )
}
