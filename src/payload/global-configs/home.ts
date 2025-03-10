import { GlobalConfig } from "payload"
import { createRowLabel } from "../utils/create-row-label"
import { deployVercelHook } from "../utils/deploy-vercel-hook"

export const HomeConfig: GlobalConfig = {
  slug: "home",
  hooks: {
    afterChange: [deployVercelHook],
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "hero",
          label: "Hero",
          fields: [
            {
              name: "header_text",
              label: "Header Text",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "subheader_text",
              label: "Subheader Text",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "cta_text",
              label: "CTA Text",
              type: "text",
              required: true,
              localized: true,
            },
            {
              label: "Hero Slides",
              name: "hero_slides",
              type: "array",
              labels: {
                singular: "Slide",
                plural: "Slides",
              },
              fields: [
                {
                  label: "Slide Image",
                  name: "slide_image",
                  type: "upload",
                  relationTo: "media",
                  required: true,
                },
                {
                  label: "Slide Title",
                  name: "slide_title",
                  type: "text",
                  required: true,
                  localized: true,
                },
                {
                  label: "Slide Description",
                  name: "slide_description",
                  type: "text",
                  required: true,
                  localized: true,
                },
              ],
            },
          ],
        },
        {
          name: "principle",
          label: "Principle",
          fields: [
            {
              name: "principle_header",
              label: "Header",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "principle_subheader",
              label: "Subheader",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "principles",
              label: "Principles List",
              required: true,
              type: "array",
              minRows: 3,
              maxRows: 3,
              admin: {
                description: "Principles needs to be exactly 3",
                components: {
                  RowLabel: createRowLabel({
                    defaultLabel: "Principle",
                    path: "title",
                  }),
                },
              },
              fields: [
                {
                  name: "title",
                  label: "Title",
                  type: "text",
                  required: true,
                  localized: true,
                },
                {
                  name: "icon",
                  type: "upload",
                  required: true,
                  relationTo: "media",
                },
              ],
            },
          ],
        },
        {
          name: "slogan",
          label: "Slogan",
          fields: [
            {
              name: "slogan_header",
              label: "Header",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "slogan_description",
              label: "Description",
              type: "text",
              required: true,
              localized: true,
            },
          ],
        },
        {
          name: "product_comparison",
          label: "Product Comparison",
          fields: [
            {
              name: "header",
              label: "Header",
              type: "text",
              required: true,
              localized: true,
            },
          ],
        },
        {
          name: "faq",
          label: "FAQ",
          fields: [
            {
              name: "faq_list",
              label: "FAQ List",
              admin: {
                components: {
                  RowLabel: createRowLabel({
                    defaultLabel: "FAQ",
                    path: "question",
                  }),
                },
              },
              type: "array",
              fields: [
                {
                  name: "question",
                  type: "text",
                  required: true,
                  localized: true,
                },
                {
                  name: "answer",
                  type: "richText",
                  required: true,
                  localized: true,
                },
              ],
            },
            {
              name: "ask_doctor",
              label: "Ask Doctor",
              type: "group",
              fields: [
                {
                  name: "ask_doctor_text",
                  label: "Ask Doctor Text",
                  type: "text",
                  required: true,
                  localized: true,
                },
                {
                  name: "ask_doctor_link",
                  label: "Ask Doctor Link",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
