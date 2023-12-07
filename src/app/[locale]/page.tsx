import ComparingProductsSection from "@/components/homepage/ComparingProductsSection/ComparingProductsSection"
import FaqSection from "@/components/homepage/FaqSection/FaqSection"
import HeroSection from "@/components/homepage/HeroSection/HeroSection"
import PrinciplesSection from "@/components/homepage/PrinciplesSection/PrinciplesSection"

export default function Home() {
  // font-hel_rounded
  return (
    <main className="no-scrollbar overflow-x-hidden pt-28">
      <HeroSection />
      <PrinciplesSection />
      <ComparingProductsSection />
      <FaqSection />
    </main>
  )
}
