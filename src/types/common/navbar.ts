export type NavigationBreadcrumb = {
  title: string
  href: string
  description: string
}

export type NavbarItem = {
  label: string
  breadcrumb: NavigationBreadcrumb[]
  href?: string
}

export type NavigationMenuSlug = keyof IntlMessages["navbar"]

export type NavigationMenu = {
  label: string
  slug: NavigationMenuSlug
  breadCrumbs: NavigationBreadcrumb[]
  href?: string
}
