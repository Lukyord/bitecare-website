import React from "react"

import { NavbarItem } from "@/types/common/navbar"

import NavbarMenuItem from "./NavbarMenuItem"
import LocaleSwitcher from "./LocaleSwitcher"
import NavbarCTAButton from "./NavbarCTAButton"
import NavbarLogo from "./NavbarLogo"
import MobileMenuButton from "./MobileMenuButton"
import getNavigation from "@/actions/getNavigation"
import { NextIntlClientProvider } from "next-intl"
import { pick } from "lodash"
import { getMessages } from "next-intl/server"
import MobileMenuOpenContextProvider from "@/context/MobileMenuOpenContextProvider"
import MobileNavbarCTAButton from "./MobileNavbarCTAButton"
import HomeButton from "./HomeButton"
import AboutUsButton from "./AboutUsButton"

export async function Navbar() {
  const messages = await getMessages()
  const NavigationMenus = await getNavigation()

  const NavbarItems: NavbarItem[] = NavigationMenus.map((menu) => ({
    label: menu.label,
    breadcrumb: menu.breadCrumbs,
    href: menu.href,
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
      <MobileMenuOpenContextProvider>
        <div className="flex gap-7">
          {/* <NavbarLogo /> */}
          <HomeButton />

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
          {/* <NavbarCTAButton text="Meet BiteCare" href="/about-us" /> */}
          <AboutUsButton />
        </div>

        {/*========== Mobile ==========*/}
        {/* <MobileNavbarCTAButton /> */}
        <AboutUsButton mobile />

        <div className="block lg:hidden">
          <NextIntlClientProvider
            messages={pick(messages, "button", "miscellaneous")}
          >
            <MobileMenuButton NavbarItems={NavbarItems} />
          </NextIntlClientProvider>
        </div>
      </MobileMenuOpenContextProvider>
    </nav>
  )
}
