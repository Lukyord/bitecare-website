"use client"

import React from "react"

import {
  BiteCareProductName,
  ComparingProductCard,
} from "@/types/common/product"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type SelectorProps = {
  index: number
  choices: ComparingProductCard[]
  value: BiteCareProductName
  setSelectedProduct: React.Dispatch<
    React.SetStateAction<ComparingProductCard[]>
  >
}

export default function Selector({
  index,
  choices,
  value,
  setSelectedProduct,
}: SelectorProps) {
  return (
    <Select
      onValueChange={(value) =>
        setSelectedProduct((prev) => {
          const newSelectedProduct = [...prev]

          // Check if the selected value is already present in the array
          const duplicateIndex = newSelectedProduct.findIndex(
            (product) => product.name === value
          )

          if (duplicateIndex !== -1) {
            // Swap the duplicated card with the one you're currently changing
            const temp = newSelectedProduct[index]
            newSelectedProduct[index] = newSelectedProduct[duplicateIndex]
            newSelectedProduct[duplicateIndex] = temp
          } else {
            // If the value is not present, update the selected product
            newSelectedProduct[index] =
              choices.find((choice) => choice.name === value) || prev[index]
          }

          return newSelectedProduct
        })
      }
      value={value}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Product" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {choices.map((choice, index) => (
            <React.Fragment key={index}>
              <SelectItem value={choice.name}>{choice.name}</SelectItem>
            </React.Fragment>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
