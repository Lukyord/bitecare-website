"use client"

import React from "react"
import { useTranslations } from "next-intl"

import { CiSearch } from "react-icons/ci"

import { Separator } from "@/components/ui/separator"
import ResultCard from "./ResultCard"
import { usePhysicalStoreSearch } from "@/context/PhysicalStoreSearchContextProvider"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Result() {
  const tPhysicalStore = useTranslations("physical-store")
  const { result } = usePhysicalStoreSearch()

  if (!result) return null

  return (
    <div className="w-[600px] cursor-default rounded-xl bg-white shadow-lg lg:p-2">
      <h3
        className="
                  p-4 text-start 
                  font-hel_rounded text-paragraph 
                  hover:no-underline sm:text-h3
                "
      >
        {tPhysicalStore("result")}
      </h3>

      <div className="flex flex-col items-center gap-3 px-4  font-psl">
        <Separator className="my-4 bg-bc-black px-4" />

        {result.length === 0 ? (
          <div className="mb-4 flex flex-col items-center gap-4">
            <CiSearch color="grey" size={120} />
            <h4 className="text-h3">{tPhysicalStore("no-result")}</h4>
            <p className="w-[60%] text-center text-paragraph">
              {tPhysicalStore("no-result-description")}
            </p>
          </div>
        ) : (
          <ScrollArea className="h-[50vh] w-full pr-4">
            <div className="flex flex-col gap-3">
              {result.map((store, index) => (
                <React.Fragment key={index}>
                  <ResultCard physicalStore={store} />
                </React.Fragment>
              ))}
            </div>
          </ScrollArea>
        )}
      </div>
    </div>
  )
}
