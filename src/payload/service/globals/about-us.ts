import { Locale } from "@/config/i18n.config"
import { getPayloadClient } from "@/lib/payload"
import { TransformGlobalWithSelect, TypedGlobalSelect } from "payload"

type Options<T extends TypedGlobalSelect["about-us"]> = {
  select?: T
  locale?: Locale
  depth?: number
}

export const getAboutUsConfigs = async <
  T extends TypedGlobalSelect["about-us"],
>(
  opts: Options<T> = {}
  // @ts-ignore: Too much type gymnastics
): Promise<TransformGlobalWithSelect<"about-us", T>> => {
  const payload = await getPayloadClient()
  const res = await payload.findGlobal({
    ...opts,
    slug: "about-us",
  })

  return res
}
