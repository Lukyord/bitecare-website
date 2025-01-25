"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper as SwiperType } from "swiper/types"

import { useRef } from "react"

import "swiper/css"
import "swiper/css/effect-fade"

import SwiperButtonNext from "./SwiperButtonNext"
import ProductSwiperSlide from "./ProductSwiperSlide"
import RotatingCircularSwiperButtonText from "./RotatingCircularSwiperButtonText"
import { Product } from "@/payload/type-gen"

type ProductSwiperProps = {
  products: Product[]
}

export default function ProductSwiper({ products }: ProductSwiperProps) {
  const swiperRef = useRef<SwiperType>(null)

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      slidesPerView={1}
      speed={1200}
      effect="fade"
      autoplay={{
        delay: 5000,
      }}
      loop={true}
      modules={[Autoplay, EffectFade]}
      className="relative"
    >
      <SwiperButtonNext
        style="absolute right-[1vw] top-[3%] 2xl:right-auto 2xl:left-[430px] lg:right-[3vw] lg:top-[10%] z-10 flex items-center justify-center rounded-full border-[3px] border-black bg-bc-primary transition-all [filter:drop-shadow(4px_4px_0px_#000)] active:scale-[0.9]"
        id="swiper-button-next"
        swiperRef={swiperRef}
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
