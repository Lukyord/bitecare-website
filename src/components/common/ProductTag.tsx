import { BiteCareProductTag } from "@/types/common/product"

type ProductTagProps = {
  tag: BiteCareProductTag
}

export default function ProductTag({ tag }: ProductTagProps) {
  return (
    <p
      className={`
          ${tag.color} w-fit whitespace-nowrap 
          rounded-full px-3 text-sm 
          text-white xs:py-1 
          xs:text-subtitle
        `}
    >
      {tag.name}
    </p>
  )
}
