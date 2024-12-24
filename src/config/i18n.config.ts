export const i18n = {
  defaultLocale: "th",
  locales: ["en", "th"],
} as const

export const allLocales = i18n.locales

export type Locale = (typeof allLocales)[number]
