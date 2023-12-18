import { AreaDivisionChoice } from "@/types/where-to-buy/physical-store"
import { Stores } from "./stores"

const uniqueProvinces = Array.from(
  new Set(Stores.map((store) => store.province.trim()))
)
const uniqueDistricts = Array.from(
  new Set(Stores.map((store) => store.district?.trim() || ""))
)
const uniqueSubDistricts = Array.from(
  new Set(Stores.map((store) => store["sub-district"].trim()))
)

export const provinces: AreaDivisionChoice[] = uniqueProvinces.map(
  (province) => ({
    label: province,
    value: province,
  })
)

export const districts: AreaDivisionChoice[] = uniqueDistricts.map(
  (district) => ({
    label: district,
    value: district,
  })
)

export const subDistricts: AreaDivisionChoice[] = uniqueSubDistricts.map(
  (subDistrict) => ({
    label: subDistrict,
    value: subDistrict,
  })
)
