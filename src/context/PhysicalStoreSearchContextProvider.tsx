"use client"

import { PhysicalStore } from "@/types/where-to-buy/physical-store"
import { createContext, useContext, useEffect, useState } from "react"

type PhysicalStoreSearchContextType = {
  result: PhysicalStore[] | null
  setResult: React.Dispatch<React.SetStateAction<PhysicalStore[] | null>>
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
  const [result, setResult] = useState<PhysicalStore[] | null>(null)
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
