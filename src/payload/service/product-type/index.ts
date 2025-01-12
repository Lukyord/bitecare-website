import { getPayloadClient } from "@/lib/payload"
import { ProductType } from "@/payload/type-gen"
import { TransformCollectionWithSelect, TypedCollectionSelect } from "payload"
import { Locale } from "@/config/i18n.config"

type Options<T extends TypedCollectionSelect["product-type"]> = {
  select?: T
  locale?: Locale
}

export const getProductType = async <
  T extends TypedCollectionSelect["product-type"],
>(
  opts: Options<T> = {}
  // @ts-ignore: Too much type gymnastics
): Promise<TransformCollectionWithSelect<"product-type", T>[]> => {
  const payload = await getPayloadClient()
  const res = await payload.find({
    ...opts,
    collection: "product-type",
    pagination: false,
  })

  return res.docs
}
