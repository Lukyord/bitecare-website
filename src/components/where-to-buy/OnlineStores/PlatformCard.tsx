import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import Link from "next/link"

type PlatformCardProps = {
  label: string
  href: string
  platformLogo: string
  platformColor: string
}

export default function PlatformCard({
  label,
  href,
  platformLogo,
  platformColor,
}: PlatformCardProps) {
  return (
    <>
      <Link
        className="relative mx-auto my-3 h-32 w-full rounded-lg md:w-[80%] lg:mx-3 lg:my-3 lg:h-[218px] lg:w-[218px] lg:rounded-3xl sub-desktop:mx-6 sub-desktop:my-6 sub-desktop:h-72 sub-desktop:w-72"
        href={href}
        style={{ backgroundColor: platformColor }}
        target="_blank"
      >
        <Image
          className="absolute bottom-0 left-0 max-h-[86px] w-auto p-4 sub-desktop:max-h-[100px]"
          src={platformLogo}
          alt={label}
          style={{ filter: "brightness(0) invert(1)" }}
          width={86}
          height={86}
        />
      </Link>
    </>
  )
}
