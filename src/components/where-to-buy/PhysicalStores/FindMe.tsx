"use client"

import { useMap } from "react-leaflet/hooks"
import { useTranslations } from "next-intl"

import { RiSendPlaneLine } from "react-icons/ri"

import { useToast } from "@/components/ui/use-toast"

type FindMeProps = {}

export default function FindMe({}: FindMeProps) {
  const map = useMap()
  const { toast } = useToast()
  const tPhysicalStore = useTranslations("physical-store")
  const tPhysicalStoreToast = useTranslations("physical-store-toast")

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
        size={24}
        className="
                   text-black 
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
  )
}
