import { SocialMediaList } from "@/constant/Links"
import PlatformCard from "./PlatformCard"
import { useTranslations } from "next-intl"

export default function OnlineStores() {
  const tOnlineStores = useTranslations("online-store")
  return (
    <>
      <div className="my-20 flex justify-center bg-bc-inverse-primary 2xl:min-h-[80vh]">
        <div className="justify-left my-20 w-screen max-w-screen-2xl flex-col px-7 2xl:w-[1400px]">
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
