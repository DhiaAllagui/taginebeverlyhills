"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, UtensilsCrossed } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-44 sm:pt-48 md:pt-56 pb-24 bg-[#141514] text-[#EFECE6] overflow-hidden">
      {/* Full Page Background Texture */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/pagesbgnothome.png"
          alt="Tagine Moroccan pattern background"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-[#141514]/80" />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] ambient-glow-top pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center gap-6 max-w-lg"
      >
        <div className="w-20 h-20 rounded-full bg-[#94BA26]/10 border border-[#94BA26]/30 flex items-center justify-center text-[#94BA26] mb-2">
          <UtensilsCrossed size={32} />
        </div>

        <h1
          className="text-6xl sm:text-7xl text-white font-light tracking-wide"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          404
        </h1>

        <h2
          className="text-2xl sm:text-3xl text-white font-light"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          This Table is Reserved
        </h2>

        <p className="text-sm text-[#9C9B94] font-light leading-relaxed max-w-sm">
          We couldn&apos;t find the page you&apos;re looking for. Perhaps it moved to a new table.
        </p>

        <div className="gold-divider w-full max-w-xs">
          <span className="text-[#94BA26] text-xs">✦</span>
        </div>

        <Link
          href="/"
          className="btn-gold mt-2"
        >
          <Home size={14} />
          <span>Return Home</span>
        </Link>
      </motion.div>
    </div>
  );
}
