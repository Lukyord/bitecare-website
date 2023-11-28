import Image from "next/image"
import { Images } from "@/constant/Images"
import { getTranslations } from "next-intl/server"
import PrimaryButton from "../common/Button/PrimaryButton"

type HeroSectionProps = {}

export default async function HeroSection({}: HeroSectionProps) {
  const tHero = await getTranslations("hero")

  return (
    <section className="mt-20 h-full w-screen">
      <div
        className="
                  mx-auto flex max-w-[80%] 
                  flex-col items-center 
                  justify-around 
                  lg:flex-row lg:items-start
                "
      >
        <div
          className="
                  flex flex-col items-center 
                  sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] 
                "
        >
          <Image
            alt="logo text"
            src={Images.BiteCareLogoTextTM}
            width={613}
            height={295}
          />

          <p className="text-center text-paragraph">
            {tHero("hero-description")}
          </p>

          <PrimaryButton />
          <p className="mt-4 text-subtitle">{tHero("cta-subtitle")}</p>
        </div>
        <div className="relative -z-10">
          <Image alt="dog home 1" src={Images.HomepageDog_1} priority />

          <Image
            alt="highlight 1"
            src={Images.HighlightBlack_1}
            className="absolute left-[20%] top-[2.5%] hidden lg:block"
          />
          <Image
            alt="sparkle 1"
            src={Images.SparkleBlack_1}
            className="absolute left-[80%] top-[7.5%] hidden lg:block"
          />
          <Image
            alt="sparkle 1"
            src={Images.SparkleBlack_2}
            className="absolute left-[5%] top-[40%] hidden lg:block"
          />
        </div>
      </div>
    </section>
  )
}
