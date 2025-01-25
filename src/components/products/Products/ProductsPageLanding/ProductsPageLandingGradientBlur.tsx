"use client"

import { motion } from "framer-motion"
import { useLayoutEffect, useState } from "react"

import { useActiveProduct } from "@/context/ActiveProductContextProvider"
import { Product } from "@/payload/type-gen"

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

function lightenHexColor(hex: string, percentage: number): string {
  const normalizedHex = hex.replace("#", "")

  const bigint = parseInt(normalizedHex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  const lighten = (value: number) =>
    Math.min(255, Math.floor(value + (255 - value) * (percentage / 100)))
  const newR = lighten(r)
  const newG = lighten(g)
  const newB = lighten(b)

  return `#${((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase()}`
}

type Props = {
  products: Product[]
}

export default function ProductsPageLandingGradientBlur({ products }: Props) {
  const { activeProduct } = useActiveProduct()
  const [delay, setDelay] = useState(0.5)

  const getComputedGradient = (primaryColor?: string): string => {
    try {
      const baseColor = primaryColor || products[0].primary_color || "#866DAF"
      const lighterColor = lightenHexColor(baseColor, 40)
      return `linear-gradient(0deg, ${baseColor} 0%, ${lighterColor} 100%)`
    } catch (error) {
      console.error("Error computing gradient:", error)
      return fallbackBgGradient
    }
  }

  const computedGradient: string = getComputedGradient(
    activeProduct?.primary_color
  )
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
          background: computedGradient,
        }}
        animate={{
          background: computedGradient,
          transition: { delay, ease: [0.83, 0, 0.17, 1] },
        }}
        className={`absolute left-0 top-0  -z-10 h-[80vw] w-[80vw]  rounded-full blur-[100px] filter xl:left-[5%] xl:top-[5%] xl:h-[40vw] xl:w-[40vw]`}
      />

      <motion.div
        initial={{
          background: computedGradient,
        }}
        animate={{
          background: computedGradient,
          transition: { delay, ease: [0.83, 0, 0.17, 1] },
        }}
        className={`absolute left-[30%] top-[35%]  -z-10 hidden h-[30vw]  w-[30vw] rounded-full blur-[100px] filter xl:block`}
      />
    </>
  )
}
