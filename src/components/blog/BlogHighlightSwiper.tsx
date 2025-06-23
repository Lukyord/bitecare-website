"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { mockBlog } from "./BlogTabs"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "./blog-highlight-swiper.css"
import { EffectFade, Navigation } from "swiper/modules"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Images } from "@/constant/Images"
import Link from "next/link"
type BlogHighlightSwiperProps = {
  blogs: mockBlog[]
  filterType?: string
}

export default function BlogHighlightSwiper({
  blogs,
  filterType,
}: BlogHighlightSwiperProps) {
  const highlightBlogs = blogs.filter((blog) => {
    if (filterType === "all") return blog.highlight
    return blog.highlight && blog.type === filterType
  })

  if (highlightBlogs.length === 0) return null

  return (
    <div className="blog-highlight-swiper relative w-full">
      <Image
        alt="flower 1"
        src={Images.FlowerBcPrimary_1}
        width={57}
        height={37}
        className="absolute left-[15%] top-0 z-10 aspect-[0.9166666667] h-auto w-[13.3333333333vw] max-w-[88px] translate-y-[-50%] md:left-[5%] md:w-[6.1805555556vw]"
      />

      <Image
        alt="hashtag"
        src={Images.HashtagBcPrimary}
        className="absolute left-0 top-[12.5%] z-10 aspect-[0.7606837607] h-auto w-[12.05128205128vw] max-w-[89px] md:w-[6.1805555556vw] md:translate-x-[-50%]"
      />

      <Image
        alt="flower 2"
        src={Images.FlowerBcPrimary_2}
        width={57}
        height={37}
        className="absolute bottom-[20%] right-0 z-10 hidden aspect-[0.753164557] h-auto w-[8.2638888889vw] max-w-[97px] translate-x-[50%] md:block"
      />

      <Swiper
        slidesPerView="auto"
        className="!overflow-visible md:!overflow-hidden"
        navigation={true}
        modules={[Navigation]}
      >
        {highlightBlogs.map((blog, index) => (
          <SwiperSlide key={index} className="px-4 md:!w-[50%]">
            <Link href={blog.link} className="group block w-full">
              <div
                className={`relative aspect-square overflow-hidden rounded-2xl transition-all duration-300 group-hover:rotate-[-1.5deg]
                 ${cn({
                   "group-hover:rotate-[-1.5deg]": index % 2 === 0,
                   "group-hover:rotate-[1.5deg]": index % 2 === 1,
                 })}
                `}
              >
                <Image
                  src={`/mock/${blog.image}`}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="object-center"
                />
              </div>

              <div className="mt-4 flex flex-col items-center gap-4 text-center">
                <div className="text-material-primary font-psl text-paragraph capitalize ">
                  <p>{blog.type}</p>
                </div>
                <div
                  className={`font-hel_rounded text-paragraph transition-all duration-300 ease-in-out group-hover:text-bc-primary`}
                >
                  <p className="text-h4 line-clamp-3">{blog.title}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
