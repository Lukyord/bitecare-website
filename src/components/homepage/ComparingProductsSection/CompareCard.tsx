"use client"

import { ComparingProductCard } from "@/types/common/product"

import Selector from "@/components/common/Selector"

type CompareCardProps = {
  ComparingProducts: ComparingProductCard[]
}

export default function CompareCard({ ComparingProducts }: CompareCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <Selector choices={ComparingProducts} />

      <div className="h-full w-full rounded-2xl bg-white"></div>
    </div>
  )
}
