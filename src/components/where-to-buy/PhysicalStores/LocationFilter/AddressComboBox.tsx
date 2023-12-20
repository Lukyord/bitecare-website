import { useState } from "react"

import { Check, ChevronsUpDown } from "lucide-react"
import {
  ComboBoxChoice,
  SearchFilter,
} from "@/types/where-to-buy/physical-store"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"

type PostCodeFilterProps = {
  addressChoices: ComboBoxChoice[]
  setSearchFilter: React.Dispatch<React.SetStateAction<SearchFilter>>
  addressKey: keyof SearchFilter
  disabled?: boolean
  value: string
}

export default function AddressComboBox({
  addressChoices,
  setSearchFilter,
  addressKey,
  disabled,
  value,
}: PostCodeFilterProps) {
  const [open, setOpen] = useState(false)
  const tPhysicalStore = useTranslations("physical-store")

  const placeholder =
    addressKey === "province"
      ? tPhysicalStore("province")
      : addressKey === "district"
        ? tPhysicalStore("district/area")
        : addressKey === "subDistrict"
          ? tPhysicalStore("subdistrict/subarea")
          : tPhysicalStore("store-name")

  const handleSelectItem = (currentValue: string) => {
    setOpen(false)
    if (addressKey === "province") {
      setSearchFilter((prev) => ({
        province: currentValue === prev.province ? "" : currentValue,
        district: "",
        subDistrict: "",
        storeName: "",
      }))
    } else if (addressKey === "district") {
      setSearchFilter((prev) => ({
        ...prev,
        district: currentValue === prev.district ? "" : currentValue,
        subDistrict: "",
      }))
    } else if (addressKey === "subDistrict") {
      setSearchFilter((prev) => ({
        ...prev,
        subDistrict: currentValue === prev.subDistrict ? "" : currentValue,
      }))
    } else {
      setSearchFilter((prev) => ({
        ...prev,
        storeName: currentValue,
      }))
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        asChild
        className="px-0 font-psl text-[24px]"
        disabled={disabled}
      >
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between px-4"
        >
          {value ? value : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="z-[999] w-[552px] p-0"
        avoidCollisions
      >
        <Command>
          <CommandInput placeholder={placeholder} className="text-[24px]" />
          <ScrollArea className="h-[250px] w-full">
            <CommandEmpty className="py-8 text-center text-[24px]">
              {tPhysicalStore("no-result")}
            </CommandEmpty>
            <CommandGroup>
              {addressChoices.map((address, index) => (
                <CommandItem
                  className="text-[24px]"
                  key={index}
                  value={address.value}
                  onSelect={() => {
                    handleSelectItem(address.value)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === address.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {address.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
