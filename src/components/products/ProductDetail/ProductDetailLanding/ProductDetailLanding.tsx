import { pick } from "lodash"
import { NextIntlClientProvider, useMessages } from "next-intl"

import {
  BiteCareProduct,
  BiteCareProductImageSlug,
} from "@/types/common/product"

import ProductDetailImageGallery from "./ProductDetailImageGallery"
import ProductDetailInfo from "./ProductDetailInfo"
import ProductDetailImageGalleryMobile from "./ProductDetailImageGalleryMobile"
import ProductDetailInfoMobile from "./ProductDetailInfoMobile"

type ProductDetailLandingProps = {
  product: BiteCareProduct
  selectedImage: BiteCareProductImageSlug
}

export default function ProductDetailLanding({
  product,
  selectedImage,
}: ProductDetailLandingProps) {
  const messages = useMessages()

  return (
    <section
      className="
                  mx-auto flex
                  w-full flex-col pb-24
                  pt-32 lg:pt-36 xl:h-[115vh] 
                  xl:w-[80vw] xl:flex-row 
                  xl:justify-between 
                  2xl:h-[100vh]
                "
    >
      {/* ========== Desktop ========== */}
      <div className="hidden w-[55%] xl:block">
        <ProductDetailImageGallery
          product={product}
          selectedImage={selectedImage}
        />
      </div>
      <div className="hidden w-[40%] xl:block">
        <ProductDetailInfo product={product} />
      </div>

      {/* ========== Mobile ========== */}
      <div className="relative block h-[50vh] xl:hidden">
        <ProductDetailImageGalleryMobile product={product} />
      </div>
      <div className="relative my-[5vh] block h-[40vh] xl:hidden">
        <NextIntlClientProvider messages={pick(messages, ["button"])}>
          <ProductDetailInfoMobile product={product} />
        </NextIntlClientProvider>
      </div>
    </section>
  )
}
