"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { useLayoutEffect, useState } from "react"

import "swiper/css"
import { BiteCareProduct } from "@/types/common/product"

import SwiperButtonNext from "./SwiperButtonNext"
import ProductSwiperSlide from "./ProductSwiperSlide"
import RotatingCircularSwiperButtonText from "./RotatingCircularSwiperButtonText"

type ProductSwiperProps = {
  products: BiteCareProduct[]
}

export default function ProductSwiper({ products }: ProductSwiperProps) {
  const [slidesPerView, setSlidesPerView] = useState(2.5)

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window.innerWidth < 1280) {
          setSlidesPerView(2.5)
        } else {
          setSlidesPerView(1.5)
        }
      }

      window.addEventListener("resize", handleResize)
      handleResize()

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  return (
    <Swiper
      slidesPerView={slidesPerView}
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
              absolute left-[65%] md:left-[70%] lg:left-[75%] xl:left-[55%] top-[10%]
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
