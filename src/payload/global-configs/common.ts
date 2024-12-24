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
              name: "meet_bite_care",
              label: "Meet Bite Care",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "tell_a_friend",
              label: "Tell a Friend",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "see_our_products",
              label: "See Our Products",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "view_more",
              label: "View More",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "faq",
              label: "FAQ",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "get_our_product",
              label: "Get Our Product",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "more_info",
              label: "More Info",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "search",
              label: "Search",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "find_me",
              label: "Find Me",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "view_on_google_map",
              label: "View on Google Map",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "send_message",
              label: "Send Message",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "get_to_know_us",
              label: "Get to Know Us",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "back_to_homepage",
              label: "Back to Homepage",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "contact_us",
              label: "Contact Us",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "retry",
              label: "Retry",
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
        {
          name: "error",
          label: "Error",
          fields: [
            {
              name: "page_not_found",
              label: "Page Not Found",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "page_not_found_description",
              label: "Page Not Found Description",
              type: "textarea",
              required: true,
              localized: true,
            },
            {
              name: "error",
              label: "Error",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "error_description",
              label: "Error Description",
              type: "textarea",
              required: true,
              localized: true,
            },
          ],
        },
      ],
    },
  ],
}
