"use client"

import { useTranslations } from "next-intl"
import { useFormStatus } from "react-dom"

import { CiSearch } from "react-icons/ci"
import { useRouter } from "@/lib/navigation"
import { zodErrorMessage } from "@/lib/zodErrorMessage"
import { postCodeSchema } from "@/types/where-to-buy/physical-store"

import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

type PostCodeFilterProps = {}

export default function PostCodeFilter({}: PostCodeFilterProps) {
  const { toast } = useToast()
  const router = useRouter()
  const { pending } = useFormStatus()
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
      className="flex items-center rounded-xl bg-white p-4 shadow-lg"
    >
      <p className="font-hel_rounded text-h3">
        {tPhysicalStore("where-do-you-live")}
      </p>
      <Input
        type="text"
        id="post-code"
        name="post-code"
        placeholder={`(${tPhysicalStore("where-do-you-live-placeholder")})`}
        className="
            focus-visible:ring-off mt-auto
            w-[150px] border-none bg-transparent 
            py-0 text-paragraph placeholder:text-sm focus-visible:ring-0
            focus-visible:ring-transparent focus-visible:ring-offset-0
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
            flex h-10 w-10 items-center 
            justify-center rounded-full 
            bg-bc-black
          "
      >
        <CiSearch size={24} color="white" />
      </button>
    </form>
  )
}
