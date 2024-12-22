import { i18n } from "@/config/i18n.config"
import { ProductSlugs } from "@/constant/Products"
import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products: MetadataRoute.Sitemap = []

  for (const locale of i18n.locales) {
    products.push(
      ...ProductSlugs.map((slug) => ({
        url: `${process.env.BASE_URL}/${locale}/products/${slug}`,
      }))
    )
  }

  // TODO: Add privacy policy and terms and conditions pages
  const pages: MetadataRoute.Sitemap = i18n.locales.flatMap((locale) => [
    {
      url: `${process.env.BASE_URL}/${locale}`,
    },
    {
      url: `${process.env.BASE_URL}/${locale}/about-us`,
    },
    {
      url: `${process.env.BASE_URL}/${locale}/products`,
    },
    {
      url: `${process.env.BASE_URL}/${locale}/where-to-buy`,
    },
  ])

  return [...pages, ...products]
}
