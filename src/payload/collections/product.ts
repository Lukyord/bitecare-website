import { CollectionConfig } from "payload"
import { createRowLabel } from "../utils/create-row-label"
import { generateSlugHook } from "../utils/generate-slug-hook"

export const Product: CollectionConfig = {
  slug: "product",
  admin: {
    useAsTitle: "label",
    defaultColumns: ["slug", "label", "tags", "updatedAt"],
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "General",
          // Auto slug generation still doesn't work
          // hooks: {
          //   beforeChange: [
          //     generateSlugHook("label", "id"),
          //     ({ data }) => console.log(data),
          //   ],
          // },
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "label",
                  label: "Product Name",
                  type: "text",
                  required: true,
                  localized: true,
                  admin: {
                    placeholder: "Product Name",
                    description:
                      "The name of the product. Will be displayed on the website.",
                    width: "50%",
                  },
                },
                {
                  name: "slug",
                  label: "Product ID",
                  index: true,
                  unique: true,
                  required: true,
                  type: "text",
                  admin: {
                    description:
                      "Must be unique and can only contain lowercase letters, numbers, and hyphens.",
                    placeholder: "some-product-id",
                    width: "50%",
                  },
                  validate: (value: any) => {
                    if (!/^[a-z0-9-]+$/.test(value)) {
                      return "Invalid format. Please use lowercase letters, numbers, and hyphens only."
                    }
                    return true
                  },
                },
              ],
            },
            {
              name: "description",
              type: "text",
              label: "Description",
              required: true,
              localized: true,
            },
            {
              name: "primary-color",
              label: "Primary Color",
              type: "text",
              admin: {
                components: {
                  Field: "@/payload/components/color-picker",
                },
              },
            },
            {
              name: "tags",
              type: "relationship",
              relationTo: "product-tag",
              hasMany: true,
            },
            {
              name: "facts",
              type: "array",
              label: "Facts",
              fields: [
                {
                  name: "title",
                  type: "text",
                  label: "Title",
                  localized: true,
                  required: true,
                },
                {
                  name: "description",
                  type: "text",
                  label: "Description",
                  localized: true,
                  required: true,
                },
              ],
              // Not working, can't be bothered to fix it lol
              admin: {
                components: {
                  RowLabel: createRowLabel({
                    defaultLabel: "Facts",
                    path: "title",
                  }),
                },
              },
            },
            {
              name: "specifications",
              type: "array",
              label: "Specifications",
              fields: [
                {
                  name: "title",
                  type: "text",
                  label: "Title",
                  localized: true,
                  required: true,
                },
                {
                  name: "description",
                  type: "text",
                  label: "Description",
                  localized: true,
                  required: true,
                },
                {
                  name: "image",
                  type: "upload",
                  relationTo: "media",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: "Product Images",
          description: "Product Images",
          fields: [
            {
              name: "front",
              label: "Front",
              type: "upload",
              relationTo: "media",
              // required: true,
            },
            {
              name: "back",
              label: "Back",
              type: "upload",
              relationTo: "media",
              // required: true,
            },
            {
              name: "summary",
              label: "Summary",
              type: "upload",
              relationTo: "media",
              // required: true,
            },
            {
              name: "clinic-test",
              label: "Clinic Test",
              type: "upload",
              relationTo: "media",
              // required: true,
            },
            {
              name: "palatability-test",
              label: "Palatability Test",
              type: "upload",
              relationTo: "media",
              // required: true,
            },
            {
              name: "registration-number",
              label: "Registration Number",
              type: "upload",
              relationTo: "media",
              // required: true,
            },
          ],
        },
      ],
    },
  ],
}
