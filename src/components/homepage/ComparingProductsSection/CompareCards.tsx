"use client"

import { useState } from "react"

import { ComparingProductCard } from "@/types/common/product"

import Selector from "@/components/common/Selector"
import CompareCard from "./CompareCard"

type CompareCardProps = {
  ComparingProducts: ComparingProductCard[]
}

export default function CompareCards({ ComparingProducts }: CompareCardProps) {
  const [selectedProduct, setSelectedProduct] = useState([
    ComparingProducts[0],
    ComparingProducts[1],
    ComparingProducts[2],
  ])

  return (
    <div
      className="
                  grid w-[95%] 
                  grid-cols-2 gap-4
                  rounded-3xl bg-bc-primary-container
                  p-4 lg:grid-cols-3
                "
    >
      {selectedProduct.map((product, index) => (
        <div className="flex flex-col gap-4" key={index}>
          <Selector choices={ComparingProducts} defaultValue={product.name} />

          <CompareCard selectedProduct={product} />
        </div>
      ))}
    </div>
  )
}
