import type { Metadata } from "next"
import localFont from "next/font/local"
import { notFound } from "next/navigation"
import { unstable_setRequestLocale } from "next-intl/server"

import { i18n } from "@/config/i18n.config"
import "./globals.css"

import Header from "@/components/common/Header"
import { Navbar } from "@/components/common/Navbar/Navbar"
import { Toaster } from "@/components/ui/toaster"

const psl = localFont({
  src: "../../../public/fonts/PSL096pro.ttf",
  display: "swap",
  variable: "--font-psl",
})
const helveltica_rounded = localFont({
  src: "../../../public/fonts/HelveticaRoundedLTStd-Bd.otf",
  display: "swap",
  variable: "--font-helveltica-rounded",
  fallback: ["var(--font-psl)"],
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

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    locale,
  }))
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

  unstable_setRequestLocale(locale)

  return (
    <html lang={locale}>
      <body
        className={`
                ${psl.variable} ${helveltica_rounded.variable} 
              bg-bc-surface
                font-psl
              `}
      >
        <Header>
          <Navbar />
        </Header>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
