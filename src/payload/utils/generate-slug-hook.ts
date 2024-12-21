import { CollectionBeforeChangeHook } from "payload"
import slugify from "slugify"

export function generateSlugHook(
  titleField: string,
  slugField = "slug"
): CollectionBeforeChangeHook {
  return ({ data }) => {
    console.log(data)
    if (!(titleField in data)) {
      return data
    }

    return {
      ...data,
      [slugField]: slugify(data[titleField]),
    }
  }
}
