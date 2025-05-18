import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export const PillBadge = forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Badge>
>(({ className, ...props }, ref) => {
  return (
    <Badge
      ref={ref}
      className={cn(
        "rounded-full px-3 py-0.5 font-normal bg-slate-100 text-slate-800 hover:bg-slate-200 border-0",
        className
      )}
      {...props}
    />
  );
});
PillBadge.displayName = "PillBadge";
