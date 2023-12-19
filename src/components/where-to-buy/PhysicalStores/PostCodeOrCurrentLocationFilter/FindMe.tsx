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
      href={`/where-to-buy?type=physical-store&distance=${distance}`}
      scroll={false}
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
