"use client"

import { Images } from "@/constant/Images"
import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"

export default function WaveAnimation() {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const waveRef = useRef(null)
  const isInview = useInView(waveRef)
  const [animationId, setAnimationId] = useState<number | null>(null)
  const [lastestXPixels, setLastestXPixels] = useState<number | null>(null)
  let xPixels = 0

  const animate = () => {
    const containerWidth = containerRef.current?.getBoundingClientRect().width

    if (containerWidth) {
      if (xPixels > containerWidth) {
        xPixels = 0
      }
      controls.set({ x: +xPixels })

      xPixels += 1
      setAnimationId(requestAnimationFrame(animate))
    }
  }

  useEffect(() => {
    xPixels = lastestXPixels ?? xPixels

    if (isInview) {
      setAnimationId(requestAnimationFrame(animate))
    }

    return () => {
      setLastestXPixels(xPixels)
      if (animationId) {
        cancelAnimationFrame(animationId)
        setAnimationId(null)
      }
    }
  }, [isInview, controls])

  return (
    <div className="relative h-48 w-screen overflow-hidden" ref={containerRef}>
      <motion.div
        className="absolute bottom-0 w-full"
        animate={controls}
        ref={waveRef}
      >
        <Image
          className="h-auto w-screen"
          src={Images.WaveFooter_1}
          alt="wave1"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-[100%] w-full"
        animate={controls}
        ref={waveRef}
      >
        <Image src={Images.WaveFooter_1} alt="wave1-extend" />
      </motion.div>
    </div>
  )
}
