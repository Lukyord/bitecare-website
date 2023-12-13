type CommonMessages = typeof import("./public/locales/en/common.json")
type HomePageMessages = typeof import("./public/locales/en/homepage.json")
type ProductsMessages = typeof import("./public/locales/en/products.json")
type ProductMessages = typeof import("./public/locales/en/product.json")

type MergedMessages = HomePageMessages &
  CommonMessages &
  ProductsMessages &
  ProductMessages

declare interface IntlMessages extends MergedMessages {}
