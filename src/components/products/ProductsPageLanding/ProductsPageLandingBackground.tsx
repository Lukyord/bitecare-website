"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

import { useActiveProduct } from "@/context/ActiveProductContextProvider"

const background = {
  open: () => ({
    width: "300vw",
    height: "300vw",
  }),
  closed: {
    width: "50vw",
    height: "50vw",
  },
}

export default function ProductsPageLandingBackground() {
  const { activeProduct } = useActiveProduct()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const button = document.getElementById("swiper-button-next")
        const motionDiv = document.getElementById("bg-motion-div")

        if (button && motionDiv) {
          const buttonRect = button.getBoundingClientRect()

          // Calculate the center position of the button
          const centerX = buttonRect.left + buttonRect.width / 2
          const centerY = buttonRect.top + buttonRect.height / 2

          // Set the center position to your motion.div
          motionDiv.style.left = `${centerX}px`
          motionDiv.style.top = `${centerY}px`
        }
      }

      window.addEventListener("resize", handleResize)
      handleResize()

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  return (
    <motion.div
      id="bg-motion-div"
      variants={background}
      animate={activeProduct === "Skin Care" ? "open" : "closed"}
      className="
          absolute -z-10 
          -translate-x-1/2 -translate-y-1/2
          rounded-full bg-red-500
        "
    />
  )
}
