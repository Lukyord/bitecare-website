import { CollectionBeforeChangeHook, FieldHook } from "payload"
import slugify from "slugify"

export function generateSlugHook(
  titleField: string,
  slugField: string
): CollectionBeforeChangeHook {
  return ({ data }) => {
    if (!data) {
      return data
    }
    if (!(titleField in data)) {
      return data
    }

    console.log("slug-data", {
      ...data,
      [slugField]: slugify(data[titleField]),
    })

    return {
      ...data,
      [slugField]: slugify(data[titleField]),
    }
  }
}
