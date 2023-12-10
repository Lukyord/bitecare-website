import { getTranslations } from "next-intl/server"
import Image from "next/image"
import Link from "next/link"
import WaveAnimation from "../animations/WaveAnimation"
import SecondaryButton from "./Button/SecondaryButton"
import { Images } from "@/constant/Images"

export default async function Footer() {
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
    <footer>
      <WaveAnimation />
      <div className="mx-auto flex w-[90%] flex-col text-center">
        <h1 className="text-h3 lg:text-h2">{tFooter("tagline1")}</h1>
        <h1 className="text-h3 lg:text-h2">{tFooter("tagline2")}</h1>
        <h2 className="text-paragraph lg:text-h3">
          {tFooter("tagline-description1")}
        </h2>
        <h2 className="text-paragraph lg:text-h3">
          {tFooter("tagline-description2")}
        </h2>
        <SecondaryButton
          text={tFooter("get-to-know-us")}
          size="h3"
          href="/about-us"
        />
        <div className="mx-auto mt-10 flex w-[90%] items-center justify-between lg:mt-20 lg:flex-row">
          <Image
            className="flex w-1/2"
            src={Images.BiteCareLogoTextTM}
            alt="bitecare-footer-logo"
          />
          <div className="flex w-1/2 justify-between">
            {footerItems.map((footerItem, index) => (
              <ul className="text-paragraph lg:text-h3" key={index}>
                {footerItem.label}
                {footerItem.list.map((item, index) => (
                  <li
                    className="text-left text-subtitle lg:text-paragraph"
                    key={index}
                  >
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex grow justify-center">
            <p className="mx-8 lg:mx-10">{tFooter("copy-right")}</p>
            <p className="mx-8 lg:mx-10">{tFooter("policy")}</p>
            <p className="mx-8 lg:mx-10">{tFooter("terms")}</p>
          </div>
          <div className="flex justify-end">
            <Link className="mx-1 lg:mx-2" href="facebook">
              <Image src={Images.FacebookIcon} alt="facebook" />
            </Link>
            <Link className="mx-1 lg:mx-2" href="instagram">
              <Image src={Images.InstagramIcon} alt="instagram" />
            </Link>
            <Link className="mx-1 lg:mx-2" href="shopee">
              <Image src={Images.ShopeeIcon} alt="youtube" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
