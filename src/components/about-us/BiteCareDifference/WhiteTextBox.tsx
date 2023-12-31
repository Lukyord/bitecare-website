import { Separator } from "@/components/ui/separator"

type WhiteTextBoxProps = {
  header: string
  children: React.ReactNode
}

export default function WhiteTextBox({ header, children }: WhiteTextBoxProps) {
  return (
    <div className="flex h-full max-h-[1000px] w-full flex-col bg-white p-8 sm:p-[5%]">
      <div className="flex flex-col gap-4">
        <h2 className="text-paragraph lg:text-h3">{header}</h2>
        <Separator className="mb-6 desktop:my-6" />
      </div>

      <div
        className="
                  flex flex-col 
                  gap-10 text-justify text-paragraph
                  desktop:mt-10 desktop:gap-20
                  desktop:text-[32px]
                "
      >
        {children}
      </div>
    </div>
  )
}
