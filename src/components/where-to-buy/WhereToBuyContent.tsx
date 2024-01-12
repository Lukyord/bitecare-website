"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PhysicalStores from "@/components/where-to-buy/PhysicalStores/PhysicalStores"
import OnlineStores from "@/components/where-to-buy/OnlineStores/OnlineStores"
import { useRouter, useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl"

type WhereToBuyContentProps = {}

const tabs = ["physical-store", "online-platform"]

export default function WhereToBuyContent({}: WhereToBuyContentProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tWhereToBuy = useTranslations("where-to-buy-landing")
  const defaultTab = searchParams.get("type") || "physical-store"

  const handleTabChange = () => {
    if (defaultTab === tabs[0]) {
      router.replace(`?type=${tabs[1]}`, { scroll: false })
    } else router.replace(`?type=${tabs[0]}`, { scroll: false })
  }

  return (
    <Tabs
      key={defaultTab}
      defaultValue={defaultTab}
      className="flex flex-col items-center"
    >
      <TabsList className="grid w-[80%] max-w-md grid-cols-2">
        <TabsTrigger value="physical-store" onClick={() => handleTabChange()}>
          {tWhereToBuy("physical-store")}
        </TabsTrigger>
        <TabsTrigger value="online-platform" onClick={() => handleTabChange()}>
          {tWhereToBuy("online-platform")}
        </TabsTrigger>
      </TabsList>

      <TabsContent value="physical-store" className="my-10 w-full 2xl:my-20">
        <PhysicalStores />
      </TabsContent>

      <TabsContent value="online-platform" className="my-10 w-full 2xl:my-20">
        <OnlineStores />
      </TabsContent>
    </Tabs>
  )
}
