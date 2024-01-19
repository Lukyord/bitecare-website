import { SocialMediaList } from "@/constant/Links"
import PlatformCard from "./PlatformCard"
import { useTranslations } from "next-intl"

export default function OnlineStores() {
  const tOnlineStores = useTranslations("online-platform")

  return (
    <>
      <div className="flex min-h-[52rem] justify-center bg-bc-inverse-primary md:min-h-[60rem]">
        <div className="justify-left sub-desktop:w-[1400px] sub-desktop:max-w-screen-2xl my-10 w-screen flex-col px-7 md:my-20 lg:max-w-screen-lg">
          <h1 className="text-paragraph md:px-7 lg:text-h3">
            {tOnlineStores("platforms")} ({SocialMediaList.length})
          </h1>
          <div className="flex flex-wrap">
            {SocialMediaList.map((social, index) => (
              <PlatformCard
                label={social.label}
                href={social.href}
                platformLogo={social.platformLogo}
                platformColor={social.platformColor}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
