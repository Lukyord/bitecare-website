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

      gsap.to("body", {
        duration: 2,
        overflow: "hidden",
      })

      const sectionWidth = sectionRef.current?.getBoundingClientRect().width

      const pin = gsap.to(sectionRef.current, {
        translateX: sectionWidth && -sectionWidth,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
          pin: true,
        },
      })

      setTimeout(() => {
        gsap.to("body", {
          duration: 0,
          overflow: "auto",
        })
      }, 2000)

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
