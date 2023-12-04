import React from "react"
import { pick } from "lodash"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations } from "next-intl/server"

import { NavbarBreadcrumb, NavbarItem } from "@/types/common/navbar"
import { Link } from "@/lib/navigation"

import NavbarMenuItem from "./NavbarMenuItem"
import LocaleSwitcher from "./LocaleSwitcher"
import NavbarCTAButton from "./NavbarCTAButton"
import NavbarLogo from "./NavbarLogo"
import MobileMenuButton from "./MobileMenuButton"

export async function Navbar() {
  const messages = await getMessages()
  const tProductsBreadcrumb = await getTranslations(
    "navbar-products-breadcrumb"
  )
  const tWhereToBuyBreadcrumb = await getTranslations(
    "navbar-where-to-buy-breadcrumb"
  )
  const tSupportBreadcrumb = await getTranslations("navbar-support-breadcrumb")

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

  return (
    <NextIntlClientProvider
      messages={pick(messages, [
        "navbar",
        "navbar-products-breadcrumb",
        "navbar-where-to-buy-breadcrumb",
        "navbar-support-breadcrumb",
        "miscellaneous",
        "button",
      ])}
    >
      <nav
        id="navbar"
        className="
             
              mt-4 flex w-[90%] max-w-5xl items-center
              justify-between rounded-full
              bg-bc-primary-container p-2
              shadow-bc_small sm:mt-8
            "
      >
        <div className="flex gap-7">
          <NavbarLogo />

          {/*========== Desktop ==========*/}
          <ul className="hidden gap-3 lg:flex">
            {NavbarItems.map((navbaritem, index) => (
              <React.Fragment key={index}>
                <NavbarMenuItem navbaritem={navbaritem} />
              </React.Fragment>
            ))}
          </ul>
        </div>

        <div className="hidden h-[49px] gap-6 lg:flex">
          <LocaleSwitcher />
          <NavbarCTAButton text="Meet BiteCare" href="/about-us" />
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

        <div className="block lg:hidden">
          <MobileMenuButton NavbarItems={NavbarItems} />
        </div>
      </nav>
    </NextIntlClientProvider>
  )
}
