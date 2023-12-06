"use client"

import { AnimationControls, motion } from "framer-motion"
import Image from "next/image"
import { Images } from "@/constant/Images"

import { cn } from "@/lib/utils"
import { useInfiniteTranslateX } from "@/hooks/useInfiniteTranslateX"

const OnlinePlatformLogos = [
  {
    image: Images.ShopeeLogoFullWhite,
    alt: "Shopee",
  },
  {
    image: Images.LineOaLogoFullWhite,
    alt: "Line Official Account",
  },
  {
    image: Images.FacebookLogoFullWhite,
    alt: "Facebook",
  },
]

export default function OnlinePlatforms() {
  const { controls, containerRef } = useInfiniteTranslateX()

  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className="relative z-10 h-[15vw] w-screen overflow-hidden bg-bc-black"
    >
      <MovingLogos controls={controls} Logos={OnlinePlatformLogos} />
      <MovingLogos controls={controls} Logos={OnlinePlatformLogos} isSecond />
    </div>
  )
}

type MovingLogosProps = {
  controls: AnimationControls
  Logos: typeof OnlinePlatformLogos
  isSecond?: boolean
}

function MovingLogos({ controls, Logos, isSecond }: MovingLogosProps) {
  return (
    <motion.div
      animate={controls}
      className={`
              absolute top-1/2 
              flex w-full translate-y-[-50%] 
              items-center justify-around
              ${cn({
                "left-[100%]": isSecond,
              })}
            `}
    >
      {Logos.map((logo, index) => (
        <Image
          alt={logo.alt}
          src={logo.image}
          key={index}
          height={300}
          className="h-[7.5vw] w-auto object-contain"
        />
      ))}
    </motion.div>
  )
}
