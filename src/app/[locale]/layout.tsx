import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { notFound } from "next/navigation"
import { i18n } from "@/config/i18n.config"
import { NextIntlClientProvider, useMessages } from "next-intl"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BiteCare",
  //TODO: Add description
  description: "Description",
  //TODO: Add Base URL
  // metadataBase: new URL("https://www.agnoshealth.com"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      th: "/",
    },
  },
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const isValidLocale = i18n.locales.some((cur) => cur === locale)
  if (!isValidLocale) notFound()

  const messages = useMessages()

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
