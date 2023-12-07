type FaqAccordionProps = {
  Faqs: { question: string; answer: string[] }[]
}

export default function FaqAccordions({ Faqs }: FaqAccordionProps) {
  return <div className="w-[90%] bg-white px-10 py-14">FaqAccordions</div>
}
