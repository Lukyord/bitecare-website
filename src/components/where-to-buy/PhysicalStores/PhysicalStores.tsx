"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

import PostCodeOrCurrentLocationFilter from "./PostCodeOrCurrentLocationFilter/PostCodeOrCurrentLocationFilter"
import MapLoadingSkeleton from "./Map/MapLoadingSkeleton"
import LocationFilter from "./LocationFilter/LocationFilter"
import Result from "./Result/Result"
import usePhysicalStoreSearch from "@/hooks/usePhysicalStoreSearch"

const DynamicMap = dynamic(
  () => import("@/components/where-to-buy/PhysicalStores/Map/Map"),
  {
    ssr: false,
  }
)

type PhysicalStoresProps = {}

export default function PhysicalStores({}: PhysicalStoresProps) {
  const [mapReady, setMapReady] = useState(false)
  const { result } = usePhysicalStoreSearch()

  return (
    <section>
      {!mapReady && <MapLoadingSkeleton />}
      <DynamicMap setMapReady={setMapReady}>
        <div
          className="
                  absolute inset-x-[2vw] 
                  inset-y-[2.5vh] z-[999] 
                  flex flex-col gap-4
                "
        >
          <PostCodeOrCurrentLocationFilter />
          <LocationFilter />
          {result && <Result result={result} />}
        </div>
      </DynamicMap>
    </section>
  )
}
