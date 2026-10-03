import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs uppercase tracking-wider font-semibold font-body transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 select-none cursor-pointer disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-on-primary shadow-brutal-primary hover:-translate-x-0.5 hover:-translate-y-0.5 border border-primary",
        secondary:
          "bg-secondary text-on-secondary shadow-brutal-secondary hover:-translate-x-0.5 hover:-translate-y-0.5 border border-secondary",
        outline:
          "bg-surface-container-lowest text-on-surface border border-outline hover:bg-surface-container-low shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5",
        ghost:
          "text-on-surface-variant hover:text-on-surface hover:bg-surface-container",
      },
      size: {
        default: "px-5 py-2.5",
        sm: "px-3 py-1.5 text-[11px]",
        lg: "px-6 py-3 text-sm",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, isExternal, children, ...props }, ref) => {
    if (href) {
      return (
        <a
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";
