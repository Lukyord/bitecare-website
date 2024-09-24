"use client"

import { Images } from "@/constant/Images"
import { Link } from "@/lib/navigation"
import Image from "next/image"
import { useMobileMenuOpen } from "@/context/MobileMenuOpenContextProvider"
import { cn } from "@/lib/utils"

type AboutUsButtonProps = {
  mobile?: boolean
}

export default function AboutUsButton({ mobile }: AboutUsButtonProps) {
  const { setMobileMenuOpen } = useMobileMenuOpen()
  //   h-[42px] w-[70px] sm:w-[91px] lg:h-[54px]
  return (
    <div
      className={`
        lg:w-24
        ${cn({
          "h-[42px] lg:hidden": mobile,
        })}
        `}
      onClick={() => setMobileMenuOpen(false)}
    >
      <Link href="/about-us">
        <Image
          src={Images.BiteCareLogo}
          alt="bitecare-logo"
          className="h-full w-full rounded-full bg-white"
          priority
        />
      </Link>
    </div>
  )
}
