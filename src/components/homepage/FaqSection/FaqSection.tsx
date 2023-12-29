import { getTranslations } from "next-intl/server"

import FaqAccordions from "./FaqAccordions"
import { Images } from "@/constant/Images"
import Image from "next/image"

export default async function FaqSection() {
  const tFaq = await getTranslations("faq")

  const Faqs = [
    {
      question: tFaq("question-1"),
      answer: [tFaq("answer-1")],
    },
    {
      question: tFaq("question-2"),
      answer: [tFaq("answer-2")],
    },
    {
      question: tFaq("question-3"),
      answer: [tFaq("answer-3")],
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
    {
      question: tFaq("question-11"),
      answer: [tFaq("answer-11"), tFaq("answer-11-2")],
    },
    {
      question: tFaq("question-12"),
      answer: [tFaq("answer-12")],
    },
    {
      question: tFaq("question-13"),
      answer: [
        tFaq("answer-13"),
        tFaq("answer-13-2"),
        tFaq("answer-13-3"),
        tFaq("answer-13-4"),
      ],
    },
    {
      question: tFaq("question-14"),
      answer: [
        tFaq("answer-14"),
        tFaq("answer-14-2"),
        tFaq("answer-14-3"),
        tFaq("answer-14-4"),
        tFaq("answer-14-5"),
        tFaq("answer-14-6"),
      ],
    },
  ]

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

      <FaqAccordions Faqs={Faqs} />
    </section>
  )
}
