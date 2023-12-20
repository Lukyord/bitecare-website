"use client"

import React from "react"
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet"
import { useTranslations } from "next-intl"

import { Link } from "@/lib/navigation"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css" // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility"

import { usePhysicalStoreSearch } from "@/context/PhysicalStoreSearchContextProvider"
import { Button } from "@/components/ui/button"

type MapProps = {
  children: React.ReactNode
  setMapReady: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Map({ children, setMapReady }: MapProps) {
  const { result } = usePhysicalStoreSearch()
  const tButton = useTranslations("button")

  return (
    <MapContainer
      center={[13.7563, 100.5018]}
      zoom={15}
      scrollWheelZoom={false}
      zoomControl={false}
      className="relative h-[60vh] w-[100vw] lg:h-[100vh] lg:overflow-clip"
      whenReady={() => {
        setMapReady(true)
      }}
    >
      <ZoomControl position="bottomright" />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {result?.map((store, index) => (
        <React.Fragment key={index}>
          <Marker position={[store.lat, store.long]}>
            <Popup>
              <div className="flex flex-col gap-3 font-psl">
                <h4 className="text-subtitle sm:text-h3">{store.name}</h4>
                <Link
                  href={store.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-[16px] sm:text-[24px]">
                    {tButton("view-on-google-map")}
                  </Button>
                </Link>
              </div>
            </Popup>
          </Marker>
        </React.Fragment>
      ))}
      {children}
    </MapContainer>
  )
}
