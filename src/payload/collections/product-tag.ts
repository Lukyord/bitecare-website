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
      label: "Color",
      type: "text",
      admin: {
        components: {
          Field: "@/payload/components/color-picker",
        },
      },
    },
  ],
}
