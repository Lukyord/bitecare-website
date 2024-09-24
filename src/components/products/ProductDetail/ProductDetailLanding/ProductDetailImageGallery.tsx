import React from "react"

import {
  BiteCareProduct,
  BiteCareProductImageSlug,
  ProductImage,
} from "@/types/common/product"

import Image from "next/image"
import { Link } from "@/lib/navigation"

type ProductDetailImageGalleryProps = {
  product: BiteCareProduct
  selectedImage: BiteCareProductImageSlug
}

export default function ProductDetailImageGallery({
  product,
  selectedImage,
}: ProductDetailImageGalleryProps) {
  const productImages: ProductImage[] = [
    { image: product.imageFront, slug: "front" },
    { image: product.imageBack, slug: "back" },
    // { image: product.imageSummary, slug: "summary" },
    // { image: product.imageClinicTest, slug: "clinic-test" },
    // { image: product.imagePalatabilityTest, slug: "palatability-test" },
    // { image: product.imageRegistrationNumber, slug: "registration-number" },
  ]

  return (
    <div className="flex h-full w-full justify-around">
      {/* Image Links */}
      <div
        className="
                  my-20 flex
                  w-[25%] flex-col 
                  gap-6  overflow-hidden pr-6
                  hover:overflow-y-auto hover:pr-4
                "
      >
        {productImages.map((productImage, index) => (
          <React.Fragment key={index}>
            <Link
              href={`${product.href}?${new URLSearchParams({
                image: productImage.slug,
              })}`}
              scroll={false}
            >
              <Image
                alt={productImage.slug}
                src={productImage.image}
                className="rounded-xl shadow-md"
                priority
              />
            </Link>
          </React.Fragment>
        ))}
      </div>

      {/* Selected Image */}
      <div
        className="
                  relative flex w-[70%] 
                  items-center justify-center
                "
      >
        <div
          className={`${product.productCardBgColor} absolute -z-10 h-[90%] w-[90%] rounded-3xl`}
        />
        <Image
          alt="selected image"
          src={
            productImages.find((img) => img.slug === selectedImage)?.image ||
            productImages[0].image
          }
          className="
                h-fit max-h-full w-auto 
                max-w-[80%] rounded-2xl 
                object-contain shadow-2xl
              "
          priority
        />
      </div>
    </div>
  )
}
