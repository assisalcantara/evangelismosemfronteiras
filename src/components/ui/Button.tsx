import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full cursor-pointer";

    const variants = {
      primary:
        "bg-brand-blue text-white hover:bg-brand-navy focus:ring-brand-blue",
      secondary:
        "bg-brand-navy text-white hover:bg-brand-navy-light focus:ring-brand-navy",
      gold:
        "bg-brand-gold text-brand-navy-dark font-semibold hover:bg-brand-gold-hover shadow-sm focus:ring-brand-gold",
      outline:
        "border border-white/80 text-white bg-black/20 backdrop-blur-xs hover:bg-white/10 focus:ring-white",
      ghost:
        "text-slate-700 hover:bg-slate-100 focus:ring-slate-400",
    };

    const sizes = {
      sm: "text-xs px-3 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
