"use client"

import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { BiteCareProduct, ProductImage } from "@/types/common/product"
import Image from "next/image"

type ProductDetailImageGalleryMobileProps = {
  product: BiteCareProduct
}

export default function ProductDetailImageGalleryMobile({
  product,
}: ProductDetailImageGalleryMobileProps) {
  const productImages: ProductImage[] = [
    { image: product.imageFront, slug: "front" },
    { image: product.imageBack, slug: "back" },
    { image: product.imageSummary, slug: "summary" },
    { image: product.imageClinicTest, slug: "clinic-test" },
    { image: product.imagePalatabilityTest, slug: "palatability-test" },
    { image: product.imageRegistrationNumber, slug: "registration-number" },
  ]
  const [slidesPerView, setSlidesPerView] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const screenWidth = window.innerWidth
        let newSlidesPerView = 1.7

        if (screenWidth >= 768) {
          newSlidesPerView = 1.7
        } else if (screenWidth >= 640) {
          newSlidesPerView = 1.5
        } else if (screenWidth >= 430) {
          newSlidesPerView = 1.3
        } else {
          newSlidesPerView = 1.1
        }

        setSlidesPerView(newSlidesPerView)
      }

      window.addEventListener("resize", handleResize)
      handleResize()

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  return (
    <>
      <div
        className={`
                inset-x-[20%] inset-y-[5%] 
                ${product.productCardBgColor} 
                absolute -z-10 h-[90%] w-[60%] 
                rounded-3xl md:inset-x-[25%] md:w-[50%]
                lg:inset-x-[30%] lg:w-[40%]
              `}
      />
      <Swiper
        loop={true}
        speed={1200}
        autoplay={{
          delay: 5000,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
      >
        {productImages.map((productImage, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                  flex h-[50vh] items-center justify-center
                "
            >
              <Image
                alt={productImage.slug}
                src={productImage.image}
                className="
                  h-fit max-h-full w-auto
                  max-w-[50%] rounded-xl
                  object-contain shadow-md
                "
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
