import { CollectionConfig } from "payload"

export const ProductType: CollectionConfig = {
  slug: "product-type",
  admin: {
    useAsTitle: "product_type",
    defaultColumns: ["product_type", "updatedAt"],
  },
  fields: [
    {
      name: "label",
      label: "Product Type Label",
      type: "text",
      required: true,
      localized: true,
      admin: {
        placeholder: "Product Type",
        description:
          "The name of the product type. Will be displayed on the website.",
      },
    },
    {
      name: "product_type",
      label: "Product Type",
      type: "text",
      unique: true,
      admin: {
        description:
          "Must be unique and can only contain lowercase letters, numbers, and hyphens.",
        placeholder: "some-product-type-id",
      },
    },
  ],
}
