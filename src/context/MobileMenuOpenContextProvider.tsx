"use client"

import { createContext, useContext, useEffect, useState } from "react"

type MobileMenuOpenContextType = {
  mobileMenuOpen: boolean
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MobileMenuOpenContext =
  createContext<MobileMenuOpenContextType | null>(null)

export default function MobileMenuOpenContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <MobileMenuOpenContext.Provider
      value={{ mobileMenuOpen, setMobileMenuOpen }}
    >
      {children}
    </MobileMenuOpenContext.Provider>
  )
}

export const useMobileMenuOpen = () => {
  const context = useContext(MobileMenuOpenContext)

  if (context === null) {
    throw new Error(
      "useMobileMenuOpen must be used within MobileMenuOpenContextProvider"
    )
  }

  return context
}
