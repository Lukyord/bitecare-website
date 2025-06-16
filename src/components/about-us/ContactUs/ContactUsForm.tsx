"use client"

import { cn } from "@/lib/utils"

import { useOpenContactUsForm } from "@/context/ContactUsFormContextProvider"

type ContactUsFormProps = {
  children: React.ReactNode
}

export default function ContactUsForm({ children }: ContactUsFormProps) {
  const { formOpen } = useOpenContactUsForm()

  return (
    <section
      className={`fixed right-0 top-0 z-[99999] h-[100dvh] w-[100vw] bg-bc-primary-container transition-transform duration-500 ease-in-out xl:absolute xl:w-[70vw]
          ${cn({
            "translate-x-[100%]": !formOpen,
            "translate-x-[0%]": formOpen,
          })}
        `}
    >
      <div className="relative flex h-full w-full flex-col justify-around px-10 py-7 xl:px-20 xl:py-14">
        {children}
      </div>
    </section>
  )
}
