import { FormControl, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
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
}

export default function ContactUsInput({
  label,
  placeholder,
  field,
}: ContactUsFormProps) {
  return (
    <FormItem className="w-full">
      <FormLabel className="text-paragraph">{label}</FormLabel>
      <FormControl>
        <Input
          transparent
          notoThin
          bottomBorder
          {...field}
          placeholder={placeholder}
          autoComplete="off"
          className={`${field.value ? "opacity-100" : "opacity-30"}`}
        />
      </FormControl>
    </FormItem>
  )
}
