import { ProductTags } from "@/constant/Products"
import { Product } from "@/payload/type-gen"
import { StaticImageData } from "next/image"

export type BiteCareProductName =
  | "Skin Care"
  | "Low Fat"
  | "Senior Care"
  | "Renal Care"

export type BiteCareProductSlug =
  | "skin-care"
  | "low-fat"
  | "senior-care"
  | "renal-care"

export type BiteCareProductTagName = keyof typeof ProductTags

export type BiteCareProductTag = (typeof ProductTags)[BiteCareProductTagName]

export type BiteCareProductImageSlug =
  | "front"
  | "back"
  | "summary"
  | "clinic-test"
  | "palatability-test"
  | "registration-number"

export type BiteCareProduct = {
  name: BiteCareProductName
  slug: BiteCareProductSlug
  imageFront: StaticImageData
  imageBack: StaticImageData
  imageDog: StaticImageData
  imageSummary: StaticImageData
  imageClinicTest: StaticImageData
  imagePalatabilityTest: StaticImageData
  imageFactSheet: StaticImageData
  imageRegistrationNumber: StaticImageData
  tags: BiteCareProductTag[]
  productInfo: ProductInfo
  compareBgColor: string
  compareDividerColor: string
  productCardBgColor: string
  href: string
}

export type ProductComparison = Pick<
  Product,
  | "id"
  | "slug"
  | "label"
  | "front_img"
  | "dog_image_cropped"
  | "primary_color"
  | "tags"
  | "compare_description_main"
  | "compare_description_sub"
>

export type ProductInfo = {
  compareDescription1: string
  compareDescription2: string
  productDescription: string
  questions: string[]
  answers: string[]
  testimonial: {
    text: string
    name: string
  }
  summaries: string[]
  summaryImages: StaticImageData[]
  summaryDescriptions: string[]
}

export type ProductImage = {
  image: StaticImageData
  slug: BiteCareProductImageSlug
}
