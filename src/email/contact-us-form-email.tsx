import React from "react"
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

type ContactFormEmailProps = {
  message: string
  senderEmail: string
  firstName: string
  lastName: string
  companyName: string
  phoneNumber: string
}

const ContactFormEmail = ({
  message,
  senderEmail,
  firstName,
  lastName,
  companyName,
  phoneNumber,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-[#BBF0BB] text-black">
          <Container>
            <Section className="borderBlack my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>
                Name: {firstName} {lastName}
              </Text>
              <Text>Company: {companyName}</Text>
              <Text>Phone Number: {phoneNumber}</Text>
              <Text>The sender&apos;s email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default ContactFormEmail
