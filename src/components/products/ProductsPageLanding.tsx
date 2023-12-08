import { getTranslations } from "next-intl/server"
import SecondaryButton from "../common/Button/SecondaryButton"

export default async function ProductsPageLanding() {
  const tProductsLanding = await getTranslations("products-landing")
  const tButton = await getTranslations("button")

  return (
    <div
      className="
              flex h-screen w-screen flex-col bg-[#86D2DF] 
              py-36 pl-[5vw] xl:flex-row xl:pl-[10vw]
            "
    >
      <div className="flex w-[90%] flex-col justify-center gap-6 lg:gap-10 xl:w-[55%] ">
        <div className="flex w-[85%] flex-col gap-4 2xl:w-[70%]">
          <h1 className="text-h3 lg:text-h2 xl:text-h1">
            {tProductsLanding("header")}
          </h1>
          <p className="text-paragraph">{tProductsLanding("description")}</p>
        </div>

        <div className="block lg:hidden">
          <SecondaryButton
            text={tButton("view-more")}
            size="paragraph"
            specificWidth="w-[162px]"
            href="/products#all-products"
          />
        </div>
        <div className="hidden lg:block">
          <SecondaryButton
            text={tButton("view-more")}
            size="h3"
            specificWidth="w-[311px]"
            href="/products#all-products"
          />
        </div>
      </div>
      <div className="lg:w-[45%]"></div>
    </div>
  )
}
