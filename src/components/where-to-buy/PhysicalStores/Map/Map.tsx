"use client"

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet"

import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css" // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility"

type MapProps = {
  children: React.ReactNode
  setMapReady: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Map({ children, setMapReady }: MapProps) {
  return (
    <MapContainer
      center={[13.7563, 100.5018]}
      zoom={15}
      scrollWheelZoom={false}
      zoomControl={false}
      doubleClickZoom={false}
      className="relative h-[60vh] w-[100vw] overflow-clip sm:h-[100vh]"
      whenReady={() => {
        setMapReady(true)
      }}
    >
      <ZoomControl position="bottomright" />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[13.7563, 100.5018]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      {children}
    </MapContainer>
  )
}
