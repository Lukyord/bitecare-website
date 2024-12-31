import { Store } from "@/payload/type-gen"
import {
  ComboBoxChoice,
  SearchFilter,
} from "@/types/where-to-buy/physical-store"

export function filterByStoreName(
  searchFilter: SearchFilter,
  stores: Store[]
): ComboBoxChoice[] {
  // Filter cases:
  // 1) If province is empty, return all stores.
  // 2) If district is empty, return stores in the specified province.
  // 3) If subDistrict is empty, return stores in the specified province and district.
  // 4) If all filters are specified, return stores in the specified province, district, and subdistrict.

  const All_Stores_In_Sub_District =
    searchFilter.province.value === ""
      ? stores
      : searchFilter.district.value === ""
        ? stores.filter(
            (store) => store.province === searchFilter.province.value
          )
        : searchFilter.subDistrict.value === ""
          ? stores.filter(
              (store) =>
                store.province === searchFilter.province.value &&
                store.district === searchFilter.district.value
            )
          : stores.filter(
              (store) =>
                store.province === searchFilter.province.value &&
                store.district === searchFilter.district.value &&
                store.subdistrict === searchFilter.subDistrict.value
            )

  const All_Store_Names_In_Sub_District = Array.from(
    new Set(All_Stores_In_Sub_District.map((store) => store.name))
  )

  const uniqueStoreNames: ComboBoxChoice[] =
    All_Store_Names_In_Sub_District.map((storeName) => ({
      label: storeName,
      value: storeName,
    }))

  return uniqueStoreNames
}
