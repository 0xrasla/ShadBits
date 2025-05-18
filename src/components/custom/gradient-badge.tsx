import { cn } from "@/lib/utils"
import { Badge, type BadgeProps } from "@/components/ui/badge"
import { forwardRef } from "react"

export const GradientBadge = forwardRef<HTMLDivElement, BadgeProps>(({ className, ...props }, ref) => {
  return (
    <Badge
      ref={ref}
      className={cn(
        "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0",
        className,
      )}
      {...props}
    />
  )
})
GradientBadge.displayName = "GradientBadge"
