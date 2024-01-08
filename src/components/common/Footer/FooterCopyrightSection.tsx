import Image from "next/image"
import Link from "next/link"
import { SocialMediaList } from "@/constant/Links"

type CopyrightProps = {
  copyright: string
  policy: string
  terms: string
}

export default function FooterCopyrightSection({
  copyright,
  policy,
  terms,
}: CopyrightProps) {
  return (
    <div className="flex  flex-col-reverse overflow-hidden pt-[8%] md:flex-row">
      <div className="w-0 md:w-[30%]"></div>
      <div className="pt-[4%] md:w-[40%] md:pt-0">
        <div className="mx-auto flex w-full max-w-xl justify-center text-subtitle text-neutral-400 lg:text-paragraph">
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
      </div>
      <div className="md:w-[30%]">
        <div className="mx-auto flex w-full max-w-sm  justify-center md:mx-0 md:ml-auto md:justify-end">
          {SocialMediaList.map((social, index) => (
            <Link
              className="mx-[2%] my-auto md:mx-[4%]"
              href={social.href}
              key={index}
            >
              <Image src={social.icon} alt={social.label} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
