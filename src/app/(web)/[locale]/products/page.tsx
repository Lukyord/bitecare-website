import { Metadata } from "next"
import { unstable_setRequestLocale } from "next-intl/server"

import FaqNavigateSection from "@/components/common/FaqNavigateSection"
import ProductsListSection from "@/components/products/Products/ProductsListSection/ProductsListSection"
import ProductsPageLanding from "@/components/products/Products/ProductsPageLanding/ProductsPageLanding"

export const metadata: Metadata = {
  title: "Products",
}

export default function ProductsPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  return (
    <div className="overflow-x-hidden">
      <ProductsPageLanding />
      <ProductsListSection />
      <FaqNavigateSection />
    </div>
  )
}
