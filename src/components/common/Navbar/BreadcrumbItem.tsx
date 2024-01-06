"use client"

import { motion } from "framer-motion"

import { Link } from "@/lib/navigation"
import { NavigationBreadcrumb } from "@/types/common/navbar"
import { FaArrowRight } from "react-icons/fa6"

type BreadcrumbItemProps = {
  breadcrumbItem: NavigationBreadcrumb
}

const arrowVariants = {
  rest: {},
  hovered: {
    x: 10,
  },
}

export default function BreadcrumbItem({
  breadcrumbItem,
}: BreadcrumbItemProps) {
  return (
    <Link href={breadcrumbItem.href}>
      <motion.div
        className="flex h-16 w-52 flex-col justify-center rounded-lg px-5 py-4  hover:bg-bc-surface-container"
        initial="rest"
        whileHover="hovered"
        animate="rest"
      >
        <div className="flex items-center gap-2">
          <p className="text-paragraph text-bc-black">{breadcrumbItem.title}</p>
          <motion.span variants={arrowVariants}>
            <FaArrowRight className="text-bc-black" size={15} />
          </motion.span>
        </div>
        <p className="text-subtitle text-bc-grey">
          {breadcrumbItem.description}
        </p>
      </motion.div>
    </Link>
  )
}
