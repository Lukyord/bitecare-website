import ComparingProductsSection from "@/components/homepage/ComparingProductsSection/ComparingProductsSection"
import HeroSection from "@/components/homepage/HeroSection/HeroSection"
import PrinciplesSection from "@/components/homepage/PrinciplesSection/PrinciplesSection"

export default function Home() {
  return (
    <main className="no-scrollbar overflow-x-hidden pt-28">
      <HeroSection />
      <PrinciplesSection />
      <ComparingProductsSection />

      <h1
        className="my-[200px] scroll-mt-36 font-hel_rounded text-subtitle"
        id="faq"
      >
        FAQ
      </h1>
    </main>
  )
}
