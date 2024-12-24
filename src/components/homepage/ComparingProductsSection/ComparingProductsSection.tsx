import { Locale } from "@/config/i18n.config"
import ArcGradient from "./ArcGradient"
import CompareCards from "./CompareCards"
import { getAllProducts } from "@/payload/service"
import { getLocale, getTranslations } from "next-intl/server"

export default async function ComparingProductsSection() {
  const locale = await getLocale()
  const tComparingProducts = await getTranslations("comparing-products")

  const products = await getAllProducts({
    select: {
      label: true,
      front_img: true,
      dog_image_cropped: true,
      primary_color: true,
      tags: true,
      compare_description_main: true,
      compare_description_sub: true,
      slug: true,
    },
    locale: locale as Locale,
  })

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

      <CompareCards products={products} />

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
