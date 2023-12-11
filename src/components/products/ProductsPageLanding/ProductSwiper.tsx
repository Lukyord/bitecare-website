"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"
import { BiteCareProduct } from "@/types/common/product"

import SwiperButtonNext from "./SwiperButtonNext"
import ProductSwiperSlide from "./ProductSwiperSlide"

type ProductSwiperProps = {
  products: BiteCareProduct[]
}

export default function ProductSwiper({ products }: ProductSwiperProps) {
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

      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <ProductSwiperSlide product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
