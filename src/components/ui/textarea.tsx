import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  transparent?: boolean
  notoThin?: boolean
  bottomBorder?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, transparent, notoThin, bottomBorder, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
          {
            "focus-visible:ring-off rounded-none bg-transparent p-0 shadow-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0":
              transparent,
            "bg-transparent p-0 font-noto text-[24px] font-medium placeholder:font-thin xl:text-[36px]":
              notoThin,
            "border-0  border-b-2 border-bc-grey pb-2": bottomBorder,
          }
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
