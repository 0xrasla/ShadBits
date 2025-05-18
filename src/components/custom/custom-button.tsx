import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

export const CustomButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className={cn(
        "bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white border-none shadow-lg transition-all duration-300",
        className
      )}
      {...props}
    />
  );
});
CustomButton.displayName = "CustomButton";
