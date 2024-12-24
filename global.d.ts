type CommonMessages = typeof import("./public/locales/en/common.json")
type ProductsMessages = typeof import("./public/locales/en/products.json")
type ProductMessages = typeof import("./public/locales/en/product.json")
type WhereToBuyMessages = typeof import("./public/locales/en/where-to-buy.json")
type AboutUsMessages = typeof import("./public/locales/en/about-us.json")

type MergedMessages = CommonMessages &
  ProductsMessages &
  ProductMessages &
  WhereToBuyMessages &
  AboutUsMessages

declare interface IntlMessages extends MergedMessages {}
