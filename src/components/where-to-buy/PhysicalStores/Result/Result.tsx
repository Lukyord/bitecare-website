import { useTranslations } from "next-intl"

import { CiSearch } from "react-icons/ci"
import { PhysicalStore } from "@/types/where-to-buy/physical-store"

import { Separator } from "@/components/ui/separator"

type ResultProps = {
  result: PhysicalStore[]
}

export default function Result({ result }: ResultProps) {
  const tPhysicalStore = useTranslations("physical-store")

  return (
    <div className="w-[600px] rounded-xl bg-white shadow-lg lg:p-2">
      <h3
        className="
                  p-4 text-start font-hel_rounded 
                  text-paragraph hover:no-underline 
                  sm:text-h3
                "
      >
        {tPhysicalStore("result")}
      </h3>

      <div className="flex flex-col items-center gap-3 px-4 font-psl">
        <Separator className="my-4 bg-bc-black px-4" />

        {result.length === 0 ? (
          <div className="mb-4 flex flex-col items-center gap-4">
            <CiSearch color="grey" size={120} />
            <h4 className="text-h3">{tPhysicalStore("no-result")}</h4>
            <p className="w-[60%] text-center text-paragraph">
              {tPhysicalStore("no-result-description")}
            </p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}
