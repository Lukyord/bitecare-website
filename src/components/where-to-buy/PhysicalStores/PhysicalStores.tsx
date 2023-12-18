"use client"

import dynamic from "next/dynamic"
import PostCodeOrCurrentLocationFilter from "./PostCodeOrCurrentLocationFilter"
import { useState } from "react"
import MapLoadingSkeleton from "./MapLoadingSkeleton"

const DynamicMap = dynamic(
  () => import("@/components/where-to-buy/PhysicalStores/Map"),
  {
    ssr: false,
  }
)

type PhysicalStoresProps = {}

export default function PhysicalStores({}: PhysicalStoresProps) {
  const [mapReady, setMapReady] = useState(false)

  return (
    <section className="h-[100vh] w-[100vw]">
      {!mapReady && <MapLoadingSkeleton />}
      <DynamicMap setMapReady={setMapReady}>
        {/* Postal Code Filter & Find Me */}
        <div className="absolute inset-x-[2vw] inset-y-[2.5vh] z-[999]">
          <PostCodeOrCurrentLocationFilter />
        </div>

        {/* Location Filter */}

        {/* Result */}
      </DynamicMap>
    </section>
  )
}
