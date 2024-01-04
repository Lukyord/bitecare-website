"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"

import { ContactUsFormSchema } from "@/types/about-us/contact-us-form"
import { cn } from "@/lib/utils"
import { BsSend } from "react-icons/bs"
import { FaChevronLeft } from "react-icons/fa"

import { useOpenContactUsForm } from "@/context/ContactUsFormContextProvider"
import ContactUsForm from "./ContactUsForm"
import OpenFormButton from "./OpenFormButton"
import { Form } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import FormFields from "./FormFields"
import SecondaryButton from "@/components/common/Button/SecondaryButton"

export default function OpenSendMessageFormButton() {
  const { formOpen, setFormOpen } = useOpenContactUsForm()
  const tContactUs = useTranslations("contact-us")
  const tButton = useTranslations("button")

  const form = useForm<z.infer<typeof ContactUsFormSchema>>({
    resolver: zodResolver(ContactUsFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
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
              className="flex h-full w-full flex-col gap-5 xl:gap-10"
              action={async (formData) => {}}
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
                <SecondaryButton
                  text={tButton("send-message")}
                  icon={<BsSend />}
                  size="paragraph"
                  specificWidth="w-[50%]"
                />
              </div>
            </form>
          </Form>
        </div>
      </ContactUsForm>
    </>
  )
}
