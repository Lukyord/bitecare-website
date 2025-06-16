import { Locale } from "@/config/i18n.config"
import { getAllProducts } from "@/payload/service"
import { getProductType } from "@/payload/service/product-type"
import { NavigationBreadcrumb, NavigationMenu } from "@/types/common/navbar"
import { getLocale, getTranslations } from "next-intl/server"

export default async function getNavigation() {
  const locale = (await getLocale()) as Locale
  const tNavigationMenu = await getTranslations("navbar")
  const tNavigationProduct = await getTranslations("navbar-products-breadcrumb")
  const tNavigationWhereToBuy = await getTranslations(
    "navbar-where-to-buy-breadcrumb"
  )
  const tNavigationSupport = await getTranslations("navbar-support-breadcrumb")

  const products = await getAllProducts({
    select: {
      label: true,
      slug: true,
    },
    locale,
  })
  const ProductTypes = await getProductType({
    select: {
      label: true,
      description: true,
      product_type: true,
    },
    locale,
  })

  const productBreadcrumb: NavigationBreadcrumb[] = [
    // ...products.map((product) => ({
    //   title: product.label,
    //   href: `/products/${product.slug}`,
    //   description: "",
    // })),
    ...ProductTypes.map((productType) => ({
      title: productType.label,
      href: `/products#${productType.product_type}`,
      description: productType.description,
    })),
    {
      title: tNavigationProduct("see-all"),
      href: "/products",
      description: tNavigationProduct("see-all-description"),
    },
  ]

  const NavigationMenus: NavigationMenu[] = [
    {
      label: tNavigationMenu("products"),
      slug: "products",
      breadCrumbs: productBreadcrumb,
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
    // {
    //   label: tNavigationMenu("support"),
    //   slug: "support",
    //   breadCrumbs: [
    //     {
    //       title: tNavigationSupport("faq"),
    //       href: "/#faq",
    //       description: tNavigationSupport("faq-description"),
    //     },
    //     {
    //       title: tNavigationSupport("contact-us"),
    //       href: "/about-us#contact-us",
    //       description: tNavigationSupport("contact-us-description"),
    //     },
    //   ],
    // },
    {
      label: tNavigationMenu("news"),
      slug: "news",
      href: "/news",
      breadCrumbs: [],
    },
    {
      label: tNavigationSupport("faq"),
      slug: "faq",
      href: "/#faq",
      breadCrumbs: [],
    },
    {
      label: tNavigationSupport("contact-us"),
      slug: "contact-us",
      href: "/about-us#contact-us",
      breadCrumbs: [],
    },
  ]

  return NavigationMenus
}
