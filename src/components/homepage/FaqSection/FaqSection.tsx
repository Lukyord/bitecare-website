import { getTranslations } from "next-intl/server"

import FaqAccordions from "./FaqAccordions"
import { Images } from "@/constant/Images"
import Image from "next/image"

export default async function FaqSection() {
  const tFaq = await getTranslations("faq")

  const Faqs = [
    {
      question: tFaq("question-1"),
      answer: [tFaq("answer-1"), tFaq("answer-1-2")],
    },
    {
      question: tFaq("question-2"),
      answer: [tFaq("answer-2")],
    },
    {
      question: tFaq("question-3"),
      answer: [tFaq("answer-3"), tFaq("answer-3-2")],
    },
    {
      question: tFaq("question-4"),
      answer: [tFaq("answer-4")],
    },
    {
      question: tFaq("question-5"),
      answer: [tFaq("answer-5")],
    },
    {
      question: tFaq("question-6"),
      answer: [tFaq("answer-6")],
    },
    {
      question: tFaq("question-7"),
      answer: [tFaq("answer-7")],
    },
    {
      question: tFaq("question-8"),
      answer: [tFaq("answer-8")],
    },
    {
      question: tFaq("question-9"),
      answer: [tFaq("answer-9")],
    },
    {
      question: tFaq("question-10"),
      answer: [tFaq("answer-10")],
    },
  ]

  return (
    <section
      className="
              relative my-28 flex h-full w-screen 
              scroll-mt-36 flex-col items-center
              gap-14 text-center xs:my-14 lg:my-28
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

      <FaqAccordions Faqs={Faqs} />
    </section>
  )
}
