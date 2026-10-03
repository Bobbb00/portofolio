import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 border px-2.5 py-0.5 text-xs font-mono font-semibold transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "bg-surface-container border-outline-variant text-on-surface",
        primary:
          "bg-primary-fixed text-on-primary-fixed border-primary-container",
        secondary:
          "bg-secondary-fixed text-on-secondary-fixed border-secondary",
        outline: "border-outline text-on-surface-variant bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  isPulse?: boolean;
}

export function Badge({
  className,
  variant,
  isPulse,
  children,
  ...props
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {isPulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
      )}
      {children}
    </div>
  );
}
