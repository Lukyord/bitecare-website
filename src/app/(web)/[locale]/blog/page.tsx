import { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import AllBlogHero from "@/components/blog/AllBlogHero"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations } from "next-intl/server"
import { pick } from "lodash"

export const metadata: Metadata = {
  title: "Products",
}

export default async function ProductsPage(props: {
  params: Promise<{ locale: string }>
}) {
  const params = await props.params

  const { locale } = params

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <div className="overflow-x-hidden">
      <NextIntlClientProvider messages={pick(messages, "all-blog")}>
        <AllBlogHero />
      </NextIntlClientProvider>
    </div>
  )
}
