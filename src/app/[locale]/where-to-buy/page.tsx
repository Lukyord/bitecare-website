import { Metadata } from "next"
import { pick } from "lodash"
import { NextIntlClientProvider } from "next-intl"
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server"

import PhysicalStores from "@/components/where-to-buy/PhysicalStores/PhysicalStores"
import OnlineStores from "@/components/where-to-buy/OnlineStores/OnlineStores"

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
          "physical-store",
          "physical-store-toast",
          "online-store",
          "button"
        )}
      >
        <div>
          <h1 className="my-8 text-center text-h3 lg:text-h2 2xl:my-20 2xl:text-h1">
            {tWhereToBuy("where-to-get-bite-care")}
          </h1>
          {/* TODO: Component for change tabs */}
        </div>
        <OnlineStores />
        <PhysicalStores />
      </NextIntlClientProvider>
    </div>
  )
}
