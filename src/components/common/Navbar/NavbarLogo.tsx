"use client"

import { Images } from "@/constant/Images"
import { Link, usePathname } from "@/lib/navigation"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

export default function NavbarLogo() {
  const pathname = usePathname()

  return (
    <div className="h-[42px] w-[70px] sm:w-[91px] lg:h-[54px]">
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
          />
        </button>
      ) : (
        <Link href="/">
          <Image
            src={Images.BiteCareLogo}
            alt="bitecare-logo"
            className="h-full w-full rounded-full bg-white"
          />
        </Link>
      )}
    </div>
  )
}
