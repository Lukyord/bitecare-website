"use client"

import { usePathname } from "next/navigation"

type FooterProps = {
  children: React.ReactNode
}

export default function Footer({ children }: FooterProps) {
  const pathName = usePathname()

  if (pathName === "/about-us" || pathName === "/en/about-us") {
    return null
  }

  return <footer>{children}</footer>
}
