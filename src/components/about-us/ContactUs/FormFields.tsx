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
}

export default function FormFields({ form }: FormFieldsProps) {
  const tContactUs = useTranslations("contact-us")

  return (
    <>
      <div className="flex w-full gap-[5%]">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <ContactUsInput
              label={tContactUs("first-name")}
              placeholder={tContactUs("first-name")}
              field={field}
            />
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <ContactUsInput
              label={tContactUs("first-name")}
              placeholder={tContactUs("first-name")}
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
            label={tContactUs("company-name")}
            placeholder={tContactUs("company-name")}
            field={field}
          />
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <ContactUsInput
            label={tContactUs("email")}
            placeholder={tContactUs("email")}
            field={field}
          />
        )}
      />

      <FormField
        control={form.control}
        name="phoneNumber"
        render={({ field }) => (
          <ContactUsInput
            label={tContactUs("phone-number")}
            placeholder={tContactUs("phone-number")}
            field={field}
          />
        )}
      />

      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel className="text-paragraph">
              {tContactUs("message")}
            </FormLabel>
            <FormControl>
              <Textarea
                transparent
                notoThin
                bottomBorder
                placeholder={tContactUs("message-place-holder")}
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
