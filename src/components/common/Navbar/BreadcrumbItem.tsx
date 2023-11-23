"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { NavbarBreadcrumbT } from "@/types/common/navbar"
import { FaArrowRight } from "react-icons/fa6"

type BreadcrumbItemProps = {
  breadcrumbItem: NavbarBreadcrumbT
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
        className="flex h-16 w-52 flex-col justify-center rounded-lg px-5 py-4  hover:bg-bc_surface_container"
        initial="rest"
        whileHover="hovered"
        animate="rest"
      >
        <div className="flex items-center gap-2">
          <p className="text-paragraph text-bc_black">{breadcrumbItem.title}</p>
          <motion.span variants={arrowVariants}>
            <FaArrowRight className="text-bc_black" size={15} />
          </motion.span>
        </div>
        <p className="text-subtitle text-bc_grey">
          {breadcrumbItem.description}
        </p>
      </motion.div>
    </Link>
  )
}
