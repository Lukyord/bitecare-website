import { BiteCareProduct } from "@/types/common/product"
import Image from "next/image"

type ProductDetailSummarySectionProps = {
  product: BiteCareProduct
}

export default function ProductDetailSummarySection({
  product,
}: ProductDetailSummarySectionProps) {
  return (
    <section
      className="
            mx-auto my-24 flex 
            w-[70%] flex-col gap-8 
            text-center md:w-[40%]
            lg:w-[70%] lg:flex-row
            lg:justify-between xl:mb-36
          "
    >
      {product.productInfo.summaries.map((summary, index) => (
        <div
          key={index}
          className="
            flex flex-col items-center 
            justify-center gap-6 lg:w-[28%]
          "
        >
          <p className="text-h3">{summary}</p>
          <Image
            alt="summary icon"
            src={product.productInfo.summaryImages[index]}
            className="h-auto w-[100px] lg:w-[120px]"
          />
          <p className="text-paragraph">
            {product.productInfo.summaryDescriptions[index]}
          </p>
        </div>
      ))}
    </section>
  )
}
