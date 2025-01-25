"use client"

import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow } from "swiper/modules"
import Image from "next/image"

import "swiper/css"
import "swiper/css/effect-coverflow"
import { ProductImage } from "@/types/common/product"
import { Media, Product } from "@/payload/type-gen"
import {
  convertStringMediaToMedias,
  convertStringMediaToStaticImageData,
} from "@/lib/type-conversion"

type ProductDetailImageGalleryMobileProps = {
  product: Product
}

export default function ProductDetailImageGalleryMobile({
  product,
}: ProductDetailImageGalleryMobileProps) {
  const productImages = convertStringMediaToMedias([
    product.front_img,
    product.back_img,
    product.summary_img,
    product.clinic_test_img,
    product.palatability_test_img,
    product.registration_number_img,
  ])
  // const productImages: ProductImage[] = [
  //   {
  //     // image: convertStringMediaToStaticImageData(product.front_img),
  //     image: convertStringMediaToStaticImageData(product.back_img),
  //     slug: "front",
  //   },
  //   {
  //     image: convertStringMediaToStaticImageData(product.back_img),
  //     slug: "back",
  //   },
  //   {
  //     image: convertStringMediaToStaticImageData(product.summary_img),
  //     slug: "summary",
  //   },
  //   {
  //     image: convertStringMediaToStaticImageData(product.clinic_test_img),
  //     slug: "clinic-test",
  //   },
  //   {
  //     image: convertStringMediaToStaticImageData(product.palatability_test_img),
  //     slug: "palatability-test",
  //   },
  //   {
  //     image: convertStringMediaToStaticImageData(
  //       product.registration_number_img
  //     ),
  //     slug: "registration-number",
  //   },
  // ]
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
        style={{ backgroundColor: product.primary_color }}
        className={`inset-x-[20%] inset-y-[5%] bg-[${product.primary_color}] md:w-[50%]lg:inset-x-[30%] absolute -z-10 h-[90%] w-[60%] rounded-3xl md:inset-x-[25%] lg:w-[40%]`}
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
            <div className="flex h-[50vh] items-center justify-center">
              <Image
                alt={productImage.alt}
                src={productImage.url ?? ""}
                height={productImage.height ?? 0}
                width={productImage.width ?? 0}
                className="h-fit max-h-full w-auto max-w-[50%] rounded-xl object-contain shadow-md"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
