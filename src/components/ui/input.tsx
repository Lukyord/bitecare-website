import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  transparent?: boolean
  notoThin?: boolean
  bottomBorder?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, transparent, notoThin, bottomBorder, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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
Input.displayName = "Input"

export { Input }
