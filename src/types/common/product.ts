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

export type BiteCareProduct = {
  name: BiteCareProductName
  slug: string
  description1: string
  description2: string
  imageFront: StaticImageData
  imageDog: StaticImageData
  altImageDog: string
  tags: BiteCareProductTag[]
  compareBgColor: string
  compareDividerColor: string
  productCardBgColor: string
  href: string
}
