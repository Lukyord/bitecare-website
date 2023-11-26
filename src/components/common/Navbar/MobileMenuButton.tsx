"use client"

import React, { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { TiThMenu } from "react-icons/ti"
import { RxCross2 } from "react-icons/rx"

import BreadcrumbMenuMobile from "./BreadcrumbMenuMobile"

export default function MobileMenuButton() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // // Disable scrolling when mobile nav menu is open
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
    <>
      <button
        className={`
                  flex h-[42px] w-[70px] 
                  items-center justify-center 
                  rounded-full
                  sm:w-[91px] lg:hidden lg:h-[54px]
                  ${cn({
                    "bg-bc-inverse-primary": mobileMenuOpen,
                    "bg-white": !mobileMenuOpen,
                  })}
                `}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <RxCross2 size={24} /> : <TiThMenu size={26} />}
      </button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <BreadcrumbMenuMobile setMobileMenuOpen={setMobileMenuOpen} />
        )}
      </AnimatePresence>
    </>
  )
}
