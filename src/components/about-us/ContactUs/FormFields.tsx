import { useTranslations } from "next-intl"
import { UseFormReturn } from "react-hook-form"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import ContactUsInput from "./ContactUsInput"
import { Textarea } from "@/components/ui/textarea"
import { AboutUs } from "@/payload/type-gen"

type FormFieldsProps = {
  form: UseFormReturn<
    {
      email: string
      message: string
      firstName: string
      lastName: string
      companyName: string
      phoneNumber: string
    },
    any,
    undefined
  >
  msg: {
    contactUs: AboutUs["contact_us"]
  }
}

export default function FormFields({ form, msg }: FormFieldsProps) {
  return (
    <>
      <div className="flex w-full gap-[5%]">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <ContactUsInput
              label={msg.contactUs.first_name}
              placeholder={msg.contactUs.first_name}
              field={field}
            />
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <ContactUsInput
              label={msg.contactUs.last_name}
              placeholder={msg.contactUs.first_name}
              field={field}
            />
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="companyName"
        render={({ field }) => (
          <ContactUsInput
            label={msg.contactUs.company_name}
            placeholder={msg.contactUs.company_name}
            field={field}
            description={msg.contactUs.company_name_description}
          />
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <ContactUsInput
            label={msg.contactUs.email}
            placeholder={msg.contactUs.email}
            field={field}
          />
        )}
      />

      <FormField
        control={form.control}
        name="phoneNumber"
        render={({ field }) => (
          <ContactUsInput
            label={msg.contactUs.phone_number}
            placeholder={"096930XXXX"}
            field={field}
            maxLength={10}
          />
        )}
      />

      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel className="text-paragraph">
              {msg.contactUs.message}
            </FormLabel>
            <FormControl>
              <Textarea
                transparent
                notoThin
                bottomBorder
                placeholder={msg.contactUs.message_place_holder}
                {...field}
                className={`${field.value ? "opacity-100" : "opacity-30"}`}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  )
}
