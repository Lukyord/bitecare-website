import Image from "next/image"
import { getMessages, getTranslations } from "next-intl/server"

import { Images } from "@/constant/Images"
import { Link } from "@/lib/navigation"
import { Links } from "@/constant/Links"

import SendMessageButton from "./SendMessageButton"
import OpenSendMessageFormButton from "./OpenSendMessageFormButton"
import ContactUsFormContextProvider from "@/context/ContactUsFormContextProvider"
import { NextIntlClientProvider } from "next-intl"
import { pick } from "lodash"

export default async function ContactUs() {
  const messages = await getMessages()
  const tContactUs = await getTranslations("contact-us")

  const labelStyle = "text-paragraph mb-2 sm:mb-4"
  const textStyle = "font-noto text-[36px] font-thin"

  // hover font bold without layout shift
  // before:invisible before:block
  // before:h-0 before:overflow-hidden before:font-bold
  // before:content-[attr(title)]

  //TODO: move this to constant to be the only one source of truth
  const socialMediaList = [
    {
      label: "Facebook",
      href: Links.facebookHref,
      icon: Images.FacebookIcon,
    },
    {
      label: "Line",
      href: Links.lineHref,
      icon: Images.LineIcon,
    },
    {
      label: "Shopee",
      href: Links.shopeeHref,
      icon: Images.ShopeeIcon,
    },
  ]

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
        <NextIntlClientProvider
          messages={pick(messages, "contact-us", "button", "contact-us-toast")}
        >
          <OpenSendMessageFormButton />
        </NextIntlClientProvider>
        <div className="relative h-full w-fit">
          <Image
            alt="contact us dog"
            width={683}
            height={1024}
            src={Images.AboutUsContactUsDog}
            className="h-auto w-[100vw] object-contain lg:h-[110vh] lg:w-auto"
          />
          <h2
            className="
                  absolute left-1/2 top-[10%] 
                  translate-x-[-50%] whitespace-nowrap text-h2 
                  sm:text-h1 xl:bottom-[20%]
                "
          >
            {tContactUs("header")}
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
              <h3 className={`${labelStyle}`}>{tContactUs("email")}</h3>
              <SendMessageButton>
                <h4
                  title={tContactUs("send-us-a-message")}
                  className={`${textStyle}
              underline decoration-[1px] underline-offset-4
              `}
                >
                  {tContactUs("send-us-a-message")}
                </h4>
              </SendMessageButton>
            </div>
            <div>
              <h3 className={`${labelStyle}`}>{tContactUs("phone-number")}</h3>
              <h4 className={`${textStyle}`}>+66 96 123 4567</h4>
            </div>
            <div>
              <h3 className={`${labelStyle}`}>{tContactUs("contact-hours")}</h3>
              <h4 className={`${textStyle}`}>{tContactUs("monday-sun")}</h4>
            </div>
            <div>
              <h3 className={`${labelStyle}`}>{tContactUs("social")}</h3>
              <div className="flex flex-row gap-3">
                {socialMediaList.map((social) => (
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
