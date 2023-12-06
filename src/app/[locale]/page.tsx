import HeroSection from "@/components/homepage/HeroSection/HeroSection"
import ArcGradient from "@/components/homepage/PrinciplesSection/ArcGradient"
import PrinciplesSection from "@/components/homepage/PrinciplesSection/PrinciplesSection"

export default function Home() {
  return (
    <main className="no-scrollbar overflow-x-hidden pt-28">
      <HeroSection />
      <PrinciplesSection />

      <ArcGradient vwSize="200vw" radius={100} vwHeight="30vw" direction="up" />
      <ArcGradient
        vwSize="200vw"
        radius={100}
        vwHeight="30vw"
        direction="down"
      />
      <h1
        className="my-[200px] scroll-mt-36 font-hel_rounded text-subtitle"
        id="faq"
      >
        FAQ
      </h1>
    </main>
  )
}
