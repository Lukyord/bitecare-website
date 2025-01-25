import { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"

import FaqNavigateSection from "@/components/common/FaqNavigateSection"
import ProductsListSection from "@/components/products/Products/ProductsListSection/ProductsListSection"
import ProductsPageLanding from "@/components/products/Products/ProductsPageLanding/ProductsPageLanding"

export const metadata: Metadata = {
  title: "Products",
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const locale = (await params).locale
  setRequestLocale(locale)
  return (
    <div className="overflow-x-hidden">
      <ProductsPageLanding />
      <div id="all-products"></div>
      <ProductsListSection />
      <FaqNavigateSection />
    </div>
  )
}
