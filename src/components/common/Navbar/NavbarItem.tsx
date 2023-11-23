"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Link from "next/link"

import { FaChevronDown } from "react-icons/fa"

import { NavbarItemT } from "@/types/common/navbar"
import BreadcrumbAnimation from "@/components/animations/BreadcrumbAnimation"

type NavBarItemProps = {
  navbaritem: NavbarItemT
  selectedNavItem: string
  setSelectedNavItem: React.Dispatch<React.SetStateAction<string>>
}

const NavbarItem = ({
  navbaritem,
  selectedNavItem,
  setSelectedNavItem,
}: NavBarItemProps) => {
  const tNavBar = useTranslations("navbar")
  const isSelected = selectedNavItem === navbaritem.label

  return (
    <li
      onMouseEnter={() => !isSelected && setSelectedNavItem(navbaritem.label)}
      className={`relative flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-3 text-paragraph ${
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
            className="
                      flex flex-col gap-4 rounded-lg
                      border bg-white bg-opacity-30 p-4
                      shadow-lg backdrop-blur-lg backdrop-filter
                    "
          >
            {navbaritem.breadcrumb.map((breadcrumbItem, index) => (
              <Link
                href={breadcrumbItem.href}
                key={index}
                className="text-black"
              >
                <p>{breadcrumbItem.title}</p>
              </Link>
            ))}
          </div>
        </BreadcrumbAnimation>
      )}
    </li>
  )
}

export default NavbarItem
