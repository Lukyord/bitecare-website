"use client"

import Image from "next/image"
import { useLocale } from "next-intl"

import { Images } from "@/constant/Images"
import { i18n } from "@/config/i18n.config"
import { FaChevronDown } from "react-icons/fa"
import BreadcrumbAnimation from "@/components/animations/BreadcrumbAnimation"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "@/lib/navigation"

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
    router.replace(pathName, { locale })
  }

  return (
    <div
      className={`relative  flex items-center gap-3 whitespace-nowrap rounded-full px-5 py-2 text-paragraph
        ${cn({
          "bg-bc-inverse-primary text-white": isSelected,
          "text-bc_black": !isSelected,
        })}`}
      onMouseEnter={() => !isSelected && setSelectedNavItem("locale-switcher")}
    >
      <p> {currentLocale.toLocaleUpperCase()}</p>
      <FaChevronDown
        size={12}
        className={`transform transition-transform duration-300 ${cn({
          "rotate-180": isSelected,
        })}`}
      />

      {selectedNavItem === "locale-switcher" && (
        <BreadcrumbAnimation setSelectedNavItem={setSelectedNavItem}>
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
        </BreadcrumbAnimation>
      )}
    </div>
  )
}
