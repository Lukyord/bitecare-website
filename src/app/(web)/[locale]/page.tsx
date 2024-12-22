import { setRequestLocale } from "next-intl/server"

import ComparingProductsSection from "@/components/homepage/ComparingProductsSection/ComparingProductsSection"
import FaqSection from "@/components/homepage/FaqSection/FaqSection"
import HeroSection from "@/components/homepage/HeroSection/HeroSection"
import PrinciplesSection from "@/components/homepage/PrinciplesSection/PrinciplesSection"
import { i18n } from "@/config/i18n.config"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    locale,
  }))
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const locale = (await params).locale

  setRequestLocale(locale)

  return (
    <main className="overflow-x-hidden pt-28">
      <HeroSection />
      <PrinciplesSection />
      <ComparingProductsSection />
      <FaqSection />
    </main>
  )
}
