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
      <div className="bg-bc-primary-container">
        <div className="mx-auto flex w-[90%] flex-col pt-32 text-center">
          <h1 className="text-h3 lg:text-h2">{tFooter("tagline1")}</h1>
          <h1 className="mt-2 text-h3 lg:text-h2">{tFooter("tagline2")}</h1>
          <h2 className="mt-12 text-paragraph lg:text-h3">
            {tFooter("tagline-description1")}
          </h2>
          <h2 className="mt-2 text-paragraph lg:text-h3">
            {tFooter("tagline-description2")}
          </h2>
          <div className="mt-20">
            <SecondaryButton
              text={tFooter("get-to-know-us")}
              size="h3"
              href="/about-us"
            />
          </div>
          <div className="mx-auto mt-16 flex w-[90%] items-center justify-between lg:flex-row">
            <Image
              className="flex w-1/2 px-10"
              src={Images.BiteCareLogoTextTM}
              alt="bitecare-footer-logo"
            />
            <div className="flex w-1/2 justify-between px-10">
              {footerItems.map((footerItem, index) => (
                <ul
                  className="flex flex-col text-left text-paragraph lg:text-h3"
                  key={index}
                >
                  <span className="mb-4">{footerItem.label}</span>
                  {footerItem.list.map((item, index) => (
                    <li
                      className="mt-4 text-left text-subtitle lg:text-paragraph"
                      key={index}
                    >
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="mb-6 mt-32 flex">
            <div className="w-1/4"></div>
            <div className="flex w-1/2">
              <Link
                className="text-subtitile m-auto lg:text-paragraph"
                href="/"
              >
                {tFooter("copy-right")}
              </Link>
              <Link
                className="text-subtitile m-auto lg:text-paragraph "
                href="/policy-privacy"
              >
                {tFooter("policy")}
              </Link>
              <Link
                className="text-subtitile m-auto lg:text-paragraph"
                href="/terms-and-conditions"
              >
                {tFooter("terms")}
              </Link>
            </div>
            <div className="flex w-1/4 justify-end">
              <Link className="mx-2 my-auto lg:mx-4" href="facebook">
                <Image src={Images.FacebookIcon} alt="facebook" />
              </Link>
              <Link className="mx-2 my-auto lg:mx-4" href="instagram">
                <Image src={Images.InstagramIcon} alt="instagram" />
              </Link>
              <Link className="mx-2 my-auto lg:mx-4" href="shopee">
                <Image src={Images.ShopeeIcon} alt="shopee" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
