import { Link } from "@/lib/navigation"

type PrimaryButtonProps = {
  text: string
  href: string
}

const PrimaryButton = ({ text, href }: PrimaryButtonProps) => {
  return (
    <Link href={href}>
      <button
        className="
              rounded-xl bg-bc-primary px-10 py-5 text-h3
              text-white transition-all duration-300
              ease-in-out [box-shadow:6px_6px_0px_0px_#386A1F]
              hover:-translate-y-2 hover:[box-shadow:12px_12px_0px_0px_#386A1F]
            "
      >
        {text}
      </button>
    </Link>
  )
}

export default PrimaryButton
