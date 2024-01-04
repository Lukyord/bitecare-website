"use client"

import { FaChevronLeft } from "react-icons/fa"
import { cn } from "@/lib/utils"

import { useOpenContactUsForm } from "@/context/ContactUsFormContextProvider"

export default function OpenFormButton() {
  const { formOpen, setFormOpen } = useOpenContactUsForm()

  return (
    <button
      onClick={() => setFormOpen(!formOpen)}
      className={`
        absolute left-0 top-1/2
        flex h-20 w-20 translate-y-[-50%] 
        transform items-center rounded-full border
        border-bc-grey bg-white text-h3
        transition-transform duration-500 ease-in-out
        ${cn({
          "translate-x-[-50%] xl:translate-x-[-70%]": !formOpen,
          "hidden xl:absolute xl:translate-x-[-50%] xl:justify-center":
            formOpen,
        })}
    `}
    >
      <FaChevronLeft
        size={30}
        className={`transform transition-transform duration-500 ease-in-out ${cn(
          {
            "rotate-180": formOpen,
            "ml-[15%] rotate-0": !formOpen,
          }
        )}`}
      />
    </button>
  )
}
