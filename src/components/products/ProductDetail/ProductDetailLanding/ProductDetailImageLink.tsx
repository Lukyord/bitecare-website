"use client"

import { useRouter } from "@/lib/navigation"
import { BiteCareProductImageSlug } from "@/types/common/product"
import { StaticImageData } from "next/image"

type ProductDetailImageLinkProps = {
  productImage: {
    image: StaticImageData
    slug: BiteCareProductImageSlug
  }
  children: React.ReactNode
}

export default function ProductDetailImageLink({
  productImage,
  children,
}: ProductDetailImageLinkProps) {
  const router = useRouter()

  return (
    <div
      onClick={() =>
        router.replace(`?${new URLSearchParams({ image: productImage.slug })}`)
      }
    >
      {children}
    </div>
  )
}
