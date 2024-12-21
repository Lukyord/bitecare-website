"use client"

import React from "react"
import { motion } from "framer-motion"
import { useRouter } from "@/lib/navigation"

import { FaChevronDown } from "react-icons/fa"

import { NavbarItem } from "@/types/common/navbar"
import BreadcrumbItem from "./BreadcrumbItem"
import { cn } from "@/lib/utils"

type NavbarMenuItemProps = {
  navbaritem: NavbarItem
}

export default function NavbarMenuItem({ navbaritem }: NavbarMenuItemProps) {
  const router = useRouter()

  return (
    <li
      className={`
            text-bc_black group relative 
            flex items-center gap-2
            rounded-full px-5 py-3 text-paragraph
            hover:bg-bc-inverse-primary hover:text-white
     `}
      onClick={() => {
        navbaritem.href && router.push(navbaritem.href)
      }}
    >
      <p className="whitespace-nowrap">{navbaritem.label}</p>
      {navbaritem.breadcrumb.length > 0 && navbaritem.breadcrumb && (
        <FaChevronDown
          size={12}
          className={`transform transition-transform duration-300 group-hover:rotate-180`}
        />
      )}
      {navbaritem.breadcrumb.length > 0 && (
        <motion.div
          initial={{ x: "-50%", y: 20 }}
          whileInView={{ x: "-50%", y: 0 }}
          className="absolute left-1/2 top-[100%] hidden translate-x-[-50%] items-center justify-center pt-6 group-hover:flex"
        >
          <div
            className={`
                rounded-lg border
                bg-white p-4 shadow-lg
                ${cn({
                  "grid w-[450px] grid-cols-2":
                    navbaritem.breadcrumb.length > 3,
                  "flex flex-col gap-2": navbaritem.breadcrumb.length <= 3,
                })}
              `}
          >
            {navbaritem.breadcrumb.map((breadcrumbItem, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem breadcrumbItem={breadcrumbItem} />
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      )}
    </li>
  )
}
