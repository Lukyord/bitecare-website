import { getTranslations } from "next-intl/server"
import Image from "next/image"
import Link from "next/link"
import WaveAnimation from "../../animations/WaveAnimation"
import SecondaryButton from "../Button/SecondaryButton"
import FooterNavigateSection from "./FooterNavigateSection"
import { Images } from "@/constant/Images"
import { Links } from "@/constant/Links"

export default async function Footer() {
  const tFooter = await getTranslations("footer")
  const tButton = await getTranslations("button")

  return (
    <footer>
      <div className="relative h-24 w-screen overflow-hidden md:h-32 lg:h-48">
        <div className="absolute z-20">
          <WaveAnimation image={Images.WaveFooterBcPrimary_1} />
        </div>
        <div className="absolute z-10">
          <WaveAnimation
            image={Images.WaveFooterBcInversePrimary_2}
            reverse={true}
          />
        </div>
      </div>
      <div className="bg-bc-primary-container pb-[2%]">
        <div className="mx-auto flex w-[90%] flex-col pt-[8%] text-center">
          <h1 className="text-4xl md:text-h3 lg:text-h2">
            {tFooter("tagline1")}
          </h1>
          <h1 className="text-4xl md:text-h3 lg:text-h2">
            {tFooter("tagline2")}
          </h1>
          <h2 className="pt-[4%] text-subtitle md:text-paragraph lg:text-h3">
            {tFooter("tagline-description1")}
          </h2>
          <h2 className="text-subtitle md:text-paragraph lg:text-h3">
            {tFooter("tagline-description2")}
          </h2>
          <div className="pt-[6%]">
            <div className="hidden sm:block">
              <SecondaryButton
                text={tButton("get-to-know-us")}
                size="h2"
                href="/about-us"
              />
            </div>
            <div className="block sm:hidden">
              <SecondaryButton
                text={tButton("get-to-know-us")}
                size="paragraph"
                href="/about-us"
              />
            </div>
          </div>
          <FooterNavigateSection />
          <div className="flex flex-col-reverse pt-[8%] md:flex-row">
            <div className="w-0 md:w-[30%]"></div>
            <div className="text-subtitile flex pt-[4%] text-neutral-400 md:w-[40%] md:pt-0 lg:text-paragraph">
              <Link className="m-auto" href="/">
                {tFooter("copy-right")}
              </Link>
              <Link className="m-auto" href="/policy-privacy">
                {tFooter("policy")}
              </Link>
              <Link className="m-auto" href="/terms-and-conditions">
                {tFooter("terms")}
              </Link>
            </div>
            <div className="flex justify-center md:w-[30%] md:justify-end">
              <Link
                className="mx-[2%] my-auto md:mx-[4%]"
                href={Links.facebookHref}
              >
                <Image src={Images.FacebookIcon} alt="facebook" />
              </Link>
              <Link
                className="mx-[2%] my-auto md:mx-[4%]"
                href={Links.lineHref}
              >
                <Image src={Images.LineIcon} alt="line" />
              </Link>
              <Link
                className="mx-[2%] my-auto md:mx-[4%]"
                href={Links.shopeeHref}
              >
                <Image src={Images.ShopeeIcon} alt="shopee" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
