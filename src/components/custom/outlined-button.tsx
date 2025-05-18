import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"
import { forwardRef } from "react"

export const OutlinedButton = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant="outline"
      className={cn(
        "border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white transition-all duration-300",
        className,
      )}
      {...props}
    />
  )
})
OutlinedButton.displayName = "OutlinedButton"
