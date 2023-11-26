import { i18n } from "@/config/i18n.config"
import { createSharedPathnamesNavigation } from "next-intl/navigation"

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales: i18n.locales })
