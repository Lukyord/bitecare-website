"use client"

import Image, { StaticImageData } from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

import SwiperButtonNext from "./SwiperButtonNext"

type ProductSwiperProps = {
  productImages: StaticImageData[]
}

export default function ProductSwiper({ productImages }: ProductSwiperProps) {
  return (
    <Swiper
      slidesPerView={1.5}
      speed={1200}
      loop
      allowTouchMove={false}
      className="
              relative rounded-bl-3xl 
              rounded-tl-3xl border-2 
              border-r-0 border-bc-black
            "
    >
      <SwiperButtonNext />

      {productImages.map((productImage, index) => (
        <SwiperSlide key={index}>
          <Image
            alt="product-image"
            src={productImage}
            width={600}
            height={1000}
            className="
                    h-full w-auto border-r-2 
                    border-bc-black 
                    px-[10%] py-[10%]
                  "
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
