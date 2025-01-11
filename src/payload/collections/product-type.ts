import { CollectionConfig } from "payload"

export const ProductType: CollectionConfig = {
  slug: "product-type",
  admin: {
    useAsTitle: "label",
    defaultColumns: ["label", "updatedAt"],
  },
  fields: [
    {
      name: "label",
      label: "Product Type",
      type: "text",
      unique: true,
      required: true,
    },
  ],
}
