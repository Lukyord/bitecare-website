import { use } from "react"
import localFont from "next/font/local"
import { notFound } from "next/navigation"
import { getTranslations, unstable_setRequestLocale } from "next-intl/server"
import { Noto_Sans } from "next/font/google"

import { i18n } from "@/config/i18n.config"
import "./globals.css"
import OpengraphImage from "@/app/(web)/opengraph-image.png"

import Header from "@/components/common/Header"
import { Navbar } from "@/components/common/Navbar/Navbar"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/common/Footer/Footer"
import FooterSection from "@/components/common/Footer/FooterSection"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { pick } from "lodash"

const psl = localFont({
  src: "../../../../public/fonts/PSL096pro.ttf",
  display: "swap",
  variable: "--font-psl",
})
const helveltica_rounded = localFont({
  src: "../../../../public/fonts/HelveticaRoundedLTStd-Bd.otf",
  display: "swap",
  variable: "--font-helveltica-rounded",
  fallback: ["var(--font-psl)"],
})

const noto = Noto_Sans({
  weight: ["100", "400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto",
  fallback: ["var(--font-psl)"],
})

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}) {
  const params = await props.params

  const { locale } = params

  const tMetadata = await getTranslations("metadata")

  return {
    title: {
      default: "BiteCare",
      template: "%s | BiteCare - Functional dog treat",
    },
    description: tMetadata("description"),
    openGraph: {
      title: {
        default: "BiteCare",
        template: "%s | BiteCare",
      },
      description: tMetadata("description"),
      image: OpengraphImage,
    },
    twitter: {
      card: "summary_large_image",
      title: {
        default: "BiteCare",
        template: "%s | BiteCare",
      },
      description: tMetadata("description"),
      image: OpengraphImage,
    },
    //TODO: change Base URL
    metadataBase: new URL(
      process.env.BASE_URL || "https://bitecare-website.vercel.app"
    ),
    alternates: {
      canonical: process.env.BASE_URL || "https://bitecare-website.vercel.app",
      languages: {
        en: `${process.env.BASE_URL}/en`,
        th: `${process.env.BASE_URL}`,
      },
    },
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    locale,
  }))
}

export default function RootLayout(props: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const params = use(props.params)

  const { locale } = params

  const { children } = props

  const isValidLocale = i18n.locales.some((cur) => cur === locale)
  if (!isValidLocale) notFound()

  unstable_setRequestLocale(locale)

  const messages = useMessages()

  return (
    <html lang={locale}>
      <body
        className={`
                ${psl.variable} ${helveltica_rounded.variable} 
                ${noto.variable}
              bg-bc-surface
                font-psl
              `}
      >
        <Header>
          <Navbar />
        </Header>
        <NextIntlClientProvider
          locale={locale}
          messages={pick(messages, "error", "button")}
        >
          {children}
        </NextIntlClientProvider>
        <Toaster />
        <Footer>
          <FooterSection />
        </Footer>
      </body>
    </html>
  )
}
