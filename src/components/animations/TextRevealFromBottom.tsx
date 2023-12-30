"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type TextRevealFromBottomProps = {
  children: React.ReactNode
  delay: number
  duration: number
}

export default function TextRevealFromBottom({
  children,
  duration,
  delay,
}: TextRevealFromBottomProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: [0.17, 0.55, 0.55, 1],
        delay: delay,
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  )
}
