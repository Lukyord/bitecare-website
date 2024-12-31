"use client"

import { useTranslations } from "next-intl"
import { useEffect } from "react"
import { useFormStatus } from "react-dom"
import { useRouter, useSearchParams } from "next/navigation"

import { CiSearch } from "react-icons/ci"
import { zodErrorMessage } from "@/lib/zodErrorMessage"
import { postCodeSchema } from "@/types/where-to-buy/physical-store"

import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { usePhysicalStoreSearch } from "@/context/PhysicalStoreSearchContextProvider"
import { filterByPostCode } from "@/lib/where-to-buy/filterByPostCode"
import { Store } from "@/payload/type-gen"

type PostCodeFilterProps = {
  stores: Store[]
}

export default function PostCodeFilter({ stores }: PostCodeFilterProps) {
  const { toast } = useToast()
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlPostCode = searchParams.get("postCode")
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
      toast({
        variant: "destructive",
        title: tPhysicalStoreToast("something-went-wrong"),
        description: zodErrorMessage(result.error.issues),
      })
      return
    }

    postCode && setResult(filterByPostCode(postCode.toString(), stores))
    setFilterAccordionValue("")

    router.replace(
      `/where-to-buy?type=physical-store&province=&district=&subDistrict=&storeName&distance=&postCode=${postCode}&focus=`,
      { scroll: false }
    )
  }

  useEffect(() => {
    if (urlPostCode) {
      setResult(filterByPostCode(urlPostCode, stores))
      setFilterAccordionValue("")
      const input = document.getElementById("post-code")

      if (input) {
        input.setAttribute("value", urlPostCode)
      }
    }
  }, [urlPostCode, setResult, setFilterAccordionValue])

  return (
    <form
      action={clientAction}
      className="flex items-center gap-4 rounded-xl bg-white p-2 shadow-lg lg:p-4"
    >
      <p className="hidden font-hel_rounded text-h3 lg:block">
        {tPhysicalStore("where-do-you-live")}
      </p>
      <Input
        type="text"
        id="post-code"
        name="post-code"
        transparent
        placeholder={`(${tPhysicalStore("where-do-you-live-placeholder")})`}
        className="
            w-[150px]
            border-none bg-transparent py-0
            text-subtitle placeholder:font-psl placeholder:text-[20px] 
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
