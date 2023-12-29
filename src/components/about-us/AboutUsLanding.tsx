"use client"

import Image, { StaticImageData } from "next/image"
import { motion, useAnimate } from "framer-motion"
import { useCallback, useLayoutEffect } from "react"

type AboutUsLandingProps = {
  images: StaticImageData[]
}

export default function AboutUsLanding({ images }: AboutUsLandingProps) {
  const [scope1, animate1] = useAnimate()
  const [scope2, animate2] = useAnimate()
  const [scope3, animate3] = useAnimate()
  const [scope4, animate4] = useAnimate()
  const [scopeHeader, animateHeader] = useAnimate()

  const animation = useCallback(
    async (mobile: boolean) => {
      const initialAnimation = [
        {
          opacity: 1,
        },
        {
          duration: 0.3,
          ease: "easeInOut",
        },
      ] as const

      await animate2([[scope2.current, ...initialAnimation]])
      await animate1([[scope1.current, ...initialAnimation]])
      await animate3([[scope3.current, ...initialAnimation]])
      await animate4([[scope4.current, ...initialAnimation]])

      const endAnimationTransition = {
        duration: 0.75,
        ease: "easeInOut",
        type: "tween",
      } as const

      animate2([
        [
          scope2.current,
          { left: mobile ? "-5%" : "10%", top: "10%" },
          endAnimationTransition,
        ],
      ])
      animate1([
        [scope1.current, { right: "0", top: "0" }, endAnimationTransition],
      ])
      animate3([
        [scope3.current, { left: "0", bottom: "0" }, endAnimationTransition],
      ])
      animate4([
        [
          scope4.current,
          { right: mobile ? "0" : "30%", bottom: mobile ? "10%" : "5%" },
          endAnimationTransition,
        ],
      ])

      animateHeader([
        [
          scopeHeader.current,
          {
            opacity: 1,
            z: 50,
          },
          {
            duration: 1.25,
            ease: "easeInOut",
            delay: 0.5,
          },
        ],
      ])
    },
    [
      scope1,
      scope2,
      scope3,
      scope4,
      scopeHeader,
      animate1,
      animate2,
      animate3,
      animate4,
      animateHeader,
    ]
  )

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      animation(window.innerWidth < 1024)
    }
  }, [animation])

  return (
    <section className="relative h-[100vh] w-[100vw] bg-bc-surface">
      <motion.div
        initial={{ opacity: 0, left: "25%", top: "25%" }}
        className="absolute"
        ref={scope2}
      >
        <Image
          src={images[1]}
          alt="about-us-dog-2"
          width={580}
          height={273}
          className="h-auto w-[80vw] sm:w-[50vw] lg:w-[35vw]"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, right: "25%", top: "10%" }}
        className="absolute"
        ref={scope1}
      >
        <Image
          src={images[0]}
          alt="about-us-dog-1"
          width={483}
          height={774}
          className="h-auto w-[60vw] sm:w-[30vw] lg:w-[25vw]"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, left: "30%", bottom: "25%" }}
        className="absolute"
        ref={scope3}
      >
        <Image
          src={images[2]}
          alt="about-us-dog-2"
          width={450}
          height={150}
          className="h-auto w-[80vw] sm:w-[50vw] lg:w-[25vw]"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, right: "30%", bottom: "30%" }}
        className="absolute"
        ref={scope4}
      >
        <Image
          src={images[3]}
          alt="about-us-dog-2"
          width={343}
          height={301}
          className="h-auto w-[60vw] sm:w-[30vw] lg:w-[15vw]"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, z: 50 }}
        className="
              z-50 flex h-full w-full
              items-center justify-center 
              text-end text-[30vw]
              xl:text-[500px]
              "
        ref={scopeHeader}
      >
        <h1 className="relative text-bc-primary">
          BITECARE{" "}
          <span className="absolute left-[3px] top-[3px] -z-10 text-[#386A1F] lg:left-[6px] lg:top-[6px]">
            BITECARE
          </span>
        </h1>
      </motion.div>
    </section>
  )
}
