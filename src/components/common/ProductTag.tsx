import { cn } from "@/lib/utils"
import { ProductTag as ProductTagType } from "@/payload/type-gen"

type ProductTagProps = {
  tag: ProductTagType
  size: "small" | "large"
  shadow?: boolean
}

export default function ProductTag({
  tag,
  size,
  shadow = false,
}: ProductTagProps) {
  return (
    <p
      className={`bg-[${tag.color}] w-fit whitespace-nowrap rounded-full px-3 text-white xs:py-1 ${cn({ "text-sm xs:text-subtitle": size === "small", "text-sm xl:text-paragraph": size === "large", "shadow-sm shadow-white": shadow })}`}
    >
      {tag.label}
    </p>
  )
}
