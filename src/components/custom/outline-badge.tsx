import { cn } from "@/lib/utils"
import { Badge, type BadgeProps } from "@/components/ui/badge"
import { forwardRef } from "react"

export const OutlineBadge = forwardRef<HTMLDivElement, BadgeProps>(({ className, ...props }, ref) => {
  return (
    <Badge
      ref={ref}
      variant="outline"
      className={cn("border-2 bg-transparent text-slate-800 hover:bg-slate-100", className)}
      {...props}
    />
  )
})
OutlineBadge.displayName = "OutlineBadge"
