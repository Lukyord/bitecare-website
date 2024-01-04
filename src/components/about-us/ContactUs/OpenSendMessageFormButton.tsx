"use client"

import { cn } from "@/lib/utils"
import { FaChevronLeft } from "react-icons/fa"

import { useOpenContactUsForm } from "@/context/ContactUsFormContextProvider"

type OpenSendMessageFormButtonProps = {}

export default function OpenSendMessageFormButton() {
  const { formOpen, setFormOpen } = useOpenContactUsForm()

  return (
    <>
      <div
        className={`
                  absolute left-0 top-0 z-20
                  h-screen w-screen bg-black/60
                  transition-opacity duration-700 ease-in-out
                  ${cn({
                    "pointer-events-none opacity-0": !formOpen,
                    "pointer-events-auto opacity-100": formOpen,
                  })}
                `}
      />
      <section
        className={`
                absolute right-0 top-0 z-[99999] h-screen
                w-[70vw] bg-bc-primary-container
                transition-transform duration-500 ease-in-out
                ${cn({
                  "translate-x-[100%]": !formOpen,
                  "translate-x-[0%]": formOpen,
                })}
                })}
              `}
      >
        <div className="relative h-full w-full">
          <button
            onClick={() => setFormOpen(!formOpen)}
            className={`
              absolute left-0 top-1/2
              flex h-20 w-20 translate-y-[-50%] 
              transform items-center rounded-full border
              border-bc-grey bg-white text-h3
              transition-transform duration-500 ease-in-out
              ${cn({
                "translate-x-[-70%]": !formOpen,
                "translate-x-[-50%] justify-center": formOpen,
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
        </div>
      </section>
    </>
  )
}
