"use client"

import React from "react"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import { useRouter } from "@/lib/navigation"

type SecondaryButtonProps = {
  text: string
  icon?: React.ReactNode
  size: "paragraph" | "h3"
  specificWidth?: string
  href?: string
}

export default function SecondaryButton({
  text,
  icon,
  size,
  specificWidth,
  href,
}: SecondaryButtonProps) {
  const router = useRouter()
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
      className={`
        text-bc_black relative
        overflow-hidden whitespace-nowrap
        border border-bc-black
        bg-white text-paragraph
        ${specificWidth && specificWidth}
        ${cn({
          "h-12 text-paragraph": size === "paragraph",
          "h-20 text-h3": size === "h3",
          "w-full": !specificWidth,
        })}
      `}
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
      onClick={() => href && router.push(href)}
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
