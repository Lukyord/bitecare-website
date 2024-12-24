import { GlobalConfig } from "payload"

export const AboutUsConfig: GlobalConfig = {
  slug: "about-us",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "landing",
          label: "Landing",
          fields: [
            {
              name: "welcome_to",
              label: "Welcome To",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "landing_description",
              label: "Landing Description",
              type: "textarea",
              required: true,
              localized: true,
            },
            {
              name: "landing_quote",
              label: "Landing Quote",
              type: "text",
              required: true,
              localized: true,
            },
          ],
        },
        {
          name: "bitecare_difference",
          label: "BiteCare Difference",
          fields: [
            {
              name: "header",
              label: "Header",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "tailored_nutrition",
              label: "Tailored Nutrition",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "tailored_nutrition_description",
              label: "Tailored Nutrition Description",
              type: "textarea",
              required: true,
              localized: true,
            },
            {
              name: "tailored_nutrition_quote",
              label: "Tailored Nutrition Quote",
              type: "text",
              localized: true,
            },
            {
              name: "premium_ingredients",
              label: "Premium Ingredients",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "premium_ingredients_description",
              label: "Premium Ingredients Description",
              type: "textarea",
              required: true,
              localized: true,
            },
            {
              name: "premium_ingredients_quote",
              label: "Premium Ingredients Quote",
              type: "text",
              localized: true,
            },
            {
              name: "rigorous_testing",
              label: "Rigorous Testing",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "rigorous_testing_description",
              label: "Rigorous Testing Description",
              type: "textarea",
              required: true,
              localized: true,
            },
            {
              name: "rigorous_testing_quote",
              label: "Rigorous Testing Quote",
              type: "text",
              localized: true,
            },
            {
              name: "bitecare_community_header",
              label: "BiteCare Community Header",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "bitecare_community_description",
              label: "BiteCare Community Description",
              type: "textarea",
              required: true,
              localized: true,
            },
            {
              name: "bitecare_thanks",
              label: "BiteCare Thanks",
              type: "text",
              required: true,
              localized: true,
            },
          ],
        },
        {
          name: "contact_us",
          label: "Contact Us",
          fields: [
            {
              name: "header",
              label: "Header",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "email",
              label: "Email",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "send_us_a_message",
              label: "Send Us a Message",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "phone_number",
              label: "Phone Number",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "contact_hours",
              label: "Contact Hours",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "monday_sun",
              label: "Monday - Sunday",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "social",
              label: "Social",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "lets_collaborate",
              label: "Let's Collaborate",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "first_name",
              label: "First Name",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "last_name",
              label: "Last Name",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "company_name",
              label: "Company Name",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "company_name_description",
              label: "Company Name Description",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "message",
              label: "Message",
              type: "textarea",
              required: true,
              localized: true,
            },
            {
              name: "message_place_holder",
              label: "Message Placeholder",
              type: "text",
              required: true,
              localized: true,
            },
          ],
        },
        {
          name: "contact_us_toast",
          label: "Contact Us Popup",
          fields: [
            {
              name: "something_went_wrong",
              label: "Something Went Wrong",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "success",
              label: "Success",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "message_sent",
              label: "Message Sent",
              type: "text",
              required: true,
              localized: true,
            },
          ],
        },
      ],
    },
  ],
}

export default AboutUsConfig