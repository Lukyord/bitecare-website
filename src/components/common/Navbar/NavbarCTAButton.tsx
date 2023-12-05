"use client"

import { motion } from "framer-motion"
import { useRouter } from "@/lib/navigation"
import { useInfiniteTranslateX } from "@/hooks/useInfiniteTranslateX"

type NavbarCTAButtonProps = {
  text: string
  href?: string
}

export default function NavbarCTAButton({ text, href }: NavbarCTAButtonProps) {
  const router = useRouter()
  const { controls, containerRef, handleMouseEnter, handleMouseLeave } =
    useInfiniteTranslateX(true, 1)

  const style = "absolute top-1/2 w-full translate-y-[-50%]"

  return (
    <button
      className="
        relative h-full w-40 overflow-hidden
        whitespace-nowrap rounded-full
        bg-bc-primary text-paragraph text-white
      "
      ref={containerRef as React.RefObject<HTMLButtonElement>}
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
