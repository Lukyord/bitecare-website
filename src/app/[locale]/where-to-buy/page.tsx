import { Metadata } from "next"
import WhereToBuyTabs from "@/components/where-to-buy/WhereToBuyTabs"
import { pick } from "lodash"
import { NextIntlClientProvider } from "next-intl"
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server"

export const metadata: Metadata = {
  title: "Where To Buy",
}

export default async function WhereToBuyPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)

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
      >
        <h1 className="sub-desktop:my-20 sub-desktop:text-h1 mb-8 mt-0 text-center text-h3 md:mt-8 lg:text-h2">
          {tWhereToBuy("where-to-get-bite-care")}
        </h1>

        <WhereToBuyTabs />
      </NextIntlClientProvider>
    </div>
  )
}
