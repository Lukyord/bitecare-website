import { getTranslations } from "next-intl/server"
import TextRevealFromBottom from "../../animations/TextRevealFromBottom"
import WhiteTextBox from "./WhiteTextBox"
import Image from "next/image"
import { Images } from "@/constant/Images"
import BlobBackground_1 from "./BlobBackground_1"
import BlobBackground_2 from "./BlobBackground_2"

export default async function BiteCareDifference() {
  const tBiteCareDifference = await getTranslations("bitecare-difference")

  return (
    <section
      className="
            flex h-fit w-[100vw]
            flex-col gap-[5vh] px-[5vw]
            pt-[5vh] xl:h-[100vh]
            xl:w-[200vw] xl:pl-[10vw]
          "
    >
      <div className="relative w-fit">
        <TextRevealFromBottom duration={0.9} delay={0.5}>
          <h1 className="relative text-h2 lg:text-h1">
            {tBiteCareDifference("header")}
          </h1>
        </TextRevealFromBottom>
        <BlobBackground_1 />
      </div>

      <div
        className="
                  flex h-full w-full 
                  flex-col justify-between 
                  xl:flex-row
                "
      >
        {/* BiteCare Difference */}
        <div
          className="
                    relative flex h-full
                    flex-col gap-14 pb-40 xl:w-[45%]
                    xl:flex-row xl:gap-[5%]
                    desktop:pb-[5vh]
                  "
        >
          <TextRevealFromBottom duration={1} delay={0.65}>
            <WhiteTextBox header={tBiteCareDifference("tailored-nutrition")}>
              <p className="hidden xl:block">
                {tBiteCareDifference("tailored-nutrition-description-1")}
              </p>
              <h2 className="text-center text-h3">
                {tBiteCareDifference("tailored-nutrition-quote")}
              </h2>
              <p className="hidden xl:block">
                {tBiteCareDifference("tailored-nutrition-description-2")}
              </p>
            </WhiteTextBox>
          </TextRevealFromBottom>
          <TextRevealFromBottom duration={1} delay={0.65}>
            <WhiteTextBox header={tBiteCareDifference("premium-ingredients")}>
              <p className="hidden xl:block">
                {tBiteCareDifference("premium-ingredients-description-1")}
              </p>
              <p className="hidden xl:block">
                {tBiteCareDifference("premium-ingredients-description-2")}
              </p>
              <h2 className="text-center text-h3">
                {tBiteCareDifference("premium-ingredients-quote")}
              </h2>
            </WhiteTextBox>
          </TextRevealFromBottom>
          <BlobBackground_2 />
        </div>

        {/* BiteCare Community */}
        <div
          className="
                    flex h-full flex-col gap-14
                    xl:w-[50%] xl:flex-row xl:justify-between
                    xl:gap-0
                  "
        >
          <div className="relative xl:w-[70%]">
            <Image
              alt="tape top right"
              src={Images.DuctTape_1}
              className="absolute -right-[5%] top-[5%] h-auto w-[20%] rotate-45"
            />
            <Image
              alt="bitecare community"
              src={Images.AboutUsBcDifferenceDog}
              className="h-auto w-full object-cover xl:h-full xl:w-auto"
            />
            <Image
              alt="tape bottom left"
              src={Images.DuctTape_1}
              className="absolute -left-[5%] bottom-[5%] h-auto w-[20%] rotate-45"
            />
          </div>

          <div className="flex flex-col gap-14 text-justify text-paragraph xl:w-[25%]">
            <TextRevealFromBottom duration={0.5} delay={0.25}>
              <p>{tBiteCareDifference("bitecare-community-description")}</p>
            </TextRevealFromBottom>
            <TextRevealFromBottom duration={0.5} delay={0.5}>
              <p>{tBiteCareDifference("bitecare-thanks")}</p>
            </TextRevealFromBottom>
          </div>
        </div>
      </div>
    </section>
  )
}
