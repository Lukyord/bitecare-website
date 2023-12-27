"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { BiteCareProduct } from "@/types/common/product"

import ProductTag from "@/components/common/ProductTag"

type CompareCardProps = {
  selectedProduct: BiteCareProduct
}

export default function CompareCard({ selectedProduct }: CompareCardProps) {
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1)
  }, [selectedProduct])

  return (
    <div
      className="
                group flex h-full
                cursor-pointer flex-col
                overflow-hidden rounded-2xl
                bg-white text-left
                transition-all duration-300
                ease-in-out hover:shadow-2xl
              "
    >
      {/* Product Image */}
      <motion.div
        key={animationKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`
                relative h-[40vw] w-full 
                lg:h-[20vw] ${selectedProduct.compareBgColor} 
                group overflow-hidden
              `}
      >
        <Image
          alt="product front"
          src={selectedProduct.imageFront}
          width={1192}
          height={2128}
          className="
                  absolute bottom-[-5%] right-1/2 
                  h-full w-auto translate-x-[50%] 
                  transition-all duration-300
                  ease-in-out  group-hover:scale-110 lg:right-[2.5%]
                  lg:translate-x-0
                "
          priority
        />
        <Image
          alt="product dog"
          src={selectedProduct.imageDog}
          className="
                  absolute bottom-0 left-0 
                  hidden h-full w-auto transition-all
                  duration-300  ease-in-out group-hover:scale-110
                  lg:block
                "
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
            {selectedProduct.name}
          </motion.h3>
          <div
            className="
                  w-[60px] transition-all duration-300 ease-in-out 
                  group-hover:w-[160px] xs:w-[80px]
                "
          >
            <motion.div
              key={animationKey}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              className={`
                  ${selectedProduct.compareDividerColor} h-1 
                `}
            />
          </div>
          <div className="h-20 w-full">
            <div className="flex flex-wrap gap-1">
              {selectedProduct.tags.map((tag, index) => (
                <React.Fragment key={index}>
                  <ProductTag tag={tag} size="small" />
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
          className="mt-3 text-justify text-subtitle xs:mt-6 md:mt-0 lg:text-paragraph"
        >
          {selectedProduct.productInfo.compareDescription1}
        </motion.article>

        <motion.article
          key={animationKey + "_article_2"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-justify text-subtitle lg:text-paragraph"
        >
          {selectedProduct.productInfo.compareDescription2}
        </motion.article>
      </div>
    </div>
  )
}
