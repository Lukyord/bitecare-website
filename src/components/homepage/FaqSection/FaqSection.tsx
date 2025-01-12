import { getLocale, getTranslations } from "next-intl/server"

import FaqAccordions from "./FaqAccordions"
import { Images } from "@/constant/Images"
import Image from "next/image"
import { Locale } from "@/config/i18n.config"
import { getHomeConfigs } from "@/payload/service"

export default async function FaqSection() {
  const locale = (await getLocale()) as Locale
  const { faq } = await getHomeConfigs({
    select: {
      faq: true,
    },
    locale,
  })

  const faqs = (faq?.faq_list ?? []).map((faq) => {
    return {
      question: faq.question,
      answer: faq.answer,
    }
  })

  const faq_ask_doctor = faq?.ask_doctor

  return (
    <section
      className="
              relative mt-28 flex h-full w-screen 
              scroll-mt-36 flex-col items-center
              gap-14 text-center xs:mt-14 lg:mt-28
            "
    >
      <h1 className="text-h3 lg:text-h2" id="faq">
        FAQs
      </h1>

      <Image
        alt="squiggly line"
        src={Images.SquigglyLineOrange}
        className="
              absolute left-[-1%] top-[-10vh] 
              hidden h-auto w-[12vw] lg:block
            "
      />

      <FaqAccordions faqs={faqs} faq_ask_doctor={faq_ask_doctor} />
    </section>
  )
}
