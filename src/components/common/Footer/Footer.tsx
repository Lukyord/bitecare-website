import { getTranslations } from "next-intl/server"
import WaveAnimation from "../../animations/WaveAnimation"
import SecondaryButton from "../Button/SecondaryButton"
import FooterNavigateSection from "./FooterNavigateSection"
import { Images } from "@/constant/Images"
import FooterCopyrightSection from "./FooterCopyrightSection"

export default async function Footer() {
  const tFooter = await getTranslations("footer")
  const tButton = await getTranslations("button")

  return (
    <footer>
      <div className="relative h-24 w-screen overflow-hidden md:h-32 lg:h-48 2xl:h-72">
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
          <FooterCopyrightSection
            copyright={tFooter("copy-right")}
            policy={tFooter("policy")}
            terms={tFooter("terms")}
          />
        </div>
      </div>
    </footer>
  )
}
