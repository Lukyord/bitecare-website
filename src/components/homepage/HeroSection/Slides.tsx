"use client"

import { Images } from "@/constant/Images"
import Image from "next/image"

import useEmblaCarousel from "embla-carousel-react"

import "./slides.css"
import { Home, Media } from "@/payload/type-gen"

type SlidesProps = {
  slides: Home["hero"]["hero_slides"]
}

export default function Slides({ slides }: SlidesProps) {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides?.map((slide, index) => (
          <div key={index} className="embla__slide">
            <div className="relative h-[50vh] w-full">
              <Image
                alt={slide.slide_title}
                src={(slide.slide_image as Media).url ?? ""}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
