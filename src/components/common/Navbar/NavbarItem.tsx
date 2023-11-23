"use client"

import React from "react"
import { useTranslations } from "next-intl"

import { FaChevronDown } from "react-icons/fa"

import { NavbarItemT } from "@/types/common/navbar"
import BreadcrumbAnimation from "@/components/animations/BreadcrumbAnimation"
import BreadcrumbItem from "./BreadcrumbItem"

type NavBarItemProps = {
  navbaritem: NavbarItemT
  selectedNavItem: string
  setSelectedNavItem: React.Dispatch<React.SetStateAction<string>>
}

export default function NavbarItem({
  navbaritem,
  selectedNavItem,
  setSelectedNavItem,
}: NavBarItemProps) {
  const tNavBar = useTranslations("navbar")
  const isSelected = selectedNavItem === navbaritem.label

  return (
    <li
      onMouseEnter={() => !isSelected && setSelectedNavItem(navbaritem.label)}
      className={`relative flex items-center gap-2 rounded-full px-5 py-3 text-paragraph ${
        isSelected ? "bg-bc_inverse_primary text-white" : "text-bc_black"
      } `}
    >
      <p>{tNavBar(navbaritem.label)}</p>
      {navbaritem.breadcrumb && (
        <FaChevronDown
          size={12}
          className={`transform transition-transform duration-300 ${
            isSelected && "rotate-180 text-white"
          }`}
        />
      )}
      {/* Render breadcrumb */}
      {navbaritem.breadcrumb && isSelected && (
        <BreadcrumbAnimation setSelectedNavItem={setSelectedNavItem}>
          <div
            className={`
                      ${
                        navbaritem.breadcrumb.length > 3
                          ? "grid w-[450px] grid-cols-2"
                          : "flex flex-col gap-2"
                      }
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
