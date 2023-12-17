"use client"

import { useMap } from "react-leaflet/hooks"
import { useFormStatus } from "react-dom"
import { useTranslations } from "next-intl"

import { zodErrorMessage } from "@/lib/zodErrorMessage"
import { CiSearch } from "react-icons/ci"
import { RiSendPlaneLine } from "react-icons/ri"
import { useRouter } from "@/lib/navigation"

import { Input } from "@/components/ui/input"
import { postCodeSchema } from "@/types/where-to-buy/physical-store"
import { useToast } from "@/components/ui/use-toast"

type PostCodeOrCurrentLocationFilterProps = {}

export default function PostCodeOrCurrentLocationFilter({}: PostCodeOrCurrentLocationFilterProps) {
  const map = useMap()
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

    router.replace(`/where-to-buy?postCode=${postCode}`)
  }

  const findMe = () => {
    map.locate().on("locationfound", function (e) {
      map.flyTo(e.latlng, map.getZoom())
    })

    map.locate().on("locationerror", function (e) {
      toast({
        title: tPhysicalStoreToast("something-went-wrong"),
        description: tPhysicalStoreToast("cant-access-location"),
      })
    })
  }

  return (
    <div className="flex h-fit w-full items-center justify-between">
      {/* Postal Code Filter */}
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
                  w-[350px] border-none bg-transparent 
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
          <CiSearch color="white" className="text-paragraph" />
        </button>
      </form>

      {/* find me */}
      <button
        className="
                    group flex items-center 
                    gap-3 rounded-xl bg-white 
                    p-4 shadow-lg transition-all 
                    duration-500 hover:bg-black
                  "
        onClick={findMe}
      >
        <RiSendPlaneLine
          className="
                                text-paragraph text-black 
                                transition-all duration-500 
                                group-hover:text-white
                              "
        />
        <p
          className="
                    font-hel_rounded text-paragraph 
                    tracking-tight transition-all 
                    duration-500 group-hover:text-white
                  "
        >
          {tPhysicalStore("find-me")}
        </p>
      </button>
    </div>
  )
}
