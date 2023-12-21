"use client"

import { useTranslations } from "next-intl"

import { RiSendPlaneLine } from "react-icons/ri"

import { Link } from "@/lib/navigation"

type FindMeProps = {
  distance: number
  filterByDistance: () => void
}

export default function FindMe({ distance, filterByDistance }: FindMeProps) {
  const tButton = useTranslations("button")

  return (
    <Link
      href={{
        pathname: "/where-to-buy",
        query: {
          type: "physical-store",
          province: "",
          district: "",
          subDistrict: "",
          storeName: "",
          distance: distance.toString(),
          postCode: "",
          focus: "",
        },
      }}
      scroll={false}
      replace
      prefetch={false}
    >
      <button
        className="
              group flex items-center 
              gap-3 rounded-xl bg-white 
              p-2 shadow-lg transition-all duration-500 
              hover:bg-bc-black sm:p-4
            "
        onClick={filterByDistance}
      >
        <RiSendPlaneLine
          size={24}
          className="
              text-bc-black 
                transition-all duration-500 
              group-hover:text-white
              "
        />
        <p
          className="
                font-hel_rounded text-subtitle tracking-tight 
                text-bc-black transition-all duration-500
                group-hover:text-white sm:text-paragraph
              "
        >
          {tButton("find-me")}
        </p>
      </button>
    </Link>
  )
}
