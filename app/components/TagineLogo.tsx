"use client";

import Image from "next/image";

interface TagineLogoProps {
  size?: "sm" | "md" | "lg" | "hero";
  variant?: "default" | "white";
  className?: string;
}

export default function TagineLogo({
  size = "md",
  variant = "default",
  className = "",
}: TagineLogoProps) {
  // Responsive max-widths that scale down on mobile while keeping aspect ratio
  const maxWidth = {
    sm: "max-w-[110px] sm:max-w-[140px]",
    md: "max-w-[150px] sm:max-w-[190px]",
    lg: "max-w-[190px] sm:max-w-[240px]",
    hero: "max-w-[240px] sm:max-w-[280px] md:max-w-[320px]",
  }[size];

  const src =
    variant === "white"
      ? "/images/tajinelogowhite.png"
      : "/images/tagine_logo_2026.png";

  return (
    <div className={`inline-flex items-center select-none ${maxWidth} ${className}`}>
      <Image
        src={src}
        alt="Tagine Beverly Hills"
        width={variant === "white" ? 2160 : 320}
        height={variant === "white" ? 917 : 88}
        priority
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
