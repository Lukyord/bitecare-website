import { motion } from "framer-motion"

type BreadcrumbMenuMobileProps = {
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function BreadcrumbMenuMobile({
  setMobileMenuOpen,
}: BreadcrumbMenuMobileProps) {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.75, ease: [0.83, 0, 0.17, 1] }}
      className="fixed left-0 top-0 -z-10 h-screen w-screen bg-bc-primary-container"
    ></motion.div>
  )
}
