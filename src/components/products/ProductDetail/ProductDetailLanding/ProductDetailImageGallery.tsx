"use client"

import React from "react"

import Image from "next/image"
import { Media, Product } from "@/payload/type-gen"

type ProductDetailImageGalleryProps = {
  product: Product
}

export default function ProductDetailImageGallery({
  product,
}: ProductDetailImageGalleryProps) {
  const productImages: Media[] = [
    product.front_img as Media,
    product.back_img as Media,
  ]

  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0)

  const onChangeImageIndex = (index: number) => {
    if (index < 0 || index >= productImages.length) return
    setSelectedImageIndex(index)
  }

  return (
    <div className="flex h-full w-full justify-around">
      {/* Image Links */}
      <div className="my-20 flex w-[25%] flex-col  gap-6  overflow-hidden pr-6 hover:overflow-y-auto hover:pr-4">
        {productImages.map((productImage, index) => (
          <React.Fragment key={index}>
            {/* <Link
              href={`${product.href}?${new URLSearchParams({
                image: productImage.slug,
              })}`}
              scroll={false}
            > */}
            <Image
              alt={productImage.alt}
              src={productImage.url ?? ""}
              height={productImage.height ?? 2128}
              width={productImage.width ?? 1192}
              className="rounded-xl shadow-md"
              onClick={() => onChangeImageIndex(index)}
              priority
            />
            {/* </Link> */}
          </React.Fragment>
        ))}
      </div>

      {/* Selected Image */}
      <div className="relative flex w-[70%] items-center justify-center">
        <div
          className={`${product.primary_color} absolute -z-10 h-[90%] w-[90%] rounded-3xl`}
        />
        <Image
          alt={productImages[selectedImageIndex]?.alt}
          src={productImages[selectedImageIndex]?.url ?? ""}
          height={productImages[selectedImageIndex]?.height ?? 2128}
          width={productImages[selectedImageIndex]?.width ?? 1192}
          className="h-fit max-h-full w-auto max-w-[80%] rounded-2xl object-contain shadow-2xl"
          priority
        />
      </div>
    </div>
  )
}
