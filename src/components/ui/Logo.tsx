import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon-only" | "white";
  width?: number;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({
  className,
  width = 280,
  height = 107,
}) => {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center transition-opacity hover:opacity-95", className)}
      aria-label="Ministério Evangelismo sem Fronteiras - Página Inicial"
    >
      <Image
        src="/images/logo1.png"
        alt="Logomarca Ministério Evangelismo sem Fronteiras"
        width={width}
        height={height}
        priority
        className="h-auto w-auto max-h-18 sm:max-h-20 object-contain"
      />
    </Link>
  );
};
