import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import Link from "next/link"

type PlatformCardProps = {
  label: string
  href: string
  platformLogo: StaticImport
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
        className="relative mx-auto my-4 h-32 w-full rounded-3xl md:w-[80%] 2xl:mx-6 2xl:my-6 2xl:h-72 2xl:w-72"
        href={href}
        style={{ backgroundColor: platformColor }}
      >
        <Image
          className="absolute inset-x-0 bottom-0 h-[80%] w-auto p-6 2xl:h-auto"
          src={platformLogo}
          alt={label}
        />
      </Link>
    </>
  )
}
