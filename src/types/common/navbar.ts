export type NavigationBreadcrumb = {
  title: string
  href: string
  description: string
}

export type NavbarItem = {
  label: NavigationMenuTitle
  breadcrumb: NavigationBreadcrumb[]
}

export type NavigationMenuTitle = "Products"
| "Where to buy"
| "Support"

export type NavigationMenuSlug = keyof IntlMessages["navbar"]

export type NavigationMenu = {
  label: NavigationMenuTitle
  slug: NavigationMenuSlug
  breadCrumbs: NavigationBreadcrumb[]
}