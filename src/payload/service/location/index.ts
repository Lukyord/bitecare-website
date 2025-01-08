import { Locale } from "@/config/i18n.config"
import { getPayloadClient } from "@/lib/payload"

import { TransformCollectionWithSelect, TypedCollectionSelect } from "payload"

type Options<T extends TypedCollectionSelect["store"]> = {
  select?: T
  locale?: Locale
  depth?: number
  page?: number
}

export const getAllStores = async <T extends TypedCollectionSelect["store"]>(
  opts: Options<T> = {}
  // @ts-ignore: Too much type gymnastics
): Promise<TransformCollectionWithSelect<"store", T>[]> => {
  const payload = await getPayloadClient()
  const res = await payload.find({
    ...opts,
    collection: "store",
    pagination: false,
  })

  return res.docs
}

export const getAllOnlineStores = async <
  T extends TypedCollectionSelect["online-store"],
>(
  opts: Options<T> = {}
  // @ts-ignore: Too much type gymnastics
): Promise<TransformCollectionWithSelect<"online-store", T>[]> => {
  const payload = await getPayloadClient()
  const res = await payload.find({
    ...opts,
    collection: "online-store",
    pagination: false,
  })

  return res.docs
}
