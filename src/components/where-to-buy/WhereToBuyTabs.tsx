"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PhysicalStores from "@/components/where-to-buy/PhysicalStores/PhysicalStores"
import OnlineStores from "@/components/where-to-buy/OnlineStores/OnlineStores"
import { useRouter, useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl"
import { Store } from "@/payload/type-gen"
import { useEffect, useState } from "react"
import { set } from "lodash"

const tabs = {
  physicalStore: "physical-store",
  onlinePlatform: "online-platform",
}

type WhereToBuyTabsProps = {
  stores: Store[]
}

export default function WhereToBuyTabs({ stores }: WhereToBuyTabsProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tWhereToBuy = useTranslations("where-to-buy-landing")
  const defaultTab = searchParams.get("type") || "physical-store"
  const [tabValue, setTabValue] = useState("physical-store")

  const handleTabChange = () => {
    if (defaultTab === tabs.physicalStore) {
      setTabValue(tabs.onlinePlatform)
      router.replace(`?type=${tabs.onlinePlatform}`, { scroll: false })
    } else {
      setTabValue(tabs.physicalStore)
      router.replace(`?type=${tabs.physicalStore}`, { scroll: false })
    }
  }

  useEffect(() => {
    const tabType = searchParams.get("type")

    console.log(tabType)

    if (tabType) {
      console.log(tabType, tabs.physicalStore)
      if (tabType === tabs.physicalStore) {
        setTabValue(tabs.physicalStore)
        console.log("physical")
      } else {
        setTabValue(tabs.onlinePlatform)
        console.log("online")
      }
    }
  }, [])

  return (
    <Tabs
      defaultValue={defaultTab}
      className="flex flex-col items-center"
      value={tabValue}
    >
      <TabsList className="mb-10 grid w-[80%] max-w-md grid-cols-2">
        <TabsTrigger
          value={tabs.physicalStore}
          onClick={() => handleTabChange()}
        >
          {tWhereToBuy("physical-store")}
        </TabsTrigger>
        <TabsTrigger
          value={tabs.onlinePlatform}
          onClick={() => handleTabChange()}
        >
          {tWhereToBuy("online-platform")}
        </TabsTrigger>
      </TabsList>

      <TabsContent
        value={tabs.physicalStore}
        className="my-10 w-full sub-desktop:my-20"
      >
        <PhysicalStores stores={stores} />
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
