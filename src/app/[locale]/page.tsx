import ArcGradient from "@/components/homepage/PrinciplesSection/ArcGradient"

export default function Home() {
  return (
    <main className="no-scrollbar overflow-x-hidden pt-28">
      <HeroSection />
      <h1
        className="mt-[200px] scroll-mt-36 font-hel_rounded text-subtitle"
        id="faq"
      >
        FAQ
      </h1>
      <ArcGradient vwSize="200vw" radius={100} vwHeight="30vw" direction="up" />
      <ArcGradient
        vwSize="200vw"
        radius={100}
        vwHeight="30vw"
        direction="down"
      />
    </main>
  )
}
