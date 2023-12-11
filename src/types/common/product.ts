import { ProductTags } from "@/constant/Products"
import { StaticImageData } from "next/image"

export type BiteCareProductName =
  | "Skin Care"
  | "Low Fat"
  | "Senior Care"
  | "Renal Care"

export type BiteCareProductTagName = keyof typeof ProductTags

export type BiteCareProductTag = (typeof ProductTags)[BiteCareProductTagName]

export type BiteCareProduct = {
  name: BiteCareProductName
  description1: string
  description2: string
  imageFront: StaticImageData
  imageDog: StaticImageData
  altImageDog: string
  tags: BiteCareProductTag[]
  bgColor: string
  dividerColor: string
  href: string
}
