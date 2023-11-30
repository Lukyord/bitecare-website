"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "@/lib/navigation"

type NavbarCTAButtonProps = {
  text: string
  href?: string
}

export default function NavbarCTAButton({ text, href }: NavbarCTAButtonProps) {
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

  //cancel the animation frame when the component is unmounted
  useEffect(() => {
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [animationId])

  const style = "absolute top-1/2 w-full translate-y-[-50%]"

  return (
    <button
      className="
        relative h-full w-40 overflow-hidden
        whitespace-nowrap rounded-full
        bg-bc-primary text-paragraph text-white
      "
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => href && router.push(href)}
    >
      <motion.p className={`${style}`} animate={controls}>
        {text}
      </motion.p>
      <motion.p className={`${style} left-[100%]`} animate={controls}>
        {text}
      </motion.p>
    </button>
  )
}
