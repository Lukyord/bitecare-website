import { Images } from "@/constant/Images"

import AboutUsLanding from "@/components/about-us/AboutUsLanding"
import HorizontalScrollSection from "@/components/about-us/HorizontalScrollSection"

export default function page() {
  return (
    <div>
      <HorizontalScrollSection>
        <AboutUsLanding
          images={[
            Images.AboutUsDog_1,
            Images.AboutUsDog_2,
            Images.AboutUsDog_3,
            Images.AboutUsDog_4,
          ]}
        />
        <div className="flex h-[100vh] w-[100vw] items-center justify-center bg-bc-surface">
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
