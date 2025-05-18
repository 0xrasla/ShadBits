import { cn } from "@/lib/utils"
import { Badge, type BadgeProps } from "@/components/ui/badge"
import { forwardRef } from "react"

export const StatusBadge = forwardRef<
  HTMLDivElement,
  BadgeProps & { status?: "success" | "warning" | "error" | "info" }
>(({ className, status = "info", ...props }, ref) => {
  const statusStyles = {
    success: "bg-green-100 text-green-800 hover:bg-green-200",
    warning: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    error: "bg-red-100 text-red-800 hover:bg-red-200",
    info: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  }

  return (
    <Badge
      ref={ref}
      variant="outline"
      className={cn("border-0 font-medium", statusStyles[status], className)}
      {...props}
    />
  )
})
StatusBadge.displayName = "StatusBadge"
