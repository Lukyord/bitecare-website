import { getRequestConfig } from "next-intl/server"

export default getRequestConfig(async ({ locale }) => ({
  messages: {
    ...(await import(`../public/locales/${locale}/common.json`)).default,
    ...(await import(`../public/locales/${locale}/homepage.json`)).default,
  },
}))
