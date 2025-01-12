"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { ProductComparison } from "@/types/common/product"

import ProductTag from "@/components/common/ProductTag"
import { Media, ProductTag as ProductTagType } from "@/payload/type-gen"
import { getDividerColor } from "@/lib/color"

type CompareCardProps = {
  selectedProduct: ProductComparison
}

export default function CompareCard({ selectedProduct }: CompareCardProps) {
  const frontImg = selectedProduct.front_img as Media
  const petImg = selectedProduct.pet_image_cropped as Media
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1)
  }, [selectedProduct])

  return (
    <div className="group flex h-full select-none flex-col overflow-hidden rounded-2xl bg-white text-left transition-all duration-300 ease-in-out hover:shadow-2xl">
      {/* Product Image */}
      <motion.div
        key={animationKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="group relative h-[40vw] w-full overflow-hidden lg:h-[20vw]"
        style={{
          backgroundColor: selectedProduct.primary_color,
        }}
      >
        <Image
          alt={frontImg.alt}
          src={frontImg.url ?? ""}
          width={frontImg.width ?? 1192}
          height={frontImg.height ?? 2128}
          className="absolute bottom-[-5%] right-1/2 h-full w-auto translate-x-[50%] transition-all duration-300 ease-in-out group-hover:scale-110  lg:right-[2.5%] lg:translate-x-0"
          priority
        />
        <Image
          alt={petImg.alt}
          src={petImg.url ?? ""}
          height={petImg.height ?? 326}
          width={petImg.width ?? 521}
          className="absolute bottom-0 left-0  hidden h-full w-auto transition-all duration-300  ease-in-out group-hover:scale-110 lg:block"
        />
      </motion.div>

      <div className="group flex flex-col px-3 pb-10 pt-5 md:px-6 md:pb-14 md:pt-10">
        {/* Product header and Tags */}
        <div className="group flex flex-col gap-2 md:gap-5">
          <motion.h3
            key={animationKey + "_product_name"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-paragraph lg:text-h3"
          >
            {selectedProduct.label}
          </motion.h3>
          <div className="w-[60px] transition-all duration-300 ease-in-out  group-hover:w-[160px] xs:w-[80px]">
            <motion.div
              key={animationKey}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              className="h-1"
              style={{
                backgroundColor: getDividerColor(selectedProduct.primary_color),
              }}
            />
          </div>
          <div className="h-20 w-full">
            <div className="flex flex-wrap gap-1">
              {selectedProduct.tags?.map((tag, index) => (
                <React.Fragment key={index}>
                  <ProductTag tag={tag as ProductTagType} size="small" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Product description */}
        <motion.article
          key={animationKey + "_article_1"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-subtitle xs:mt-6 md:mt-0 lg:text-paragraph"
        >
          {selectedProduct.compare_description_main}
        </motion.article>

        <motion.article
          key={animationKey + "_article_2"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-justify text-subtitle lg:text-paragraph"
        >
          {selectedProduct.compare_description_sub}
        </motion.article>
      </div>
    </div>
  )
}
