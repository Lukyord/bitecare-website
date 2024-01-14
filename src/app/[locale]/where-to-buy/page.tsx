import { Metadata } from "next"
import { pick } from "lodash"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, unstable_setRequestLocale } from "next-intl/server"

import PhysicalStores from "@/components/where-to-buy/PhysicalStores/PhysicalStores"

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

  return (
    <div className="pt-36">
      <NextIntlClientProvider
        messages={pick(
          messages,
          "physical-store",
          "physical-store-toast",
          "button"
        )}
      >
        <PhysicalStores />
      </NextIntlClientProvider>
    </div>
  )
}
