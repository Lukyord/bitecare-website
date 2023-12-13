import {
  BiteCareProduct,
  BiteCareProductImageSlug,
} from "@/types/common/product"
import ProductDetailImageGallery from "./ProductDetailImageGallery"
import ProductDetailInfo from "./ProductDetailInfo"

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
                  mx-auto flex w-[80vw] flex-col 
                  pb-14 pt-36 lg:h-[115vh] 
                  xl:flex-row xl:justify-between 2xl:h-[100vh]
                "
    >
      <div className="sm:w-[55%]">
        <ProductDetailImageGallery
          product={product}
          selectedImage={selectedImage}
        />
      </div>
      <div className="sm:w-[40%]">
        <ProductDetailInfo product={product} />
      </div>
    </section>
  )
}
