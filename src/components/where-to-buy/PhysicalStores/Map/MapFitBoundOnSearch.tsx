"use client"

import { useEffect } from "react"
import { useMap } from "react-leaflet"

import { usePhysicalStoreSearch } from "@/context/PhysicalStoreSearchContextProvider"
import { LatLngBoundsLiteral } from "leaflet"

export default function MapFitBoundOnSearch() {
  const map = useMap()
  const { result } = usePhysicalStoreSearch()

  useEffect(() => {
    if (result && result.length > 0 && typeof window !== "undefined") {
      const latitudes = result.map((item) => item.lat)
      const longitudes = result.map((item) => item.long)

      let bounds: LatLngBoundsLiteral

      if (window.innerWidth <= 1024) {
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

      map.fitBounds(bounds, { padding: [20, 20] })
    }
  }, [result, map])

  return null
}
