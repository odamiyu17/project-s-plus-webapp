import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-none",
    "font-mono text-[11px] font-medium uppercase tracking-[0.18em]",
    "transition-all duration-300",
    "focus-visible:outline-none",
    "focus-visible:ring-1",
    "focus-visible:ring-primary/70",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-background",
    "disabled:pointer-events-none",
    "disabled:cursor-not-allowed",
    "disabled:opacity-40",
    "[&_svg]:pointer-events-none",
    "[&_svg]:size-4",
    "[&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "border border-primary/70",
          "bg-primary",
          "text-primary-foreground",
          "shadow-[0_8px_24px_-18px_hsl(var(--primary)/0.9)]",
          "hover:-translate-y-0.5",
          "hover:border-primary",
          "hover:bg-primary/90",
          "hover:shadow-[0_12px_30px_-16px_hsl(var(--primary)/0.75)]",
          "active:translate-y-0",
          "active:scale-[0.98]",
        ].join(" "),

        destructive: [
          "border border-destructive/70",
          "bg-destructive",
          "text-destructive-foreground",
          "hover:-translate-y-0.5",
          "hover:bg-destructive/90",
          "hover:shadow-[0_12px_28px_-18px_hsl(var(--destructive)/0.75)]",
          "active:translate-y-0",
          "active:scale-[0.98]",
        ].join(" "),

        outline: [
          "border border-border/70",
          "bg-background/20",
          "text-foreground",
          "backdrop-blur-sm",
          "hover:-translate-y-0.5",
          "hover:border-primary/55",
          "hover:bg-primary/[0.055]",
          "hover:text-foreground",
          "hover:shadow-[0_10px_28px_-20px_hsl(var(--primary)/0.45)]",
          "active:translate-y-0",
          "active:scale-[0.98]",
        ].join(" "),

        secondary: [
          "border border-border/60",
          "bg-secondary/70",
          "text-secondary-foreground",
          "hover:-translate-y-0.5",
          "hover:border-primary/35",
          "hover:bg-secondary",
          "hover:text-foreground",
          "active:translate-y-0",
          "active:scale-[0.98]",
        ].join(" "),

        ghost: [
          "border border-transparent",
          "bg-transparent",
          "text-muted-foreground",
          "hover:bg-secondary/40",
          "hover:text-primary",
          "active:scale-[0.98]",
        ].join(" "),

        link: [
          "h-auto",
          "border-0",
          "bg-transparent",
          "p-0",
          "text-primary",
          "shadow-none",
          "underline-offset-4",
          "hover:text-primary/80",
          "hover:underline",
        ].join(" "),
      },

      size: {
        default:
          "h-10 px-5 py-2.5",

        sm:
          "h-9 px-4 text-[10px] tracking-[0.16em]",

        lg:
          "h-12 px-7 text-[11px] tracking-[0.2em]",

        icon:
          "h-10 w-10 p-0",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp =
      asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export {
  Button,
  buttonVariants,
};