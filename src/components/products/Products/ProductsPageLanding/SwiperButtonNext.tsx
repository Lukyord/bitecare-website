"use client"

import { useSwiper } from "swiper/react"
import { useState } from "react"

type SwiperButtonNextProps = {
  children: React.ReactNode
  style: string
  id: string
}

export default function SwiperButtonNext({
  children,
  id,
  style,
}: SwiperButtonNextProps) {
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
      id={id}
      className={style}
      onClick={handleClick}
      disabled={isButtonDisabled}
    >
      {children}
    </button>
  )
}
