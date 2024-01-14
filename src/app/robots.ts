import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // TODO: uncomment when have these pages
        // disallow: ["/privacy-policy", "/terms-and-conditions"],
      },
    ],
    sitemap: `${process.env.BASE_URL}/sitemap.xml`,
  }
}
