import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "ghost";

interface ButtonLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base"
} as const;

const variantStyles = {
  primary: "rounded-lg bg-[#0CA6E9] font-medium text-white shadow-btn tracking-[-0.16px]",
  ghost: "text-[#FFFFFFCC] tracking-[0.14px]"
} as const;

export const ButtonLink = ({
  size = "md",
  variant = "ghost",
  className,
  children,
  ...props
}: ButtonLinkProps) => {
  return (
    <Link
      className={cn(
        "flex items-center gap-2.5 leading-[150%]",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};