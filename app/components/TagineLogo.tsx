"use client";

import Image from "next/image";

interface TagineLogoProps {
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
}

export default function TagineLogo({
  size = "md",
  className = "",
}: TagineLogoProps) {
  // Responsive max-widths that scale down on mobile while keeping aspect ratio
  const maxWidth = {
    sm: "max-w-[110px] sm:max-w-[140px]",
    md: "max-w-[150px] sm:max-w-[190px]",
    lg: "max-w-[190px] sm:max-w-[240px]",
    hero: "max-w-[240px] sm:max-w-[280px] md:max-w-[320px]",
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${maxWidth} ${className}`}>
      <Image
        src="/images/tagine_logo_2026.png"
        alt="Tagine Beverly Hills"
        width={320}
        height={88}
        priority
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
