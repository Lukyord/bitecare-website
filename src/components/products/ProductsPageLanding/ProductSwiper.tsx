"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

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
      autoplay={{
        delay: 5000,
      }}
      loop
      modules={[Autoplay]}
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
