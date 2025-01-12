import { Locale } from "@/config/i18n.config"
import ArcGradient from "./ArcGradient"
import CompareCards from "./CompareCards"
import { getAllProducts } from "@/payload/service"
import { getLocale } from "next-intl/server"
import { getHomeConfigs } from "@/payload/service"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProductType } from "@/payload/service/product-type"
import { ProductType } from "@/payload/type-gen"

export default async function ComparingProductsSection() {
  const locale = (await getLocale()) as Locale

  const [{ product_comparison }, products, product_types] = await Promise.all([
    getHomeConfigs({
      select: {
        product_comparison: true,
      },
      locale,
    }),
    getAllProducts({
      select: {
        product_type: true,
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
    getProductType({
      locale,
    }),
  ])

  return (
    <section className="relative -my-28 flex h-full w-screen flex-col items-center gap-7 bg-bc-inverse-primary py-14 text-center xs:-my-14 xs:py-7 md:my-0 md:py-14 lg:gap-14 lg:py-28">
      <div className="absolute bottom-[99%] -z-10">
        <ArcGradient
          vwSize="200vw"
          radius={100}
          vwHeight="30vw"
          direction="up"
        />
      </div>

      <h1 className="text-h3 lg:text-h2">{product_comparison.header}</h1>

      <Tabs
        defaultValue={product_types[0].product_type || ""}
        className="flex flex-col items-center"
      >
        <TabsList className="mb-7 bg-bc-primary-container lg:mb-14">
          {product_types.map((type, index) => (
            <TabsTrigger
              key={type.id}
              value={type.product_type || index.toString()}
            >
              {type.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {product_types.map((type, index) => (
          <TabsContent
            key={type.id}
            value={type.product_type || index.toString()}
          >
            <CompareCards
              products={products.filter((product) => {
                const productType = product.product_type as ProductType
                return productType.product_type === type.product_type
              })}
            />
          </TabsContent>
        ))}
      </Tabs>

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
