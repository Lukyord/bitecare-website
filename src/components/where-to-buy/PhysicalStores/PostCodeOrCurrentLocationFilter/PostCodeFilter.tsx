"use client"

import { useTranslations } from "next-intl"
import { useFormStatus } from "react-dom"

import { CiSearch } from "react-icons/ci"
import { useRouter } from "@/lib/navigation"
import { zodErrorMessage } from "@/lib/zodErrorMessage"
import { postCodeSchema } from "@/types/where-to-buy/physical-store"

import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { usePhysicalStoreSearch } from "@/context/PhysicalStoreSearchContextProvider"

export default function PostCodeFilter() {
  const { toast } = useToast()
  const router = useRouter()
  const { pending } = useFormStatus()
  const { setResult, setFilterAccordionValue } = usePhysicalStoreSearch()
  const tPhysicalStore = useTranslations("physical-store")
  const tPhysicalStoreToast = useTranslations("physical-store-toast")

  const clientAction = async (formData: FormData) => {
    const { postCode } = {
      postCode: formData.get("post-code"),
    }

    const result = postCodeSchema.safeParse({ postCode })

    if (!result.success) {
      return toast({
        variant: "destructive",
        title: tPhysicalStoreToast("something-went-wrong"),
        description: zodErrorMessage(result.error.issues),
      })
    }

    router.replace(`/where-to-buy?type=physical-store&postCode=${postCode}`)
  }

  return (
    <form
      action={clientAction}
      className="flex items-center rounded-xl bg-white p-2 shadow-lg lg:p-4"
    >
      <p className="hidden font-hel_rounded text-h3 lg:block">
        {tPhysicalStore("where-do-you-live")}
      </p>
      <Input
        type="text"
        id="post-code"
        name="post-code"
        placeholder={`(${tPhysicalStore("where-do-you-live-placeholder")})`}
        className="
            focus-visible:ring-off w-[150px]
            border-none bg-transparent py-0 
            text-subtitle placeholder:text-sm focus-visible:ring-0 
            focus-visible:ring-transparent focus-visible:ring-offset-0
            sm:text-paragraph lg:mt-auto
          "
        inputMode="numeric"
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault()
          }
        }}
        maxLength={5}
        autoComplete="off"
      />
      <button
        type="submit"
        aria-disabled={pending}
        className="
            flex h-6 w-6 items-center 
            justify-center rounded-full 
            bg-bc-black 
            sm:h-10 sm:w-10 
          "
      >
        <CiSearch color="white" className="text-subtitle sm:text-paragraph" />
      </button>
    </form>
  )
}
