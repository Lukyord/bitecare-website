"use client"

import { Product } from "@/payload/type-gen"
import React, { createContext, useContext, useState } from "react"

type ActiveProductContextType = {
  activeProduct: Product | undefined
  setActiveProduct: React.Dispatch<React.SetStateAction<Product | undefined>>
}

export const ActiveProductContext =
  createContext<ActiveProductContextType | null>(null)

const ActiveProductContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [activeProduct, setActiveProduct] =
    // This is still hard-coded, needed to be changed to dynamic
    useState<Product>()

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
