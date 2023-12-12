import { getTranslations } from "next-intl/server"
import Image from "next/image"
import Link from "next/link"
import { Images } from "@/constant/Images"

export default async function FooterNavigateSection() {
  const tFooter = await getTranslations("footer")
  const tFooterProduct = await getTranslations("footer-product")
  const tFooterSupport = await getTranslations("footer-support")
  const tFooterWhereToBuy = await getTranslations("footer-where-to-buy")

  const productList = [
    {
      label: tFooterProduct("skin-care"),
      href: "/products/skin-care",
    },
    {
      label: tFooterProduct("low-fat"),
      href: "/products/low-fat",
    },
    {
      label: tFooterProduct("senior-care"),
      href: "/products/senior-care",
    },
    {
      label: tFooterProduct("renal-care"),
      href: "/products/renal-care",
    },
  ]

  const supportList = [
    {
      label: tFooterSupport("contact-us"),
      href: "/support/contact-us",
    },
    {
      label: tFooterSupport("faq"),
      href: "/support/faq",
    },
  ]

  const whereToBuyList = [
    {
      label: tFooterWhereToBuy("physical-store"),
      href: "/where-to-buy?type=physical-store",
    },
    {
      label: tFooterWhereToBuy("online-platform"),
      href: "/where-to-buy?type=online-platform",
    },
  ]

  const footerItems = [
    {
      label: tFooter("products"),
      list: productList,
    },
    {
      label: tFooter("support"),
      list: supportList,
    },
    {
      label: tFooter("where-to-buy"),
      list: whereToBuyList,
    },
  ]

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
            {footerItem.list.map((item, index) => (
              <li
                className="pt-4 text-left text-subtitle text-neutral-500 lg:text-paragraph"
                key={index}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
