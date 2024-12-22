"use client"

import React from "react"
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  Tooltip,
} from "react-leaflet"
import { useTranslations } from "next-intl"
import { useRouter, useSearchParams } from "next/navigation"

import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css" // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility"

import { usePhysicalStoreSearch } from "@/context/PhysicalStoreSearchContextProvider"
import { Button } from "@/components/ui/button"

type MapProps = {
  children: React.ReactNode
  setMapReady: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Map({ children, setMapReady }: MapProps) {
  const router = useRouter()
  const { result } = usePhysicalStoreSearch()
  const tButton = useTranslations("button")
  const searchParams = useSearchParams()
  const province = searchParams.get("province") || ""
  const district = searchParams.get("district") || ""
  const subDistrict = searchParams.get("subDistrict") || ""
  const storeName = searchParams.get("storeName") || ""
  const distance = searchParams.get("distance") || ""
  const postCode = searchParams.get("postCode") || ""

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
          <Marker
            position={[store.lat, store.long]}
            eventHandlers={{
              click: () => {
                const queryParams = new URLSearchParams({
                  province,
                  district,
                  subDistrict,
                  storeName,
                  distance,
                  postCode,
                  focus: store.name,
                })
                router.replace(
                  `/where-to-buy?type=physical-store&${queryParams.toString()}`,
                  { scroll: false }
                )
              },
            }}
          >
            <Tooltip>
              <p className="px-4 font-psl text-subtitle sm:text-paragraph">
                {store.name}
              </p>
            </Tooltip>
            <Popup>
              <div className="flex flex-col gap-3 font-psl">
                <h4 className="text-paragraph text-bc-black sm:text-h3">
                  {store.name}
                </h4>
                <div className=" flex h-fit items-center gap-2">
                  <FaMapMarkerAlt size={24} className="text-[#F24E1E]" />
                  <span className="text-subtitle text-bc-black">
                    {store.address}
                  </span>
                </div>
                {store.phone && (
                  <div className=" flex items-center gap-2">
                    <FaPhoneAlt size={24} className="text-bc-primary" />
                    <span className="text-subtitle text-bc-black">
                      {store.phone}
                    </span>
                  </div>
                )}

                <div
                  className="flex justify-center"
                  onClick={() => window.open(store.link, "_blank")}
                >
                  <Button className="w-fit text-[16px] sm:text-[24px]">
                    {tButton("view-on-google-map")}
                  </Button>
                </div>
              </div>
            </Popup>
          </Marker>
        </React.Fragment>
      ))}
      {children}
    </MapContainer>
  )
}
