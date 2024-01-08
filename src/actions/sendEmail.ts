"use server"

import React from "react"
import { Resend } from "resend"

import ContactFormEmail from "@/email/contact-us-form-email"
import { getErrorMessage, validateString } from "@/lib/utils"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (
  trimmedFormData: Record<string, string | File>
) => {
  const { firstName, lastName, companyName, email, phoneNumber, message } =
    trimmedFormData

  if (!validateString(message, 500)) {
    return {
      error: "Invalid message",
    }
  }

  if (!validateString(email, 5000)) {
    return {
      error: "Invalid sender email",
    }
  }

  let data
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ttansiri524@gmail.com",
      subject: "New Contact form Submission",
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: email as string,
        firstName: firstName as string,
        lastName: lastName as string,
        companyName: companyName as string,
        phoneNumber: phoneNumber as string,
      }),
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    }
  }

  if (data.error) {
    return {
      error: getErrorMessage(data.error),
    }
  }

  return {
    data,
  }
}
