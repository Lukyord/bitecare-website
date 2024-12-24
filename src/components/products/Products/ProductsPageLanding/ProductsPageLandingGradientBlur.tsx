"use client"

import { motion } from "framer-motion"
import { useLayoutEffect, useState } from "react"

import { useActiveProduct } from "@/context/ActiveProductContextProvider"

const backgroundGradients = {
  "Skin Care": {
    background:
      "linear-gradient(180deg, rgba(27, 211, 251, 0.60) 0%, rgba(17, 112, 255, 0.28) 100%)",
  },
  "Low Fat": {
    background:
      "linear-gradient(180deg, rgba(102, 221, 192, 0.60) 0%, rgba(0, 255, 200, 0.60) 100%)",
  },
  "Senior Care": {
    background:
      "linear-gradient(180deg, rgba(134, 109, 175, 0.60) 0%, rgba(242, 232, 255, 0.60) 100%)",
  },
  "Renal Care": {
    background:
      "linear-gradient(180deg, rgba(235, 123, 173, 0.60) 0%, rgba(255, 233, 246, 0.60) 100%)",
  },
}

const fallbackBgGradient =
  "linear-gradient(180deg, rgba(102, 221, 192, 0.60) 0%, rgba(0, 255, 200, 0.60) 100%)"

export default function ProductsPageLandingGradientBlur() {
  const { activeProduct } = useActiveProduct()
  const [delay, setDelay] = useState(0.5)

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window.innerWidth < 1280) {
          setDelay(1)
        } else {
          setDelay(0.5)
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
    <>
      <motion.div
        initial={{
          // TODO: Computed value of background color
          background: activeProduct?.primary_color ?? fallbackBgGradient,
        }}
        animate={{
          background: activeProduct?.primary_color ?? fallbackBgGradient,
          transition: { delay, ease: [0.83, 0, 0.17, 1] },
        }}
        className={`absolute left-0 top-0  -z-10 h-[80vw] w-[80vw]  rounded-full blur-[100px] filter xl:left-[5%] xl:top-[5%] xl:h-[40vw] xl:w-[40vw]`}
      />

      <motion.div
        className={`absolute left-[30%] top-[35%]  -z-10 hidden h-[30vw]  w-[30vw] rounded-full blur-[100px] filter xl:block`}
      />
    </>
  )
}
