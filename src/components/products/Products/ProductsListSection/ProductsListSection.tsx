import useProducts from "@/hooks/useProducts"
import React from "react"
import ProductCard from "../../ProductCard"
import { getTranslations } from "next-intl/server"

export default async function ProductsListSection() {
  const BiteCareProducts = await useProducts()
  const tMiscellaneous = await getTranslations("miscellaneous")

  return (
    <section className="mx-auto mb-20 flex w-[95vw] flex-col items-center">
      <div className="my-10 flex w-full justify-end">
        <p className="mr-[2.5vw] text-paragraph">
          {tMiscellaneous("products")} ({BiteCareProducts.length})
        </p>
      </div>

      <div
        className="
                flex grid-cols-2 flex-wrap 
                justify-center justify-items-center 
                gap-x-10 gap-y-6 lg:grid xl:gap-x-14 xl:gap-y-10
              "
      >
        {BiteCareProducts.map((product, index) => (
          <React.Fragment key={index}>
            <ProductCard product={product} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
