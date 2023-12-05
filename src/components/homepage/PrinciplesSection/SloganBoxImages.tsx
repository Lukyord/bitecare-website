import Image from "next/image"

import { Images } from "@/constant/Images"

export default function SloganBoxImages() {
  return (
    <>
      {/* Decorations from left to right */}
      <Image
        alt="hashtag"
        src={Images.HashtagBcPrimary}
        className="absolute -left-[5%] top-[12.5%] h-auto w-[10%]"
      />
      <Image
        alt="sparkle 1"
        src={Images.SparkleBcInversePrimary_1}
        className="absolute left-[5%] top-[5%] h-auto w-[5%]"
      />
      <Image
        alt="flower 1"
        src={Images.FlowerBcPrimary_1}
        width={57}
        height={37}
        className="absolute -top-[6%] left-[15%] h-auto w-[7%]"
      />
      <Image
        alt="sparkle 2"
        src={Images.SparkleBcInversePrimary_2}
        width={38}
        height={38}
        className="absolute -top-[2%] right-[10%] h-auto w-[4%]"
      />
      <Image
        alt="flower 2"
        src={Images.FlowerBcPrimary_2}
        width={120}
        height={120}
        className="absolute -right-[3%] top-[2.5%] h-auto w-[11%]"
      />
      <Image
        alt="sparkle 3"
        src={Images.SparkleBcInversePrimary_3}
        width={28}
        height={28}
        className="absolute -right-[1%] top-[30%] h-auto w-[3%]"
      />

      {/* Dogs */}
      <Image
        alt="dog home 2"
        src={Images.HomepageDog_2}
        width={224}
        height={273}
        className="
                absolute bottom-0 left-[7.5%] 
                hidden h-auto w-[20%] lg:block
              "
      />
      <Image
        alt="dog home 3-4"
        src={Images.HomepageDog_3_4}
        width={338}
        height={301}
        className="
                absolute bottom-0 right-0 hidden 
                h-auto w-[29%] lg:block
              "
      />
    </>
  )
}
