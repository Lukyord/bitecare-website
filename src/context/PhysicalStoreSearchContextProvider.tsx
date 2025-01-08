"use client"

import { Store } from "@/payload/type-gen"
import { PhysicalStore } from "@/types/where-to-buy/physical-store"
import { createContext, useContext, useState } from "react"

type PhysicalStoreSearchContextType = {
  result: Store[] | null
  setResult: React.Dispatch<React.SetStateAction<Store[] | null>>
  filterAccordionValue: string
  setFilterAccordionValue: React.Dispatch<React.SetStateAction<string>>
}

export const PhysicalStoreSearchContext =
  createContext<PhysicalStoreSearchContextType | null>(null)

export function PhysicalStoreSearchContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [result, setResult] = useState<Store[] | null>(null)
  const [filterAccordionValue, setFilterAccordionValue] =
    useState("location filter")

  return (
    <PhysicalStoreSearchContext.Provider
      value={{
        result,
        setResult,
        filterAccordionValue,
        setFilterAccordionValue,
      }}
    >
      {children}
    </PhysicalStoreSearchContext.Provider>
  )
}

export const usePhysicalStoreSearch = () => {
  const context = useContext(PhysicalStoreSearchContext)

  if (context === null) {
    throw new Error(
      "usePhysicalStoreSearch must be used within PhysicalStoreSearchContextProvider"
    )
  }

  return context
}

export default PhysicalStoreSearchContextProvider
