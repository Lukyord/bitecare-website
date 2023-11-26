export type NavbarBreadcrumb = {
  title: string
  href: string
  description: string
}

export type NavbarItem = {
  label: keyof IntlMessages["navbar"]
  breadcrumb: NavbarBreadcrumb[]
}
