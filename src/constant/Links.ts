import { Images } from "./Images"

const facebookHref = "https://www.facebook.com/bitecarethailand"
const lineHref =
  "https://linevoom.line.me/user/_dZ4Ene1pJg4iONYAjFcc9jy7lQ1mdlGuZKzTOqY"
const shopeeHref = "https://shopee.co.th/bitecare"
const tiktokRef = "https://www.tiktok.com/@bitecare"

export const SocialMediaList = [
  {
    label: "Facebook",
    href: facebookHref,
    icon: Images.FacebookIcon,
    platformLogo: Images.FacebookLogoFullWhite,
    platformColor: "#475A96",
  },
  {
    label: "Line",
    href: lineHref,
    icon: Images.LineIcon,
    platformLogo: Images.LineOaLogoFullWhite,
    platformColor: "#00B900",
  },
  {
    label: "Shopee",
    href: shopeeHref,
    icon: Images.ShopeeIcon,
    platformLogo: Images.ShopeeLogoFullWhite,
    platformColor: "#FF5722",
  },
  {
    label: "Tiktok",
    href: tiktokRef,
    icon: Images.TiktokIcon,
    platformLogo: Images.TiktokLogoFull,
    platformColor: "#000000",
  },
]
