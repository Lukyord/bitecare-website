"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PhysicalStores from "@/components/where-to-buy/PhysicalStores/PhysicalStores"
import OnlineStores from "@/components/where-to-buy/OnlineStores/OnlineStores"
import { useRouter, useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl"

const tabs = {
  physicalStore: "physical-store",
  onlinePlatform: "online-platform",
}

export default function WhereToBuyTabs() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tWhereToBuy = useTranslations("where-to-buy-landing")
  const defaultTab = searchParams.get("type") || "physical-store"

  const handleTabChange = () => {
    if (defaultTab === tabs.physicalStore) {
      router.replace(`?type=${tabs.onlinePlatform}`, { scroll: false })
    } else router.replace(`?type=${tabs.physicalStore}`, { scroll: false })
  }

  return (
    <Tabs defaultValue={defaultTab} className="flex flex-col items-center">
      <TabsList className="mb-10 grid w-[80%] max-w-md grid-cols-2">
        <TabsTrigger
          value={tabs.physicalStore}
          onClick={() => handleTabChange()}
        >
          {tWhereToBuy("physical-store")}
        </TabsTrigger>
        <TabsTrigger value="online-platform" onClick={() => handleTabChange()}>
          {tWhereToBuy("online-platform")}
        </TabsTrigger>
      </TabsList>

      <TabsContent
        value={tabs.physicalStore}
        className="my-10 w-full sub-desktop:my-20"
      >
        <PhysicalStores />
      </TabsContent>

      <TabsContent
        value={tabs.onlinePlatform}
        className="my-10 w-full sub-desktop:my-20"
      >
        <OnlineStores />
      </TabsContent>
    </Tabs>
  )
}
