import { unstable_setRequestLocale } from "next-intl/server"

import PhysicalStores from "@/components/where-to-buy/PhysicalStores/PhysicalStores"

export default function WhereToBuyPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)

  return (
    <div className="pt-36">
      <PhysicalStores />
    </div>
  )
}
