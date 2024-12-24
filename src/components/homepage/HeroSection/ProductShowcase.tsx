import { Images } from "@/constant/Images"
import Image from "next/image"

import { Link } from "@/lib/navigation"

import TranslateXOnScroll from "../../animations/TranslateXOnScroll"
import { getAllProducts } from "@/payload/service"
import { Media } from "@/payload/type-gen"

export default async function ProductShowcase() {
  const products = await getAllProducts({
    select: {
      slug: true,
      front_img: true,
    },
    // Only select the first 4 products
    page: 4,
  })

  return (
    <div className="relative z-0 w-screen bg-bc-primary">
      <Image
        alt="wave bc primary 1"
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

      <TranslateXOnScroll translateXStart="-5vw" translateXEnd="1vw">
        {products.map((product, index) => (
          <Link
            href={`/products/${product.slug}`}
            key={product.slug}
            className="h-full min-w-[20%]"
          >
            <Image
              alt={product.slug}
              src={(product.front_img as Media).url ?? ""}
              key={index}
              width={1192}
              height={2128}
              className="h-full w-full object-cover transition-all duration-300 hover:scale-110 hover:[box-shadow:10px_10px_10px_0px_rgba(255,_255,_255,_0.25)]"
              priority
            />
          </Link>
        ))}
      </TranslateXOnScroll>
    </div>
  )
}
