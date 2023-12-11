import { getTranslations } from "next-intl/server"

import useProducts from "@/hooks/useProducts"
import ArcGradient from "../PrinciplesSection/ArcGradient"
import CompareCards from "./CompareCards"

export default async function ComparingProductsSection() {
  const tComparingProducts = await getTranslations("comparing-products")
  const { BiteCareProducts } = await useProducts()

  return (
    <section
      className="
              relative -my-28 flex h-full w-screen flex-col items-center
              gap-14 bg-bc-inverse-primary py-14 text-center xs:-my-14 
              xs:py-7 md:my-0 md:py-14
              lg:gap-28 lg:py-28      
            "
    >
      <div className="absolute bottom-[99%] -z-10">
        <ArcGradient
          vwSize="200vw"
          radius={100}
          vwHeight="30vw"
          direction="up"
        />
      </div>

      <h1 className="text-h3 lg:text-h2">{tComparingProducts("header")}</h1>

      <CompareCards products={BiteCareProducts} />

      <div className="absolute top-[99%] -z-10">
        <ArcGradient
          vwSize="200vw"
          radius={100}
          vwHeight="30vw"
          direction="down"
        />
      </div>
    </section>
  )
}
