import { getTranslations } from "next-intl/server"
import Image from "next/image"
import Link from "next/link"
import { Images } from "@/constant/Images"
import useNavigation from "@/hooks/useNavigation"

export default async function FooterNavigateSection() {
  const NavigationMenus = await useNavigation()
  
  const footerItems = NavigationMenus.map((menu) => ({
    label: menu.label,
    breadCrumbs: menu.breadCrumbs,
  }))

  return (
    <div className="mx-auto flex w-[90%] flex-col items-center justify-between pt-[6%] md:flex-row">
      <Image
        className="flex w-full md:w-1/2 md:pr-[4%]"
        src={Images.BiteCareLogoTextTM}
        alt="bitecare-footer-logo"
      />
      <div className="flex w-full justify-between pt-[8%] md:w-1/2 md:pl-[4%] md:pt-0">
        {footerItems.map((footerItem, index) => (
          <ul
            className="flex flex-col text-left text-paragraph lg:text-h3"
            key={index}
          >
            <span className="pb-4">{footerItem.label}</span>
            {footerItem.breadCrumbs.map((breadCrumb, index) => (
              <li
                className="pt-4 text-left text-subtitle text-neutral-500 lg:text-paragraph"
                key={index}
              >
                <Link href={breadCrumb.href}>{breadCrumb.title}</Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
