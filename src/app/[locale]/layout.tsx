import type { Metadata } from "next"
import localFont from "next/font/local"
import { notFound } from "next/navigation"

import { i18n } from "@/config/i18n.config"
import "./globals.css"

import Header from "@/components/common/Header"

const psl = localFont({
  src: "../../../public/fonts/PSL096pro.ttf",
  display: "swap",
  variable: "--font-psl",
})
const helveltica_rounded = localFont({
  src: "../../../public/fonts/HelveticaRoundedLTStd-Bd.otf",
  display: "swap",
  variable: "--font-helveltica-rounded",
})

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

  return (
    <html lang={locale}>
      <body
        className={`${psl.variable} ${helveltica_rounded.variable} no-scrollbar font-psl`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
