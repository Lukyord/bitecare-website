import { getTranslations } from "next-intl/server"
import Image from "next/image"

import { Images } from "@/constant/Images"

import TranslateYOnScroll from "../animations/TranslateYOnScroll"
import TranslateXOnScroll from "../animations/TranslateXOnScroll"

export default async function WelcomeToBiteCare() {
  const tLanding = await getTranslations("landing")

  const AboutUsImages = [
    Images.AboutUsGalleryImage_1,
    Images.AboutUsGalleryImage_2,
    Images.AboutUsGalleryImage_3,
    Images.AboutUsGalleryImage_4,
  ]

  return (
    <section
      className="
                    flex h-fit w-[100vw] 
                    flex-col gap-14 pt-[10vh]
                    xl:my-0 xl:flex-row xl:gap-0
                    "
    >
      <div
        className="
                  mx-auto flex h-full w-full 
                  flex-col justify-center 
                  gap-8 xl:mx-[10%] xl:w-[60%]
                "
      >
        <h1 className="text-center text-h2 lg:text-h2 2xl:text-h1">
          {tLanding("welcome-to")}
          <Image
            alt="bitecare logo"
            src={Images.BiteCareLogoNew}
            width={373}
            height={180}
            className="mx-auto mt-[-5%] h-auto w-[70%] lg:ml-[25%] lg:mr-0"
          />
        </h1>

        <div
          className="
                    mx-auto flex w-[90%] flex-col
                    gap-8 rounded-2xl bg-bc-primary-container
                    py-[5%] text-justify 
                    [box-shadow:6px_6px_0px_0px_#386A1F]
                  "
        >
          <p className="px-[10%] text-paragraph">
            {tLanding("landing-description-1")}
          </p>
          <h2 className="text-center text-h3 xl:whitespace-nowrap">
            {tLanding("landing-quote")}
          </h2>
          <p className="px-[10%] text-paragraph">
            {tLanding("landing-description-2")}
          </p>
        </div>
      </div>
      <div className="hidden h-full w-[40%] xl:block">
        <TranslateYOnScroll translateYStart="-20vh" translateYEnd="0vh">
          {AboutUsImages.map((image, index) => (
            <Image
              key={index}
              alt="about-us-gallery-image"
              src={image}
              className="desktop:h-auto desktop:w-[40vw]"
              priority
            />
          ))}
        </TranslateYOnScroll>
      </div>
      <div className="h-fit w-[40%] xl:hidden">
        <TranslateXOnScroll translateXStart="-30vw" translateXEnd="0vw">
          {AboutUsImages.map((image, index) => (
            <Image
              key={index}
              alt="about-us-gallery-image"
              src={image}
              className="h-[20vh] w-auto object-cover lg:h-[30vh]"
              priority
            />
          ))}
        </TranslateXOnScroll>
      </div>
    </section>
  )
}
