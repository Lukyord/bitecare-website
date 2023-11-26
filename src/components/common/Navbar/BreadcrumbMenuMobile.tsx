import React from "react"

import { RxCross2 } from "react-icons/rx"

type BreadcrumbMenuMobileProps = {
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function BreadcrumbMenuMobile({
  setMobileMenuOpen,
}: BreadcrumbMenuMobileProps) {
  return (
    <div className="fixed left-0 top-0 h-screen w-screen bg-bc-primary-container">
      <div className="mt-4 flex w-[90%] justify-end">
        <RxCross2 size={24} onClick={() => setMobileMenuOpen(false)} />
      </div>
    </div>
  )
}
