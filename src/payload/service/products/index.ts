import { Locale } from "@/config/i18n.config"
import { getPayloadClient } from "@/lib/payload"

import { TransformCollectionWithSelect, TypedCollectionSelect } from "payload"

type Options<T extends TypedCollectionSelect["product"]> = {
  select?: T
  locale?: Locale
  depth?: number
  page?: number
}

export const getAllProducts = async <
  T extends TypedCollectionSelect["product"],
>(
  opts: Options<T> = {}
  // @ts-ignore: Too much type gymnastics
): Promise<TransformCollectionWithSelect<"product", T>[]> => {
  const payload = await getPayloadClient()
  const res = await payload.find({
    ...opts,
    collection: "product",
    pagination: false,
  })

  return res.docs
}

export const getProductBySlug = async <
  T extends TypedCollectionSelect["product"],
>(
  slug: string,
  opts: Options<T> = {}
  // @ts-ignore: Too much type gymnastics
): Promise<TransformCollectionWithSelect<"product", T> | null> => {
  const payload = await getPayloadClient()
  const res = await payload.find({
    ...opts,
    collection: "product",
    where: {
      slug: {
        equals: slug,
      },
    },
    pagination: false,
  })

  if (res.totalDocs === 0) {
    return null
  }

  return res.docs[0]
}
