"use client"

import { useSearchParams } from "next/navigation"
import { useMap } from "react-leaflet"
import { useCallback, useEffect, useState } from "react"
import { useTranslations } from "next-intl"

import { filterByDistanceLatLong } from "@/lib/where-to-buy/filterByDistance"

import PostCodeFilter from "./PostCodeFilter"
import FindMe from "./FindMe"
import DistanceFilter from "./DistanceFilter"
import { useToast } from "@/components/ui/use-toast"
import { usePhysicalStoreSearch } from "@/context/PhysicalStoreSearchContextProvider"

export default function PostCodeOrCurrentLocationFilter() {
  const map = useMap()
  const { toast } = useToast()
  const searchParams = useSearchParams()
  const urlDistance = searchParams.get("distance")
  const [distance, setDistance] = useState(parseInt(urlDistance || "15"))
  const { setResult, setFilterAccordionValue } = usePhysicalStoreSearch()
  const tPhysicalStoreToast = useTranslations("physical-store-toast")

  const filterByDistance = useCallback(() => {
    map.locate().on("locationfound", function (e) {
      map.flyTo(e.latlng, map.getZoom())

      setFilterAccordionValue("")
      setResult(
        filterByDistanceLatLong(
          e.latlng.lat,
          e.latlng.lng,
          parseInt(urlDistance || "15")
        )
      )
    })

    map.locate().on("locationerror", function (e) {
      toast({
        title: tPhysicalStoreToast("something-went-wrong"),
        description: tPhysicalStoreToast("cant-access-location"),
      })
    })
  }, [
    map,
    setResult,
    setFilterAccordionValue,
    toast,
    tPhysicalStoreToast,
    urlDistance,
  ])

  useEffect(() => {
    if (urlDistance) filterByDistance()
  }, [urlDistance, setResult, setFilterAccordionValue, filterByDistance])

  return (
    <div className="flex h-fit w-full items-center justify-between">
      <PostCodeFilter />

      {/* Find me & DistanceFilter */}
      <div className="flex items-center gap-2 sm:gap-6">
        <DistanceFilter distance={distance} setDistance={setDistance} />
        <FindMe distance={distance} filterByDistance={filterByDistance} />
      </div>
    </div>
  )
}
