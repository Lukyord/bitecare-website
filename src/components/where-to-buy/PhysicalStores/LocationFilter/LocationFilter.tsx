"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"

import { SearchFilter } from "@/types/where-to-buy/physical-store"
import { provinces } from "@/constant/addresses"
import {
  filterDistrictByProvince,
  filterSubDistrictByDistrict,
} from "@/lib/where-to-buy/filterByAddress"
import { filterByStoreName } from "@/lib/where-to-buy/filterByStoreName"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import AddressComboBox from "./AddressComboBox"
import { Button } from "@/components/ui/button"

type LocationFilterProps = {}

export default function LocationFilter({}: LocationFilterProps) {
  const [searchFilter, setSearchFilter] = useState<SearchFilter>({
    province: "",
    district: "",
    subDistrict: "",
    storeName: "",
  })
  const tPhysicalStore = useTranslations("physical-store")
  const tButton = useTranslations("button")
  const tPhysicalStoreToast = useTranslations("physical-store-toast")

  return (
    <Accordion
      type="single"
      collapsible
      className="w-[600px] rounded-xl bg-white shadow-lg lg:p-2"
    >
      <AccordionItem value="location filter" className="border-none">
        <AccordionTrigger
          className="
                  px-4 text-start font-hel_rounded 
                  text-paragraph hover:no-underline 
                  sm:text-h3
                "
        >
          {tPhysicalStore("filter")}
        </AccordionTrigger>
        <AccordionContent className="px-4">
          <Separator className="my-4 bg-bc-black px-4" />

          <div className="flex flex-col gap-3">
            <h3 className="font-psl text-h3">{tPhysicalStore("location")}</h3>
            <div className="flex flex-col gap-1">
              <AddressComboBox
                addressChoices={provinces}
                setSearchFilter={setSearchFilter}
                addressKey="province"
                value={searchFilter.province}
              />
              <AddressComboBox
                addressChoices={filterDistrictByProvince(searchFilter)}
                setSearchFilter={setSearchFilter}
                addressKey="district"
                disabled={searchFilter.province === ""}
                value={searchFilter.district}
              />
              <AddressComboBox
                addressChoices={filterSubDistrictByDistrict(searchFilter)}
                setSearchFilter={setSearchFilter}
                addressKey="subDistrict"
                disabled={searchFilter.district === ""}
                value={searchFilter.subDistrict}
              />
            </div>
            <h3 className="font-psl text-h3">{tPhysicalStore("store-name")}</h3>
            <AddressComboBox
              addressChoices={filterByStoreName(searchFilter)}
              setSearchFilter={setSearchFilter}
              addressKey="storeName"
              value={searchFilter.storeName}
            />
          </div>

          <Button>{tButton("search")}</Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
