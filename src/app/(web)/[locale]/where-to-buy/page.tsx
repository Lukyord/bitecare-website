import { Metadata } from "next"
import WhereToBuyTabs from "@/components/where-to-buy/WhereToBuyTabs"
import { pick } from "lodash"
import { NextIntlClientProvider } from "next-intl"
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Where To Buy",
}

export default async function WhereToBuyPage(props: {
  params: Promise<{ locale: string }>
}) {
  const params = await props.params

  const { locale } = params

  setRequestLocale(locale)

  const messages = await getMessages()
  const tWhereToBuy = await getTranslations("where-to-buy-landing")

  return (
    <div className="pt-36">
      <NextIntlClientProvider
        messages={pick(
          messages,
          "where-to-buy-landing",
          "physical-store",
          "physical-store-toast",
          "online-platform",
          "button"
        )}
        locale={locale}
      >
        <h1 className="mb-8 mt-0 text-center text-h3 md:mt-8 lg:text-h2 sub-desktop:my-20 sub-desktop:text-h1">
          {tWhereToBuy("where-to-get-bite-care")}
        </h1>
        {/* https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout */}
        <Suspense>
          <WhereToBuyTabs />
        </Suspense>
      </NextIntlClientProvider>
    </div>
  )
}
