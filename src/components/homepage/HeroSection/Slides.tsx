"use client"

import { Images } from "@/constant/Images"
import Image from "next/image"
import { useRef } from "react"

import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper as SwiperType } from "swiper/types"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "./slides.css"
import { FaChevronRight } from "react-icons/fa"
import { FaChevronLeft } from "react-icons/fa"

import { Home, Media } from "@/payload/type-gen"

type SlidesProps = {
  slides: Home["hero"]["hero_slides"]
}

export default function Slides({ slides }: SlidesProps) {
  const swiperRef = useRef<SwiperType>(null)
  const swiper = useSwiper()

  return (
    <>
      <Swiper
        slidesPerView={1}
        effect="fade"
        speed={1200}
        loop
        modules={[Autoplay, EffectFade]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative mx-auto w-[90%]">
              <div className="relative aspect-[1.777] w-[90%] overflow-hidden">
                <Image
                  alt={slide.slide_title}
                  src={(slide.slide_image as Media).url ?? ""}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="absolute right-0 top-[50%] flex justify-center w-[30vw] flex-col gap-4 bg-bc-primary-container p-10 text-center translate-y-[-50%]">
                <h3 className="lg:text-h3">{slide.slide_title}</h3>
                <p className="lg:text-paragraph">{slide.slide_description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative z-30 mx-auto flex w-[90%] justify-between pb-10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              swiperRef.current?.slidePrev()
            }}
            type="button"
            data-role="none"
            className="text-[2rem] text-bc-primary-container"
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => {
              swiperRef.current?.slideNext()
            }}
            type="button"
            data-role="none"
            className="text-[2rem] text-bc-primary-container"
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  )
}
