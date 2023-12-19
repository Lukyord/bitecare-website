import BiteCareStoresJSON from "../../data/BiteCareJSON.json"

export const Stores = BiteCareStoresJSON.map((store) => {
  const trimmedStore = Object.fromEntries(
    Object.entries(store).map(([key, value]) =>
      typeof value === "string" ? [key, value.trim()] : [key, value]
    )
  )

  return trimmedStore
})
