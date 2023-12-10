import { ProductTags } from "@/constant/Products"
import { StaticImageData } from "next/image"

export type BiteCareProductName =
  | "Skin Care"
  | "Low Fat"
  | "Senior Care"
  | "Renal Care"

export type BiteCareProductTagName = keyof typeof ProductTags

export type BiteCareProductTag = (typeof ProductTags)[BiteCareProductTagName]

export type ComparingProductCard = {
  name: BiteCareProductName
  description1: string
  description2: string
  image1: StaticImageData
  image2: StaticImageData
  tags: BiteCareProductTag[]
  bgColor: string
  dividerColor: string
  href: string
}

export type ProductImage = {
  image: StaticImageData
  name: BiteCareProductName
}
