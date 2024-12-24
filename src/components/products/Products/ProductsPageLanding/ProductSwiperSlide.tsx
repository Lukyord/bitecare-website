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
      className="h-full max-h-[30vh] w-auto border-r-2  border-bc-black px-[10%] py-[10%] sm:max-h-[600px] xl:max-h-[60vh] 2xl:max-h-full"
      priority
    />
  )
}
