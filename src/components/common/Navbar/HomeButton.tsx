"use client"

import { useMobileMenuOpen } from "@/context/MobileMenuOpenContextProvider"
import { Link } from "@/lib/navigation"
import { IoMdHome } from "react-icons/io"

export default function HomeButton() {
  const { setMobileMenuOpen } = useMobileMenuOpen()

  return (
    <div
      className="h-[42px] pl-4 lg:h-[54px]"
      onClick={() => setMobileMenuOpen(false)}
    >
      <Link href="/">
        <IoMdHome className="h-full w-full p-2 pr-0" />
      </Link>
    </div>
  )
}
