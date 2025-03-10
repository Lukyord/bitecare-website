import Image from "next/image"
import { getLocale, getMessages, getTranslations } from "next-intl/server"

import { Images } from "@/constant/Images"
import { Link } from "@/lib/navigation"
import { SocialMediaList } from "@/constant/Links"

import SendMessageButton from "./SendMessageButton"
import OpenSendMessageFormButton from "./OpenSendMessageFormButton"
import ContactUsFormContextProvider from "@/context/ContactUsFormContextProvider"
import { NextIntlClientProvider } from "next-intl"
import { pick } from "lodash"
import { getAboutUsConfigs } from "@/payload/service/globals/about-us"
import { Locale } from "@/config/i18n.config"
import { getCommonConfigs } from "@/payload/service"

export default async function ContactUs() {
  const locale = (await getLocale()) as Locale

  const [{ contact_us, contact_us_toast }, { button }] = await Promise.all([
    getAboutUsConfigs({
      select: {
        contact_us: true,
        contact_us_toast: true,
      },
      locale,
    }),
    getCommonConfigs({
      select: {
        button: true,
      },
      locale,
    }),
  ])

  const labelStyle = "text-paragraph mb-2 sm:mb-4"
  const textStyle = `${
    locale === "th" ? "font-psl" : "font-noto"
  } text-[36px] font-thin`

  return (
    <section
      id="contact-us"
      className="
            relative flex h-fit 
            w-[100vw] flex-col py-[5vh]
            lg:flex-row lg:pb-0 xl:h-[100vh] xl:w-[100vw] 
            xl:pl-[5vw] xl:pt-0
          "
    >
      <ContactUsFormContextProvider>
        <OpenSendMessageFormButton
          msg={{
            contactUs: contact_us,
            contactUsToast: contact_us_toast,
            button,
          }}
        />
        <div className="relative h-full w-fit">
          <Image
            alt="contact us dog"
            width={683}
            height={1024}
            src={Images.AboutUsContactUsDog}
            className="h-auto w-[100vw] object-contain lg:h-[110vh] lg:w-auto"
            priority
          />
          <h2
            className="
                  absolute left-1/2 top-[10%] 
                  translate-x-[-50%] whitespace-nowrap text-h2 
                  sm:text-h1 xl:bottom-[20%]
                "
          >
            {contact_us.header}
          </h2>
        </div>

        <div className="z-10 mt-[-30%] flex flex-1 items-center justify-center lg:mt-0">
          <div
            className="
                    flex flex-col justify-center 
                    gap-7 bg-white p-6 sm:gap-14 xl:p-12
                  "
          >
            <div>
              <h3 className={`${labelStyle}`}>{contact_us.email}</h3>
              <SendMessageButton>
                <h4
                  title={contact_us.send_us_a_message}
                  className={`${textStyle}
              underline decoration-[1px] underline-offset-4
              `}
                >
                  {contact_us.send_us_a_message}
                </h4>
              </SendMessageButton>
            </div>
            <div>
              <h3 className={`${labelStyle}`}>{contact_us.phone_number}</h3>
              <h4 className={`${textStyle}`}>+66-2-9600429</h4>
            </div>
            <div>
              <h3 className={`${labelStyle}`}>{contact_us.contact_hours}</h3>
              <h4 className={`${textStyle}`}>{contact_us.monday_sun}</h4>
            </div>
            <div>
              <h3 className={`${labelStyle}`}>{contact_us.social}</h3>
              <div className="flex flex-row gap-3">
                {SocialMediaList.map((social) => (
                  <Link
                    href={social.href}
                    key={social.label}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      alt={social.label}
                      src={social.icon}
                      className="h-[30px] w-auto"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContactUsFormContextProvider>
    </section>
  )
}
