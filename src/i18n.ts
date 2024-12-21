import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"

import { i18n } from "./config/i18n.config"

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !i18n.locales.includes(locale as any)) {
    locale = i18n.defaultLocale
  }

  if (!i18n.locales.includes(locale as any)) notFound()

  return {
    messages: {
      ...(await import(`../public/locales/${locale}/common.json`)).default,
      ...(await import(`../public/locales/${locale}/homepage.json`)).default,
      ...(await import(`../public/locales/${locale}/products.json`)).default,
      ...(await import(`../public/locales/${locale}/product.json`)).default,
      ...(await import(`../public/locales/${locale}/where-to-buy.json`))
        .default,
      ...(await import(`../public/locales/${locale}/about-us.json`)).default,
    },
    locale,
  }
})
