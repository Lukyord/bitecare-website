import HorizontalScrollSection from "@/components/about-us/HorizontalScrollSection"

export default function page() {
  return (
    <div>
      <HorizontalScrollSection>
        <div className="flex h-[100vh] w-[100vw] items-center justify-center ">
          <h3>Section 1</h3>
        </div>
        <div className="flex h-[100vh] w-[100vw] items-center justify-center">
          <h3>Section 2</h3>
        </div>
        <div className="flex h-[100vh] w-[100vw] items-center justify-center">
          <h3>Section 3</h3>
        </div>
        <div className="flex h-[100vh] w-[100vw] items-center justify-center">
          <h3>Section 4</h3>
        </div>
        <div className="flex h-[100vh] w-[100vw] items-center justify-center">
          <h3>Section 5</h3>
        </div>
      </HorizontalScrollSection>
    </div>
  )
}
