"use client"

import { useLayoutEffect, useState } from "react"
import { motion, Variants } from "framer-motion"

import { useActiveProduct } from "@/context/ActiveProductContextProvider"
import { Product } from "@/payload/type-gen"

const transition = {
  duration: 1.5,
  ease: [0.83, 0, 0.17, 1],
  backgroundColor: { duration: 0 },
}
const width = ["10vw", "330vw"]
const height = ["10vw", "330vw"]

type Props = {
  products: Product[]
}

export default function ProductsPageLandingBackground({ products }: Props) {
  const variants = products.reduce((acc, product) => {
    acc[product.slug] = {
      width,
      height,
      transition,
      backgroundColor: product.primary_color,
    }
    return acc
  }, {} as Variants)

  const fallbackBgColor = products[0].primary_color || "#86D2DF"
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

  const style = `absolute -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full hidden xl:block`

  return (
    <>
      <motion.div
        id="bg-motion-div"
        initial={{
          backgroundColor: activeProduct?.primary_color ?? fallbackBgColor,
        }}
        animate={{
          backgroundColor: activeProduct?.primary_color ?? fallbackBgColor,
          transition: { delay: 1 },
        }}
        style={{
          left: `${buttonPosition.left}px`,
          top: `${buttonPosition.top}px`,
        }}
        className="absolute -z-10 h-[330vw] w-[330vw]  -translate-x-1/2 -translate-y-1/2  rounded-full"
      />
      {activeProduct && (
        <motion.div
          key={activeProduct.slug}
          variants={variants}
          animate={activeProduct.slug}
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
