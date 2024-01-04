export type NavigationBreadcrumb = {
  title: string
  href: string
  description: string
}

export type NavbarItem = {
  label: string
  breadcrumb: NavigationBreadcrumb[]
}

export type NavigationMenuSlug = keyof IntlMessages["navbar"]

export type NavigationMenu = {
  label: string
  slug: NavigationMenuSlug
  breadCrumbs: NavigationBreadcrumb[]
}