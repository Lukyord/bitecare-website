import { Stores } from "@/constant/stores"
import {
  PhysicalStore,
  SearchFilter,
} from "@/types/where-to-buy/physical-store"

export function filterResult(searchFilter: SearchFilter): PhysicalStore[] {
  const result =
    searchFilter.district === ""
      ? Stores.filter((store) => store.province === searchFilter.province)
      : searchFilter.subDistrict === ""
        ? Stores.filter(
            (store) =>
              store.province === searchFilter.province &&
              store.district === searchFilter.district
          )
        : Stores.filter(
            (store) =>
              store.province === searchFilter.province &&
              store.district === searchFilter.district &&
              store["sub-district"] === searchFilter.subDistrict
          )

  const resultByStoreName =
    searchFilter.storeName === ""
      ? result
      : searchFilter.province === ""
        ? Stores.filter(
            (store) =>
              store.name.includes(searchFilter.storeName) ||
              store["customer-name"].includes(searchFilter.storeName)
          )
        : result.filter(
            (store) =>
              store.name.includes(searchFilter.storeName) ||
              store["customer-name"].includes(searchFilter.storeName)
          )

  return resultByStoreName
}
