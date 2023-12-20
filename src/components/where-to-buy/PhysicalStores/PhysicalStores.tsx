"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

import MapLoadingSkeleton from "./Map/MapLoadingSkeleton"
import LocationFilter from "./LocationFilter/LocationFilter"
import Result from "./Result/Result"
import PhysicalStoreSearchContextProvider from "@/context/PhysicalStoreSearchContextProvider"

const DynamicMap = dynamic(
  () => import("@/components/where-to-buy/PhysicalStores/Map/Map"),
  {
    ssr: false,
  }
)

const DynamicMapFitBoundOnSearch = dynamic(
  () =>
    import("@/components/where-to-buy/PhysicalStores/Map/MapFitBoundOnSearch"),
  {
    ssr: false,
  }
)

const DynamicPostCodeOrCurrentLocationFilter = dynamic(
  () =>
    import(
      "@/components/where-to-buy/PhysicalStores/PostCodeOrCurrentLocationFilter/PostCodeOrCurrentLocationFilter"
    ),
  {
    ssr: false,
  }
)

type PhysicalStoresProps = {}

export default function PhysicalStores({}: PhysicalStoresProps) {
  const [mapReady, setMapReady] = useState(false)

  return (
    <section>
      {!mapReady && <MapLoadingSkeleton />}
      <PhysicalStoreSearchContextProvider>
        <DynamicMap setMapReady={setMapReady}>
          <DynamicMapFitBoundOnSearch />
          <div
            className="
                    absolute left-[2vw] top-[16px] 
                    z-[999] w-[96vw]
                  "
          >
            <DynamicPostCodeOrCurrentLocationFilter />
          </div>
          <div
            className="
                      absolute left-[2vw] top-[100px] 
                      z-[999] hidden flex-col gap-4
                      lg:flex         
                    "
          >
            <LocationFilter />
            <Result />
          </div>
        </DynamicMap>
        <div className="mx-[2vw] my-4 flex flex-col gap-4 lg:hidden">
          <LocationFilter />
          <Result />
        </div>
      </PhysicalStoreSearchContextProvider>
    </section>
  )
}
