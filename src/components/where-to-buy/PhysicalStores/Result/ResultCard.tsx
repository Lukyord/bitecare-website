"use client"

import { useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"

import { PhysicalStore } from "@/types/where-to-buy/physical-store"
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"

import { Button } from "@/components/ui/button"
import { Link } from "@/lib/navigation"
import { cn } from "@/lib/utils"

type ResultCardProps = {
  physicalStore: PhysicalStore
}

export default function ResultCard({ physicalStore }: ResultCardProps) {
  const tButton = useTranslations("button")
  const searchParams = useSearchParams()
  const focus = searchParams.get("focus")
  const province = searchParams.get("province")
  const district = searchParams.get("district")
  const subDistrict = searchParams.get("subDistrict")
  const storeName = searchParams.get("storeName")
  const distance = searchParams.get("distance")
  const postCode = searchParams.get("postCode")

  return (
    <Link
      href={{
        pathname: "/where-to-buy",
        query: {
          type: "physical-store",
          province: province,
          district: district,
          subDistrict: subDistrict,
          storeName: storeName,
          distance: distance,
          postCode: postCode,
          focus: physicalStore.name,
        },
      }}
      className={`
                flex max-h-fit min-h-[200px] w-full 
                flex-col justify-between gap-5
                rounded-2xl
                p-8 transition-all
                duration-300 hover:bg-bc-primary-container sm:h-[300px]
                ${cn({
                  "bg-bc-primary-container": focus === physicalStore.name,
                  "bg-bc-surface-container": focus !== physicalStore.name,
                })}
              `}
      scroll={false}
      replace
      prefetch={false}
    >
      <div className="flex flex-col gap-3">
        <h4 className="text-paragraph text-bc-black sm:text-h3">
          {physicalStore.name}
        </h4>
        <div className="flex gap-2">
          <FaMapMarkerAlt size={24} className="text-[#F24E1E]" />
          <p className="text-subtitle text-bc-black sm:text-paragraph">
            {physicalStore.address}
          </p>
        </div>
        {physicalStore.phone && (
          <div className="flex gap-2">
            <FaPhoneAlt size={24} className="text-bc-primary" />
            <p className="text-subtitle text-bc-black sm:text-paragraph">
              {physicalStore.phone}
            </p>
          </div>
        )}
      </div>

      <div
        className="flex w-fit"
        onClick={() => window.open(physicalStore.link, "_blank")}
      >
        <Button className="w-fit px-8 text-[16px] sm:text-[24px]">
          {tButton("view-on-google-map")}
        </Button>
      </div>
    </Link>
  )
}
