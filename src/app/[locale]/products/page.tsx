import FaqNavigateSection from "@/components/common/FaqNavigateSection"
import ProductsListSection from "@/components/products/Products/ProductsListSection/ProductsListSection"
import ProductsPageLanding from "@/components/products/Products/ProductsPageLanding/ProductsPageLanding"

export default function ProductsPage() {
  return (
    <div>
      <ProductsPageLanding />
      <ProductsListSection />
      <FaqNavigateSection />
    </div>
  )
}
