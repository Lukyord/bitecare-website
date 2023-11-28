type CommonMessages = typeof import("./public/locales/en/common.json")
type HomePageMessages = typeof import("./public/locales/en/homepage.json")

type MergedMessages = HomePageMessages & CommonMessages

declare interface IntlMessages extends MergedMessages {}
