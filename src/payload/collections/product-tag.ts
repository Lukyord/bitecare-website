import { CollectionConfig } from "payload"

export const ProductTag: CollectionConfig = {
  slug: "product-tag",
  admin: {
    useAsTitle: "label",
  },
  fields: [
    {
      name: "label",
      label: "Label",
      type: "text",
      localized: true,
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      localized: true,
      required: true,
    },
    {
      name: "icon_img",
      label: "Icon Image",
      type: "upload",
      required: true,
      relationTo: "media",
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
