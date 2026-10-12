import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  (
    {
      className,
      type,
      ...props
    },
    ref,
  ) => {
    return (
      <input
        type={type}
        className={cn(
          [
            "flex",
            "h-10",
            "w-full",
            "rounded-none",
            "border",
            "border-border/60",
            "bg-background/20",
            "px-3",
            "py-2",
            "text-base",
            "text-foreground",
            "shadow-none",
            "transition-all",
            "duration-300",
            "file:border-0",
            "file:bg-transparent",
            "file:text-sm",
            "file:font-medium",
            "file:text-foreground",
            "placeholder:text-muted-foreground/50",
            "hover:border-border",
            "focus-visible:border-primary/55",
            "focus-visible:outline-none",
            "focus-visible:ring-1",
            "focus-visible:ring-primary/40",
            "focus-visible:ring-offset-0",
            "disabled:cursor-not-allowed",
            "disabled:opacity-50",
            "md:text-sm",
          ].join(" "),
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };