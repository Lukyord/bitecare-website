import Image from "next/image"

import { Images } from "@/constant/Images"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type FaqAccordionProps = {
  Faqs: { question: string; answer: string[] }[]
}

export default function FaqAccordions({ Faqs }: FaqAccordionProps) {
  return (
    <div
      className="
                relative mb-[30vw] w-[90%] 
                bg-white px-5 py-7 sm:mb-[15vw]
                lg:px-10 lg:py-14
              "
    >
      <Image
        alt="homepage dog 5"
        src={Images.HomepageDog_5}
        className="
          absolute -top-[90px] right-0 h-auto 
          w-[150px] sm:-top-[135px] sm:w-[225px] 
          lg:-top-[180px] lg:w-[300px] 2xl:-top-[240px] 2xl:w-[400px]
          "
      />

      <Image
        alt="circle layers bc secondary"
        src={Images.CircleLayersBcSecondary}
        width={250}
        height={250}
        className="
          absolute -bottom-[25vw] -left-[8vw] h-auto w-[30vw] sm:-bottom-[12vw] sm:-left-[4vw] sm:w-[15vw]
          "
      />

      <Accordion type="single" collapsible>
        {Faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="my-4 text-start text-paragraph lg:text-h3">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-4 mt-4 flex flex-col gap-6">
                {faq.answer.map((answer, index) => (
                  <p
                    key={index}
                    className="text-justify text-subtitle lg:text-paragraph"
                  >
                    {answer}
                  </p>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
