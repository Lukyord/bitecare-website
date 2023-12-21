"use client"

import { useSearchParams } from "next/navigation"
import { Circle, useMap } from "react-leaflet"
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
  const [radiusCenter, setRadiusCenter] = useState<[number, number]>([0, 0])
  const { setResult, setFilterAccordionValue } = usePhysicalStoreSearch()
  const tPhysicalStoreToast = useTranslations("physical-store-toast")

  const filterByDistance = useCallback(() => {
    map.locate().on("locationfound", function (e) {
      map.flyTo(e.latlng, map.getZoom())

      setFilterAccordionValue("")
      setRadiusCenter([e.latlng.lat, e.latlng.lng])
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
    <div className="relative">
      <div className="absolute left-0">
        <PostCodeFilter />
      </div>

      {/* Find me & DistanceFilter */}
      <div className="absolute right-0 top-1/2 flex items-center gap-2 sm:gap-6">
        <DistanceFilter distance={distance} setDistance={setDistance} />
        <FindMe distance={distance} filterByDistance={filterByDistance} />
      </div>
      {radiusCenter && urlDistance && (
        <Circle
          center={radiusCenter}
          pathOptions={{ color: "blue", stroke: false }}
          radius={distance * 1000}
        />
      )}
    </div>
  )
}
