import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"
import { forwardRef } from "react"

export const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className={cn(
        "bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white border-none shadow-lg transition-all duration-300",
        className,
      )}
      {...props}
    />
  )
})
CustomButton.displayName = "CustomButton"
