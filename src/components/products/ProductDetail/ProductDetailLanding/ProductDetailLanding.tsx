import {
  BiteCareProduct,
  BiteCareProductImageSlug,
} from "@/types/common/product"
import ProductDetailImageGallery from "./ProductDetailImageGallery"

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
                  w-[90vw] flex-col pb-14 
                  pt-36 xl:flex-row
                "
    >
      <div className="xl:w-[55%]">
        <ProductDetailImageGallery
          product={product}
          selectedImage={selectedImage}
        />
      </div>
    </section>
  )
}
