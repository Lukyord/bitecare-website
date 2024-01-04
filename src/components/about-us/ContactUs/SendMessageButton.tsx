"use client"

import { useOpenContactUsForm } from "@/context/ContactUsFormContextProvider"

type SendMessageButtonProps = {
  children: React.ReactNode
}

export default function SendMessageButton({
  children,
}: SendMessageButtonProps) {
  const { setFormOpen } = useOpenContactUsForm()

  return (
    <button
      onClick={() => setFormOpen(true)}
      className="
            -mx-[0.25rem] my-[0] px-[0.25rem] py-[0]
            text-bc-black [box-shadow:inset_0_0_0_0_#549B51]
            [transition:color_.3s_ease-in-out,_box-shadow_.3s_ease-in-out]
            hover:text-[white] hover:[box-shadow:inset_400px_0_0_0_#549B51]
          "
    >
      {children}
    </button>
  )
}
