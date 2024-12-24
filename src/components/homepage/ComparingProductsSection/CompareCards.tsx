"use client"

import { useEffect, useState } from "react"

import Selector from "@/components/common/Selector"
import CompareCard from "./CompareCard"
import { ProductComparison } from "@/types/common/product"

type CompareCardProps = {
  products: ProductComparison[]
}

export default function CompareCards({ products }: CompareCardProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductComparison[]>(
    // Get first 3 products
    products.slice(0, 3)
  )
  const [sliceIndex, setSliceIndex] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        window.innerWidth < 1024 ? setSliceIndex(2) : setSliceIndex(3)
      }

      window.addEventListener("resize", handleResize)
      handleResize()

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  return (
    <div className="grid w-[95%] grid-cols-2 gap-4 rounded-3xl bg-bc-primary-container p-4 lg:grid-cols-3 lg:gap-8 lg:p-8">
      {selectedProduct.slice(0, sliceIndex).map((product, index) => (
        <div className="flex flex-col gap-4" key={index}>
          <Selector
            index={index}
            choices={products}
            value={product.slug}
            setSelectedProduct={setSelectedProduct}
          />

          <CompareCard selectedProduct={product} />
        </div>
      ))}
    </div>
  )
}
