import FaqNavigateSection from "@/components/common/FaqNavigateSection"
import ProductsListSection from "@/components/products/ProductsListSection/ProductsListSection"
import ProductsPageLanding from "@/components/products/ProductsPageLanding/ProductsPageLanding"

export default function ProductsPage() {
  return (
    <div>
      <ProductsPageLanding />
      <ProductsListSection />
      <FaqNavigateSection />
    </div>
  )
}
