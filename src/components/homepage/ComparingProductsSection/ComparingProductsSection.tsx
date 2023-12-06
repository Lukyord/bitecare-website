import { getTranslations } from "next-intl/server"

import ArcGradient from "../PrinciplesSection/ArcGradient"
import CompareCard from "./CompareCard"

export default async function ComparingProductsSection() {
  const tComparingProducts = await getTranslations("comparing-products")

  return (
    <section
      className="
              relative flex h-full w-screen 
              flex-col items-center gap-28 bg-bc-inverse-primary
              py-28 text-center      
            "
    >
      <div className="absolute bottom-[99%]">
        <ArcGradient
          vwSize="200vw"
          radius={100}
          vwHeight="30vw"
          direction="up"
        />
      </div>

      <h1 className="text-h3 lg:text-h2">{tComparingProducts("header")}</h1>

      <div
        className="
                  grid h-[500px] w-[95%] 
                  grid-cols-2 gap-4
                  rounded-[24px] bg-bc-primary-container
                  p-4 lg:grid-cols-3
                "
      >
        <CompareCard />
      </div>

      <div className="absolute top-[99%]">
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
