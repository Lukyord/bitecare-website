"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"
import { BiteCareProduct } from "@/types/common/product"

import SwiperButtonNext from "./SwiperButtonNext"
import ProductSwiperSlide from "./ProductSwiperSlide"
import RotatingCircularSwiperButtonText from "./RotatingCircularSwiperButtonText"

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
      <SwiperButtonNext
        style="
              absolute left-[55%] top-[10%]
              z-10 flex items-center
              justify-center rounded-full border-[3px] border-black
              bg-bc-primary transition-all
              [filter:drop-shadow(4px_4px_0px_#000)] active:scale-[0.9]
            "
        id="swiper-button-next"
      >
        <RotatingCircularSwiperButtonText />
      </SwiperButtonNext>

      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <ProductSwiperSlide product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
