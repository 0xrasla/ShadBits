import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

export const GradientBadge = forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Badge>
>(({ className, ...props }, ref) => {
  return (
    <Badge
      ref={ref}
      className={cn(
        "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0",
        className
      )}
      {...props}
    />
  );
});
GradientBadge.displayName = "GradientBadge";
