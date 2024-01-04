"use client"

import { useInfiniteTranslateX } from "@/hooks/useInfiniteTranslateX"
import { motion, useInView } from "framer-motion"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import React, { useEffect } from "react"

type WaveAnimationProps = {
  speed?: number
  image: StaticImport
  reverse?: boolean
}

export default function WaveAnimation({
  speed = 1,
  image,
  reverse = false,
}: WaveAnimationProps) {
  const { controls, containerRef, handleIsInview, handleIsNotInview } =
    useInfiniteTranslateX(false, speed, true, reverse)
  const isInview = useInView(containerRef)

  useEffect(() => {
    if (isInview) {
      handleIsInview()
    } else {
      handleIsNotInview()
    }
  }, [handleIsInview, handleIsNotInview, isInview])

  return (
    <div
      className="relative h-24 w-screen overflow-hidden md:h-32 lg:h-48 2xl:h-96"
      ref={containerRef as React.RefObject<HTMLDivElement>}
    >
      <motion.div className="absolute bottom-0 w-full" animate={controls}>
        <Image className="h-auto w-screen" src={image} alt="wave1" />
      </motion.div>
      <motion.div
        className={`absolute bottom-0 ${
          reverse ? "right-[100%]" : "left-[100%]"
        } w-full`}
        animate={controls}
      >
        <Image className="h-auto w-screen" src={image} alt="wave1-extend" />
      </motion.div>
    </div>
  )
}
