"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import TagineLogo from "./components/TagineLogo";
import ClientReviews from "./components/ClientReviews";
import { Sparkles, ArrowRight, Utensils, Clock, Heart } from "lucide-react";

export default function HomePage() {
  const dishes = [
    {
      title: "Traditional Bastilla",
      tag: "Artisanal Specialty",
      desc: "Delicate paper-thin warqa pastry layered with slow-simmered saffron chicken, roasted almonds, orange blossom water, and fine cinnamon.",
      image: "/images/img_0039-5-2048x1365.jpg",
    },
    {
      title: "Honey Lamb Tagine",
      tag: "Chef's Signature",
      desc: "Slow-braised lamb shank simmered for 12 hours with wild California honey, caramelized black prunes, toasted almonds, and sesame.",
      image: "/images/tagine3-2048x1365.jpg",
    },
    {
      title: "Herb Grilled Lamb Chops",
      tag: "Prime Cut",
      desc: "Prime Colorado chops seared over open flame with fresh Moroccan rosemary jus, garlic confit, and charred baby asparagus.",
      image: "/images/lamb-chop.jpg",
    },
  ];

  return (
    <div className="flex flex-col bg-[#141514] text-[#EFECE6] overflow-hidden">
      {/* ─── Hero Section (Dramatic, Candlelit, Warm) ─── */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-48 sm:pt-52 md:pt-60 pb-20 sm:pb-28 ambient-glow-top">
        {/* Background video with luxury dark overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/p1000898-2048x1152.jpg"
            className="w-full h-full object-cover scale-105"
          >
            <source src="/images/background_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#141514]/40 via-[#141514]/55 to-[#141514]/90" />
          <div className="absolute inset-0 bg-[#141514]/25" />
        </div>

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[220px] sm:h-[350px] bg-[#94BA26]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-[1]" />

        <div className="site-container max-w-4xl relative z-10 flex flex-col items-center">
          {/* Poetic Quote */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#94BA26] leading-snug mb-6 sm:mb-8 px-2 sm:px-0"
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(2.2rem, 8vw, 4.8rem)",
              fontWeight: 400,
              textShadow: "0 0 40px rgba(148, 186, 38, 0.25)",
            }}
          >
            All I want is a warm place where the food is made with love
          </motion.p>

          {/* Attribution */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white uppercase tracking-[0.25em] sm:tracking-[0.35em] font-normal mb-8 sm:mb-12"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.95rem, 3vw, 1.55rem)",
            }}
          >
            CHEF &apos;BEN&apos; BENAMEUR
          </motion.h1>

          {/* Official Logo with delicate glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mb-10 sm:mb-14 relative"
          >
            <div className="absolute inset-0 bg-[#94BA26]/15 blur-xl rounded-full scale-110 pointer-events-none" />
            <div className="relative">
              <TagineLogo size="hero" />
            </div>
          </motion.div>

          {/* Twin CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-5 mb-10 sm:mb-12"
          >
            <Link href="/reservations" className="btn-gold py-3.5 px-8 text-xs tracking-[0.2em]">
              Reserve a Table
            </Link>
            <Link href="/menu" className="btn-outline py-3.5 px-8 text-xs tracking-[0.2em]">
              Explore Dinner Menu
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="text-[#9C9B94] text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.28em] font-light flex flex-col sm:flex-row items-center gap-1 sm:gap-3 pt-2"
          >
            <span>132 N Robertson Blvd</span>
            <span className="text-[#94BA26]">✦</span>
            <span>Beverly Hills, CA</span>
          </motion.p>
        </div>
      </section>

      {/* ─── Press & Acclaim Ribbon with Authentic Moroccan Zellij Mosaic ─── */}
      <section className="relative z-10 bg-[#0E0F0E] border-y-2 border-[#94BA26]/40 py-12 sm:py-16 shadow-[0_16px_40px_rgba(0,0,0,0.7)] overflow-hidden">
        {/* Highly Visible Authentic Moroccan Mosaic Pattern Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/moroccopattern.png"
            alt="Authentic Moroccan zellij mosaic pattern"
            fill
            className="object-cover object-center opacity-65"
          />
          {/* Gentle edge shading to harmonize with dark theme */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0F0E]/75 via-[#0E0F0E]/25 to-[#0E0F0E]/75" />
        </div>

        <div className="site-container max-w-4xl relative z-10">
          <div className="bg-[#141514]/85 backdrop-blur-md border border-[#94BA26]/40 rounded-2xl p-6 sm:p-10 shadow-[0_12px_36px_rgba(0,0,0,0.85)] flex flex-col items-center text-center gap-6">
            {/* Main Press Quote */}
            <div className="max-w-2xl px-2">
              <span className="text-[#94BA26] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold block mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
                Critical Acclaim
              </span>
              <blockquote
                className="text-lg sm:text-xl md:text-2xl text-white font-light italic leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                &ldquo;A hidden jewel in Beverly Hills where Moroccan gastronomy reaches artful heights.&rdquo;
              </blockquote>
              <cite className="text-[#9C9B94] text-[11px] sm:text-xs uppercase tracking-[0.2em] font-normal not-italic block mt-3">
                — Los Angeles Times
              </cite>
            </div>

            {/* Badges & Mentions */}
            <div className="w-full pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-5 sm:gap-8 lg:gap-10 text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#EFECE6]/90 font-medium">
              <span className="flex items-center gap-1.5 hover:text-[#94BA26] transition-colors">
                <span className="text-[#94BA26]">★</span> Zagat Rated
              </span>
              <span className="text-white/20 hidden sm:inline">✦</span>
              <span className="flex items-center gap-1.5 hover:text-[#94BA26] transition-colors">
                <span className="text-[#94BA26]">★</span> OpenTable Diners&apos; Choice
              </span>
              <span className="text-white/20 hidden sm:inline">✦</span>
              <span className="hover:text-[#94BA26] transition-colors">
                Los Angeles Times
              </span>
              <span className="text-white/20 hidden sm:inline">✦</span>
              <span className="hover:text-[#94BA26] transition-colors">
                The Hollywood Reporter
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Discover Our Story (Official Authentic Copy) ─── */}
      <section className="py-20 sm:py-28 lg:py-48 bg-[#181918] border-t border-white/5 relative">
        <div className="site-container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
            {/* Real Ambiance Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative luxury-card overflow-hidden group shadow-2xl"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/dsc_2111-2048x1362.jpg"
                  alt="Tagine Beverly Hills candlelit dining room"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181918] via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div>
                <span className="text-[#94BA26] text-xs uppercase tracking-[0.3em] font-semibold block mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
                  Discover
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-light tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Our Story
                </h2>
              </div>

              {/* Authentic Emblem ✻ */}
              <div className="flex items-center gap-3 text-[#94BA26] text-lg select-none">
                <span>✻</span>
                <span className="h-[1px] w-16 bg-gradient-to-r from-[#94BA26]/60 to-transparent" />
              </div>

              <p className="text-[#EFECE6]/90 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
                Tagine is a secluded hideaway in the heart of Beverly Hills and the perfect place for leaving your worries and hunger behind. Step inside the intimate space created so that you can feel at home.
              </p>

              <p className="text-[#9C9B94] text-xs sm:text-sm leading-relaxed font-light">
                Created by Master Chef &apos;Ben&apos; Benameur alongside acclaimed actor Ryan Gosling, every recipe reflects a reverence for slow-cooked Moroccan tradition and genuine warmth.
              </p>

              <div className="pt-4">
                <Link href="/chef-ben" className="btn-outline py-3.5 px-8 text-xs tracking-[0.2em]">
                  About Us
                  <ArrowRight size={13} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Culinary Delight (Official Authentic Copy & Signature Flavors) ─── */}
      <section className="py-24 sm:py-32 lg:py-52 bg-[#141514] border-t border-white/5 relative ambient-glow-center">
        <div className="site-container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 sm:mb-20 lg:mb-28 max-w-2xl mx-auto"
          >
            <span className="text-[#94BA26] text-xs uppercase tracking-[0.3em] font-semibold block mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
              Culinary
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wide mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Delight
            </h2>
            <div className="flex items-center justify-center gap-3 text-[#94BA26] text-lg my-5 select-none">
              <span className="h-[1px] w-14 bg-gradient-to-l from-[#94BA26]/60 to-transparent" />
              <span>✻</span>
              <span className="h-[1px] w-14 bg-gradient-to-r from-[#94BA26]/60 to-transparent" />
            </div>
            <p className="text-[#EFECE6]/90 text-sm sm:text-base leading-relaxed font-light mt-4">
              We promise an intimate and relaxed dining experience that offers something different to local and foreign patrons and ensures you enjoy a memorable food experience every time.
            </p>
          </motion.div>

          {/* 3 Dishes with ample padding & breathing space */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-14 sm:mb-20 lg:mb-24">
            {dishes.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="luxury-card overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181918] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-sm border border-[#94BA26]/30 px-3 py-1 rounded-full text-[9px] text-[#94BA26] uppercase tracking-widest font-medium" style={{ fontFamily: "'Cinzel', serif" }}>
                      {item.tag}
                    </div>
                  </div>

                  <div className="p-7 flex flex-col gap-3">
                    <h3 className="text-2xl text-white font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#9C9B94] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link href="/reservations" className="btn-gold text-xs px-10 py-4 tracking-[0.2em]">
              Make a Reservation
            </Link>
            <Link href="/menu" className="btn-outline text-xs px-10 py-4 tracking-[0.2em]">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Real Guest Reviews & Reflections ─── */}
      <ClientReviews />

      {/* ─── Private Events Teaser Ribbon (Generous Breathing Room) ─── */}
      <section className="py-20 sm:py-28 lg:py-40 bg-[#181918] border-t border-white/5 relative mb-8 sm:mb-16">
        <div className="site-container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="luxury-card p-10 sm:p-14 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group"
          >
            {/* Authentic Moroccan Zellij Mosaic Accent */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-50 group-hover:opacity-65 transition-opacity duration-700">
              <Image
                src="/images/moroccopattern.png"
                alt="Moroccan mosaic pattern"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#141514]/90 via-[#141514]/50 to-[#141514]/90" />
            </div>

            <div className="flex flex-col gap-3 text-center md:text-left relative z-10">
              <span className="text-[#94BA26] text-xs uppercase tracking-[0.25em] font-medium block" style={{ fontFamily: "'Cinzel', serif" }}>
                Exclusive Celebrations
              </span>
              <h3 className="text-3xl sm:text-4xl text-white font-light tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Host Your Private Event at Tagine
              </h3>
              <p className="text-xs sm:text-sm text-[#9C9B94] font-light max-w-xl leading-relaxed">
                Full restaurant buyouts for up to 35 guests, or bespoke estate catering across Southern California.
              </p>
            </div>

            <Link href="/catering" className="btn-gold text-xs px-8 py-4 shrink-0 tracking-[0.18em] relative z-10">
              Private Dining & Buyouts
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
