"use client"

import { createContext, useContext, useEffect, useState } from "react"

type ContactUsFormContextType = {
  formOpen: boolean
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ContactUsFormContext =
  createContext<ContactUsFormContextType | null>(null)

export default function ContactUsFormContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [formOpen, setFormOpen] = useState(false)

  useEffect(() => {
    if (formOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [formOpen])

  return (
    <ContactUsFormContext.Provider value={{ formOpen, setFormOpen }}>
      {children}
    </ContactUsFormContext.Provider>
  )
}

export const useOpenContactUsForm = () => {
  const context = useContext(ContactUsFormContext)

  if (context === null) {
    throw new Error(
      "useOpenContactUsForm must be used within ContactUsFormContextProvider"
    )
  }

  return context
}
