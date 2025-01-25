import { Images } from "@/constant/Images"
import Image, { StaticImageData } from "next/image"

export default function AboutUsLandingNoAnim() {
  return (
    <section className="relative h-[100vh] w-[100vw] overflow-visible bg-[#63B760]">
      {/* WAVE */}
      <div className="absolute right-0 top-0 hidden h-full w-[min(5.5vw,80px)] translate-x-[100%] xl:block">
        <Image
          src={Images.AboutUsWave}
          alt="about-us-wave"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          priority
        />
      </div>
      <div className="right- absolute bottom-0 h-auto w-full translate-y-[100%] xl:hidden">
        <Image
          src={Images.AboutUsWaveMobile}
          alt="about-us-wave"
          width={390}
          height={33}
          priority
          className="h-auto w-full object-cover object-center"
        />
      </div>

      {/* DOG IMAGE AND SPARKLES */}
      <div
        className="
                absolute bottom-0 right-[20vw] 
                z-50 h-auto w-[59.7435897436vw] max-w-[300px]
                lg:bottom-[calc(-1*min(9.8vw,141px))] lg:left-[calc(-1*min(3vw,43.2px))] 
                lg:w-[33.6805555556vw] xl:max-w-none 
                "
      >
        <div className="relative">
          <div className="absolute -left-[25%] top-[40%] lg:hidden xl:-top-10 xl:left-16 xl:block">
            <Image
              src={Images.AboutUsSparkle_1}
              alt="about-us-sparkle-1"
              width={52}
              height={90}
              priority
              className="h-auto w-full object-contain object-center"
            />
          </div>
          <Image
            src={Images.AboutUsDog_5}
            alt="about-us-dog-5"
            width={485}
            height={745}
            className="h-auto w-full object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* CAT IMAGE AND SPARKLES */}
      <div className="absolute -right-16 bottom-0 z-50 h-auto w-[59.7435897436vw] max-w-[300px] lg:bottom-[calc(-1*min(8vw,115.2px))] lg:left-[15vw] lg:w-[19.7222222222vw] xl:left-[25vw] xl:max-w-none">
        <div className="relative">
          <div className="absolute -top-[20%] right-[50%] lg:hidden xl:right-0 xl:top-[30%] xl:block">
            <Image
              src={Images.AboutUsSparkle_2}
              alt="about-us-sparkle-2"
              width={47}
              height={70}
              priority
              className="h-auto w-full object-contain object-center"
            />
          </div>
          <Image
            src={Images.AboutUsCat_1}
            alt="about-us-cat-1"
            width={485}
            height={745}
            className="h-auto w-full object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* DOG PAWS */}
      <div className="absolute bottom-16 right-[95%] h-[13vw] w-[9.2307692308vw] rotate-[49deg] lg:hidden xl:bottom-20 xl:right-40 xl:block xl:h-auto xl:w-auto">
        <Image
          src={Images.AboutUsPaw}
          alt="about-us-paw"
          width={110}
          height={98}
        />
      </div>
      <div className="absolute -bottom-3 right-[85%] h-[13vw] w-[9.2307692308vw] rotate-[-30deg] lg:hidden xl:-right-3 xl:block xl:h-auto xl:w-auto">
        <Image
          src={Images.AboutUsPaw}
          alt="about-us-paw"
          width={110}
          height={98}
        />
      </div>

      {/* H1 */}
      <div
        className="
              absolute right-[50%] top-[25%]
              translate-x-[50%] text-end
              text-[30vw] md:text-[27vw]
              xl:right-10 xl:top-[10%]
              xl:translate-x-0 xl:text-[390px]
            "
      >
        <div className="relative">
          <h1 className="relative z-10 text-white">BITECARE </h1>
          <span className="absolute left-[4px] top-[4px] text-black lg:left-[15px] lg:top-[15px]">
            BITECARE
          </span>
        </div>
      </div>
    </section>
  )
}
