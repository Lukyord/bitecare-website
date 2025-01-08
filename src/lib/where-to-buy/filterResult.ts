import { Store } from "@/payload/type-gen"
import { SearchFilter } from "@/types/where-to-buy/physical-store"

export function filterResult(
  searchFilter: SearchFilter,
  stores: Store[]
): Store[] {
  const result =
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

  const resultByStoreName =
    searchFilter.storeName.value === ""
      ? result
      : searchFilter.province.value === ""
        ? stores.filter(
            (store) =>
              store.name.includes(searchFilter.storeName.value) ||
              store.customer_name.includes(searchFilter.storeName.value)
          )
        : result.filter(
            (store) =>
              store.name.includes(searchFilter.storeName.value) ||
              store.customer_name.includes(searchFilter.storeName.value)
          )

  return resultByStoreName
}
