import { CollectionConfig } from "payload"
import { createRowLabel } from "../utils/create-row-label"
import { generateSlugHook } from "../utils/generate-slug-hook"

export const Product: CollectionConfig = {
  slug: "product",
  //  Seems like all data related is not working
  //   hooks: {
  //     beforeChange: [
  //       generateSlugHook("Product Name"),
  //       ({ data }) => {
  //         console.log("data", data)
  //       },
  //     ],
  //   },
  admin: {
    useAsTitle: "label",
    defaultColumns: ["id", "label", "tags", "updatedAt"],
  },

  fields: [
    {
      name: "label",
      label: "Product Name",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "id",
      type: "text",
      label: "Slug",
      required: true,
    },
    {
      name: "description",
      type: "richText",
      label: "Description",
      required: true,
      localized: true,
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
          type: "richText",
          label: "Description",
          localized: true,
          required: true,
        },
      ],
      // Not working, can't be bothered to fix it lol
      //   admin: {
      //     components: {
      //       RowLabel: createRowLabel({
      //         defaultLabel: "Facts",
      //         path: "title",
      //       }),
      //     },
      //   },
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
    // product images
    {
      name: "product-images",
      type: "array",
      label: "Product Images",
      fields: [
        // front, back, summary, clinic-test, palatability-test, registration-number
        {
          name: "front",
          label: "Front",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "back",
          label: "Back",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "summary",
          label: "Summary",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "clinic-test",
          label: "Clinic Test",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "palatability-test",
          label: "Palatability Test",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "registration-number",
          label: "Registration Number",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
}
