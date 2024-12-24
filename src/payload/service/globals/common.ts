import { Locale } from "@/config/i18n.config"
import { getPayloadClient } from "@/lib/payload"
import { TransformGlobalWithSelect, TypedGlobalSelect } from "payload"

type Options<T extends TypedGlobalSelect["common"]> = {
  select?: T
  locale?: Locale
  depth?: number
}

export const getCommonConfigs = async <T extends TypedGlobalSelect["common"]>(
  opts: Options<T> = {}
  // @ts-ignore: Too much type gymnastics
): Promise<TransformGlobalWithSelect<"common", T>> => {
  const payload = await getPayloadClient()
  const res = await payload.findGlobal({
    ...opts,
    slug: "common",
  })

  return res
}
