"use client"

import { useLayoutEffect, useState } from "react"
import { motion } from "framer-motion"

import { useActiveProduct } from "@/context/ActiveProductContextProvider"

const Transitions = {
  duration: 1.5,
  ease: [0.83, 0, 0.17, 1],
  backgroundColor: { duration: 0 },
}
const Width = ["10vw", "330vw"]
const Height = ["10vw", "330vw"]

const background = {
  "Skin Care": {
    width: Width,
    height: Height,
    backgroundColor: "#86D2DF",
    transition: Transitions,
  },
  "Low Fat": {
    width: Width,
    height: Height,
    backgroundColor: "#57BF9E",
    transition: Transitions,
  },
  "Senior Care": {
    width: Width,
    height: Height,
    backgroundColor: "#866DAF",
    transition: Transitions,
  },
  "Renal Care": {
    width: Width,
    height: Height,
    backgroundColor: "#EB7BAD",
    transition: Transitions,
  },
}

export default function ProductsPageLandingBackground() {
  const { activeProduct } = useActiveProduct()
  const [buttonPosition, setButtonPosition] = useState({ left: 0, top: 0 })

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const button = document.getElementById("swiper-button-next")
        if (button) {
          const buttonRect = button.getBoundingClientRect()

          const centerX = buttonRect.left + buttonRect.width / 2
          const centerY = buttonRect.top + buttonRect.height / 2

          setButtonPosition({ left: centerX, top: centerY })
        }
      }

      window.addEventListener("resize", handleResize)
      handleResize()

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [activeProduct])

  const style = `absolute -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full hidden lg:block`

  return (
    <>
      <motion.div
        id="bg-motion-div"
        initial={{ backgroundColor: background[activeProduct].backgroundColor }}
        animate={{
          backgroundColor: background[activeProduct].backgroundColor,
          transition: { delay: 1 },
        }}
        style={{
          left: `${buttonPosition.left}px`,
          top: `${buttonPosition.top}px`,
        }}
        className="
              absolute -z-10 h-[330vw] w-[330vw] 
              -translate-x-1/2 -translate-y-1/2 
              rounded-full
            "
      />
      {activeProduct && (
        <motion.div
          key={activeProduct}
          variants={background}
          animate={activeProduct}
          style={{
            left: `${buttonPosition.left}px`,
            top: `${buttonPosition.top}px`,
          }}
          className={style}
        />
      )}
    </>
  )
}
