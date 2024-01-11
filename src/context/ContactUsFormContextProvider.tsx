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
    const handleScroll = (e: TouchEvent) => {
      if (formOpen) {
        const formElement = document.getElementById("contact-us-form-fields") // Replace with the actual ID of your form

        if (formElement && !formElement.contains(e.target as Node)) {
          e.preventDefault()
          e.stopPropagation()
        }
      }
    }
    if (formOpen) {
      document.body.style.overflow = "hidden"
      document.addEventListener("touchmove", handleScroll, { passive: false })
    } else {
      document.body.style.overflow = "unset"
      document.removeEventListener("touchmove", handleScroll)
    }

    return () => {
      document.body.style.overflow = "unset"
      document.removeEventListener("touchmove", handleScroll)
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
