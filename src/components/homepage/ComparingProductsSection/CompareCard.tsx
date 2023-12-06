"use client"

import { ComparingProductCard } from "@/types/common/product"
import Image from "next/image"

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
        className={`relative h-[20vw] w-full ${selectedProduct.bgColor} overflow-hidden`}
      >
        <Image
          alt="product front"
          src={selectedProduct.image2}
          width={1500}
          height={2500}
          className="absolute bottom-[-5%] right-[5%] h-full w-auto"
        />
        <Image
          alt="product dog"
          src={selectedProduct.image1}
          className="absolute bottom-0 left-0"
        />
      </div>

      <div className="flex flex-col px-6 pb-14 pt-10">
        {/* Product header and Tags */}
        <div className="flex flex-col gap-5">
          <h3 className="text-paragraph lg:text-h3">{selectedProduct.name}</h3>
          <div className={`${selectedProduct.dividerColor} h-1 w-[80px]`} />
          <div className="h-20 w-full">
            <div className="flex flex-wrap gap-1">
              {selectedProduct.tags.map((tag, index) => (
                <p
                  className={`${tag.color} w-fit whitespace-nowrap rounded-full px-3 py-1 text-subtitle text-white`}
                  key={index}
                >
                  {tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Product description */}
        <article className="mt-2 text-justify text-subtitle lg:text-paragraph">
          {selectedProduct.description1}
        </article>

        <article className="mt-6 text-justify text-subtitle lg:text-paragraph">
          {selectedProduct.description2}
        </article>
      </div>
    </div>
  )
}
