import { Stores } from "@/constant/stores"
import {
  PhysicalStore,
  SearchFilter,
} from "@/types/where-to-buy/physical-store"

export function filterResult(searchFilter: SearchFilter): PhysicalStore[] {
  const result =
    searchFilter.district.value === ""
      ? Stores.filter((store) => store.province === searchFilter.province.value)
      : searchFilter.subDistrict.value === ""
        ? Stores.filter(
            (store) =>
              store.province === searchFilter.province.value &&
              store.district === searchFilter.district.value
          )
        : Stores.filter(
            (store) =>
              store.province === searchFilter.province.value &&
              store.district === searchFilter.district.value &&
              store["sub-district"] === searchFilter.subDistrict.value
          )

  const resultByStoreName =
    searchFilter.storeName.value === ""
      ? result
      : searchFilter.province.value === ""
        ? Stores.filter(
            (store) =>
              store.name.includes(searchFilter.storeName.value) ||
              store["customer-name"].includes(searchFilter.storeName.value)
          )
        : result.filter(
            (store) =>
              store.name.includes(searchFilter.storeName.value) ||
              store["customer-name"].includes(searchFilter.storeName.value)
          )

  return resultByStoreName
}
