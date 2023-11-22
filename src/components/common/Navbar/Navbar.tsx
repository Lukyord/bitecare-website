"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { useTranslations } from "next-intl"
import { NavbarBreadcrumbT, NavbarItemT } from "@/types/common/navbar"
import NavbarItem from "./NavbarItem"
import { Images } from "@/constant/Images"
import Image from "next/image"

export function Navbar() {
  const tNavbar = useTranslations("navbar")
  const tProductsBreadcrumb = useTranslations("navbar-products-breadcrumb")
  const tWhereToBuyBreadcrumb = useTranslations(
    "navbar-where-to-buy-breadcrumb"
  )
  const tSupportBreadcrumb = useTranslations("navbar-support-breadcrumb")

  const [selectedNavItem, setSelectedNavItem] = React.useState("")

  const ProductsBreadcrumb: NavbarBreadcrumbT[] = [
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
  const WhereToBuyBreadcrumb: NavbarBreadcrumbT[] = [
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
  const SupportBreadcrumb: NavbarBreadcrumbT[] = [
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

  const NavbarItems: NavbarItemT[] = [
    {
      label: "products",
      breadcrumb: ProductsBreadcrumb,
    },
    {
      label: "where-to-buy",
      breadcrumb: WhereToBuyBreadcrumb,
    },
    {
      label: "support",
      breadcrumb: SupportBreadcrumb,
    },
  ]

  return (
    <nav
      className="
              small-shadow relative
              z-50 flex w-full max-w-5xl
              items-center justify-between
              gap-8 rounded-full bg-bc_primary_container
              p-2
            "
      onMouseLeave={() => setSelectedNavItem("")}
    >
      <div className="flex gap-7">
        <Image
          src={Images.BiteCareLogo}
          alt="bitecare-logo"
          width={71}
          height={54}
          className="rounded-full bg-white p-2"
        />
        <ul className="hidden gap-3 sm:flex">
          {NavbarItems.map((navbaritem, index) => (
            <React.Fragment key={index}>
              <NavbarItem
                navbaritem={navbaritem}
                selectedNavItem={selectedNavItem}
                setSelectedNavItem={setSelectedNavItem}
              />
            </React.Fragment>
          ))}
        </ul>
        {/* <LocaleSwitcher
          hoveredItem={selectedItem}
          setHoveredItem={setSelectedItem}
        /> */}
      </div>
    </nav>
  )
}
