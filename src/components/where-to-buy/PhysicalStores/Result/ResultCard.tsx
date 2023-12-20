import { useTranslations } from "next-intl"

import { PhysicalStore } from "@/types/where-to-buy/physical-store"
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"

import { Button } from "@/components/ui/button"
import { Link } from "@/lib/navigation"

type ResultCardProps = {
  physicalStore: PhysicalStore
}

export default function ResultCard({ physicalStore }: ResultCardProps) {
  const tButton = useTranslations("button")

  return (
    <div
      className="
                flex max-h-fit min-h-[200px] w-full 
                flex-col justify-between gap-5
                rounded-2xl bg-bc-surface-container 
                p-8 transition-all
                duration-300 hover:bg-bc-primary-container sm:h-[300px]
              "
    >
      <div className="flex flex-col gap-3">
        <h4 className="text-paragraph sm:text-h3"> {physicalStore.name}</h4>
        <div className="flex gap-2">
          <FaMapMarkerAlt size={24} className="text-[#F24E1E]" />
          <p className="text-subtitle sm:text-paragraph">
            {physicalStore.address}
          </p>
        </div>
        {physicalStore.phone && (
          <div className="flex gap-2">
            <FaPhoneAlt size={24} className="text-bc-primary" />
            <p className="text-subtitle sm:text-paragraph">
              {physicalStore.phone}
            </p>
          </div>
        )}
      </div>

      <Link href={physicalStore.link} target="_blank" rel="noopener noreferrer">
        <Button className="w-fit px-8 text-[16px] sm:text-[24px]">
          {tButton("view-on-google-map")}
        </Button>
      </Link>
    </div>
  )
}
