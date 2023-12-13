import { getTranslations } from "next-intl/server"

import { BiteCareProduct } from "@/types/common/product"
import { Images } from "@/constant/Images"
import { ProductTags } from "@/constant/Products"

export default async function useProducts() {
  const tComparingProducts = await getTranslations("comparing-products")
  const BiteCareProducts: BiteCareProduct[] = [
    {
      name: "Skin Care",
      slug: "skin-care",
      description1: tComparingProducts("skin-care-description-1"),
      description2: tComparingProducts("skin-care-description-2"),
      imageFront: Images.SkinCareFront,
      imageBack: Images.SkinCareBack,
      imageDog: Images.SkinCareDogCropped,
      altImageDog: "Skin Care Dog",
      imageSummary: Images.SkinCareSummary,
      imageClinicTest: Images.SkinCareClinicTest,
      imagePalatabilityTest: Images.SkinCarePalatabilityTest,
      imageFactSheet: Images.SkinCareFactSheet,
      imageRegistrationNumber: Images.SkinCareRegistrationNumber,
      tags: [
        ProductTags["Crocodile Protein"],
        ProductTags["Gluten Free"],
        ProductTags["Omega-3 & Amino Acids"],
      ],
      compareBgColor: "bg-[#CEEFF4]",
      compareDividerColor: "bg-[#1A9CBC]",
      productCardBgColor: "bg-[#1A9CBC]",
      href: "/products/skin-care",
    },
    {
      name: "Low Fat",
      slug: "low-fat",
      description1: tComparingProducts("low-fat-description-1"),
      description2: tComparingProducts("low-fat-description-2"),
      imageFront: Images.LowFatFront,
      imageBack: Images.LowFatBack,
      imageDog: Images.LowFatDogCropped,
      altImageDog: "Low Fat Dog",
      imageSummary: Images.LowFatSummary,
      imageClinicTest: Images.LowFatClinicTest,
      imagePalatabilityTest: Images.LowFatPalatabilityTest,
      imageFactSheet: Images.LowFatFactSheet,
      imageRegistrationNumber: Images.LowFatRegistrationNumber,
      tags: [
        ProductTags["Low Calories & Fats"],
        ProductTags["L-Carnitine"],
        ProductTags["Collagen Type2"],
      ],
      compareBgColor: "bg-[#DCF9DD]",
      compareDividerColor: "bg-[#009172]",
      productCardBgColor: "bg-[#009172]",
      href: "/products/low-fat",
    },
    {
      name: "Senior Care",
      slug: "senior-care",
      description1: tComparingProducts("senior-care-description-1"),
      description2: tComparingProducts("senior-care-description-2"),
      imageFront: Images.SeniorCareFront,
      imageBack: Images.SeniorCareBack,
      imageDog: Images.SeniorCareDogCropped,
      altImageDog: "Senior Care Dog",
      imageSummary: Images.SeniorCareSummary,
      imageClinicTest: Images.SeniorCareClinicTest,
      imagePalatabilityTest: Images.SeniorCarePalatabilityTest,
      imageFactSheet: Images.SeniorCareFactSheet,
      imageRegistrationNumber: Images.SeniorCareRegistrationNumber,
      tags: [
        ProductTags["Fish oil DHA"],
        ProductTags["Ginkgo Extract"],
        ProductTags["Collagen Type2"],
      ],
      compareBgColor: "bg-[#E6DBF9]",
      compareDividerColor: "bg-[#866DAF]",
      productCardBgColor: "bg-[#866DAF]",
      href: "/products/senior-care",
    },
    {
      name: "Renal Care",
      slug: "renal-care",
      description1: tComparingProducts("renal-care-description-1"),
      description2: tComparingProducts("renal-care-description-2"),
      imageFront: Images.RenalCareFront,
      imageBack: Images.RenalCareBack,
      imageDog: Images.RenalCareDogCropped,
      altImageDog: "Renal Care Dog",
      imageSummary: Images.RenalCareSummary,
      imageClinicTest: Images.RenalCareClinicTest,
      imagePalatabilityTest: Images.RenalCarePalatabilityTest,
      imageFactSheet: Images.RenalCareFactSheet,
      imageRegistrationNumber: Images.RenalCareRegistrationNumber,
      tags: [
        ProductTags["Low Protein & Phosphorus"],
        ProductTags["Chitosan Extract"],
        ProductTags["Omega-3 & Amino Acids"],
      ],
      compareBgColor: "bg-[#F9D7D7]",
      compareDividerColor: "bg-[#EB7BAD]",
      productCardBgColor: "bg-[#DA7CA6]",
      href: "/products/renal-care",
    },
  ]

  return BiteCareProducts
}
