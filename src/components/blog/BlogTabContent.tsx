import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import BlogCard from "./BlogCard"
import BlogHighlightSwiper from "./BlogHighlightSwiper"
import { useEffect, useState, useRef } from "react"
import { mockBlog } from "./BlogTabs"

type BlogTabContentProps = {
  blogs: mockBlog[]
  filterType?: string
}

export default function BlogTabContent({
  blogs,
  filterType,
}: BlogTabContentProps) {
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(itemsPerPage)
  const contentRef = useRef<HTMLDivElement>(null)

  const filteredBlogs = blogs.filter((blog) => {
    if (filterType === "all") return !blog.highlight
    return !blog.highlight && blog.type === filterType
  })

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage)

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
    const newStartIndex = (newPage - 1) * itemsPerPage
    const newEndIndex = newStartIndex + itemsPerPage
    setStartIndex(newStartIndex)
    setEndIndex(newEndIndex)
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="mx-auto max-w-[100vw] px-4 pt-10 lg:max-w-[1244px] lg:px-[60px] sub-desktop:my-20">
      <BlogHighlightSwiper blogs={blogs} filterType={filterType} />

      <div
        ref={contentRef}
        className="relative grid grid-cols-1 gap-7 pt-20 md:grid-cols-2"
      >
        {filteredBlogs.slice(startIndex, endIndex).map((blog, index) => (
          <BlogCard key={index} blog={blog} index={index} />
        ))}
      </div>

      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : undefined
              }
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <button
                className={`rounded px-3 py-1 ${
                  currentPage === page
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : undefined
              }
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
