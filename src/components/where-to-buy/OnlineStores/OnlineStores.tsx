import PlatformCard from "./PlatformCard"
import { useTranslations } from "next-intl"
import { Media, OnlineStore } from "@/payload/type-gen"

type PlatformCardProps = {
  onlineStores: OnlineStore[]
}

export default function OnlineStores({ onlineStores }: PlatformCardProps) {
  const tOnlineStores = useTranslations("online-platform")

  return (
    <>
      <div className="flex min-h-[52rem] justify-center bg-bc-inverse-primary md:min-h-[60rem]">
        <div className="justify-left my-10 w-screen flex-col px-7 md:my-20 lg:max-w-screen-lg sub-desktop:w-[1400px] sub-desktop:max-w-screen-2xl">
          <h1 className="text-paragraph md:px-7 lg:text-h3">
            {tOnlineStores("platforms")} ({onlineStores.length})
          </h1>
          <div className="flex flex-wrap">
            {onlineStores.map((store, index) => (
              <PlatformCard
                label={store.name}
                href={store.url}
                platformLogo={(store.logo as Media).url ?? ""}
                platformColor={store.platform_color}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
