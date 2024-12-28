import type { CollectionConfig } from "payload"

export type Location = {
  id: string
  name_th: string
  name_en: string
}

export const Stores: CollectionConfig = {
  slug: "store",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "updatedAt"],
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "name",
          label: "Store Name",
          type: "text",
          index: true,
          required: true,
          localized: true,
          admin: {
            placeholder: "Store name",
            description:
              "The name of the store. Will be displayed on the website.",
            width: "50%",
          },
        },
        {
          name: "customer_name",
          label: "Customer Name",
          type: "text",
          required: true,
          localized: true,
          admin: {
            description:
              "Customer name (Company name), will not be shown on the website but may required for legal purposes.",
            placeholder: "Customer name",
            width: "50%",
          },
        },
      ],
    },
    {
      name: "address",
      label: "Address",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "province",
      label: "Province",
      type: "text",
      required: true,
      defaultValue: "Select a value",
      admin: {
        description: "Province will be stored as ID for further reference",
        components: {
          Field: "@/payload/components/province-picker",
        },
      },
      validate: (value: any) => {
        if (isNaN(value)) {
          return "Please select a valid province."
        }

        return true
      },
    },
    {
      name: "district",
      label: "District",
      type: "text",
      required: true,
      defaultValue: "Select a value",
      admin: {
        description: "District will be stored as ID for further reference",
        components: {
          Field: "@/payload/components/district-picker",
        },
      },
      validate: (value: any) => {
        if (isNaN(value)) {
          return "Please select a valid district."
        }

        return true
      },
    },
    {
      name: "subdistrict",
      label: "Subdistrict",
      type: "text",
      required: true,
      defaultValue: "Select a value",
      admin: {
        description: "Subdistrict will be stored as ID for further reference",
        components: {
          Field: "@/payload/components/subdistrict-picker",
        },
      },
      validate: (value: any) => {
        if (isNaN(value)) {
          return "Please select a valid subdistrict."
        }

        return true
      },
    },
    {
      name: "phone",
      label: "Phone",
      type: "text",
      validate: (value: any) => {
        if (!value) {
          return true
        }

        const phoneRegex = /^0\d{9}$/
        if (!phoneRegex.test(value)) {
          return "Please enter a valid 10-digit phone number"
        }

        return true
      },
      admin: {
        description: "Phone number, can be left empty",
        placeholder: "0961234567",
      },
    },
    {
      name: "postal_code",
      label: "Postal Code",
      type: "text",
      required: true,
      validate: (value: any) => {
        const postalCodeRegex = /^\d{5}$/
        if (!postalCodeRegex.test(value)) {
          return "Please enter a valid postal code with the format 12345."
        }
        return true
      },
      admin: {
        description: "Postal code with the format of 12345",
        placeholder: "12345",
      },
    },
    {
      name: "link",
      label: "Google Map Link",
      type: "text",
      required: true,
    },
    {
      label: "lat",
      name: "Store Latitude",
      type: "text",
      required: true,
      validate: (value: any) => {
        const latitudeRegex = /^-?([1-8]?\d(\.\d+)?|90(\.0+)?)$/

        if (!latitudeRegex.test(value)) {
          return "Invalid latitude. Please provide a valid value between -90 and 90."
        }
        return true
      },
      admin: {
        description: "Store latitude will be used for Map API display",
        placeholder: "123.123456789",
      },
    },
    {
      label: "long",
      name: "Store Longitude",
      type: "text",
      required: true,
      validate: (value: any) => {
        const longitudeRegex =
          /^-?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/

        if (!longitudeRegex.test(value)) {
          return "Invalid longitude. Please provide a valid value between -180 and 180."
        }
        return true
      },
      admin: {
        description: "Store longitude will be used for Map API display",
        placeholder: "123.123456789",
      },
    },
  ],
}
