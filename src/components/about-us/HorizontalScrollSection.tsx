"use client"

import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"

export default function HorizontalScrollSection({
  children,
}: {
  children: React.ReactNode
}) {
  const triggerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (typeof window === "undefined") return

    if (window.innerWidth > 1280) {
      gsap.registerPlugin(ScrollTrigger)

      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-400vw",
          ease: "none",

          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
          },
        }
      )

      return () => {
        pin.kill()
      }
    }
  }, [])

  return (
    <div className="overflow-y-auto overflow-x-hidden xl:overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="relative flex h-[500vh] w-[100vw] flex-col xl:h-[100vh] xl:w-[500vw] xl:flex-row"
        >
          {children}
        </div>
      </div>
    </div>
  )
}
