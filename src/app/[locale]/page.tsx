import { useTranslations } from "next-intl"

export default function Home() {
  const tCommon = useTranslations("navbar")

  return (
    <main>
      <h1 className="text-red bg-black text-6xl">bitecare</h1>
    </main>
  )
}
