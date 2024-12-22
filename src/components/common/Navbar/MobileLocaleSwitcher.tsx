"use client"

import React from "react"
import Image from "next/image"

import { Images } from "@/constant/Images"
import { i18n, Locale } from "@/config/i18n.config"
import { usePathname, useRouter } from "@/lib/navigation"

export default function MobileLocaleSwitcher() {
  const pathName = usePathname()
  const router = useRouter()

  const changeLanguage = (locale: Locale) => {
    router.replace(pathName, { locale })
  }

  return (
    <div className="flex items-center justify-center gap-3">
      {i18n.locales.map((locale, index) => (
        <button
          key={index}
          className="
                    flex items-center
                    justify-center gap-3 rounded-md border
                    border-bc-grey px-3 py-1
                    text-bc-black hover:border-bc-primary
                    hover:bg-bc-inverse-primary hover:text-white
                  "
          onClick={() => changeLanguage(locale)}
        >
          <Image
            alt="country-flag"
            src={locale === "th" ? Images.ThaiFlag : Images.EnglishFlag}
            width={40}
            height={40}
            className="h-auto w-auto"
          />
          <p className="text-paragraph">{locale.toUpperCase()}</p>
        </button>
      ))}
    </div>
  )
}
