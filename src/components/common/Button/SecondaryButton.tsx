"use client"

import React from "react"
import { AnimationControls, motion, useAnimation } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import { useRouter } from "@/lib/navigation"

type SecondaryButtonProps = {
  text: string
  icon?: React.ReactNode
  size: "paragraph" | "h3"
  specificWidth?: string
  href?: string
  onClick?: () => void
  disabled?: boolean
}

export default function SecondaryButton({
  text,
  icon,
  size,
  specificWidth,
  href,
  onClick,
  disabled = false,
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
    <motion.button
      disabled={disabled}
      className={`
        text-bc_black disabled:bg-opacity-65
        relative overflow-hidden  whitespace-nowrap
        border border-bc-black
        bg-white disabled:cursor-not-allowed
        disabled:opacity-50 disabled:hover:scale-100
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
      onClick={() => {
        href && router.push(href)
        onClick && onClick()
      }}
    >
      <MovingText controls={controls} icon={icon} text={text} />
      <MovingText controls={controls} icon={icon} text={text} isSecond />
    </motion.button>
  )
}

type MovingTextProps = {
  controls: AnimationControls
  icon?: React.ReactNode
  text: string
  isSecond?: boolean
}

function MovingText({ controls, icon, text, isSecond }: MovingTextProps) {
  return (
    <motion.div
      className={`
              absolute top-1/2 
              w-full translate-y-[-50%]
              ${cn({
                "left-[100%]": isSecond,
              })}
            `}
      animate={controls}
    >
      <div className="flex items-center justify-center gap-2">
        {icon && icon}
        <p>{text}</p>
      </div>
    </motion.div>
  )
}
