import { getTranslations } from "next-intl/server"

import { BiteCareProduct } from "@/types/common/product"
import { Images } from "@/constant/Images"
import { ProductTags } from "@/constant/Products"

export default async function getProducts() {
  const tSkinCare = await getTranslations("skin-care")
  const tLowFat = await getTranslations("low-fat")
  const tSeniorCare = await getTranslations("senior-care")
  const tRenalCare = await getTranslations("renal-care")

  const BiteCareProducts: BiteCareProduct[] = [
    {
      name: "Skin Care",
      slug: "skin-care",
      imageFront: Images.SkinCareFront,
      imageBack: Images.SkinCareBack,
      imageDog: Images.SkinCareDogCropped,
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
      productInfo: {
        compareDescription1: tSkinCare("compare-description-1"),
        compareDescription2: tSkinCare("compare-description-2"),
        productDescription: tSkinCare("product-description"),
        questions: [
          tSkinCare("question-1"),
          tSkinCare("question-2"),
          tSkinCare("question-3"),
        ],
        answers: [
          tSkinCare("answer-1"),
          tSkinCare("answer-2"),
          tSkinCare("answer-3"),
        ],
        testimonial: {
          text: tSkinCare("testimonial"),
          name: tSkinCare("testimonial-name"),
        },
        summaries: [
          tSkinCare("summary-1"),
          tSkinCare("summary-2"),
          tSkinCare("summary-3"),
        ],
        summaryImages: [
          Images.CrocodileProteinBlack,
          Images.Omega3AndAminoAcids,
          Images.GlutenFreeBlack,
        ],
        summaryDescriptions: [
          tSkinCare("summary-description-1"),
          tSkinCare("summary-description-2"),
          tSkinCare("summary-description-3"),
        ],
      },
      compareBgColor: "bg-[#CEEFF4]",
      compareDividerColor: "bg-[#1A9CBC]",
      productCardBgColor: "bg-[#1A9CBC]",
      href: "/products/skin-care",
    },
    {
      name: "Low Fat",
      slug: "low-fat",
      imageFront: Images.LowFatFront,
      imageBack: Images.LowFatBack,
      imageDog: Images.LowFatDogCropped,
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
      productInfo: {
        compareDescription1: tLowFat("compare-description-1"),
        compareDescription2: tLowFat("compare-description-2"),
        productDescription: tLowFat("product-description"),
        questions: [
          tLowFat("question-1"),
          tLowFat("question-2"),
          tLowFat("question-3"),
        ],
        answers: [
          tLowFat("answer-1"),
          tLowFat("answer-2"),
          tLowFat("answer-3"),
        ],
        testimonial: {
          text: tLowFat("testimonial"),
          name: tLowFat("testimonial-name"),
        },
        summaries: [
          tLowFat("summary-1"),
          tLowFat("summary-2"),
          tLowFat("summary-3"),
        ],
        summaryImages: [
          Images.LowFatBlack,
          Images.LCarnetineBlack,
          Images.CollagenType2Black,
        ],
        summaryDescriptions: [
          tLowFat("summary-description-1"),
          tLowFat("summary-description-2"),
          tLowFat("summary-description-3"),
        ],
      },
      compareBgColor: "bg-[#DCF9DD]",
      compareDividerColor: "bg-[#009172]",
      productCardBgColor: "bg-[#009172]",
      href: "/products/low-fat",
    },
    {
      name: "Senior Care",
      slug: "senior-care",
      imageFront: Images.SeniorCareFront,
      imageBack: Images.SeniorCareBack,
      imageDog: Images.SeniorCareDogCropped,
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
      productInfo: {
        compareDescription1: tSeniorCare("compare-description-1"),
        compareDescription2: tSeniorCare("compare-description-2"),
        productDescription: tSeniorCare("product-description"),
        questions: [
          tSeniorCare("question-1"),
          tSeniorCare("question-2"),
          tSeniorCare("question-3"),
        ],
        answers: [
          tSeniorCare("answer-1"),
          tSeniorCare("answer-2"),
          tSeniorCare("answer-3"),
        ],
        testimonial: {
          text: tSeniorCare("testimonial"),
          name: tSeniorCare("testimonial-name"),
        },
        summaries: [
          tSeniorCare("summary-1"),
          tSeniorCare("summary-2"),
          tSeniorCare("summary-3"),
        ],
        summaryImages: [
          Images.FishOilDHABlack,
          Images.GinkgoExtractBlack,
          Images.CollagenType2Black,
        ],
        summaryDescriptions: [
          tSeniorCare("summary-description-1"),
          tSeniorCare("summary-description-2"),
          tSeniorCare("summary-description-3"),
        ],
      },
      compareBgColor: "bg-[#E6DBF9]",
      compareDividerColor: "bg-[#866DAF]",
      productCardBgColor: "bg-[#866DAF]",
      href: "/products/senior-care",
    },
    {
      name: "Renal Care",
      slug: "renal-care",
      imageFront: Images.RenalCareFront,
      imageBack: Images.RenalCareBack,
      imageDog: Images.RenalCareDogCropped,
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
      productInfo: {
        compareDescription1: tRenalCare("compare-description-1"),
        compareDescription2: tRenalCare("compare-description-2"),
        productDescription: tRenalCare("product-description"),
        questions: [
          tRenalCare("question-1"),
          tRenalCare("question-2"),
          tRenalCare("question-3"),
        ],
        answers: [
          tRenalCare("answer-1"),
          tRenalCare("answer-2"),
          tRenalCare("answer-3"),
        ],
        testimonial: {
          text: tRenalCare("testimonial"),
          name: tRenalCare("testimonial-name"),
        },
        summaries: [
          tRenalCare("summary-1"),
          tRenalCare("summary-2"),
          tRenalCare("summary-3"),
        ],
        summaryImages: [
          Images.LowProteinAndPhosphorusBlack,
          Images.Omega3AndAminoAcids,
          Images.ChitosanExtractBlack,
        ],
        summaryDescriptions: [
          tRenalCare("summary-description-1"),
          tRenalCare("summary-description-2"),
          tRenalCare("summary-description-3"),
        ],
      },
      compareBgColor: "bg-[#F9D7D7]",
      compareDividerColor: "bg-[#EB7BAD]",
      productCardBgColor: "bg-[#DA7CA6]",
      href: "/products/renal-care",
    },
  ]

  return BiteCareProducts
}
