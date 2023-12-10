"use client"

import { useSwiper } from "swiper/react"
import RotatingCircularSwiperButtonText from "./RotatingCircularSwiperButtonText"

export default function SwiperButtonNext() {
  const swiper = useSwiper()

  return (
    <button
      id="swiper-button-next"
      className="
              absolute left-[55%] top-[10%]
              z-10 flex items-center
              justify-center rounded-full border-[3px] border-black
              bg-bc-primary transition-all
              [filter:drop-shadow(4px_4px_0px_#000)] active:scale-[0.9]
            "
      onClick={() => swiper.slideNext()}
    >
      <RotatingCircularSwiperButtonText />
    </button>
  )
}
