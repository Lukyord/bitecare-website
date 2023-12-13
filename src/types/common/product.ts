import { ProductTags } from "@/constant/Products"
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
  description1: string
  description2: string
  imageFront: StaticImageData
  imageBack: StaticImageData
  imageDog: StaticImageData
  altImageDog: string
  imageSummary: StaticImageData
  imageClinicTest: StaticImageData
  imagePalatabilityTest: StaticImageData
  imageFactSheet: StaticImageData
  imageRegistrationNumber: StaticImageData
  tags: BiteCareProductTag[]
  compareBgColor: string
  compareDividerColor: string
  productCardBgColor: string
  href: string
}

export type ProductImage = {
  image: StaticImageData
  slug: BiteCareProductImageSlug
}
