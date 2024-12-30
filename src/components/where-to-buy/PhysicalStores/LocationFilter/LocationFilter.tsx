"use client"

import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

import {
  ComboBoxChoice,
  PhysicalStore,
  SearchFilter,
} from "@/types/where-to-buy/physical-store"
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
import {
  getDistrict,
  getProvince,
  getSubdistrict,
} from "@/payload/service/location/gcs"
import { useLocale } from "next-intl"
import { Store } from "@/payload/type-gen"

type LocationFilterProps = {
  stores: Store[]
}

export default function LocationFilter({ stores }: LocationFilterProps) {
  const locale = useLocale()

  const [provincesChoices, setProvincesChoices] = useState<ComboBoxChoice[]>([])
  const [districtChoices, setDistrictChoices] = useState<ComboBoxChoice[]>([])
  const [subdistrictChoices, setSubdistrictChoices] = useState<
    ComboBoxChoice[]
  >([])
  const [storeNameChoices, setStoreNameChoices] = useState<ComboBoxChoice[]>([])
  const [searchFilter, setSearchFilter] = useState<SearchFilter>({
    province: {
      value: "",
      label: "",
    },
    district: {
      value: "",
      label: "",
    },
    subDistrict: {
      value: "",
      label: "",
    },
    storeName: {
      value: "",
      label: "",
    },
  })
  const searchParams = useSearchParams()

  const { filterAccordionValue, setFilterAccordionValue, setResult } =
    usePhysicalStoreSearch()
  const tPhysicalStore = useTranslations("physical-store")

  // Get Province Data
  useEffect(() => {
    const getProvinceData = async () => {
      const provinceData = await getProvince()
      if (provinceData) {
        setProvincesChoices(
          provinceData.map((province: any) => ({
            label: locale === "en" ? province.name_en : province.name_th,
            value: province.id,
          }))
        )
      }
    }

    getProvinceData()
  }, [])

  // Get District Data
  useEffect(() => {
    const getDistrictData = async () => {
      const districtData = await getDistrict(searchFilter.province.value)

      if (districtData) {
        setDistrictChoices(
          districtData.map((district: any) => ({
            label: locale === "en" ? district.name_en : district.name_th,
            value: district.id,
          }))
        )
      }
    }

    if (searchFilter.province.value !== "") {
      getDistrictData()
    }
  }, [searchFilter.province.value])

  // Get Subdistrict Data
  useEffect(() => {
    const getSubDistrictData = async () => {
      const subDistrictData = await getSubdistrict(searchFilter.district.value)

      if (subDistrictData) {
        setSubdistrictChoices(
          subDistrictData.map((subDistrict: any) => ({
            label: locale === "en" ? subDistrict.name_en : subDistrict.name_th,
            value: subDistrict.id,
          }))
        )
      }
    }

    if (searchFilter.district.value !== "") {
      getSubDistrictData()
    }
  }, [searchFilter.district.value])

  // Set Filter Accordion Value from URL search params
  useEffect(() => {
    const urlProvince = searchParams.get("province")
    const urlDistrict = searchParams.get("district")
    const urlSubDistrict = searchParams.get("subDistrict")
    const urlStoreName = searchParams.get("storeName")

    if (urlProvince || urlDistrict || urlSubDistrict || urlStoreName) {
      setFilterAccordionValue("")
      setSearchFilter({
        province: {
          value: urlProvince || "",
          label:
            provincesChoices.find((province) => province.value === urlProvince)
              ?.label || "",
        },
        district: {
          value: urlDistrict || "",
          label:
            provincesChoices.find((province) => province.value === urlDistrict)
              ?.label || "",
        },
        subDistrict: {
          value: urlSubDistrict || "",
          label:
            provincesChoices.find(
              (province) => province.value === urlSubDistrict
            )?.label || "",
        },
        storeName: { value: urlStoreName || "", label: urlStoreName || "" },
      })
      setResult(
        filterResult({
          province: {
            value: urlProvince || "",
            label:
              provincesChoices.find(
                (province) => province.value === urlProvince
              )?.label || "",
          },
          district: {
            value: urlDistrict || "",
            label:
              provincesChoices.find(
                (province) => province.value === urlDistrict
              )?.label || "",
          },
          subDistrict: {
            value: urlSubDistrict || "",
            label:
              provincesChoices.find(
                (province) => province.value === urlSubDistrict
              )?.label || "",
          },
          storeName: { value: urlStoreName || "", label: urlStoreName || "" },
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
                addressChoices={provincesChoices}
                setSearchFilter={setSearchFilter}
                addressKey="province"
                choice={searchFilter.province}
              />
              <AddressComboBox
                addressChoices={districtChoices}
                setSearchFilter={setSearchFilter}
                addressKey="district"
                disabled={searchFilter.province.value === ""}
                choice={searchFilter.district}
              />
              <AddressComboBox
                addressChoices={subdistrictChoices}
                setSearchFilter={setSearchFilter}
                addressKey="subDistrict"
                disabled={searchFilter.district.value === ""}
                choice={searchFilter.subDistrict}
              />
            </div>
            <h3 className="font-psl text-h3">{tPhysicalStore("store-name")}</h3>
            <AddressComboBox
              addressChoices={filterByStoreName(searchFilter)}
              setSearchFilter={setSearchFilter}
              addressKey="storeName"
              choice={searchFilter.storeName}
            />
          </div>

          <SearchButton searchFilter={searchFilter} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
