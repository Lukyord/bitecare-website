"use client"

import Image from "next/image"
import { useLocale } from "next-intl"
import { motion } from "framer-motion"

import { Images } from "@/constant/Images"
import { i18n, Locale } from "@/config/i18n.config"
import { FaChevronDown } from "react-icons/fa"
import { usePathname, useRouter } from "@/lib/navigation"

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const router = useRouter()

  const currentLocale = useLocale()

  const changeLanguage = (locale: Locale) => {
    router.replace(pathName, { locale })
  }

  return (
    <div
      className="
              text-bc_black group 
              relative flex items-center 
              gap-3 whitespace-nowrap rounded-full 
              px-5 py-2 text-paragraph
              hover:bg-bc-inverse-primary hover:text-white
          "
    >
      <p> {currentLocale.toLocaleUpperCase()}</p>
      <FaChevronDown
        size={12}
        className={`transform transition-transform duration-300 group-hover:rotate-180`}
      />

      <motion.div
        initial={{ x: "-50%", y: 20 }}
        whileInView={{ x: "-50%", y: 0 }}
        className="
                absolute left-1/2 top-[100%] 
                hidden translate-x-[-50%]
                items-center justify-center 
                pt-3 group-hover:flex"
      >
        <div
          className="
                      jusify-center flex flex-col items-center
                      gap-2 rounded-lg border 
                      bg-white p-2
                    "
        >
          {i18n.locales.map((locale, index) => (
            <button
              key={index}
              className="
                        flex items-center 
                        gap-3 rounded-md py-1 
                        pl-4 pr-8 text-bc-black hover:bg-bc-surface-container
                      "
              onClick={() => changeLanguage(locale)}
            >
              <Image
                alt="country-flag"
                src={locale === "th" ? Images.ThaiFlag : Images.EnglishFlag}
                width={24}
                height={24}
                className="h-auto w-auto"
              />
              <p>{locale.toUpperCase()}</p>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
