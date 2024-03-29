import { useTranslations } from "next-intl"

import { Link } from "@/lib/navigation"
import { filterResult } from "@/lib/where-to-buy/filterResult"
import { SearchFilter } from "@/types/where-to-buy/physical-store"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { usePhysicalStoreSearch } from "@/context/PhysicalStoreSearchContextProvider"

type SearchButtonProps = {
  searchFilter: SearchFilter
}

export default function SearchButton({ searchFilter }: SearchButtonProps) {
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
          type: "physical-stores",
          province: searchFilter.province || "",
          district: searchFilter.district || "",
          subDistrict: searchFilter.subDistrict || "",
          storeName: searchFilter.storeName || "",
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

        const newResult = await filterResult(searchFilter)
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
