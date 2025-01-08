import { useTranslations } from "next-intl"

import { Link } from "@/lib/navigation"
import { filterResult } from "@/lib/where-to-buy/filterResult"
import { SearchFilter } from "@/types/where-to-buy/physical-store"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { usePhysicalStoreSearch } from "@/context/PhysicalStoreSearchContextProvider"
import { Store } from "@/payload/type-gen"

type SearchButtonProps = {
  searchFilter: SearchFilter
  stores: Store[]
}

export default function SearchButton({
  searchFilter,
  stores,
}: SearchButtonProps) {
  const { toast } = useToast()
  const tButton = useTranslations("button")

  const tPhysicalStoreToast = useTranslations("physical-store-toast")
  const { setResult, setFilterAccordionValue } = usePhysicalStoreSearch()

  return (
    <Link
      className="mt-8 flex w-full justify-center"
      href={{
        pathname: "/where-to-buy",
        query: {
          type: "physical-store",
          province: searchFilter.province.value || "",
          district: searchFilter.district.value || "",
          subDistrict: searchFilter.subDistrict.value || "",
          storeName: searchFilter.storeName.value || "",
          distance: "",
          postCode: "",
          focus: "",
        },
      }}
      prefetch={false}
      scroll={false}
      replace
      onClick={async () => {
        if (!searchFilter.province && !searchFilter.storeName) {
          return toast({
            title: tPhysicalStoreToast("filter-input-required"),
            description: tPhysicalStoreToast(
              "filter-input-required-description"
            ),
          })
        }

        const newResult = await filterResult(searchFilter, stores)
        setResult(newResult)
        setFilterAccordionValue("")
      }}
    >
      <Button className="rounded-full px-10 py-6 font-psl text-[40px]">
        {tButton("search")}
      </Button>
    </Link>
  )
}
