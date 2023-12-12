import { getTranslations } from "next-intl/server"
import Image from "next/image"
import Link from "next/link"
import WaveAnimation from "../../animations/WaveAnimation"
import SecondaryButton from "../Button/SecondaryButton"
import FooterNavigateSection from "./FooterNavigateSection"
import { Images } from "@/constant/Images"

export default async function Footer() {
  const tFooter = await getTranslations("footer")

  return (
    <footer>
      <WaveAnimation />
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
            <SecondaryButton
              text={tFooter("get-to-know-us")}
              size="h3"
              href="/about-us"
            />
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
              <Link className="mx-[2%] my-auto md:mx-[4%]" href="facebook">
                <Image src={Images.FacebookIcon} alt="facebook" />
              </Link>
              <Link className="mx-[2%] my-auto md:mx-[4%]" href="instagram">
                <Image src={Images.InstagramIcon} alt="instagram" />
              </Link>
              <Link className="mx-[2%] my-auto md:mx-[4%]" href="shopee">
                <Image src={Images.ShopeeIcon} alt="shopee" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
