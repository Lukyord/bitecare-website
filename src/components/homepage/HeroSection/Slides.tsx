"use client"

import { Images } from "@/constant/Images"
import Image from "next/image"
import { useRef } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
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

  return (
    <div className="relative">
      <Image
        alt="dog paw"
        src={Images.DogPawBcInversePrimary}
        className="absolute left-0 top-[-5%] z-20 h-auto w-[10vw] rotate-[15deg] sm:left-[5%] sm:top-[-10%]"
      />

      <Image
        alt="heart"
        src={Images.HeartBcPrimary_1}
        className="absolute bottom-[30%] left-0 z-20 h-auto w-[15vw] sm:bottom-[-5%]"
      />

      <Image
        alt="heart"
        src={Images.HeartBcPrimary_2}
        className="absolute bottom-[35%] right-0 z-20 h-auto w-[15vw] sm:bottom-[2%] sm:right-[5%]"
      />
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
            <div className="relative mx-auto flex w-[90%] flex-col items-center">
              <div className="relative aspect-[1.5] w-full overflow-hidden lg:aspect-[1.777] lg:w-[90%]">
                <Image
                  alt={slide.slide_title}
                  src={(slide.slide_image as Media).url ?? ""}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="right-0 top-[50%] z-20 -mt-10 flex w-[80%] flex-col justify-center gap-2 bg-bc-primary-container p-4 text-center lg:absolute lg:mt-0 lg:w-[30vw] lg:translate-y-[-50%] lg:gap-8 lg:p-10">
                <h3 className="text-paragraph lg:text-h3">
                  {slide.slide_title}
                </h3>
                <p className="text-subtitle lg:text-paragraph">
                  {slide.slide_description}
                </p>
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
    </div>
  )
}
