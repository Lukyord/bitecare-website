"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import { ProductImage } from "@/types/common/product"

import SwiperButtonNext from "./SwiperButtonNext"
import ProductSwiperSlide from "./ProductSwiperSlide"

type ProductSwiperProps = {
  productImages: ProductImage[]
}

export default function ProductSwiper({ productImages }: ProductSwiperProps) {
  return (
    <Swiper
      slidesPerView={1.5}
      speed={1200}
      loop
      allowTouchMove={false}
      className="
              relative overflow-visible 
              rounded-bl-3xl rounded-tl-3xl 
              border-2 border-r-0
              border-bc-black
            "
    >
      <SwiperButtonNext />

      {productImages.map((productImage, index) => (
        <SwiperSlide key={index}>
          <ProductSwiperSlide productImage={productImage} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
