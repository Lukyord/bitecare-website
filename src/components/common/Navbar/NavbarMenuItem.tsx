"use client"

import React from "react"
import { useTranslations } from "next-intl"

import { FaChevronDown } from "react-icons/fa"

import { NavbarItem } from "@/types/common/navbar"
import BreadcrumbAnimation from "@/components/animations/BreadcrumbAnimation"
import BreadcrumbItem from "./BreadcrumbItem"
import { cn } from "@/lib/utils"

type NavbarMenuItemProps = {
  navbaritem: NavbarItem
  selectedNavItem: string
  setSelectedNavItem: React.Dispatch<React.SetStateAction<string>>
}

export default function NavbarMenuItem({
  navbaritem,
  selectedNavItem,
  setSelectedNavItem,
}: NavbarMenuItemProps) {
  const tNavBar = useTranslations("navbar")
  const isSelected = selectedNavItem === navbaritem.label

  return (
    <li
      onMouseEnter={() => !isSelected && setSelectedNavItem(navbaritem.label)}
      className={`
            relative flex items-center 
            gap-2 rounded-full 
            px-5 py-3 text-paragraph 
      ${cn({
        "bg-bc-inverse-primary text-white": isSelected,
        "text-bc_black": !isSelected,
      })} `}
    >
      <p>{tNavBar(navbaritem.label)}</p>
      {navbaritem.breadcrumb && (
        <FaChevronDown
          size={12}
          className={`transform transition-transform duration-300 ${cn({
            "rotate-180": isSelected,
          })}`}
        />
      )}
      {/* Render breadcrumb */}
      {navbaritem.breadcrumb && isSelected && (
        <BreadcrumbAnimation setSelectedNavItem={setSelectedNavItem}>
          <div
            className={`
                      ${cn({
                        "grid w-[450px] grid-cols-2":
                          navbaritem.breadcrumb.length > 3,
                        "flex flex-col gap-2":
                          navbaritem.breadcrumb.length <= 3,
                      })}
                      rounded-lg border bg-white bg-opacity-30 p-4
                      shadow-lg backdrop-blur-lg backdrop-filter
                  `}
          >
            {navbaritem.breadcrumb.map((breadcrumbItem, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem breadcrumbItem={breadcrumbItem} />
              </React.Fragment>
            ))}
          </div>
        </BreadcrumbAnimation>
      )}
    </li>
  )
}
