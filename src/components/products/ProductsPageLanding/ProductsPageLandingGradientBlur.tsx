"use client"

import { motion } from "framer-motion"

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

export default function ProductsPageLandingGradientBlur() {
  const { activeProduct } = useActiveProduct()

  return (
    <>
      <motion.div
        initial={{
          background: backgroundGradients[activeProduct].background,
        }}
        animate={{
          background: backgroundGradients[activeProduct].background,
          transition: { delay: 0.5, ease: [0.83, 0, 0.17, 1] },
        }}
        className={`
                  absolute left-0 top-0 
                  -z-10 h-[80vw] w-[80vw] 
                  rounded-full blur-[100px] filter
                  xl:left-[5%] xl:top-[5%]
                  xl:h-[40vw] xl:w-[40vw]
                `}
      />

      <motion.div
        className={`
                  absolute left-[30%] top-[35%] 
                  -z-10 hidden h-[30vw] 
                  w-[30vw] rounded-full blur-[100px]
                  filter xl:block
                  `}
      />
    </>
  )
}

// ${cn({
//   "bg-[linear-gradient(180deg,_rgba(27,_211,_251,_0.60)_0%,_rgba(17,_112,_255,_0.28)_100%)]":
//     activeProduct === "Skin Care",
//   "bg-[linear-gradient(180deg,_rgba(102,_221,_192,_0.60)_0%,_rgba(0,_255,_200,_0.60)_100%)]":
//     activeProduct === "Low Fat",
//   "bg-[linear-gradient(180deg,_rgba(134,_109,_175,_0.60)_0%,_rgba(242,_232,_255,_0.60)_100%)]":
//     activeProduct === "Senior Care",
//   "bg-[linear-gradient(180deg,_rgba(235,_123,_173,_0.60)_0%,_rgba(255,_233,_246,_0.60)_100%)]":
//     activeProduct === "Renal Care",
// })}
