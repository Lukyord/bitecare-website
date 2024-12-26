import type { CollectionConfig } from "payload"

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
            placeholder: "Store Name",
            description:
              "The name of the store. Will be displayed on the website.",
            width: "50%",
          },
        },
        {
          name: "customer-name",
          label: "Customer Name",
          type: "text",
          required: true,
          localized: true,
          admin: {
            description:
              "Customer name (Company name), will not be shown on the website but may required for legal purposes.",
            placeholder: "customer-name",
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
      admin: {
        components: {
          Field: "@/payload/components/province-picker",
        },
      },
    },
    {
      name: "district",
      label: "District",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "sub-district",
      label: "Sub District",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "phone",
      label: "Phone",
      type: "text",
      validate: (value: any) => {
        const phoneRegex = /^\d{2}-\d{4}-\d{4}$/
        if (!phoneRegex.test(value)) {
          return "Invalid phone number format. Please use the format 02-1234-5678."
        }
        return true
      },
      admin: {
        description: "Phone number with the format of 02-1234-5678",
        placeholder: "02-1234-5678",
      },
    },
    {
      name: "postal-code",
      label: "Postal Code",
      type: "text",
      required: true,
      validate: (value: any) => {
        const postalCodeRegex = /^\d{5}$/ // Matches 12345
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
      validate: (value: any) => {
        const googleMapLinkRegex = /^https:\/\/goo\.gl\/maps\/[a-zA-Z0-9]+$/
        if (!googleMapLinkRegex.test(value)) {
          return "Invalid Google Map link. Please provide a valid Google Map link."
        }
        return true
      },
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
