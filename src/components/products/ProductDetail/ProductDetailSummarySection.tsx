import { resolveMediaRefs, resolveProductTagRefs } from "@/payload/service"
import { Product } from "@/payload/type-gen"
import Image from "next/image"

type ProductDetailSummarySectionProps = {
  product: Product
}

export default async function ProductDetailSummarySection({
  product,
}: ProductDetailSummarySectionProps) {
  const tags = await resolveProductTagRefs(product.tags ?? [])
  const tagIcons = await resolveMediaRefs(tags.map((tag) => tag.icon_img))

  return (
    <section className="mx-auto my-24 flex  w-[70%] flex-col gap-16  text-center md:w-[40%] lg:w-[70%] lg:flex-row lg:justify-between xl:mb-36">
      {tags?.map(async (tag, index) => {
        const tagIcon = tagIcons[index]
        return (
          <div
            key={tag.id}
            className="
            flex flex-col items-center 
            gap-6 lg:w-[28%]
          "
          >
            <p className="h-20 text-h3 lg:h-28">{tag.label}</p>
            <div className="h-32 lg:h-40">
              <Image
                alt={tagIcon.alt}
                src={tagIcon.url ?? ""}
                height={tagIcon.height ?? 130}
                width={tagIcon.width ?? 130}
                className="h-auto w-[100px] lg:w-[120px]"
              />
            </div>
            <p className="text-paragraph">{tag.description}</p>
          </div>
        )
      })}
    </section>
  )
}
