import type { CollectionConfig } from "payload"

export const OnlineStore: CollectionConfig = {
  slug: "online-store",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "updatedAt"],
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "url",
      label: "URL",
      type: "text",
      required: true,
    },
    {
      name: "logo",
      label: "Logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "platform_color",
      label: "Platform Color",
      type: "text",
      required: true,
      admin: {
        components: {
          Field: "@/payload/components/color-picker",
        },
      },
    },
  ],
}
