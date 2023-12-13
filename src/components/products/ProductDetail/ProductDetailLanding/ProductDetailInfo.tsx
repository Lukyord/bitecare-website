import SecondaryButton from "@/components/common/Button/SecondaryButton"
import ProductTag from "@/components/common/ProductTag"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BiteCareProduct } from "@/types/common/product"
import { getTranslations } from "next-intl/server"
import React from "react"

type ProductDetailInfoProps = {
  product: BiteCareProduct
}

export default async function ProductDetailInfo({
  product,
}: ProductDetailInfoProps) {
  const tButton = await getTranslations("button")

  return (
    <div className="mt-[5%] flex h-full w-full flex-col">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h1 className="text-h2">{product.name}</h1>
        <div className={`${product.compareDividerColor} h-1 w-[60%]`} />
        <div className="flex gap-1">
          {product.tags.map((tag, index) => (
            <React.Fragment key={index}>
              <ProductTag tag={tag} size="large" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="my-6 text-justify text-paragraph">
        {product.productInfo.productDescription}
      </p>

      {/* Question */}
      <Accordion type="single" collapsible>
        {product.productInfo.questions.map((question, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="my-1 text-start text-paragraph">
              {question}
            </AccordionTrigger>
            <AccordionContent>
              <p key={index} className="text-justify text-[18px]">
                {/* {product.productInfo.answers[index]} */}
                {product.productInfo.compareDescription1}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* cta */}
      <div className="mt-14 flex w-full justify-center">
        <SecondaryButton
          text={tButton("get-our-product")}
          size="h3"
          specificWidth="w-[380px]"
          href="/where-to-buy"
        />
      </div>
    </div>
  )
}
