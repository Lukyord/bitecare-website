"use client"

import { useSwiper } from "swiper/react"
import RotatingCircularSwiperButtonText from "./RotatingCircularSwiperButtonText"
import { useState } from "react"

export default function SwiperButtonNext() {
  const swiper = useSwiper()
  const [isButtonDisabled, setButtonDisabled] = useState(false)

  const handleClick = () => {
    if (!isButtonDisabled) {
      setButtonDisabled(true)

      swiper.slideNext()

      setTimeout(() => {
        setButtonDisabled(false)
      }, 1500)
    }
  }

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
      onClick={handleClick}
      disabled={isButtonDisabled}
    >
      <RotatingCircularSwiperButtonText />
    </button>
  )
}
