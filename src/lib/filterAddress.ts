import { Stores } from "@/constant/stores"
import { AreaDivisionChoice } from "@/types/where-to-buy/physical-store"

export function filterDistrictFromProvince(
  province: string
): AreaDivisionChoice[] {
  const All_Stores_In_Province = Stores.filter(
    (store) => store.province === province
  )
  const All_Districts_In_Province = Array.from(
    new Set(All_Stores_In_Province.map((store) => store.district))
  )
  const uniqueDistricts: AreaDivisionChoice[] = All_Districts_In_Province.map(
    (district) => ({
      label: district,
      value: district,
    })
  )

  return uniqueDistricts
}

export function filterSubDistrictFromDistrict(
  province: string,
  district: string
): AreaDivisionChoice[] {
  const All_Stores_In_District = Stores.filter(
    (store) => store.province === province && store.district === district
  )
  const All_Sub_Districts_In_District = Array.from(
    new Set(All_Stores_In_District.map((store) => store["sub-district"]))
  )

  const uniqueSubDistricts: AreaDivisionChoice[] =
    All_Sub_Districts_In_District.map((subDistrict) => ({
      label: subDistrict,
      value: subDistrict,
    }))

  return uniqueSubDistricts
}
