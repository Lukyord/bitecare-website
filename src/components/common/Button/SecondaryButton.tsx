"use client"

import React from "react"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { IconType } from "react-icons"

type SecondaryButtonProps = {
  text: string
  icon?: React.ReactNode
}

export default function SecondaryButton({ text, icon }: SecondaryButtonProps) {
  const controls = useAnimation()
  const containerRef = useRef<HTMLButtonElement>(null)
  const [animationId, setAnimationId] = useState<number | null>(null)
  let xPixels = 0

  const animate = () => {
    const containerWidth = containerRef.current?.getBoundingClientRect().width

    if (containerWidth) {
      if (xPixels > containerWidth) {
        xPixels = 0
      }
      controls.set({ x: -xPixels, y: "-50%" })

      xPixels += 1
      setAnimationId(requestAnimationFrame(animate))
    }
  }

  const handleMouseEnter = () => {
    if (!animationId) {
      setAnimationId(requestAnimationFrame(animate))
    }
  }

  const handleMouseLeave = () => {
    controls.start({ x: 0, y: "-50%" })
    xPixels = 0
    if (animationId) {
      cancelAnimationFrame(animationId)
      setAnimationId(null)
    }
  }

  useEffect(() => {
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [animationId])

  return (
    //TODO: display toast copy link successfull
    <motion.button
      className="
        text-bc_black relative h-10 w-full
        overflow-hidden whitespace-nowrap
        border border-bc-black
        bg-white text-paragraph
      "
      initial={{
        boxShadow: "8px 8px 0px 0px rgba(0, 0, 0, 1)",
        borderRadius: "12px",
      }}
      whileHover={{
        boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 1)",
        borderRadius: "30px",
        transition: {
          duration: 0.5,
        },
      }}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="absolute top-1/2 w-full translate-y-[-50%]"
        animate={controls}
      >
        <div className="flex items-center justify-center gap-2">
          {icon && icon}
          <p>{text}</p>
        </div>
      </motion.div>
      <motion.div
        className="absolute left-[100%] top-1/2 w-full translate-y-[-50%]"
        animate={controls}
      >
        <div className="flex items-center justify-center gap-2">
          {icon && icon}
          <p>{text}</p>
        </div>
      </motion.div>
    </motion.button>
  )
}
