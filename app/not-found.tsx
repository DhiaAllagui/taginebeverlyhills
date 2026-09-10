"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, UtensilsCrossed } from "lucide-react";
import SubpageBackground from "./components/SubpageBackground";

export default function NotFoundPage() {
  return (
    <div className="relative min-h-[75vh] flex flex-col items-center justify-center text-center px-6 pt-28 sm:pt-32 md:pt-36 pb-24 bg-[#0A0A0A] text-[#F9F9F9] overflow-hidden">
      {/* Page Background: bg.png */}
      <SubpageBackground />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] ambient-glow-top pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center gap-6 max-w-lg"
      >
        <div className="w-20 h-20 rounded-full bg-[#181615] border border-[#D4AF37]/35 flex items-center justify-center text-[#D4AF37] mb-2 shadow-sm">
          <UtensilsCrossed size={32} />
        </div>

        <h1
          className="text-6xl sm:text-7xl text-white font-normal tracking-wide"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          404
        </h1>

        <h2
          className="text-2xl sm:text-3xl text-white font-normal"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          This Table is Reserved
        </h2>

        <p className="text-sm text-[#A3A3A3] font-light leading-relaxed max-w-sm">
          We couldn&apos;t find the page you&apos;re looking for. Perhaps it moved to a new table.
        </p>

        <div className="gold-divider w-full max-w-xs">
          <span className="text-[#D4AF37] text-xs">✦</span>
        </div>

        <Link
          href="/"
          className="btn-gold mt-2"
        >
          <Home size={14} />
          <span>Return to Lounge</span>
        </Link>
      </motion.div>
    </div>
  );
}
