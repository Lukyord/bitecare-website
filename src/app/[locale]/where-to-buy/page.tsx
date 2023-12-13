import { unstable_setRequestLocale } from "next-intl/server"

export default function WhereToBuyPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  return <div>Where to buy</div>
}
