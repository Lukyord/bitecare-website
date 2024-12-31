import { Store } from "@/payload/type-gen"

export function filterByPostCode(postCode: string, stores: Store[]) {
  const result = stores.filter(
    (store) => store.postal_code.toString() === postCode
  )

  return result
}
