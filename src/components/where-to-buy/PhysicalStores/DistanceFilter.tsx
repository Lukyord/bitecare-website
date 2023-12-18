"use client"

import { useState } from "react"
import { Link } from "@/lib/navigation"
import { useTranslations } from "next-intl"
import { GiPathDistance } from "react-icons/gi"
import { useMap } from "react-leaflet"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { IoClose } from "react-icons/io5"
import { PopoverArrow, PopoverClose } from "@radix-ui/react-popover"
import { Slider } from "@/components/ui/slider"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function DistanceFilter() {
  const map = useMap()
  const { toast } = useToast()
  const searchParams = useSearchParams()
  const [distance, setDistance] = useState(
    parseInt(searchParams.get("distance") || "15")
  )
  const tPhysicalStore = useTranslations("physical-store")
  const tPhysicalStoreToast = useTranslations("physical-store-toast")

  return (
    <Popover
      onOpenChange={() =>
        setDistance(parseInt(searchParams.get("distance") || "15"))
      }
    >
      <PopoverTrigger asChild>
        <button
          className="
              group  flex 
              items-center rounded-xl 
              bg-white p-4 shadow-lg 
              transition-all duration-500
              hover:bg-black
            "
        >
          <GiPathDistance
            size={24}
            className="
             text-black 
              transition-all duration-500 
              group-hover:text-white
            "
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="z-[999]" avoidCollisions>
        <PopoverClose className="flex w-full justify-end">
          <IoClose size={20} />
        </PopoverClose>
        <div
          className="
                  flex min-w-[150px] flex-col 
                  gap-6 rounded-xl bg-white
                  text-paragraph sm:text-h3
                "
        >
          <h3>{tPhysicalStore("distance")}</h3>
          <div className="flex items-center gap-3">
            <h4 className="rounded-lg border border-bc-grey p-2">
              {distance}{" "}
            </h4>
            <span>{tPhysicalStore("km")}</span>
          </div>

          <Slider
            value={[distance]}
            max={100}
            min={5}
            step={1}
            className="w-[100%]"
            onValueChange={(value) => setDistance(value[0])}
          />

          <Link
            className="flex w-full justify-center"
            href={`/where-to-buy?type=physical-store&distance=${distance}`}
            scroll={false}
            onClick={() => {
              map.locate().on("locationfound", function (e) {
                map.flyTo(e.latlng, map.getZoom())
              })

              map.locate().on("locationerror", function (e) {
                toast({
                  title: tPhysicalStoreToast("something-went-wrong"),
                  description: tPhysicalStoreToast("cant-access-location"),
                })
              })
            }}
          >
            <Button size="lg" className="w-fit text-2xl">
              {tPhysicalStore("search")}
            </Button>
          </Link>
        </div>
        <PopoverArrow className="fill-white" />
      </PopoverContent>
    </Popover>
  )
}
