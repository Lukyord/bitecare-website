import { FieldHook } from "payload"
import slugify from "slugify"

export function generateSlugHook(
  titleField: string,
  slugField: string
): FieldHook {
  return ({ data }) => {
    if (!data) {
      return data
    }
    if (!(titleField in data)) {
      return data
    }

    return {
      ...data,
      [slugField]: slugify(data[titleField]),
    }
  }
}
