import * as BiteCareStoresJSON from "../../data/BiteCareJSON.json"
import StoresData from "@/constant/store-data"

export const Stores: typeof StoresData = StoresData.map((store) => {
  const trimmedStore = Object.fromEntries(
    Object.entries(store).map(([key, value]) =>
      typeof value === "string" ? [key, value.trim()] : [key, value]
    )
  )

  return trimmedStore
})
