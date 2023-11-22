"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { NavbarItemT } from "@/types/common/navbar"
import { FaChevronDown } from "react-icons/fa"

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

  return (
    <li
      onMouseEnter={() => {
        if (selectedNavItem !== navbaritem.label)
          setSelectedNavItem(navbaritem.label)
      }}
      className="relative flex items-center gap-1 whitespace-nowrap p-2"
    >
      <p
        title={tNavBar(navbaritem.label)}
        className={`${
          selectedNavItem === navbaritem.label && "text-primary_blue font-bold"
        } 
        before:invisible before:block before:h-0 
        before:overflow-hidden before:font-bold before:content-[attr(title)]
      `}
      >
        {tNavBar(navbaritem.label)}
      </p>
      {navbaritem.breadcrumb && (
        <FaChevronDown
          className={`transform transition-transform duration-300 ${
            selectedNavItem === navbaritem.label ? "rotate-180" : ""
          }`}
        />
      )}

      {/* Render breadcrumb */}
      {navbaritem.breadcrumb && selectedNavItem === navbaritem.label && (
        <motion.div
          initial={{ x: "-50%", y: 20 }}
          animate={{ x: "-50%", y: 0 }}
          className="
                  absolute 
                  left-1/2 top-[120%] translate-x-[-50%]
                "
          onMouseLeave={() => setSelectedNavItem("")}
        >
          <div
            className="
                      flex flex-col gap-4 rounded-lg
                      border bg-white bg-opacity-30 p-4
                      shadow-lg backdrop-blur-lg backdrop-filter
                    "
          >
            {navbaritem.breadcrumb.map((breadcrumbItem, index) => (
              <Link
                title={breadcrumbItem.title}
                href={breadcrumbItem.href}
                key={index}
                className="
                    hover:text-primary_blue text-black before:invisible
                      before:block before:h-0 before:overflow-hidden 
                      before:font-bold before:content-[attr(title)] hover:font-bold
                    "
              >
                <p>{breadcrumbItem.title}</p>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </li>
  )
}

export default NavbarItem
