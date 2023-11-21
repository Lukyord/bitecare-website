import { i18n } from "./config/i18n.config"
import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  locales: i18n.locales,
  defaultLocale: i18n.defaultLocale,
  localePrefix: "as-needed",
})

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
  // matcher: ["/", "/(en|th)/:path*"],
}
