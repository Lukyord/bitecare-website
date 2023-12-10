"use client"

import Image from "next/image"
import { useSwiperSlide } from "swiper/react"

import { ProductImage } from "@/types/common/product"
import { useActiveProduct } from "@/context/ActiveProductContextProvider"
import { useEffect } from "react"

type ProductSwiperSlideProps = {
  productImage: ProductImage
}

export default function ProductSwiperSlide({
  productImage,
}: ProductSwiperSlideProps) {
  const swiperSlide = useSwiperSlide()
  const { setActiveProduct } = useActiveProduct()

  useEffect(() => {
    if (swiperSlide.isActive) {
      setActiveProduct(productImage.name)
    }
  }, [swiperSlide.isActive, productImage.name, setActiveProduct])

  return (
    <div>
      <Image
        alt="product-image"
        src={productImage.image}
        width={600}
        height={1000}
        className="
                h-full w-auto border-r-2 
                border-bc-black 
                px-[10%] py-[10%]
              "
        priority
      />
    </div>
  )
}
