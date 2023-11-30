import HeroSection from "@/components/homepage/HeroSection/HeroSection"

export default function Home() {
  return (
    <main className="no-scrollbar overflow-x-hidden pt-28">
      <HeroSection />
      <h1
        className="h-[100px] scroll-mt-36 font-hel_rounded text-subtitle"
        id="faq"
      >
        FAQ
      </h1>
    </main>
  )
}
