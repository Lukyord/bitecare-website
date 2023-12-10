"use client"

import { BiteCareProductName } from "@/types/common/product"
import React, { createContext, useContext, useState } from "react"

type ActiveProductContextType = {
  activeProduct: BiteCareProductName
  setActiveProduct: React.Dispatch<React.SetStateAction<BiteCareProductName>>
}

export const ActiveProductContext =
  createContext<ActiveProductContextType | null>(null)

const ActiveProductContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [activeProduct, setActiveProduct] =
    useState<BiteCareProductName>("Skin Care")

  return (
    <ActiveProductContext.Provider
      value={{
        activeProduct,
        setActiveProduct,
      }}
    >
      {children}
    </ActiveProductContext.Provider>
  )
}

export const useActiveProduct = () => {
  const context = useContext(ActiveProductContext)

  if (context === null) {
    throw new Error(
      "useActiveProduct must be used within ActiveProductContextProvider"
    )
  }

  return context
}

export default ActiveProductContextProvider
