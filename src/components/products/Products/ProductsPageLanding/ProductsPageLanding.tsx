import { getLocale, getTranslations } from "next-intl/server"

import ProductSwiper from "./ProductSwiper"
import SecondaryButton from "../../../common/Button/SecondaryButton"
import ProductsPageLandingBackground from "./ProductsPageLandingBackground"
import ActiveProductContextProvider from "@/context/ActiveProductContextProvider"
import ProductsPageLandingGradientBlur from "./ProductsPageLandingGradientBlur"
import { getAllProducts } from "@/payload/service"
import { Locale } from "@/config/i18n.config"

export default async function ProductsPageLanding() {
  const locale = (await getLocale()) as Locale
  const tProductsLanding = await getTranslations("products-landing")
  const tButton = await getTranslations("button")

  const products = await getAllProducts({ locale })

  return (
    <div
      id="products-page-landing"
      className="
              relative flex w-screen 
              flex-col gap-12 overflow-hidden
              pb-14 pl-[5vw] pt-28 sm:gap-24
              sm:py-28 xl:h-[115vh] 
              xl:flex-row xl:gap-0 xl:pl-[10vw]
            "
    >
      <ActiveProductContextProvider>
        <div className="flex flex-col justify-center gap-6 lg:gap-10 xl:w-[55%]">
          <div className="flex w-[85%] flex-col gap-4">
            <h1 className="text-h3 lg:text-h2 2xl:text-h1">
              {tProductsLanding("header")}
            </h1>
            <p className="text-paragraph">{tProductsLanding("description")}</p>
          </div>

          <div className="block xl:hidden">
            <SecondaryButton
              text={tButton("view-more")}
              size="paragraph"
              specificWidth="w-[162px]"
              href="/products#all-products"
            />
          </div>
          <div className="hidden xl:block">
            <SecondaryButton
              text={tButton("view-more")}
              size="h3"
              specificWidth="w-[311px]"
              href="/products#all-products"
            />
          </div>
        </div>

        <ProductsPageLandingBackground products={products} />
        <ProductsPageLandingGradientBlur />

        <div className="relative ml-auto flex w-[90%] items-center xl:w-[45%]">
          <ProductSwiper products={products} />
        </div>
      </ActiveProductContextProvider>
    </div>
  )
}
