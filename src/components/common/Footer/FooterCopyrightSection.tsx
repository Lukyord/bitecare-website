import Image from "next/image"
import Link from "next/link"
import { Images } from "@/constant/Images"
import { Links } from "@/constant/Links"

type CopyrightProps = {
  copyright: string
  policy: string
  terms: string
}

const socialMediaList = [
  {
    label: "Facebook",
    href: Links.facebookHref,
    icon: Images.FacebookIcon,
  },
  {
    label: "Line",
    href: Links.lineHref,
    icon: Images.LineIcon,
  },
  {
    label: "Shopee",
    href: Links.shopeeHref,
    icon: Images.ShopeeIcon,
  },
]

export default function FooterCopyrightSection({
  copyright,
  policy,
  terms,
}: CopyrightProps) {
  return (
    <div className="flex flex-col-reverse pt-[8%] md:flex-row">
      <div className="w-0 md:w-[30%]"></div>
      <div className="text-subtitile flex pt-[4%] text-neutral-400 md:w-[40%] md:pt-0 lg:text-paragraph">
        <Link className="m-auto" href="/">
          {copyright}
        </Link>
        <Link className="m-auto" href="/policy-privacy">
          {policy}
        </Link>
        <Link className="m-auto" href="/terms-and-conditions">
          {terms}
        </Link>
      </div>
      <div className="flex justify-center md:w-[30%] md:justify-end">
        {socialMediaList.map((socialMedia, index) => (
          <Link
            className="mx-[2%] my-auto md:mx-[4%]"
            href={socialMedia.href}
            key={index}
          >
            <Image src={socialMedia.icon} alt={socialMedia.label} />
          </Link>
        ))}
      </div>
    </div>
  )
}
