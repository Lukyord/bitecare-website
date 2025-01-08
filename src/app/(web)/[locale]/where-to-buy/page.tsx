import { Metadata } from "next"
import WhereToBuyTabs from "@/components/where-to-buy/WhereToBuyTabs"
import { pick } from "lodash"
import { NextIntlClientProvider } from "next-intl"
import {
  getLocale,
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server"
import { Suspense } from "react"
import { getAllOnlineStores, getAllStores } from "@/payload/service/location"
import { Locale } from "@/config/i18n.config"

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
  const stores = await getAllStores({ locale: locale as Locale })
  const onlineStores = await getAllOnlineStores({ locale: locale as Locale })

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
        <h1 className="mb-8 mt-0 text-center text-h3 md:mt-8 lg:text-h2 sub-desktop:my-20 sub-desktop:text-h1">
          {tWhereToBuy("where-to-get-bite-care")}
        </h1>
        {/* https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout */}
        <Suspense>
          <WhereToBuyTabs stores={stores} onlineStores={onlineStores} />
        </Suspense>
      </NextIntlClientProvider>
    </div>
  )
}
