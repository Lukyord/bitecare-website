import { Metadata } from "next"
import { pick } from "lodash"
import { NextIntlClientProvider } from "next-intl"
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
        <h1 className="my-8 text-center text-h3 lg:text-h2 2xl:my-20 2xl:text-h1">
          {tWhereToBuy("where-to-get-bite-care")}
        </h1>
        <Tabs
          defaultValue="physical-stores"
          className="flex flex-col items-center"
        >
          <TabsList className="grid w-[80%] max-w-md grid-cols-2">
            <TabsTrigger value="physical-stores">
              {tWhereToBuy("physical-stores")}
            </TabsTrigger>
            <TabsTrigger value="online-stores">
              {tWhereToBuy("online-stores")}
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="physical-stores"
            className="my-10 w-full 2xl:my-20"
          >
            <PhysicalStores />
          </TabsContent>

          <TabsContent value="online-stores" className="my-10 w-full 2xl:my-20">
            <OnlineStores />
          </TabsContent>
        </Tabs>
      </NextIntlClientProvider>
    </div>
  )
}
