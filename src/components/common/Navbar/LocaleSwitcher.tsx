"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"
import { useLocale } from "next-intl"

import { Images } from "@/constant/Images"
import { i18n } from "@/config/i18n.config"
import { FaChevronDown } from "react-icons/fa"

type LocaleSwitcherProps = {
  selectedNavItem: string
  setSelectedNavItem: React.Dispatch<React.SetStateAction<string>>
}

export default function LocaleSwitcher({
  selectedNavItem,
  setSelectedNavItem,
}: LocaleSwitcherProps) {
  const pathName = usePathname()
  const router = useRouter()
  const isSelected = selectedNavItem === "locale-switcher"
  const currentLocale = useLocale()

  const changeLanguage = (locale: string) => {
    if (!pathName) return "/"
    const segments = pathName.split("/")

    if (
      segments.length < 2 ||
      !i18n.locales.includes(segments[1] as "th" | "en")
    ) {
      segments.splice(1, 0, locale)
    } else {
      segments[1] = locale
    }

    router.replace(segments.join("/"))
  }

  return (
    <div
      className={`relative flex items-center gap-3 whitespace-nowrap text-paragraph ${
        isSelected ? "bg-bc_inverse_primary text-white" : "text-bc_black"
      } rounded-full px-5 py-2`}
      onMouseEnter={() => !isSelected && setSelectedNavItem("locale-switcher")}
    >
      <p>{currentLocale.toLocaleUpperCase()}</p>
      <FaChevronDown
        size={12}
        className={`transform transition-transform duration-300 ${
          isSelected && "rotate-180"
        }`}
      />

      {selectedNavItem === "locale-switcher" && (
        <motion.div
          initial={{ opacity: 0, x: "-50%", y: 20 }}
          animate={{ opacity: 1, x: "-50%", y: 0 }}
          className="
                  absolute left-1/2
                  top-[120%] w-28 translate-x-[-50%]
                "
          onMouseLeave={() => setSelectedNavItem("")}
        >
          <div
            className="
                      jusify-center flex flex-col items-center
                      gap-2 rounded-lg border 
                      bg-white bg-opacity-30 p-2
                      backdrop-blur-lg backdrop-filter
                    "
          >
            {i18n.locales.map((locale, index) => (
              <button
                key={index}
                className="flex items-center gap-3 rounded-md px-4 py-1 text-bc_black hover:bg-bc_surface_container"
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
      )}
    </div>
  )
}