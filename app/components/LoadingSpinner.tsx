"use client";

import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  label?: string;
  fullScreen?: boolean;
}

const sizeClasses = {
  sm: "w-5 h-5 border-2",
  md: "w-8 h-8 border-[3px]",
  lg: "w-12 h-12 border-4",
  xl: "w-16 h-16 border-[5px]",
};

export default function LoadingSpinner({
  size = "md",
  className = "",
  label,
  fullScreen = false,
}: LoadingSpinnerProps) {
  const spinner = (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Outer rotating ring — Champagne Gold */}
      <motion.span
        className="absolute inset-0 rounded-full border-t-[#D4AF37] border-r-transparent border-b-[#D4AF37]/40 border-l-transparent"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {/* Inner counter-rotating ring — Burnt Amber */}
      <motion.span
        className="absolute inset-1 rounded-full border-t-transparent border-r-[#E07A5F]/80 border-b-transparent border-l-[#E07A5F]/80"
        animate={{ rotate: -360 }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {/* Center pulse */}
      <motion.span
        className="absolute inset-0 m-auto rounded-full bg-[#D4AF37]/25"
        animate={{ scale: [0.6, 1, 0.6], opacity: [0.4, 0.8, 0.4] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width: "30%", height: "30%" }}
      />
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0A]/92 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          {spinner}
          {label && (
            <p className="text-[#EDE8DF] text-xs uppercase tracking-[0.25em] font-light">
              {label}
            </p>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3">
      {spinner}
      {label && (
        <p className="text-[#EDE8DF]/70 text-[11px] uppercase tracking-wider font-light">
          {label}
        </p>
      )}
    </div>
  );
}
