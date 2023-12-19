"use client"

import { useState } from "react"
import { PhysicalStore } from "@/types/where-to-buy/physical-store"

export default function usePhysicalStoreSearch() {
  const [result, setResult] = useState<PhysicalStore[] | null>(null)
  const [filterAccordionValue, setFilterAccordionValue] =
    useState("location filter")

  return { result, setResult, filterAccordionValue, setFilterAccordionValue }
}
