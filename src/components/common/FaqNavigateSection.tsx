import { getTranslations } from "next-intl/server"
import PrimaryButton from "./Button/PrimaryButton"

export default async function FaqNavigateSection() {
  const tMiscellaneous = await getTranslations("miscellaneous")
  const tButton = await getTranslations("button")

  return (
    <section
      className="
                    mx-auto my-24 flex 
                    w-[90vw] flex-col 
                    items-center gap-14 xl:gap-20
                  "
    >
      <div className="h-1 w-full border-t border-bc-grey" />

      <h2 className="text-center text-h3 xl:text-h2">
        {tMiscellaneous("check-out-faq")}
      </h2>

      <PrimaryButton text={tButton("faq")} href="/#faq" />
    </section>
  )
}
