import { getTranslations } from "next-intl/server"
import Image from "next/image"

import { Images } from "@/constant/Images"

import PrimaryButton from "@/components/common/Button/PrimaryButton"
import SloganBoxImages from "./SloganBoxImages"

export default async function PrinciplesSection() {
  const tPrinciples = await getTranslations("principles")
  const tButton = await getTranslations("button")

  const Principles = [
    {
      icon: Images.TempPrinciple_1,
      description: tPrinciples("principle-1-description"),
    },
    {
      icon: Images.TempPrinciple_2,
      description: tPrinciples("principle-2-description"),
    },
    {
      icon: Images.TempPrinciple_3,
      description: tPrinciples("principle-3-description"),
    },
  ]

  return (
    <section
      className="
                  my-28 flex h-full w-screen 
                  flex-col items-center gap-28
                  text-center
                "
    >
      {/* Principles */}
      <div className="flex flex-col items-center gap-12">
        <div className="w-[80%] sm:w-[50%]">
          <h1 className="text-h3 lg:text-h2">{tPrinciples("header")}</h1>
          <p className="text-paragraph">{tPrinciples("description")}</p>
        </div>

        <div
          className="
                  flex w-[70%] flex-col gap-8 md:w-[40%] 
                  lg:w-[70%] 
                  lg:flex-row
                  lg:justify-between
                "
        >
          {Principles.map((principle, index) => (
            <div
              key={index}
              className="
                  flex flex-col items-center 
                  justify-center gap-6 lg:w-[28%]
                "
            >
              <Image
                alt="principle icon"
                src={principle.icon}
                className="h-auto w-[100px] lg:w-[120px]"
              />
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
            {tPrinciples("slogan")}
          </h1>
          <h3 className="text-subtitle md:text-paragraph lg:text-h3">
            {tPrinciples("slogan-description")}
          </h3>
        </div>

        <PrimaryButton text={tButton("see-our-products")} href="/products" />

        <SloganBoxImages />
      </div>
    </section>
  )
}
