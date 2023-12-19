import { Stores } from "@/constant/stores"
import {
  ComboBoxChoice,
  SearchFilter,
} from "@/types/where-to-buy/physical-store"

export function filterDistrictByProvince(
  searchFilter: SearchFilter
): ComboBoxChoice[] {
  const All_Stores_In_Province = Stores.filter(
    (store) => store.province === searchFilter.province
  )
  const All_Districts_In_Province = Array.from(
    new Set(All_Stores_In_Province.map((store) => store.district))
  )
  const uniqueDistricts: ComboBoxChoice[] = All_Districts_In_Province.map(
    (district) => ({
      label: district,
      value: district,
    })
  )

  return uniqueDistricts
}

export function filterSubDistrictByDistrict(
  searchFilter: SearchFilter
): ComboBoxChoice[] {
  const All_Stores_In_District = Stores.filter(
    (store) =>
      store.province === searchFilter.province &&
      store.district === searchFilter.district
  )
  const All_Sub_Districts_In_District = Array.from(
    new Set(All_Stores_In_District.map((store) => store["sub-district"]))
  )

  const uniqueSubDistricts: ComboBoxChoice[] =
    All_Sub_Districts_In_District.map((subDistrict) => ({
      label: subDistrict,
      value: subDistrict,
    }))

  return uniqueSubDistricts
}
