import SecondaryButton from "@/components/common/Button/SecondaryButton"
import ProductTag from "@/components/common/ProductTag"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getDividerColor } from "@/lib/color"
import type { Product, ProductTag as ProductTagType } from "@/payload/type-gen"
import { BiteCareProduct } from "@/types/common/product"
import { getTranslations } from "next-intl/server"
import React from "react"

type ProductDetailInfoProps = {
  product: Product
}

export default async function ProductDetailInfo({
  product,
}: ProductDetailInfoProps) {
  const tButton = await getTranslations("button")

  return (
    <div className="mt-[5%] flex h-full w-full flex-col">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h1 className="text-h2">{product.label}</h1>
        <div
          className="h-1 w-[60%]"
          style={{ backgroundColor: getDividerColor(product.primary_color) }}
        />
        <div className="flex gap-1">
          {product.tags?.map((tag, index) => (
            <React.Fragment key={index}>
              <ProductTag tag={tag as ProductTagType} size="large" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="my-6 text-justify text-paragraph">{product.description}</p>

      {/* Question */}
      <Accordion type="single" collapsible>
        {product.facts.map((fact, index) => (
          <AccordionItem
            value={`fact-${fact.id}`}
            key={fact.id ?? `fact-unknown-${index}`}
          >
            <AccordionTrigger className="my-1 text-start text-paragraph">
              {fact.title}
            </AccordionTrigger>
            <AccordionContent>
              <p key={index} className="text-justify text-[18px]">
                {fact.description}
                {/* {product.productInfo.compareDescription1} */}
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
          href="/where-to-buy?type=physical-store"
        />
      </div>
    </div>
  )
}
