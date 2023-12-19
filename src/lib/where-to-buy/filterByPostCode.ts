import { Stores } from "@/constant/stores"

export function filterByPostCode(postCode: string) {
  const result = Stores.filter(
    (store) => store["post-code"].toString() === postCode
  )

  return result
}
