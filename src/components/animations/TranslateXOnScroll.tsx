"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

type TranslateXOnScrollProps = {
  children: React.ReactNode
  translateXStart: string
  translateXEnd: string
}

export default function TranslateXOnScroll({
  children,
  translateXStart,
  translateXEnd,
}: TranslateXOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const translateXProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [translateXStart, translateXEnd]
  )

  return (
    <motion.div
      ref={ref}
      style={{ translateX: translateXProgress }}
      className="flex h-full w-screen transform items-center gap-[5%] pb-[10vh]"
    >
      {children}
    </motion.div>
  )
}
