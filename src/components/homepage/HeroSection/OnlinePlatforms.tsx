"use client"

import { useEffect } from "react"
import { AnimationControls, motion, useAnimation } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Images } from "@/constant/Images"

import { cn } from "@/lib/utils"

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
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [animationId, setAnimationId] = useState<number | null>(null)

  let xPixels = 0

  const animate = () => {
    const containerWidth = containerRef.current?.getBoundingClientRect().width

    if (containerWidth) {
      if (xPixels > containerWidth) {
        xPixels = 0
      }
      controls.set({ x: -xPixels, y: "-50%" })

      xPixels += 0.5
      setAnimationId(requestAnimationFrame(animate))
    }
  }

  useEffect(() => {
    setAnimationId(requestAnimationFrame(animate))

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
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
