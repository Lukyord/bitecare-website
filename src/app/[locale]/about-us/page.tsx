import { unstable_setRequestLocale } from "next-intl/server"

import { Images } from "@/constant/Images"

import AboutUsLanding from "@/components/about-us/AboutUsLanding"
import HorizontalScrollSection from "@/components/about-us/HorizontalScrollSection"
import WelcomeToBiteCare from "@/components/about-us/WelcomeToBiteCare"
import BiteCareDifference from "@/components/about-us/BiteCareDifference"
import ContactUs from "@/components/about-us/ContactUs/ContactUs"

export default function AboutUs({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)

  return (
    <div>
      <HorizontalScrollSection>
        <AboutUsLanding
          images={[
            Images.AboutUsDog_1,
            Images.AboutUsDog_2,
            Images.AboutUsDog_3,
            Images.AboutUsDog_4,
          ]}
        />
        <WelcomeToBiteCare />
        <BiteCareDifference />
        <ContactUs />
      </HorizontalScrollSection>
    </div>
  )
}
