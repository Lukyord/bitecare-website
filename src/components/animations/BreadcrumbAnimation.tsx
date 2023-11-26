"use client"

import { motion } from "framer-motion"

type BreadcrumbAnimationProps = {
  setSelectedNavItem: React.Dispatch<React.SetStateAction<string>>
  children: React.ReactNode
}

export default function BreadcrumbAnimation({
  setSelectedNavItem,
  children,
}: BreadcrumbAnimationProps) {
  return (
    <motion.div
      initial={{ x: "-50%", y: 20 }}
      animate={{ x: "-50%", y: 0 }}
      className="
                  absolute left-1/2
                  top-[110%] translate-x-[-50%]
                "
      onMouseLeave={() => setSelectedNavItem("")}
    >
      {children}
    </motion.div>
  )
}
