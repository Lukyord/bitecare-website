import { Locale } from "@/config/i18n.config"
import ArcGradient from "./ArcGradient"
import CompareCards from "./CompareCards"
import { getAllProducts } from "@/payload/service"
import { getLocale } from "next-intl/server"
import { getHomeConfigs } from "@/payload/service"

export default async function ComparingProductsSection() {
  const locale = (await getLocale()) as Locale

  const [{ product_comparison }, products] = await Promise.all([
    getHomeConfigs({
      select: {
        product_comparison: true,
      },
      locale,
    }),
    getAllProducts({
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
      locale,
    }),
  ])

  return (
    <section className="relative -my-28 flex h-full w-screen flex-col items-center gap-14 bg-bc-inverse-primary py-14 text-center xs:-my-14  xs:py-7 md:my-0 md:py-14 lg:gap-28 lg:py-28">
      <div className="absolute bottom-[99%] -z-10">
        <ArcGradient
          vwSize="200vw"
          radius={100}
          vwHeight="30vw"
          direction="up"
        />
      </div>

      <h1 className="text-h3 lg:text-h2">{product_comparison.header}</h1>

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
