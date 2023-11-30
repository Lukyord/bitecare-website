import { Images } from "@/constant/Images"
import Image from "next/image"

import { Link } from "@/lib/navigation"

import TranslateXOnScroll from "../../animations/TranslateXOnScroll"

type HeroProductShowcaseProps = {}

export default function ProductShowcase({}: HeroProductShowcaseProps) {
  const Products = [
    {
      image: Images.SkinCareFront,
      alt: "Skin Care",
      href: "/products/skin-care",
    },
    { image: Images.LowFatFront, alt: "Low Fat", href: "/products/low-fat" },
    {
      image: Images.SeniorCareFront,
      alt: "Senior Care",
      href: "/products/senior-care",
    },
    {
      image: Images.RenalCareFront,
      alt: "Renal Care",
      href: "/products/renal-care",
    },
  ]

  return (
    <div className="relative z-0 w-screen bg-bc-primary">
      <Image
        alt="wave bc priamry 1"
        src={Images.WaveBcPrimary_1}
        width={1442}
        height={240}
        className="absolute bottom-[99%] left-0 h-auto w-screen"
      />

      <Image
        alt="dog paw"
        src={Images.DogPawBcInversePrimary}
        className="
              absolute -top-[5%] right-[20%]
              h-auto w-[10vw] rotate-[15deg] 
              opacity-80
            "
      />
      <Image
        alt="dog paw"
        src={Images.DogPawBcInversePrimary}
        className="
              absolute bottom-[-5%] left-[30%] 
              z-0 h-auto w-[15vw] rotate-[15deg]
            "
      />

      <TranslateXOnScroll translateXStart="-20vw" translateXEnd="0vw">
        {Products.map((item, index) => (
          <Link href={item.href} key={index} className="h-full min-w-[25%]">
            <Image
              alt={item.alt}
              src={item.image}
              key={index}
              width={1192}
              height={2128}
              className="
                    h-full w-full 
                    object-cover transition-all 
                    duration-300 hover:scale-110
                    hover:[box-shadow:10px_10px_10px_0px_rgba(255,_255,_255,_0.25)]                
                  "
              priority
            />
          </Link>
        ))}
      </TranslateXOnScroll>
    </div>
  )
}
