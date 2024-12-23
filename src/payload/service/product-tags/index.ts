import { getPayloadClient } from "@/lib/payload"
import { ProductTag } from "@/payload/type-gen"

export const resolveProductTagRefs = async (
  tags: (string | ProductTag)[]
): Promise<ProductTag[]> => {
  const payload = await getPayloadClient()
  // copy the Tags array
  const resultTags = [...tags]

  // check which indexes are strings
  const stringIndexes = tags
    .map((tag, index) => (typeof tag === "string" ? index : null))
    .filter((index) => index !== null)

  // if there is at least one string index, fetch all Tags from those strings
  if (stringIndexes.length > 0) {
    // Record of ids to Tag string
    const TagIdToIndexMap = stringIndexes.reduce(
      (acc, index) => {
        acc[tags[index] as string] = index
        return acc
      },
      {} as Record<string, number>
    )

    const res = await payload.find({
      collection: "product-tag",
      where: {
        id: {
          in: stringIndexes.map((index) => tags[index]),
        },
      },
    })

    // map the fetched Tags to the original array
    res.docs.forEach((Tag) => {
      resultTags[TagIdToIndexMap[Tag.id]] = Tag
    })
  }

  return resultTags as ProductTag[]
}

export const resolveProductTagRef = async (
  tag: string | ProductTag
): Promise<ProductTag> => {
  const payload = await getPayloadClient()

  if (typeof tag === "string") {
    const res = await payload.find({
      collection: "product-tag",
      where: {
        id: {
          equals: tag,
        },
      },
    })
    return res.docs[0]
  }

  return tag
}
