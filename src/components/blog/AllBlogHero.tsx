import { getTranslations } from "next-intl/server"
import { Suspense } from "react"
import BlogTabs from "./BlogTabs"
import mockData from "../../../public/mock/mockdata.json"

export default async function AllBlogHero() {
  const tAllNews = await getTranslations("all-blog")

  return (
    <section className="relative mt-[74px] py-20 md:mt-[90px] lg:mt-[102px]">
      <h1 className="mb-8 mt-0 text-center text-h3 md:mt-8 lg:text-h2 sub-desktop:my-20 sub-desktop:text-h1">
        {tAllNews("title")}
      </h1>

      <Suspense>
        <BlogTabs blogs={mockData.blogs} />
      </Suspense>
    </section>
  )
}
