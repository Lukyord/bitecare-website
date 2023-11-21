import { useTranslations } from "next-intl"

export default function Home() {
  const tCommon = useTranslations("Index")

  return (
    <main>
      <h1 className="text-red bg-black text-6xl">bitecare</h1>
      <p>{tCommon("title")}</p>
    </main>
  )
}
