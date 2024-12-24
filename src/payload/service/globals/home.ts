import { Locale } from "@/config/i18n.config"
import { getPayloadClient } from "@/lib/payload"
import { TransformGlobalWithSelect, TypedGlobalSelect } from "payload"

type Options<T extends TypedGlobalSelect["home"]> = {
  select?: T
  locale?: Locale
  depth?: number
}

export const getHomeConfigs = async <T extends TypedGlobalSelect["home"]>(
  opts: Options<T> = {}
  // @ts-ignore: Too much type gymnastics
): Promise<TransformGlobalWithSelect<"home", T>> => {
  const payload = await getPayloadClient()
  const res = await payload.findGlobal({
    ...opts,
    slug: "home",
  })

  return res
}
