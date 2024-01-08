import { getTranslations } from "next-intl/server"

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default async function NotFound() {
  const tCommon = await getTranslations("miscellaneous")

  return (
    <body>
      <h2>Page not found</h2>
      <h3>{tCommon("check-out-faq")}</h3>
    </body>
  )
}
