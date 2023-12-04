import { Images } from "@/constant/Images"
import { getTranslations } from "next-intl/server"
import React from "react"
import Image from "next/image"
import PrimaryButton from "@/components/common/Button/PrimaryButton"

export default async function PrinciplesSection() {
  const tPrinciples = await getTranslations("principles")

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
    <section className="mt-[2.5vh] flex h-full w-screen flex-col items-center text-center">
      <div className="w-[80%] sm:w-[50%]">
        <h1 className="text-h3 lg:text-h2">{tPrinciples("header")}</h1>
        <p className="text-paragraph">{tPrinciples("description")}</p>
      </div>

      <div
        className="
                  mt-14 flex w-[70%] flex-col gap-8 md:w-[40%] 
                  lg:mt-20 lg:w-[70%] 
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
                  lg:gap-2
                "
          >
            <Image
              alt="principle icon"
              src={principle.icon}
              width={150}
              height={150}
              className="h-auto w-[100px] lg:w-[150px]"
            />
            <p className="text-paragraph">{principle.description}</p>
          </div>
        ))}
      </div>

      <div
        className="
                  flex w-[70%] 
                  flex-col bg-bc-primary-container
                "
      >
        <div>
          <h1 className="text-h1">{tPrinciples("slogan")}</h1>
          <h3 className="text-h3">{tPrinciples("slogan-description")}</h3>
        </div>
        <PrimaryButton />
      </div>
    </section>
  )
}
