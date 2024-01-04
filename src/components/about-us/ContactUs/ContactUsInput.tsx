import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ControllerRenderProps } from "react-hook-form"

type ContactFormField<
  T extends
    | "email"
    | "message"
    | "firstName"
    | "lastName"
    | "companyName"
    | "phoneNumber",
> = ControllerRenderProps<
  {
    email: string
    message: string
    firstName: string
    lastName: string
    companyName: string
    phoneNumber: string
  },
  T
>

type ContactUsFormProps = {
  placeholder: string
  label: string
  field: ContactFormField<
    | "email"
    | "message"
    | "firstName"
    | "lastName"
    | "companyName"
    | "phoneNumber"
  >
  maxLength?: number
  description?: string
}

export default function ContactUsInput({
  label,
  placeholder,
  field,
  maxLength,
  description,
}: ContactUsFormProps) {
  return (
    <FormItem className="w-full">
      <FormLabel className="text-paragraph">{label}</FormLabel>
      <FormControl>
        <Textarea
          rows={1}
          transparent
          notoThin
          bottomBorder
          {...field}
          placeholder={placeholder}
          className={`${
            field.value ? "opacity-100" : "opacity-30"
          } resize-none`}
          maxLength={maxLength}
          onKeyPress={(event) => {
            if (maxLength === 10 && !/[0-9]/.test(event.key)) {
              event.preventDefault()
            }

            if (event.key === " ") {
              event.preventDefault()
            }
          }}
          autoComplete="false"
        />
      </FormControl>
      {description && (
        <FormDescription className="text-paragraph">
          {description}
        </FormDescription>
      )}
    </FormItem>
  )
}
