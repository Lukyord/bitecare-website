import React from "react"
import ProductCard from "../../ProductCard"
import { getLocale, getTranslations } from "next-intl/server"
import { getAllProducts } from "@/payload/service"
import { Locale } from "@/config/i18n.config"
import { getProductType } from "@/payload/service/product-type"
import { ProductType } from "@/payload/type-gen"

export default async function ProductsListSection() {
  const locale = (await getLocale()) as Locale
  const products = await getAllProducts({ locale })
  const productTypes = await getProductType({ locale })
  const tMiscellaneous = await getTranslations("miscellaneous")

  return (
    <>
      {productTypes.map((productType, index) => {
        const filteredProducts = products.filter((product) => {
          const type = product.product_type as ProductType
          return type.product_type === productType.product_type
        })

        return (
          <section
            id={productType.product_type}
            key={productType.product_type}
            className="mx-auto mb-20 flex w-[95vw] flex-col items-center"
          >
            <div className="my-10 flex w-full flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <h2 className="text-h3 md:text-h2">{productType.label}</h2>

              <p className="mr-[2.5vw] text-paragraph">
                {tMiscellaneous("products")} ({filteredProducts.length})
              </p>
            </div>

            <div className=" grid w-[100%] grid-cols-1 gap-x-10 gap-y-6 lg:grid-cols-2 xl:gap-x-14 xl:gap-y-10">
              {filteredProducts.map((product, index) => (
                <React.Fragment key={index}>
                  <ProductCard product={product} />
                </React.Fragment>
              ))}
            </div>
          </section>
        )
      })}
    </>
  )
}
