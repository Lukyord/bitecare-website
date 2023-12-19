import { pick } from "lodash"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, unstable_setRequestLocale } from "next-intl/server"

import PhysicalStores from "@/components/where-to-buy/PhysicalStores/PhysicalStores"
import { Suspense } from "react"

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
          "store-card",
          "physical-store-toast",
          "button"
        )}
      >
        <PhysicalStores />
      </NextIntlClientProvider>
    </div>
  )
}
