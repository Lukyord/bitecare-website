import { BiteCareProductSlug } from "@/types/common/product"

export const ProductTags = {
  "Low Calories & Fats": { name: "Low Calories & Fats", color: "bg-[#008166]" },
  "L-Carnitine": { name: "L-Carnitine", color: "bg-[#00A77B]" },
  "Collagen Type2": { name: "Collagen Type2", color: "bg-[#FF5722]" },
  "Low Protein & Phosphorus": {
    name: "Low Protein & Phosphorus",
    color: "bg-[#BA0F76]",
  },
  "Omega-3 & Amino Acids": {
    name: "Omega-3 & Amino Acids",
    color: "bg-[#FF7676]",
  },
  "Chitosan Extract": { name: "Chitosan Extract", color: "bg-[#CC4792]" },
  "Fish oil DHA": { name: "Fish oil DHA", color: "bg-[#50317D]" },
  "Ginkgo Extract": { name: "Ginkgo Extract", color: "bg-[#674B96]" },
  "Crocodile Protein": { name: "Crocodile Protein", color: "bg-[#009FBA]" },
  "Gluten Free": { name: "Gluten Free", color: "bg-[#64B7CC]" },
} as const

export const ProductSlugs: BiteCareProductSlug[] = [
  "low-fat",
  "skin-care",
  "senior-care",
  "renal-care",
] as const
