import { unstable_setRequestLocale } from "next-intl/server"
import { Metadata } from "next"

import { Images } from "@/constant/Images"

import AboutUsLanding from "@/components/about-us/AboutUsLanding"
import HorizontalScrollSection from "@/components/about-us/HorizontalScrollSection"
import WelcomeToBiteCare from "@/components/about-us/WelcomeToBiteCare"
import BiteCareDifference from "@/components/about-us/BiteCareDifference/BiteCareDifference"
import ContactUs from "@/components/about-us/ContactUs/ContactUs"
import AboutUsLandingNoAnim from "@/components/about-us/AboutUsLandingNoAnim"

export const metadata: Metadata = {
  title: "About Us",
}

export default function AboutUs({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)

  return (
    <div>
      <HorizontalScrollSection>
        {/* <AboutUsLanding
          images={[
            Images.AboutUsDog_1,
            Images.AboutUsDog_2,
            Images.AboutUsDog_3,
            Images.AboutUsDog_4,
          ]}
        /> */}
        <AboutUsLandingNoAnim />
        <WelcomeToBiteCare />
        <BiteCareDifference />
        <ContactUs locale={locale} />
      </HorizontalScrollSection>
    </div>
  )
}
