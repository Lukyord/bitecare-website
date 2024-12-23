import { getPayloadClient } from "@/lib/payload"
import { Media } from "@/payload/type-gen"

export const resolveMediaRefs = async (
  medias: (string | Media)[]
): Promise<Media[]> => {
  const payload = await getPayloadClient()
  // copy the medias array
  const resultMedias = [...medias]

  // check which indexes are strings
  const stringIndexes = medias
    .map((media, index) => (typeof media === "string" ? index : null))
    .filter((index) => index !== null)

  // if there is at least one string index, fetch all medias from those strings
  if (stringIndexes.length > 0) {
    // Record of ids to media string
    const mediaIdToIndexMap = stringIndexes.reduce(
      (acc, index) => {
        acc[medias[index] as string] = index
        return acc
      },
      {} as Record<string, number>
    )

    const res = await payload.find({
      collection: "media",
      where: {
        id: {
          in: stringIndexes.map((index) => medias[index]),
        },
      },
    })

    // map the fetched medias to the original array
    res.docs.forEach((media) => {
      resultMedias[mediaIdToIndexMap[media.id]] = media
    })
  }

  return resultMedias as Media[]
}

export const resolveMediaRef = async (
  media: string | Media
): Promise<Media> => {
  const payload = await getPayloadClient()

  if (typeof media === "string") {
    const res = await payload.find({
      collection: "media",
      where: {
        id: {
          equals: media,
        },
      },
    })
    return res.docs[0]
  }

  return media
}
