import { Images } from "@/constant/Images"
import Image from "next/image"

import { Media } from "@/payload/type-gen"
import { getLocale } from "next-intl/server"
import { getHomeConfigs } from "@/payload/service"
import { Locale } from "@/config/i18n.config"

import Slides from "./Slides"

export default async function SlideShowcase() {
  const locale = (await getLocale()) as Locale
  const { hero } = await getHomeConfigs({
    select: {
      hero: true,
    },
    locale,
  })

  return (
    <div className="relative z-0 w-screen bg-bc-primary">
      <Image
        alt="wave bc primary 1"
        src={Images.WaveBcPrimary_1}
        width={1442}
        height={240}
        className="absolute bottom-[99%] left-0 h-auto w-screen"
      />

      <Image
        alt="dog paw"
        src={Images.DogPawBcInversePrimary}
        className="absolute right-[20%] top-[-15%] h-auto w-[10vw] rotate-[15deg] opacity-80"
      />
      <Image
        alt="dog paw"
        src={Images.DogPawBcInversePrimary}
        className="absolute bottom-[-5%] left-[30%] z-0 h-auto w-[15vw] rotate-[15deg]"
      />

      <Image
        alt="dog paw"
        src={Images.DogPawBcInversePrimary}
        className="absolute left-0 top-[-10%] z-20 h-auto w-[10vw] rotate-[15deg]"
      />

      <Image
        alt="heart"
        src={Images.HeartBcPrimary_1}
        className="absolute bottom-[-5%] left-0 z-20 h-auto w-[15vw]"
      />

      <Image
        alt="heart"
        src={Images.HeartBcPrimary_2}
        className="absolute bottom-[2%] right-[10%] z-20 h-auto w-[15vw]"
      />

      <Slides slides={hero.hero_slides} />
    </div>
  )
}
