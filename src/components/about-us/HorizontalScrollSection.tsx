"use client"

import { useUrl } from "nextjs-current-url"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import ScrollToPlugin from "gsap/dist/ScrollToPlugin"
import { useLayoutEffect, useRef } from "react"
import { useRouter } from "@/lib/navigation"

export default function HorizontalScrollSection({
  children,
}: {
  children: React.ReactNode
}) {
  const url = useUrl()
  const triggerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (typeof window === "undefined") return
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    if (window.innerWidth > 1280) {
      gsap.to("body", {
        duration: 2,
        overflow: "hidden",
      })

      const pin = gsap.to(sectionRef.current, {
        translateX: "-400vw",
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

  useLayoutEffect(() => {
    if (url && url.toString().includes("#contact-us")) {
      gsap.to(window, {
        scrollTo: {
          y: "max",
          autoKill: true,
        },
        duration: 1,
      })
      return
    }
  }, [url])

  useLayoutEffect(() => {
    const enableScrolling = () => {
      gsap.to("body", {
        duration: 0,
        overflow: "auto",
      })
    }

    document.body.addEventListener("click", enableScrolling)

    return () => {
      document.body.removeEventListener("click", enableScrolling)
    }
  }, [])

  return (
    <div className="overflow-y-auto overflow-x-hidden xl:overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="relative flex h-fit w-[100vw] flex-col xl:h-[100vh] xl:w-[500vw] xl:flex-row"
        >
          {children}
        </div>
      </div>
    </div>
  )
}
