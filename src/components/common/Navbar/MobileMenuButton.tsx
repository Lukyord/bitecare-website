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
import { Link } from "@/lib/navigation"
import { Images } from "@/constant/Images"
import { useToast } from "@/components/ui/use-toast"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import SecondaryButton from "../Button/SecondaryButton"
import MobileLocaleSwitcher from "./MobileLocaleSwitcher"
import { useMobileMenuOpen } from "@/context/MobileMenuOpenContextProvider"

type MobileMenuButtonProps = {
  NavbarItems: NavbarItem[]
}

export default function MobileMenuButton({
  NavbarItems,
}: MobileMenuButtonProps) {
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenuOpen()
  const tButton = useTranslations("button")
  const tMiscellaneous = useTranslations("miscellaneous")
  const { toast } = useToast()

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
                  flex h-[100dvh] w-screen 
                  flex-col 
                  bg-bc-primary-container pt-28 md:pt-32
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
              {NavbarItems.map((navbarItem, index) => {
                if (navbarItem.breadcrumb.length === 0) {
                  return (
                    navbarItem.href && (
                      <Link
                        href={navbarItem.href}
                        key={index}
                        className="flex h-[72px] flex-col justify-center gap-2 border-b border-bc-black px-4 py-4 sm:px-8"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <h3 className="text-paragraph">{navbarItem.label}</h3>
                      </Link>
                    )
                  )
                }

                return (
                  <AccordionItem
                    value={`item-${index}`}
                    key={index}
                    className="text-paragraph"
                  >
                    <AccordionTrigger className="px-4 sm:px-8 ">
                      {navbarItem.label}
                    </AccordionTrigger>
                    <AccordionContent>
                      {navbarItem.breadcrumb?.map((breadcrumbItem, index) => (
                        <Link
                          href={breadcrumbItem.href}
                          key={index}
                          className="mt-4 flex flex-col gap-2 px-8 sm:px-12"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <p className="text-paragraph">
                            {breadcrumbItem.title}
                          </p>
                          <p className="text-subtitle text-bc-grey">
                            {breadcrumbItem.description}
                          </p>
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.75,
              }}
              className="mb-[5vh] mt-auto pt-5"
            >
              <MobileLocaleSwitcher />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
              }}
              className="mb-6 flex h-fit flex-col gap-2"
            >
              <Image
                alt="dashed line"
                src={Images.DashedLineBlack}
                className="h-auto w-screen"
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
                  onClick={() => {
                    //TODO: change domain name
                    navigator.clipboard
                      .writeText("https://bitecarepet.com/")
                      .then(() =>
                        toast({
                          description: tMiscellaneous("copy-link-success"),
                        })
                      )
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
