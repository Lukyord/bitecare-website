"use client"

import React, { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

import { TiThMenu } from "react-icons/ti"
import { RxCross2 } from "react-icons/rx"
import { NavbarBreadcrumb, NavbarItem } from "@/types/common/navbar"
import { Images } from "@/constant/Images"
import { cn } from "@/lib/utils"

import NavbarMenuItem from "./NavbarMenuItem"
import LocaleSwitcher from "./LocaleSwitcher"
import NavbarCTAButton from "./NavbarCTAButton"
import { usePathname } from "next/navigation"
import BreadcrumbMenuMobile from "./BreadcrumbMenuMobile"
import { AnimatePresence } from "framer-motion"
import { Link } from "@/lib/navigation"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const tProductsBreadcrumb = useTranslations("navbar-products-breadcrumb")
  const tWhereToBuyBreadcrumb = useTranslations(
    "navbar-where-to-buy-breadcrumb"
  )
  const tSupportBreadcrumb = useTranslations("navbar-support-breadcrumb")

  const [selectedNavItem, setSelectedNavItem] = useState("")

  const ProductsBreadcrumb: NavbarBreadcrumb[] = [
    {
      title: tProductsBreadcrumb("see-all"),
      href: "/products",
      description: tProductsBreadcrumb("see-all-description"),
    },
    {
      title: tProductsBreadcrumb("skin-care"),
      href: "/products/skin-care",
      description: tProductsBreadcrumb("skin-care-description"),
    },
    {
      title: tProductsBreadcrumb("low-fat"),
      href: "/products/low-fat",
      description: tProductsBreadcrumb("low-fat-description"),
    },
    {
      title: tProductsBreadcrumb("senior-care"),
      href: "/products/senior-care",
      description: tProductsBreadcrumb("senior-care-description"),
    },
    {
      title: tProductsBreadcrumb("renal-care"),
      href: "/products/renal-care",
      description: tProductsBreadcrumb("renal-care-description"),
    },
  ]
  const WhereToBuyBreadcrumb: NavbarBreadcrumb[] = [
    {
      title: tWhereToBuyBreadcrumb("physical-store"),
      href: "/where-to-buy?type=physical-store",
      description: tWhereToBuyBreadcrumb("physical-store-description"),
    },
    {
      title: tWhereToBuyBreadcrumb("online-platform"),
      href: "/where-to-buy?type=online-platform",
      description: tWhereToBuyBreadcrumb("online-platform-description"),
    },
  ]
  const SupportBreadcrumb: NavbarBreadcrumb[] = [
    {
      title: tSupportBreadcrumb("faq"),
      href: "/#faq",
      description: tSupportBreadcrumb("faq-description"),
    },
    {
      title: tSupportBreadcrumb("contact-us"),
      href: "/about-us#contact-us",
      description: tSupportBreadcrumb("contact-us-description"),
    },
  ]

  const NavbarItems: NavbarItem[] = [
    {
      label: "where-to-buy",
      breadcrumb: WhereToBuyBreadcrumb,
    },
    {
      label: "products",
      breadcrumb: ProductsBreadcrumb,
    },
    {
      label: "support",
      breadcrumb: SupportBreadcrumb,
    },
  ]

  gsap.registerPlugin(ScrollToPlugin)

  // Disable scrolling when mobile nav menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflowY = "hidden"
      document.body.style.position = "fixed"
    } else {
      document.body.style.overflowY = "auto"
      document.body.style.position = "static"
    }

    return () => {
      document.body.style.overflowY = "auto"
      document.body.style.position = "static"
    }
  }, [mobileMenuOpen])

  return (
    <nav
      className="
              z-50 mx-auto mt-4
              flex w-[90%] max-w-5xl items-center justify-between
              rounded-full bg-bc-primary-container
              p-2 shadow-bc_small
              sm:mt-8
            "
      onMouseLeave={() => setSelectedNavItem("")}
    >
      <div className="flex gap-7">
        <div
          className="h-[42px] w-[70px] sm:w-[91px] lg:h-[54px]"
          onMouseEnter={() => setSelectedNavItem("")}
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

        {/*========== Desktop ==========*/}
        <ul className="hidden gap-3 lg:flex">
          {NavbarItems.map((navbaritem, index) => (
            <React.Fragment key={index}>
              <NavbarMenuItem
                navbaritem={navbaritem}
                selectedNavItem={selectedNavItem}
                setSelectedNavItem={setSelectedNavItem}
              />
            </React.Fragment>
          ))}
        </ul>
      </div>

      <div
        className="hidden h-[49px] w-full lg:flex-1"
        onMouseEnter={() => setSelectedNavItem("")}
      ></div>

      <div className="hidden h-[49px] gap-6 lg:flex">
        <LocaleSwitcher
          selectedNavItem={selectedNavItem}
          setSelectedNavItem={setSelectedNavItem}
        />
        <NavbarCTAButton
          text="Meet BiteCare"
          setSelectedNavItem={setSelectedNavItem}
        />
      </div>

      {/*========== Mobile ==========*/}
      <Link
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
    </nav>
  )
}
