import { CollectionConfig } from "payload"

export const ProductTag: CollectionConfig = {
  slug: "product-tag",
  admin: {
    useAsTitle: "Label",
  },
  fields: [
    {
      name: "Label",
      type: "text",
      required: true,
    },
    {
      name: "color",
      type: "text",
      required: true,
    },
  ],
}
