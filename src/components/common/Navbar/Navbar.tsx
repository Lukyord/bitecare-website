import React from "react"

import { NavbarItem } from "@/types/common/navbar"
import { Link } from "@/lib/navigation"

import NavbarMenuItem from "./NavbarMenuItem"
import LocaleSwitcher from "./LocaleSwitcher"
import NavbarCTAButton from "./NavbarCTAButton"
import NavbarLogo from "./NavbarLogo"
import MobileMenuButton from "./MobileMenuButton"
import useNavigation from "@/hooks/useNavigation"
import { NextIntlClientProvider } from "next-intl"
import { pick } from "lodash"
import { getMessages } from "next-intl/server"

export async function Navbar() {
  const messages = await getMessages()
  const NavigationMenus = await useNavigation()
  
  const NavbarItems: NavbarItem[] = NavigationMenus.map((menu) => ({
    label: menu.label,
    breadcrumb: menu.breadCrumbs,
  }))

  return (
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
        <NextIntlClientProvider
          messages={pick(
          messages,
          "button",
          "miscellaneous"
          )}
        >
          <MobileMenuButton NavbarItems={NavbarItems} />
        </NextIntlClientProvider>
          
        </div>
      </nav>
  )
}
