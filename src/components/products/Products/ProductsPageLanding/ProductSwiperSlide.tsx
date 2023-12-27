"use client"

import Image from "next/image"
import { useSwiperSlide } from "swiper/react"

import { BiteCareProduct } from "@/types/common/product"
import { useActiveProduct } from "@/context/ActiveProductContextProvider"
import { useEffect, useLayoutEffect } from "react"

type ProductSwiperSlideProps = {
  product: BiteCareProduct
}

export default function ProductSwiperSlide({
  product,
}: ProductSwiperSlideProps) {
  const swiperSlide = useSwiperSlide()
  const { setActiveProduct } = useActiveProduct()

  useEffect(() => {
    if (swiperSlide.isActive) {
      setActiveProduct(product.name)
    }
  }, [swiperSlide.isActive, product.name, setActiveProduct])

  return (
    <Image
      alt="product-image"
      src={product.imageFront}
      width={1192}
      height={2128}
      className="
                h-full max-h-[30vh] w-auto
                border-r-2 
                border-bc-black px-[10%]
                py-[10%] sm:max-h-full
              "
      priority
    />
  )
}
