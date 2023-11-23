"use client"

import React, { useState } from "react"
import { useTranslations } from "next-intl"
import Image from "next/image"

import { NavbarBreadcrumbT, NavbarItemT } from "@/types/common/navbar"
import { Images } from "@/constant/Images"

import NavbarItem from "./NavbarItem"
import LocaleSwitcher from "./LocaleSwitcher"
import NavbarCTAButton from "./NavbarCTAButton"

export function Navbar() {
  const tProductsBreadcrumb = useTranslations("navbar-products-breadcrumb")
  const tWhereToBuyBreadcrumb = useTranslations(
    "navbar-where-to-buy-breadcrumb"
  )
  const tSupportBreadcrumb = useTranslations("navbar-support-breadcrumb")

  const [selectedNavItem, setSelectedNavItem] = useState("")

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

  return (
    <nav
      className="
              relative
              z-50 flex w-full max-w-5xl
              items-center
              rounded-full bg-bc_primary_container
              p-2 shadow-bc_small
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
      </div>

      <div
        className="h-[49px] w-full flex-1"
        onMouseEnter={() => setSelectedNavItem("")}
      ></div>

      <div className="flex h-[49px] gap-6">
        <LocaleSwitcher
          selectedNavItem={selectedNavItem}
          setSelectedNavItem={setSelectedNavItem}
        />
        <NavbarCTAButton
          text="Meet BiteCare"
          setSelectedNavItem={setSelectedNavItem}
        />
      </div>
    </nav>
  )
}
