"use client"

import { LatLngBoundsLiteral } from "leaflet"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { Circle, useMap } from "react-leaflet"

import { usePhysicalStoreSearch } from "@/context/PhysicalStoreSearchContextProvider"
import { Stores } from "@/constant/stores"
import { filterResult } from "@/lib/where-to-buy/filterResult"

export default function MapFitBoundOnSearch() {
  const map = useMap()
  const { result, setResult, setFilterAccordionValue } =
    usePhysicalStoreSearch()
  const searchParams = useSearchParams()
  const focus = searchParams.get("focus")
  const focusStore = Stores.find((store) => store.name === focus)

  useEffect(() => {
    if (focus && !result) {
      setResult(
        filterResult({
          province: {
            value: "",
            label: "",
          },
          district: {
            value: "",
            label: "",
          },
          subDistrict: {
            value: "",
            label: "",
          },
          storeName: {
            value: focus,
            label: focus,
          },
        })
      )
    }

    if (result && result.length > 0 && typeof window !== "undefined") {
      const latitudes = result.map((item) => item.lat)
      const longitudes = result.map((item) => item.long)
      const smallScreen = window.innerWidth <= 1024

      let bounds: LatLngBoundsLiteral

      if (smallScreen) {
        bounds = [
          [Math.min(...latitudes), Math.min(...longitudes)],
          [Math.max(...latitudes), Math.max(...longitudes)],
        ]
      } else {
        bounds = [
          [Math.min(...latitudes), Math.min(...longitudes) - 0.25],
          [Math.max(...latitudes), Math.max(...longitudes)],
        ]
      }

      if (focusStore) {
        const offSet = smallScreen ? 0 : 0.01
        map.flyTo([focusStore.lat, focusStore.long - offSet], 15)
        setFilterAccordionValue("")
      } else {
        map.fitBounds(bounds, { padding: [20, 20] })
      }
    }
  }, [
    result,
    map,
    searchParams,
    setResult,
    setFilterAccordionValue,
    focusStore,
    focus,
  ])

  if (focusStore) {
    return (
      <Circle
        pathOptions={{
          color: "red",
        }}
        center={[focusStore.lat, focusStore.long]}
        radius={100}
      />
    )
  }

  return null
}
