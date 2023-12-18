import { useState } from "react"

import { Check, ChevronsUpDown } from "lucide-react"
import {
  AreaDivisionChoice,
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
  addressChoices: AreaDivisionChoice[]
  setSearchFilter: React.Dispatch<React.SetStateAction<SearchFilter>>
  addressKey: keyof SearchFilter
  disabled: boolean
}

export default function AddressComboBox({
  addressChoices,
  setSearchFilter,
  addressKey,
  disabled,
}: PostCodeFilterProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const tPhysicalStore = useTranslations("physical-store")

  const placeholder =
    addressKey === "province"
      ? tPhysicalStore("province")
      : addressKey === "district"
        ? tPhysicalStore("district/area")
        : tPhysicalStore("subdistrict/subarea")

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
          {value
            ? addressChoices.find((address) => address.value === value)?.label
            : placeholder}
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
              {addressChoices.map((address) => (
                <CommandItem
                  className="text-[24px]"
                  key={address.value}
                  value={address.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue)
                    setSearchFilter((prev) => ({
                      ...prev,
                      [addressKey]: currentValue,
                    }))
                    setOpen(false)
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
