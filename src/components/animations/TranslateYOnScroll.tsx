"use client"

import { useLayoutEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

type TranslateYOnScrollProps = {
  children: React.ReactNode
  translateYStart: string
  translateYEnd: string
}

export default function TranslateYOnScroll({
  children,
  translateYStart,
  translateYEnd,
}: TranslateYOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (typeof window === "undefined") return

    if (window.innerWidth > 1280) {
      gsap.registerPlugin(ScrollTrigger)

      const pin = gsap.fromTo(
        ref.current,
        {
          translateY: translateYStart,
        },
        {
          translateY: translateYEnd,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        }
      )

      return () => {
        pin.kill()
      }
    }
  }, [translateYEnd, translateYStart])

  return (
    <div ref={triggerRef}>
      <div
        ref={ref}
        className="flex h-screen w-full transform flex-col items-center gap-5"
      >
        {children}
      </div>
    </div>
  )
}
