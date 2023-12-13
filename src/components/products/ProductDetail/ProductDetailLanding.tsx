import { BiteCareProduct } from "@/types/common/product"
import ProductDetailImageGallery from "./ProductDetailImageGallery"

type ProductDetailLandingProps = {
  product: BiteCareProduct
}

export default function ProductDetailLanding({
  product,
}: ProductDetailLandingProps) {
  return (
    <section
      className="
                  mx-auto flex h-[100vh] 
                  w-[95vw] flex-col pb-14 
                  pt-28 xl:flex-row
                "
    >
      <div className="xl:w-[55%]">
        <ProductDetailImageGallery product={product} />
      </div>
    </section>
  )
}
