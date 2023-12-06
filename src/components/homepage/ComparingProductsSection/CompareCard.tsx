"use client"

import Image from "next/image"

import { ComparingProductCard } from "@/types/common/product"

type CompareCardProps = {
  selectedProduct: ComparingProductCard
}

export default function CompareCard({ selectedProduct }: CompareCardProps) {
  return (
    <div
      className="
                flex flex-col
                overflow-hidden rounded-2xl
                bg-white text-left
              "
    >
      {/* Product Image */}
      <div
        className={`relative h-[40vw] w-full lg:h-[20vw] ${selectedProduct.bgColor} overflow-hidden`}
      >
        <Image
          alt="product front"
          src={selectedProduct.image2}
          width={1192}
          height={2128}
          className="
                  absolute bottom-[-5%] right-1/2 
                  h-full w-auto translate-x-[50%] 
                  lg:right-[2.5%] lg:translate-x-0
                "
          priority
        />
        <Image
          alt="product dog"
          src={selectedProduct.image1}
          className="
                  absolute bottom-0 left-0 
                  hidden h-full w-auto lg:block
                "
        />
      </div>

      <div className="flex flex-col px-3 pb-10 pt-5 md:px-6 md:pb-14 md:pt-10">
        {/* Product header and Tags */}
        <div className="flex flex-col gap-2 md:gap-5">
          <h3 className="text-paragraph lg:text-h3">{selectedProduct.name}</h3>
          <div className={`${selectedProduct.dividerColor} h-1 w-[80px]`} />
          <div className="h-20 w-full">
            <div className="flex flex-wrap gap-1">
              {selectedProduct.tags.map((tag, index) => (
                <p
                  className={`${tag.color} xs:text-subtitle xs:py-1 w-fit whitespace-nowrap rounded-full px-3 text-sm text-white`}
                  key={index}
                >
                  {tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Product description */}
        <article className="xs:mt-6 mt-3 text-justify text-subtitle md:mt-0 lg:text-paragraph">
          {selectedProduct.description1}
        </article>

        <article className="mt-6 text-justify text-subtitle lg:text-paragraph">
          {selectedProduct.description2}
        </article>
      </div>
    </div>
  )
}
