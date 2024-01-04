"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useFormStatus } from "react-dom"

import { ContactUsFormSchema } from "@/types/about-us/contact-us-form"
import { cn } from "@/lib/utils"
import { FaChevronLeft, FaPaperPlane } from "react-icons/fa"

import { useOpenContactUsForm } from "@/context/ContactUsFormContextProvider"
import ContactUsForm from "./ContactUsForm"
import OpenFormButton from "./OpenFormButton"
import { Form } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import FormFields from "./FormFields"
import { sendEmail } from "@/actions/sendEmail"
import { zodErrorMessage } from "@/lib/zodErrorMessage"

export default function OpenSendMessageFormButton() {
  const status = useFormStatus()
  const { formOpen, setFormOpen } = useOpenContactUsForm()
  const tContactUs = useTranslations("contact-us")
  const tButton = useTranslations("button")
  const tContactUsToast = useTranslations("contact-us-toast")

  const form = useForm<z.infer<typeof ContactUsFormSchema>>({
    resolver: zodResolver(ContactUsFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      phoneNumber: "",
      message: "",
    },
  })

  const onSubmit = (data: z.infer<typeof ContactUsFormSchema>) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <>
      <div
        onClick={() => setFormOpen(!formOpen)}
        className={`
                  absolute left-[-5%] top-0 z-20
                  h-screen w-screen bg-black/60
                  transition-opacity duration-700 ease-in-out
                  ${cn({
                    "pointer-events-none opacity-0": !formOpen,
                    "pointer-events-auto opacity-100": formOpen,
                  })}
                `}
      />
      <ContactUsForm>
        <OpenFormButton />
        <h2
          className="
                  flex items-center 
                  justify-between text-h3 xl:h-[20%] 
                  xl:text-h2
                "
        >
          {tContactUs("lets-collaborate")}
          <span onClick={() => setFormOpen(false)}>
            <FaChevronLeft size={30} className="rotate-180" />
          </span>
        </h2>
        <div className="h-fit xl:h-[80%]">
          <Form {...form}>
            <form
              autoComplete="false"
              className="flex h-full w-full flex-col gap-5 xl:gap-10"
              action={async (formData: FormData) => {
                const trimmedFormData: Record<string, string | File> = {}

                formData.forEach((value, key) => {
                  trimmedFormData[key] =
                    typeof value === "string" ? value.trim() : value
                })

                const {
                  firstName,
                  lastName,
                  companyName,
                  email,
                  phoneNumber,
                  message,
                } = trimmedFormData

                const result = ContactUsFormSchema.safeParse({
                  firstName,
                  lastName,
                  companyName,
                  email,
                  phoneNumber,
                  message,
                })

                if (!result.success) {
                  return toast({
                    variant: "destructive",
                    title: tContactUsToast("something-went-wrong"),
                    description: zodErrorMessage(result.error.issues),
                  })
                }

                setFormOpen(false)
                const { data, error } = await sendEmail(trimmedFormData)

                if (error) {
                  toast({
                    variant: "destructive",
                    title: tContactUsToast("something-went-wrong"),
                    description: error,
                  })
                  return
                }

                toast({
                  title: tContactUsToast("success"),
                  description: tContactUsToast("message-sent"),
                })

                form.reset()
              }}
            >
              <div
                className="
                          flex h-[90%] w-full 
                          flex-col gap-6 xl:overflow-hidden 
                          xl:pr-6 xl:hover:overflow-y-auto xl:hover:pr-4
                        "
              >
                <FormFields form={form} />
              </div>
              <div className="h-[10%] w-full">
                <button
                  type="submit"
                  className="
                    disabled:bg-opacity-65 group flex 
                    h-[3rem] w-[50%] max-w-[200px] items-center
                    justify-center gap-2 rounded-full 
                    bg-gray-900 p-4 text-paragraph
                    text-white outline-none
                    transition-all hover:scale-110
                    hover:bg-gray-950 focus:scale-110
                    active:scale-105 disabled:cursor-not-allowed
                    disabled:opacity-50 disabled:hover:scale-100
                    dark:bg-white/10
                  "
                  disabled={status.pending}
                >
                  {status.pending ? (
                    <>
                      <p>Loading ...</p>
                      <div
                        className="
                              h-5 w-5 animate-spin 
                              rounded-full border 
                              border-b-2 border-white
                            "
                      />
                    </>
                  ) : (
                    <>
                      <p>{tButton("send-message")}</p>
                      <FaPaperPlane
                        className="
                        text-xs opacity-70 transition-all 
                        group-hover:-translate-y-1 group-hover:translate-x-1
                      "
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          </Form>
        </div>
      </ContactUsForm>
    </>
  )
}
