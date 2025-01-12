import Image from "next/image"
import { Images } from "@/constant/Images"
import { getLocale } from "next-intl/server"
import PrimaryButton from "../../common/Button/PrimaryButton"
import ProductShowcase from "./ProductShowcase"
import OnlinePlatforms from "./OnlinePlatforms"
import { getHomeConfigs } from "@/payload/service"
import { Locale } from "@/config/i18n.config"

type HeroSectionProps = {}

export default async function HeroSection({}: HeroSectionProps) {
  const locale = (await getLocale()) as Locale
  const { hero } = await getHomeConfigs({
    select: {
      hero: true,
    },
    locale,
  })

  return (
    <section className="over relative mt-[2.5vh] h-full w-screen">
      {/* Main Hero Section and CTA */}
      <div className="mx-auto flex max-w-[80%] flex-col items-center gap-y-8 md:gap-0 lg:mb-[2.5vh] lg:flex-row lg:items-start">
        <div className="relative z-20 flex flex-col items-center gap-4 sm:max-w-[80%] md:max-w-[60%]  lg:max-w-[45%]">
          <Image
            alt="logo text"
            src={Images.BiteCareLogoNew}
            width={613}
            height={295}
          />

          <p className="mb-4 text-center text-paragraph">{hero.header_text}</p>

          <PrimaryButton text={hero.cta_text} href="/about-us" />
          <p className="mt-4 text-subtitle">{hero.subheader_text}</p>
        </div>
        <div className="relative -z-10 -mb-[15%] self-end lg:mb-0 lg:w-[43%]">
          <Image
            alt="dog home 1"
            src={Images.HomepageDog_1}
            priority
            className="aspect-[0.8626] w-[57.692%] lg:aspect-auto lg:w-auto"
          />
          <Image
            alt="cat home 1 mb"
            src={Images.HomepageCat_1_Mb}
            className="absolute bottom-0 right-0 -z-10 aspect-[0.7147] w-[54.6%] lg:hidden"
          />

          <Image
            alt="highlight 1"
            src={Images.HighlightBlack_1}
            className="absolute left-[20%] top-[2.5%] hidden lg:block"
          />
          <Image
            alt="sparkle 1"
            src={Images.SparkleBlack_1}
            className="absolute left-[85%] top-[5%] hidden lg:block"
          />
          <Image
            alt="sparkle 1"
            src={Images.SparkleBlack_2}
            className="absolute left-[10%] top-[40%] hidden lg:block"
          />
        </div>
      </div>
      <Image
        alt="cat home 1"
        src={Images.HomepageCat_1}
        className="absolute right-0 -z-20 hidden aspect-[0.738] w-[27.5vw] md:top-[11%] lg:top-[5%] lg:block xl:top-[0%]"
      />

      <ProductShowcase />

      <OnlinePlatforms />
    </section>
  )
}
