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
  const dimensions = {
    sm: { width: 140, height: 38 },
    md: { width: 190, height: 52 },
    lg: { width: 240, height: 66 },
    hero: { width: 320, height: 88 },
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src="/images/tagine_logo_2026.png"
        alt="Tagine Beverly Hills"
        width={dimensions.width}
        height={dimensions.height}
        priority
        className="h-auto object-contain"
        style={{ width: dimensions.width, height: "auto" }}
      />
    </div>
  );
}
