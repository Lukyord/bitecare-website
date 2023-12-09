"use client"

import { useSwiper } from "swiper/react"

type SwiperButtonNextProps = {
  children: React.ReactNode
  style: string
}

export default function SwiperButtonNext({
  children,
  style,
}: SwiperButtonNextProps) {
  const swiper = useSwiper()

  return (
    <button className={`${style}`} onClick={() => swiper.slideNext()}>
      {children}
    </button>
  )
}
