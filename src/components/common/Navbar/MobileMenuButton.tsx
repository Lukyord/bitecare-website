"use client"

import React, { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { NavbarItem } from "@/types/common/navbar"
import { TiThMenu } from "react-icons/ti"
import { RxCross2 } from "react-icons/rx"
import { FaShareAlt } from "react-icons/fa"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Link } from "@/lib/navigation"
import { Images } from "@/constant/Images"

import SecondaryButton from "../Button/SecondaryButton"

type MobileMenuButtonProps = {
  NavbarItems: NavbarItem[]
}

export default function MobileMenuButton({
  NavbarItems,
}: MobileMenuButtonProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const tNavBar = useTranslations("navbar")
  const tButton = useTranslations("button")
  const tMiscellaneous = useTranslations("miscellaneous")

  // // Disable scrolling when mobile nav menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <>
      <button
        className={`
                  flex h-[42px] w-[70px] 
                  items-center justify-center 
                  rounded-full
                  sm:w-[91px] lg:hidden lg:h-[54px]
                  ${cn({
                    "bg-bc-inverse-primary": mobileMenuOpen,
                    "bg-white": !mobileMenuOpen,
                  })}
                `}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <RxCross2 size={24} /> : <TiThMenu size={26} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.75, ease: [0.83, 0, 0.17, 1] }}
            className="
                  fixed left-0 top-0 -z-10 
                  flex h-screen w-screen 
                  flex-col justify-between 
                  bg-bc-primary-container pt-28
                "
          >
            <Accordion
              type="single"
              collapsible
              className="
                      no-scrollbar max-h-[80%] 
                      overflow-y-auto border-t-[1px] 
                      border-bc-black
                    "
            >
              {NavbarItems.map((navbarItem, index) => (
                <AccordionItem
                  value={`item-${index}`}
                  key={index}
                  className="text-paragraph"
                >
                  <AccordionTrigger className="px-4 sm:px-8 ">
                    {tNavBar(navbarItem.label)}
                  </AccordionTrigger>
                  <AccordionContent>
                    {navbarItem.breadcrumb?.map((breadcrumbItem, index) => (
                      <Link
                        href={breadcrumbItem.href}
                        key={index}
                        className="mt-4 flex flex-col gap-2 px-8 sm:px-12"
                      >
                        <p className="text-paragraph">{breadcrumbItem.title}</p>
                        <p className="text-subtitle text-bc-grey">
                          {breadcrumbItem.description}
                        </p>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.75,
              }}
              className="mb-6 flex h-fit flex-col gap-2"
            >
              <Image
                alt="dashed line"
                src={Images.DashedLineBlack}
                className="w-full"
              />
              <motion.div
                className="mx-auto mt-4 w-[90%]"
                initial={{ x: "-20px", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <p className="mb-3 text-subtitle">
                  {tMiscellaneous("impressed-by-our-products")}
                </p>
                <SecondaryButton
                  text={tButton("tell-a-friend")}
                  icon={<FaShareAlt size={20} />}
                  size="paragraph"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
