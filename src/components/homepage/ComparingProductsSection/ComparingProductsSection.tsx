import { getTranslations } from "next-intl/server"

import { Images } from "@/constant/Images"
import { ProductTags } from "@/constant/Products"
import { ComparingProductCard } from "@/types/common/product"

import ArcGradient from "../PrinciplesSection/ArcGradient"
import CompareCards from "./CompareCards"

export default async function ComparingProductsSection() {
  const tComparingProducts = await getTranslations("comparing-products")
  const ComparingProducts: ComparingProductCard[] = [
    {
      name: "Skin Care",
      description1: tComparingProducts("skin-care-description-1"),
      description2: tComparingProducts("skin-care-description-2"),
      image1: Images.SkinCareDogCropped,
      image2: Images.SkinCareFront,
      tags: [
        ProductTags["Crocodile Protein"],
        ProductTags["Omega-3 & Amino Acids"],
        ProductTags["Gluten Free"],
      ],
      bgColor: "bg-[#CEEFF4]",
      dividerColor: "bg-[#1A9CBC]",
    },
    {
      name: "Low Fat",
      description1: tComparingProducts("low-fat-description-1"),
      description2: tComparingProducts("low-fat-description-2"),
      image1: Images.LowFatDogCropped,
      image2: Images.LowFatFront,
      tags: [
        ProductTags["Low Calories & Fats"],
        ProductTags["L-Carnitine"],
        ProductTags["Collagen Type2"],
      ],
      bgColor: "bg-[#DCF9DD]",
      dividerColor: "bg-[#009172]",
    },
    {
      name: "Senior Care",
      description1: tComparingProducts("senior-care-description-1"),
      description2: tComparingProducts("senior-care-description-2"),
      image1: Images.SeniorCareDogCropped,
      image2: Images.SeniorCareFront,
      tags: [
        ProductTags["Fish oil DHA"],
        ProductTags["Ginkgo Extract"],
        ProductTags["Collagen Type2"],
      ],
      bgColor: "bg-[#E6DBF9]",
      dividerColor: "bg-[#FFC000]",
    },
    {
      name: "Renal Care",
      description1: tComparingProducts("renal-care-description-1"),
      description2: tComparingProducts("renal-care-description-2"),
      image1: Images.RenalCareDogCropped,
      image2: Images.RenalCareFront,
      tags: [
        ProductTags["Low Protein & Phosphorus"],
        ProductTags["Chitosan Extract"],
        ProductTags["Omega-3 & Amino Acids"],
      ],
      bgColor: "bg-[#F9D7D7]",
      dividerColor: "bg-[#FF0000]",
    },
  ]

  return (
    <section
      className="
              xs:-my-14 xs:py-7 relative -my-28 flex h-full w-screen
              flex-col items-center gap-14 bg-bc-inverse-primary py-14 
              text-center md:my-0 md:py-14
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

      <CompareCards ComparingProducts={ComparingProducts} />

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
