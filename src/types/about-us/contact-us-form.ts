import { z } from "zod"

export const ContactUsFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name should be at least 2 characters long" }),
  lastName: z
    .string()
    .min(2, { message: "Last name should be at least 2 characters long" }),
  companyName: z.string().refine(
    (value) => {
      return value.length >= 2 || value === "-"
    },
    {
      message:
        "Company name should be at least 2 characters long or equal to '-'",
    }
  ),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().length(10, { message: "Invalid phone number" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message should be at least 10 characters long" }),
})
