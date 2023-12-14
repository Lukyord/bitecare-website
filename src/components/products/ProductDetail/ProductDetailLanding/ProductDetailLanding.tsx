import {
  BiteCareProduct,
  BiteCareProductImageSlug,
} from "@/types/common/product"
import ProductDetailImageGallery from "./ProductDetailImageGallery"
import ProductDetailInfo from "./ProductDetailInfo"
import ProductDetailImageGalleryMobile from "./ProductDetailImageGalleryMobile"

type ProductDetailLandingProps = {
  product: BiteCareProduct
  selectedImage: BiteCareProductImageSlug
}

export default function ProductDetailLanding({
  product,
  selectedImage,
}: ProductDetailLandingProps) {
  return (
    <section
      className="
                  mx-auto flex h-[100vh] 
                  w-full flex-col pb-14
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
      <div className="block h-[40vh] w-[100vw] bg-red-300 xl:hidden"></div>
    </section>
  )
}
