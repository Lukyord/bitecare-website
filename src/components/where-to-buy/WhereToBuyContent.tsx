"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PhysicalStores from "@/components/where-to-buy/PhysicalStores/PhysicalStores"
import OnlineStores from "@/components/where-to-buy/OnlineStores/OnlineStores"
import { useRouter, useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl"

type WhereToBuyContentProps = {}

export default function WhereToBuyContent({}: WhereToBuyContentProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tWhereToBuy = useTranslations("where-to-buy-landing")
  const defaultTab = searchParams.get("type") || "physical-stores"

  const handleTabChange = (tab: string) => {
    router.replace(`?type=${tab}`, { scroll: false })
  }

  return (
    <Tabs
      key={defaultTab}
      defaultValue={defaultTab}
      className="flex flex-col items-center"
    >
      <TabsList className="grid w-[80%] max-w-md grid-cols-2">
        <TabsTrigger
          value="physical-stores"
          onClick={() => handleTabChange("physical-stores")}
        >
          {tWhereToBuy("physical-stores")}
        </TabsTrigger>
        <TabsTrigger
          value="online-stores"
          onClick={() => handleTabChange("online-stores")}
        >
          {tWhereToBuy("online-stores")}
        </TabsTrigger>
      </TabsList>

      <TabsContent value="physical-stores" className="my-10 w-full 2xl:my-20">
        <PhysicalStores />
      </TabsContent>

      <TabsContent value="online-stores" className="my-10 w-full 2xl:my-20">
        <OnlineStores />
      </TabsContent>
    </Tabs>
  )
}
