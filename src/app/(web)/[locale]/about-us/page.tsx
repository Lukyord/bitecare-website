import { setRequestLocale } from "next-intl/server"
import { Metadata } from "next"

import HorizontalScrollSection from "@/components/about-us/HorizontalScrollSection"
import WelcomeToBiteCare from "@/components/about-us/WelcomeToBiteCare"
import BiteCareDifference from "@/components/about-us/BiteCareDifference/BiteCareDifference"
import ContactUs from "@/components/about-us/ContactUs/ContactUs"
import AboutUsLandingNoAnim from "@/components/about-us/AboutUsLandingNoAnim"

export const metadata: Metadata = {
  title: "About Us",
}

export default async function AboutUs({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const locale = (await params).locale

  setRequestLocale(locale)

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
