import { getLocale, getTranslations } from "next-intl/server"
import Image from "next/image"

import { Images } from "@/constant/Images"

import PrimaryButton from "@/components/common/Button/PrimaryButton"
import SloganBoxImages from "./SloganBoxImages"
import { getCommonConfigs, getHomeConfigs } from "@/payload/service"
import { Locale } from "@/config/i18n.config"
import { Media } from "@/payload/type-gen"

export default async function PrinciplesSection() {
  const locale = (await getLocale()) as Locale

  const [{ principle, slogan }, { button }] = await Promise.all([
    getHomeConfigs({
      select: {
        principle: true,
        slogan: true,
      },
      locale,
    }),
    getCommonConfigs({
      select: {
        button: {
          see_our_products: true,
        },
      },
      locale,
    }),
  ])

  const principles = principle.principles.map((principle) => ({
    icon: principle.icon as Media,
    description: principle.title,
  }))

  return (
    <section
      className="
                  my-28 flex h-full w-screen 
                  flex-col items-center gap-28
                  text-center
                "
    >
      {/* Principles */}
      <div className="flex flex-col items-center gap-16">
        <div className="w-[80%] sm:w-[50%]">
          <h1 className="text-h3 lg:text-h2">{principle.principle_header}</h1>
          <p className="text-paragraph">{principle.principle_subheader}</p>
        </div>

        <div
          className="
                  flex w-[70%] flex-col gap-16 md:w-[40%] 
                  lg:w-[70%] 
                  lg:flex-row
                  lg:justify-between
                "
        >
          {principles.map((principle, index) => (
            <div
              key={index}
              className="
                  flex flex-col items-center 
                  justify-center gap-6 lg:w-[28%]
                "
            >
              <div className="h-32 lg:h-40">
                <Image
                  alt={principle.icon.alt}
                  src={principle.icon.url ?? ""}
                  height={principle.icon.height ?? 120}
                  width={principle.icon.width ?? 120}
                  className="h-auto w-[100px] lg:w-[120px]"
                />
              </div>
              <p className="text-paragraph">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Slogan */}
      <div
        className="
                  relative flex w-[90%]
                  max-w-5xl flex-col 
                  gap-12 bg-bc-primary-container 
                  pb-[10%] pt-[5%] sm:gap-16 lg:gap-24 
                "
      >
        <div>
          <h1 className="text-h3 md:text-h2 lg:text-h1">
            {slogan.slogan_header}
          </h1>
          <h3 className="mt-3 text-subtitle md:text-paragraph lg:mt-6 lg:text-h3">
            {slogan.slogan_description}
          </h3>
        </div>

        <PrimaryButton text={button.see_our_products} href="/products" />

        <SloganBoxImages />
      </div>
    </section>
  )
}
