export type NavbarBreadcrumbT = {
  title: string
  href: string
  description: string
}

export type NavbarItemT = {
  label: keyof IntlMessages["navbar"]
  breadcrumb: NavbarBreadcrumbT[]
}
