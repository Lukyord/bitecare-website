import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef, useState } from "react"

type NavbarCTAButtonProps = {
  text: string
  setSelectedNavItem: React.Dispatch<React.SetStateAction<string>>
}

export default function NavbarCTAButton({
  text,
  setSelectedNavItem,
}: NavbarCTAButtonProps) {
  const controls = useAnimation()
  const containerRef = useRef<HTMLButtonElement>(null)
  const [animationId, setAnimationId] = useState<number | null>(null)
  let xPixels = 0

  const animate = () => {
    const containerWidth = containerRef.current?.getBoundingClientRect().width

    if (containerWidth) {
      if (xPixels > containerWidth) {
        xPixels = 0
      }
      controls.set({ x: -xPixels, y: "-50%" })

      xPixels += 1
      setAnimationId(requestAnimationFrame(animate))
    }
  }

  const handleMouseEnter = () => {
    if (!animationId) {
      setAnimationId(requestAnimationFrame(animate))
    }
    setSelectedNavItem("cta-button")
  }

  const handleMouseLeave = () => {
    controls.start({ x: 0, y: "-50%" })
    xPixels = 0
    if (animationId) {
      cancelAnimationFrame(animationId)
      setAnimationId(null)
    }
    setSelectedNavItem("")
  }

  //cancel the animation frame when the component is unmounted
  useEffect(() => {
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [animationId])

  return (
    <button
      className="
        relative h-full w-40 overflow-hidden
        whitespace-nowrap rounded-full
        bg-bc_primary text-paragraph text-white
      "
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.p
        className="absolute top-1/2 w-full translate-y-[-50%]"
        animate={controls}
      >
        {text}
      </motion.p>
      <motion.p
        className="absolute left-[100%] top-1/2 w-full translate-y-[-50%]"
        animate={controls}
      >
        {text}
      </motion.p>
    </button>
  )
}
