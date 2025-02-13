import { GlobalConfig } from "payload"

export const CommonConfig: GlobalConfig = {
  slug: "common",
  fields: [
    // tab
    {
      type: "tabs",
      tabs: [
        {
          name: "button",
          label: "Button",
          fields: [
            {
              name: "see_our_products",
              label: "See Our Products",
              type: "text",
              required: true,
              localized: true,
            },
          ],
        },
        {
          name: "footer",
          label: "Footer",
          fields: [
            {
              name: "tagline",
              label: "Tagline",
              type: "group",
              fields: [
                {
                  name: "tagline_header",
                  label: "Header",
                  type: "text",
                  required: true,
                  localized: true,
                },
                {
                  name: "tagline_description",
                  label: "Description",
                  type: "text",
                  required: true,
                  localized: true,
                },
              ],
            },
            {
              name: "legal",
              label: "Legal",
              type: "group",
              fields: [
                {
                  name: "copyright",
                  label: "Copyright Text",
                  type: "text",
                  required: true,
                  localized: true,
                },
                {
                  name: "privacy_policy",
                  label: "Privacy Policy Text",
                  type: "text",
                  required: true,
                  localized: true,
                },
                {
                  name: "terms_and_conditions",
                  label: "Terms and Conditions Text",
                  type: "text",
                  required: true,
                  localized: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
