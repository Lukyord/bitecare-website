"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PhysicalStores from "@/components/where-to-buy/PhysicalStores/PhysicalStores"
import OnlineStores from "@/components/where-to-buy/OnlineStores/OnlineStores"
import { useRouter, useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl"
import { OnlineStore, Store } from "@/payload/type-gen"
import { useEffect, useState } from "react"
import BlogTabContent from "./BlogTabContent"

const tabs = {
  all: "all",
  news: "news",
  event: "event",
}

export type mockBlog = {
  highlight: boolean
  type: string
  title: string
  created_at: string
  image: string
  description: string
  author: string
  link: string
}

type BlogTabContentProps = {
  blogs: mockBlog[]
  filterType?: string
}

type NewsTabsProps = {
  blogs: mockBlog[]
}

export default function NewsTabs({ blogs }: NewsTabsProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tAllNews = useTranslations("all-blog")
  const defaultTab = searchParams.get("type") || "all"
  const [tabValue, setTabValue] = useState(defaultTab)

  const handleTabChange = (tab: string) => {
    setTabValue(tab)
    router.replace(`?type=${tab}`, { scroll: false })
  }

  useEffect(() => {
    setTabValue(defaultTab)
  }, [defaultTab])

  return (
    <Tabs
      defaultValue={defaultTab}
      className="flex flex-col items-center"
      value={tabValue}
    >
      <TabsList className="mb-10 grid w-[80%] max-w-md grid-cols-3">
        <TabsTrigger value={tabs.all} onClick={() => handleTabChange(tabs.all)}>
          {tAllNews("all")}
        </TabsTrigger>
        <TabsTrigger
          value={tabs.news}
          onClick={() => handleTabChange(tabs.news)}
        >
          {tAllNews("news")}
        </TabsTrigger>
        <TabsTrigger
          value={tabs.event}
          onClick={() => handleTabChange(tabs.event)}
        >
          {tAllNews("event")}
        </TabsTrigger>
      </TabsList>

      <TabsContent value={tabs.all}>
        <BlogTabContent blogs={blogs} filterType={tabs.all} />
      </TabsContent>

      <TabsContent value={tabs.news}>
        <BlogTabContent blogs={blogs} filterType={tabs.news} />
      </TabsContent>

      <TabsContent value={tabs.event}>
        <BlogTabContent blogs={blogs} filterType={tabs.event} />
      </TabsContent>
    </Tabs>
  )
}
