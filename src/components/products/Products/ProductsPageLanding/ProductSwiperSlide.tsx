"use client"

import Image from "next/image"
import { useSwiperSlide } from "swiper/react"

import { useActiveProduct } from "@/context/ActiveProductContextProvider"
import { useEffect } from "react"
import { Media, Product } from "@/payload/type-gen"

type ProductSwiperSlideProps = {
  product: Product
}

export default function ProductSwiperSlide({
  product,
}: ProductSwiperSlideProps) {
  const swiperSlide = useSwiperSlide()
  const { setActiveProduct } = useActiveProduct()

  useEffect(() => {
    if (swiperSlide.isActive) setActiveProduct(product)
  }, [swiperSlide.isActive, product, setActiveProduct])

  const frontImg = product.front_img as Media

  return (
    <Image
      alt={frontImg.alt}
      src={frontImg.url ?? ""}
      width={frontImg.width ?? 1192}
      height={frontImg.height ?? 2128}
      className="h-auto w-full px-[10%] xl:h-full xl:max-h-[700px] xl:w-auto"
      priority
    />
  )
}
