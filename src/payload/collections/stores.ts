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
      name: "sub-district",
      label: "Sub District",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "district",
      label: "District",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "province",
      label: "Province",
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
        const googleMapsRegex =
          /^(https:\/\/(?:www\.)?google\.com\/maps\/.+|https:\/\/goo\.gl\/maps\/.+)$/

        if (!googleMapsRegex.test(value)) {
          return "Invalid Google Map link. Please provide a valid Google Map URL."
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
        const latitudeRegex =
          /^-?(180(\.0{1,7})?|((1[0-7]\d)|([1-9]?\d))(\.\d{1,7})?)$/

        if (!latitudeRegex.test(value)) {
          return "Invalid latitude. Please provide a valid value between -180 and 180 with up to 7 decimal places."
        }
        return true
      },
      admin: {
        description:
          "Store latitude will be used for Map API display, please provide 7 decimal places",
        placeholder: "123.1234567",
      },
    },
    {
      label: "long",
      name: "Store Longitude",
      type: "text",
      required: true,
      validate: (value: any) => {
        const longitudeRegex =
          /^-?(180(\.0{1,7})?|((1[0-7]\d)|([1-9]?\d))(\.\d{1,7})?)$/

        if (!longitudeRegex.test(value)) {
          return "Invalid longitude. Please provide a valid value between -180 and 180 with up to 7 decimal places."
        }
        return true
      },
      admin: {
        description:
          "Store longtitude will be used for Map API display, please provide 7 decimal places",
        placeholder: "123.1234567",
      },
    },
  ],
}
