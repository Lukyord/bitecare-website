"use client"

import { useTranslations } from "next-intl"
import { useEffect } from "react"

import PrimaryButton from "@/components/common/Button/PrimaryButton"
import SecondaryButton from "@/components/common/Button/SecondaryButton"

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const tError = useTranslations("error")
  const tButton = useTranslations("button")

  useEffect(() => {
    console.error(error)
  }, [error])

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
          {tError("error")}
        </h1>
        <p className="w-[80%] text-paragraph lg:text-h3">
          {tError("error-description")}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-16">
        <PrimaryButton
          text={tButton("contact-us")}
          href="/about-us#contact-us"
        />
        <SecondaryButton
          text={tButton("retry")}
          onClick={reset}
          size="h3"
          specificWidth="w-[230px]"
        />
      </div>
    </section>
  )
}
