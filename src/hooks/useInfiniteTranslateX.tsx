"use client"

import { useRef, useEffect, useState } from "react"
import { useAnimation } from "framer-motion"

export function useInfiniteTranslateX(
  startOnHover: boolean = false,
  xSpeed: number = 0.5
) {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement | HTMLButtonElement | null>(null)
  const [animationId, setAnimationId] = useState<number | null>(null)

  let xPixels = 0

  const animate = () => {
    const containerWidth = containerRef.current?.getBoundingClientRect().width

    if (containerWidth) {
      if (xPixels > containerWidth) {
        xPixels = 0
      }
      controls.set({ x: -xPixels, y: "-50%" })

      xPixels += xSpeed
      setAnimationId(requestAnimationFrame(animate))
    }
  }

  const handleMouseEnter = () => {
    if (!animationId) {
      setAnimationId(requestAnimationFrame(animate))
    }
  }

  const handleMouseLeave = () => {
    controls.start({
      x: 0,
      y: "-50%",
      transition: { duration: 0.3, type: "tween", ease: "easeInOut" },
    })
    xPixels = 0
    if (animationId) {
      cancelAnimationFrame(animationId)
      setAnimationId(null)
    }
  }

  useEffect(() => {
    if (!startOnHover) setAnimationId(requestAnimationFrame(animate))

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [controls])

  return { controls, containerRef, handleMouseEnter, handleMouseLeave }
}
