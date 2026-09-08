"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Heart, ArrowRight } from "lucide-react";

export default function ChefBenPage() {
  return (
    <div className="relative min-h-screen bg-[#141514] text-[#EFECE6] pt-44 sm:pt-48 md:pt-56 pb-20 sm:pb-28 lg:pb-36 overflow-hidden">
      {/* Full Page Background Texture — Moroccan Carved Plaster & Zellij */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/pagesbgnothome.png"
          alt="Tagine Moroccan pattern background"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-[#141514]/75" />
      </div>

      {/* Background Hero Ambiance — Authentic Moroccan Zellij Pattern */}
      <div className="absolute top-0 inset-x-0 h-[640px] z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/pagesbgnothome.png"
          alt="Tagine Beverly Hills Moroccan pattern hero ambiance"
          fill
          className="object-cover object-center opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141514]/40 via-[#141514]/70 to-[#141514]" />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] ambient-glow-top pointer-events-none" />

      <div className="site-container max-w-5xl relative z-10">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 sm:mb-20 lg:mb-28"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#94BA26]/30 mb-5">
            <Sparkles size={13} className="text-[#94BA26]" />
            <span className="text-[#94BA26] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
              The Visionary Behind Tagine
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wide mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Chef <span className="text-[#94BA26] italic">&apos;Ben&apos;</span> Benameur
          </h1>

          <div className="gold-divider">
            <span className="text-[#94BA26] text-xs">✦</span>
          </div>
        </motion.div>

        {/* ─── Portrait & Story Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-20 items-center mb-20 sm:mb-28 lg:mb-36">
          {/* Portrait with luxury frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="luxury-card overflow-hidden group">
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/img_1949-e1536035525616.jpg"
                  alt="Chef Ben Benameur of Tagine Beverly Hills"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181918] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-xs uppercase tracking-widest text-[#94BA26] font-medium" style={{ fontFamily: "'Cinzel', serif" }}>
                    Master Chef &apos;Ben&apos; Benameur
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Signature Quote */}
            <div className="luxury-card p-6 sm:p-8 border-l-4 border-l-[#94BA26]">
              <p
                className="text-[#94BA26] text-xl sm:text-2xl lg:text-3xl font-normal leading-snug mb-3"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                &ldquo;All I want is a warm place where the food is made with love.&rdquo;
              </p>
              <span className="text-[11px] uppercase tracking-widest text-white/70 block" style={{ fontFamily: "'Cinzel', serif" }}>
                — Chef Ben Benameur
              </span>
            </div>

            <h2
              className="text-xl sm:text-2xl lg:text-3xl text-white font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Heritage, Passion & Beverly Hills
            </h2>

            <p className="text-[#9C9B94] text-sm leading-relaxed font-light">
              Born in Morocco, Chef Ben learned the art of slow braising at his mother&apos;s side in Casablanca. Together with longtime friend and acclaimed actor <span className="text-white font-medium">Ryan Gosling</span>, he opened Tagine on North Robertson Boulevard in 2004.
            </p>

            {/* Ryan Gosling Quote */}
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-[#9C9B94] italic font-light">
              &ldquo;Food that I could eat every day for the rest of my life.&rdquo;
              <span className="block not-italic text-[10px] uppercase tracking-wider text-[#94BA26] mt-1 font-medium">
                — Ryan Gosling, Co-Owner
              </span>
            </div>

            {/* Patron Reflection */}
            <div className="p-4 rounded-lg bg-white/[0.02] border border-[#94BA26]/20 text-xs text-[#EFECE6]/80 italic font-light">
              &ldquo;The chef personally brought out several courses and explained the spices and ingredients. A truly beautiful personal touch!&rdquo;
              <span className="block not-italic text-[10px] uppercase tracking-wider text-[#94BA26] mt-1 font-medium">
                — Rick S., Verified Diner Review
              </span>
            </div>

            <p className="text-[#9C9B94] text-sm leading-relaxed font-light">
              Every dish served at Tagine reflects Chef Ben&apos;s reverence for authentic Moroccan clay tagine cooking: hours of gentle simmering over low flames until the meats are succulent and the sauces are infused with cinnamon, saffron, and wildflower honey.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/menu" className="btn-gold text-xs">
                Explore Menu
              </Link>
              <Link href="/reservations" className="btn-outline text-xs">
                Reserve a Table
                <ArrowRight size={13} className="ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ─── Visual Dish Row ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-14 sm:pt-20 lg:pt-24 border-t border-white/10"
        >
          <div className="luxury-card overflow-hidden group">
            <div className="relative aspect-[4/3]">
              <Image src="/images/tagine1-2048x1365.jpg" alt="Tagine signature cuisine" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          </div>
          <div className="luxury-card overflow-hidden group">
            <div className="relative aspect-[4/3]">
              <Image src="/images/lamb-chop.jpg" alt="Herb crusted lamb chops" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          </div>
          <div className="luxury-card overflow-hidden group">
            <div className="relative aspect-[4/3]">
              <Image src="/images/img_0180.jpg" alt="Artisanal dining table at Tagine" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
