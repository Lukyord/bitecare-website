import { BiteCareProduct } from "@/types/common/product"
import Image from "next/image"

type ProductDetailImageGalleryProps = {
  product: BiteCareProduct
}

export default function ProductDetailImageGallery({
  product,
}: ProductDetailImageGalleryProps) {
  const productImages = [
    product.imageFront,
    product.imageBack,
    product.imageSummary,
    product.imageClinicTest,
    product.imagePalatabilityTest,
    product.imageRegistrationNumber,
  ]

  return (
    <div className="flex h-full w-full justify-between">
      <div className="flex w-[25%] flex-col overflow-y-auto px-8 py-8">
        {productImages.map((image, index) => (
          <Image alt={product.name} src={image} key={index} />
        ))}
      </div>
      <div className="flex w-[65%] flex-col"></div>
    </div>
  )
}
