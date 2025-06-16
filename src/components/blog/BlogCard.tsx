import React from "react"
import Image from "next/image"
import { mockBlog } from "./BlogTabs"
import { cn } from "@/lib/utils"
import Link from "next/link"
type BlogCardProps = {
  blog: mockBlog
  index: number
}

export default function BlogCard({ blog, index }: BlogCardProps) {
  return (
    <Link
      href={blog.link}
      key={index}
      className="hover:bg-material-secondary-container group flex flex-col-reverse gap-6 overflow-hidden rounded-2xl bg-bc-primary-container px-4 py-6 transition-all duration-300 ease-in-out lg:flex-row"
    >
      <div className="block-text flex-grow-1 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <div className="block-subttl text-material-primary font-psl text-paragraph capitalize">
            <p>{blog.type}</p>
          </div>

          <div className="block-ttl line-clamp-3 font-hel_rounded text-paragraph transition-all duration-300 ease-in-out group-hover:text-bc-primary">
            <h3>{blog.title}</h3>
          </div>
        </div>

        <div className="flex flex-col gap-[6px] font-psl text-subtitle">
          <div className="block-author text-bc-grey">
            <p>{blog.author}</p>
          </div>
          <div className="block-desc">
            <p>{blog.description}</p>
          </div>

          <div className="block-date text-bc-grey">
            <p>
              {new Date(blog.created_at).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`block-image relative aspect-square w-full flex-shrink-0 overflow-hidden rounded-xl transition-all duration-300 ease-in-out lg:w-[38.09523809524%]
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
          className="h-full w-full object-cover object-center"
        />
      </div>
    </Link>
  )
}
