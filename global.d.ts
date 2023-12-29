type CommonMessages = typeof import("./public/locales/en/common.json")
type HomePageMessages = typeof import("./public/locales/en/homepage.json")
type ProductsMessages = typeof import("./public/locales/en/products.json")
type ProductMessages = typeof import("./public/locales/en/product.json")
type WhereToBuyMessages = typeof import("./public/locales/en/where-to-buy.json")
type AboutUsMessages = typeof import("./public/locales/en/about-us.json")

type MergedMessages = HomePageMessages &
  CommonMessages &
  ProductsMessages &
  ProductMessages &
  WhereToBuyMessages &
  AboutUsMessages

declare interface IntlMessages extends MergedMessages {}
