"use client"

import { useTranslations } from "next-intl"

import { CiSearch } from "react-icons/ci"
import { RiSendPlaneLine } from "react-icons/ri"

import { Input } from "@/components/ui/input"

type PostCodeOrCurrentLocationFilterProps = {}

export default function PostCodeOrCurrentLocationFilter({}: PostCodeOrCurrentLocationFilterProps) {
  const tPhysicalStore = useTranslations("physical-store")

  return (
    <div className="flex h-fit w-full items-center justify-between">
      {/* Postal Code Filter */}
      <div className="flex items-center rounded-xl bg-white p-4 shadow-lg">
        <p className="font-hel_rounded text-h3">
          {tPhysicalStore("where-do-you-live")}
        </p>
        <Input
          type="text"
          placeholder={`(${tPhysicalStore("where-do-you-live-placeholder")})`}
          className="
                  focus-visible:ring-off mt-auto
                  w-[350px] border-none bg-transparent 
                  py-0 text-paragraph focus-visible:ring-0
                  focus-visible:ring-transparent focus-visible:ring-offset-0
                "
        />
        <button
          type="submit"
          className="
                  flex h-10 w-10 items-center 
                  justify-center rounded-full 
                  bg-bc-black
                "
        >
          <CiSearch color="white" className="text-paragraph" />
        </button>
      </div>

      {/* find me */}
      <button
        className="
                    group flex items-center 
                    gap-3 rounded-xl bg-white 
                    p-4 shadow-lg transition-all 
                    duration-500 hover:bg-black
                  "
      >
        <RiSendPlaneLine
          className="
                                text-paragraph text-black 
                                transition-all duration-500 
                                group-hover:text-white
                              "
        />
        <p
          className="
                    font-hel_rounded text-paragraph 
                    tracking-tight transition-all 
                    duration-500 group-hover:text-white
                  "
        >
          {tPhysicalStore("find-me")}
        </p>
      </button>
    </div>
  )
}
