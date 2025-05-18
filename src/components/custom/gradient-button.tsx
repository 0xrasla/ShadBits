import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as React from "react";
import { forwardRef } from "react";

/**
 * GradientButton component
 *
 * A button with a beautiful gradient background that transitions on hover.
 * Extends all standard button props with an eye-catching gradient style.
 *
 * @example
 * ```tsx
 * <GradientButton>Click Me</GradientButton>
 * ```
 */
export const GradientButton = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className={cn(
        "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-none shadow-md",
        className
      )}
      {...props}
    />
  );
});
GradientButton.displayName = "GradientButton";
