"use client"

import { Images } from "@/constant/Images"
import { Link, usePathname } from "@/lib/navigation"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useMobileMenuOpen } from "@/context/MobileMenuOpenContextProvider"

gsap.registerPlugin(ScrollToPlugin)

export default function NavbarLogo() {
  const pathname = usePathname()
  const { setMobileMenuOpen } = useMobileMenuOpen()

  return (
    <div
      className="h-[42px] w-[70px] sm:w-[91px] lg:h-[54px]"
      onClick={() => setMobileMenuOpen(false)}
    >
      {pathname === "/" || pathname === "/en" ? (
        <button
          className="
                        flex h-full w-full
                        items-center justify-center
                        rounded-full bg-bc-primary hover:bg-bc-inverse-primary
                      "
          onClick={() => {
            gsap.to(window, { duration: 2, scrollTo: 0 })
          }}
        >
          <Image
            alt="arrow-up"
            src={Images.ArrowCurveUpWhite}
            className="h-auto w-auto"
            priority
          />
        </button>
      ) : (
        <Link href="/">
          <Image
            src={Images.BiteCareLogo}
            alt="bitecare-logo"
            className="h-full w-full rounded-full bg-white"
            priority
          />
        </Link>
      )}
    </div>
  )
}
