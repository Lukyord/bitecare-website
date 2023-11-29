import { Images } from "@/constant/Images"
import Image from "next/image"
import React from "react"

type HeroProductShowcaseProps = {}

export default function HeroProductShowcase({}: HeroProductShowcaseProps) {
  return (
    <div className="relative h-[500px] w-full bg-bc-primary">
      <Image
        alt="wave bc priamry 1"
        src={Images.WaveBcPrimary_1}
        className="absolute bottom-[99%] left-0 w-full"
      />

      <Image
        alt="dog paw"
        src={Images.DogPawBcInversePrimary}
        className="
              absolute right-[30%] top-[10%]
              h-auto w-[50px] rotate-[15deg] 
              opacity-80 md:w-[75px] lg:w-[100px]
            "
      />
      <Image
        alt="dog paw"
        src={Images.DogPawBcInversePrimary}
        className="
              absolute -bottom-[5%] left-[30%] 
              h-auto w-[75px] rotate-[15deg] 
              md:w-[100px] lg:w-[125px]
            "
      />
      <div className="relative h-full w-full overflow-hidden"></div>
    </div>
  )
}
