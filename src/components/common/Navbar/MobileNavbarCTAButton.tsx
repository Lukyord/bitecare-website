"use client"

import { Link } from "@/lib/navigation"

import { useMobileMenuOpen } from "@/context/MobileMenuOpenContextProvider"

export default function MobileNavbarCTAButton() {
  const { setMobileMenuOpen } = useMobileMenuOpen()

  return (
    <Link
      onClick={() => setMobileMenuOpen(false)}
      href="/about-us"
      className="
      flex h-[42px] items-center 
      justify-center rounded-full 
      bg-bc-primary px-4 
      text-paragraph text-white
      lg:hidden
    "
    >
      Meet BiteCare
    </Link>
  )
}
