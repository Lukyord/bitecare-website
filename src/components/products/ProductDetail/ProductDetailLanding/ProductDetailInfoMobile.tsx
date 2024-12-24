"use client"

import React from "react"
import { useTranslations } from "next-intl"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-cards"
import { EffectCards } from "swiper/modules"
import { BiteCareProduct } from "@/types/common/product"

import ProductTag from "@/components/common/ProductTag"
import SecondaryButton from "@/components/common/Button/SecondaryButton"
import SwiperButtonNext from "../../Products/ProductsPageLanding/SwiperButtonNext"
import { Product, ProductTag as ProductTagType } from "@/payload/type-gen"

type ProductDetailInfoMobileProps = {
  product: Product
}

export default function ProductDetailInfoMobile({
  product,
}: ProductDetailInfoMobileProps) {
  const tButton = useTranslations("button")

  return (
    <>
      <Swiper
        effect={"cards"}
        cardsEffect={{
          rotate: false,
        }}
        speed={1200}
        loop={true}
        allowTouchMove={false}
        spaceBetween={50}
        centeredSlides={true}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCards]}
        className="mx-auto h-full w-[80%]"
      >
        <SwiperButtonNext
          style="absolute w-24 h-24 rounded-full  bg-bc-inverse-primary  top-[-10%] right-[5%] z-10"
          id="product-info-next"
        >
          <p className="whitespace-normal text-paragraph text-white">
            {tButton("more-info")}
          </p>
        </SwiperButtonNext>

        <SwiperSlide className="rounded-2xl bg-bc-surface-container">
          {/* Header */}
          <div className="mx-auto flex h-full w-[90%] flex-col justify-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-h3">{product.label}</h1>
              {/* Todo: Change to divider color */}
              <div className={`${product.primary_color} h-1 w-[60%]`} />
              <div className="flex flex-wrap gap-1">
                {product.tags?.map((tag, index) => (
                  <React.Fragment key={index}>
                    <ProductTag tag={tag as ProductTagType} size="small" />
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="my-6 text-justify text-paragraph">
              {product.description}
            </p>
          </div>
        </SwiperSlide>
        {/* Question */}
        {product.facts.map((fact, index) => (
          <SwiperSlide
            key={fact.id ?? `fact-unknown-${index}`}
            className="rounded-2xl bg-bc-surface-container"
          >
            <div className="mx-auto my-[10%] flex h-full w-[90%] flex-col  gap-4">
              <p className="w-[70%] text-h3">{fact.title}</p>
              <p>{fact.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-[-10%] right-[7.5%] z-10">
        <SecondaryButton
          text={tButton("get-our-product")}
          size="paragraph"
          specificWidth="w-[250px]"
          href="/where-to-buy?type=physical-store"
        />
      </div>
    </>
  )
}
