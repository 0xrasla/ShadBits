import type React from "react"
import { cn } from "@/lib/utils"

interface ComponentPreviewProps {
  className?: string
  children: React.ReactNode
}

export function ComponentPreview({ className, children }: ComponentPreviewProps) {
  return (
    <div className={cn("flex items-center justify-center p-4 border rounded-lg bg-muted/50", className)}>
      {children}
    </div>
  )
}
