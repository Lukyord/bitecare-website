import { Media } from "@/payload/type-gen"
import { StaticImageData } from "next/image"

export const convertStringMediaToStaticImageData = (
  image: string | Media
): StaticImageData => {
  const mediaImage = image as Media

  return {
    height: mediaImage.height ?? 2128,
    width: mediaImage.width ?? 1192,
    src: mediaImage.url ?? "",
  }
}

export const convertStringMediaToMedias = (
  images: (string | Media)[]
): Media[] => {
  return images.map((image) => image as Media)
}
