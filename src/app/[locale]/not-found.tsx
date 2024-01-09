import { useTranslations } from "next-intl"

import PrimaryButton from "@/components/common/Button/PrimaryButton"

export default function NotFound() {
  const tError = useTranslations("error")
  const tButton = useTranslations("button")

  return (
    <section
      className="
              flex flex-col items-center 
              justify-center gap-14 overflow-hidden 
              pb-28 pt-48
            "
    >
      <h1 className="text-h2 lg:text-h1">😔</h1>
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="w-[90%] text-h3 sm:text-h2 lg:text-h1">
          {tError("page-not-found")}
        </h1>
        <p className="w-[80%] text-paragraph lg:text-h3">
          {tError("page-not-found-description")}
        </p>
      </div>
      <PrimaryButton text={tButton("back-to-homepage")} href="/" />
    </section>
  )
}
