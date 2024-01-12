import { NavigationMenu } from "@/types/common/navbar"
import { getTranslations } from "next-intl/server"

export default async function useNavigation() {
  const tNavigationMenu = await getTranslations("navbar")
  const tNavigationProduct = await getTranslations("navbar-products-breadcrumb")
  const tNavigationWhereToBuy = await getTranslations(
    "navbar-where-to-buy-breadcrumb"
  )
  const tNavigationSupport = await getTranslations("navbar-support-breadcrumb")

  const NavigationMenus: NavigationMenu[] = [
    {
      label: tNavigationMenu("products"),
      slug: "products",
      breadCrumbs: [
        {
          title: tNavigationProduct("see-all"),
          href: "/products",
          description: tNavigationProduct("see-all-description"),
        },
        {
          title: tNavigationProduct("skin-care"),
          href: "/products/skin-care",
          description: tNavigationProduct("skin-care-description"),
        },
        {
          title: tNavigationProduct("low-fat"),
          href: "/products/low-fat",
          description: tNavigationProduct("low-fat-description"),
        },
        {
          title: tNavigationProduct("senior-care"),
          href: "/products/senior-care",
          description: tNavigationProduct("senior-care-description"),
        },
        {
          title: tNavigationProduct("renal-care"),
          href: "/products/renal-care",
          description: tNavigationProduct("renal-care-description"),
        },
      ],
    },
    {
      label: tNavigationMenu("where-to-buy"),
      slug: "where-to-buy",
      breadCrumbs: [
        {
          title: tNavigationWhereToBuy("physical-store"),
          href: "/where-to-buy?type=physical-store",
          description: tNavigationWhereToBuy("physical-store-description"),
        },
        {
          title: tNavigationWhereToBuy("online-platform"),
          href: "/where-to-buy?type=online-platform",
          description: tNavigationWhereToBuy("online-platform-description"),
        },
      ],
    },
    {
      label: tNavigationMenu("support"),
      slug: "support",
      breadCrumbs: [
        {
          title: tNavigationSupport("faq"),
          href: "/#faq",
          description: tNavigationSupport("faq-description"),
        },
        {
          title: tNavigationSupport("contact-us"),
          href: "/about-us#contact-us",
          description: tNavigationSupport("contact-us-description"),
        },
      ],
    },
  ]

  return NavigationMenus
}
