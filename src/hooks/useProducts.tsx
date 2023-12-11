import { getTranslations } from "next-intl/server"

import { BiteCareProduct } from "@/types/common/product"
import { Images } from "@/constant/Images"
import { ProductTags } from "@/constant/Products"

export default async function useProducts() {
  const tComparingProducts = await getTranslations("comparing-products")
  const BiteCareProducts: BiteCareProduct[] = [
    {
      name: "Skin Care",
      description1: tComparingProducts("skin-care-description-1"),
      description2: tComparingProducts("skin-care-description-2"),
      imageFront: Images.SkinCareFront,
      imageDog: Images.SkinCareDogCropped,
      altImageDog: "Skin Care Dog",
      tags: [
        ProductTags["Crocodile Protein"],
        ProductTags["Gluten Free"],
        ProductTags["Omega-3 & Amino Acids"],
      ],
      bgColor: "bg-[#CEEFF4]",
      dividerColor: "bg-[#1A9CBC]",
      href: "/products/skin-care",
    },
    {
      name: "Low Fat",
      description1: tComparingProducts("low-fat-description-1"),
      description2: tComparingProducts("low-fat-description-2"),
      imageFront: Images.LowFatFront,
      imageDog: Images.LowFatDogCropped,
      altImageDog: "Low Fat Dog",
      tags: [
        ProductTags["Low Calories & Fats"],
        ProductTags["L-Carnitine"],
        ProductTags["Collagen Type2"],
      ],
      bgColor: "bg-[#DCF9DD]",
      dividerColor: "bg-[#009172]",
      href: "/products/low-fat",
    },
    {
      name: "Senior Care",
      description1: tComparingProducts("senior-care-description-1"),
      description2: tComparingProducts("senior-care-description-2"),
      imageFront: Images.SeniorCareFront,
      imageDog: Images.SeniorCareDogCropped,
      altImageDog: "Senior Care Dog",
      tags: [
        ProductTags["Fish oil DHA"],
        ProductTags["Ginkgo Extract"],
        ProductTags["Collagen Type2"],
      ],
      bgColor: "bg-[#E6DBF9]",
      dividerColor: "bg-[#866DAF]",
      href: "/products/senior-care",
    },
    {
      name: "Renal Care",
      description1: tComparingProducts("renal-care-description-1"),
      description2: tComparingProducts("renal-care-description-2"),
      imageFront: Images.RenalCareFront,
      imageDog: Images.RenalCareDogCropped,
      altImageDog: "Renal Care Dog",
      tags: [
        ProductTags["Low Protein & Phosphorus"],
        ProductTags["Chitosan Extract"],
        ProductTags["Omega-3 & Amino Acids"],
      ],
      bgColor: "bg-[#F9D7D7]",
      dividerColor: "bg-[#EB7BAD]",
      href: "/products/renal-care",
    },
  ]

  return { BiteCareProducts }
}
