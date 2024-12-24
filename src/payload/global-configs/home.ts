import { GlobalConfig } from "payload"
import { createRowLabel } from "../utils/create-row-label"

export const HomeConfig: GlobalConfig = {
  slug: "home",
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
                  type: "textarea",
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
