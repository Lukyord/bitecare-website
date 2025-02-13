import { CollectionConfig } from "payload"
import { createRowLabel } from "../utils/create-row-label"
import { generateSlugHook } from "../utils/generate-slug-hook"
import { deployVercelHook } from "../utils/deploy-vercel-hook"

export const Product: CollectionConfig = {
  slug: "product",
  admin: {
    useAsTitle: "label",
    defaultColumns: ["label", "description", "updatedAt"],
  },
  versions: {
    drafts: true,
    maxPerDoc: 10,
  },
  hooks: {
    afterChange: [deployVercelHook],
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "General",
          fields: [
            {
              name: "product_type",
              label: "Product Type",
              type: "relationship",
              relationTo: "product-type",
              required: true,
            },
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
                    components: {},
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
              name: "short_description",
              type: "text",
              label: "Short description",
              maxLength: 150,
              required: true,
              localized: true,
            },
            {
              name: "description",
              type: "textarea",
              label: "Description",
              required: true,
              localized: true,
            },
            {
              name: "compare_description_main",
              label: "Compare Description Main",
              type: "textarea",
              required: true,
              localized: true,
            },
            {
              name: "compare_description_sub",
              label: "Compare Description Sub",
              type: "textarea",
              required: true,
              localized: true,
            },
            {
              name: "primary_color",
              label: "Primary Color",
              required: true,
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
              required: true,
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
              admin: {
                components: {
                  RowLabel: createRowLabel({
                    defaultLabel: "Facts",
                    path: "title",
                  }),
                },
              },
            },
          ],
        },
        {
          label: "Product Images",
          fields: [
            {
              name: "front_img",
              label: "Front",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "back_img",
              label: "Back",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "summary_img",
              label: "Summary",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "clinic_test_img",
              label: "Clinic Test",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "palatability_test_img",
              label: "Palatability Test",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "registration_number_img",
              label: "Registration Number",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "fact_sheet_img",
              label: "Fact Sheet",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
        {
          label: "Assets",
          fields: [
            {
              name: "pet_image",
              label: "Pet Image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "pet_image_cropped",
              label: "Pet Image Cropped",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
