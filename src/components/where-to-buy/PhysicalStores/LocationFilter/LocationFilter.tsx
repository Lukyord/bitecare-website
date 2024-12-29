"use client"

import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

import {
  PhysicalStore,
  SearchFilter,
} from "@/types/where-to-buy/physical-store"
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
import SearchButton from "./SearchButton"
import { usePhysicalStoreSearch } from "@/context/PhysicalStoreSearchContextProvider"
import { useSearchParams } from "next/navigation"
import { filterResult } from "@/lib/where-to-buy/filterResult"

export default function LocationFilter() {
  const [searchFilter, setSearchFilter] = useState<SearchFilter>({
    province: "",
    district: "",
    subDistrict: "",
    storeName: "",
  })
  const searchParams = useSearchParams()

  const { filterAccordionValue, setFilterAccordionValue, setResult } =
    usePhysicalStoreSearch()
  const tPhysicalStore = useTranslations("physical-store")

  useEffect(() => {}, [])

  useEffect(() => {
    const urlProvince = searchParams.get("province")
    const urlDistrict = searchParams.get("district")
    const urlSubDistrict = searchParams.get("subDistrict")
    const urlStoreName = searchParams.get("storeName")

    if (urlProvince || urlDistrict || urlSubDistrict || urlStoreName) {
      setFilterAccordionValue("")
      setSearchFilter({
        province: urlProvince || "",
        district: urlDistrict || "",
        subDistrict: urlSubDistrict || "",
        storeName: urlStoreName || "",
      })
      setResult(
        filterResult({
          province: urlProvince || "",
          district: urlDistrict || "",
          subDistrict: urlSubDistrict || "",
          storeName: urlStoreName || "",
        })
      )
    }
  }, [searchParams, setResult, setFilterAccordionValue])

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full rounded-xl bg-white shadow-lg lg:w-[600px] lg:p-2"
      value={filterAccordionValue}
      onValueChange={setFilterAccordionValue}
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

          <SearchButton searchFilter={searchFilter} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
