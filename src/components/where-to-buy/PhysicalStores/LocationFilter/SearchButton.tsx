import { useTranslations } from "next-intl"

import { Link } from "@/lib/navigation"
import { filterResult } from "@/lib/where-to-buy/filterResult"
import {
  PhysicalStore,
  SearchFilter,
} from "@/types/where-to-buy/physical-store"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

type SearchButtonProps = {
  searchFilter: SearchFilter
  setResult: React.Dispatch<React.SetStateAction<PhysicalStore[] | null>>
  setFilterAccordionValue: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchButton({
  searchFilter,
  setResult,
  setFilterAccordionValue,
}: SearchButtonProps) {
  const { toast } = useToast()
  const tButton = useTranslations("button")
  const tPhysicalStoreToast = useTranslations("physical-store-toast")
  return (
    <Link
      className="mt-8 flex w-full justify-center"
      href={`/where-to-buy?type=physical-store&province=${searchFilter.province}&district=${searchFilter.district}&subDistrict=${searchFilter.subDistrict}&storeName=${searchFilter.storeName}`}
      scroll={false}
      onClick={() => {
        if (!searchFilter.province && !searchFilter.storeName) {
          return toast({
            title: tPhysicalStoreToast("filter-input-required"),
            description: tPhysicalStoreToast(
              "filter-input-required-description"
            ),
          })
        }

        const result = filterResult(searchFilter)
        console.log("searchFilter", searchFilter)
        console.log("result", result)
        setFilterAccordionValue("")
        setResult(result)
      }}
    >
      <Button className="rounded-full px-10 py-6 font-psl text-[40px]">
        {tButton("search")}
      </Button>
    </Link>
  )
}
