import { NextIntlClientProvider, useMessages } from "next-intl"
import { Navbar } from "./Navbar/Navbar"
import pick from "lodash/pick"

const Header = () => {
  const messages = useMessages()

  return (
    <header className="fixed flex w-full flex-col items-center">
      <NextIntlClientProvider
        messages={pick(messages, [
          "navbar",
          "navbar-products-breadcrumb",
          "navbar-where-to-buy-breadcrumb",
          "navbar-support-breadcrumb",
        ])}
      >
        <Navbar />
      </NextIntlClientProvider>
    </header>
  )
}

export default Header
