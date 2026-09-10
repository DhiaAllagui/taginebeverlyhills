"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, CheckCircle2, Star } from "lucide-react";

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  contributions: string;
  date: string;
  tripType: string;
  rating: number;
  title: string;
  quote: string;
  highlight: string;
}

export const REAL_REVIEWS: ReviewItem[] = [
  {
    id: "david-m",
    author: "David M",
    location: "Bangalore, India",
    contributions: "8 contributions",
    date: "January 2020",
    tripType: "Friends",
    rating: 5,
    title: "Incredible Beverly Hills Experience",
    quote:
      "I've dined at fine restaurants around the world, but this secluded Beverly Hills lounge is completely off the charts. We didn't do the tasting menu this time, but I will definitely be back to make sure I check it out because every plate was extraordinary!! The hospitality is unmatched.",
    highlight: "Culinary artistry · Unmatched Beverly Hills hospitality",
  },
  {
    id: "ricks",
    author: "Rick S.",
    location: "Mequon, Wisconsin",
    contributions: "8 contributions",
    date: "March 2019",
    tripType: "Solo Dining",
    rating: 5,
    title: "Wonderful Candlelit Intimacy",
    quote:
      "We dined at Ryan Gosling's lounge, Tagine, tonight. Not a flashy or loud place, but an intimate, dimly lit sanctuary where the food and wine were wonderful. The chef personally brought out several courses and explained the aromatics and ingredients. A truly beautiful personal touch!",
    highlight: "Chef personal table visit · Warm aromatics & wine",
  },
  {
    id: "connector",
    author: "Connector",
    location: "Los Angeles, California",
    contributions: "14 contributions",
    date: "March 2019",
    tripType: "Family",
    rating: 5,
    title: "Culinary Art in Beverly Hills",
    quote:
      "I had such a wonderful evening at Tagine. Our servers and the entire team could not have been more gracious and welcoming. The slow-simmered dishes were absolutely exquisite. Gastronomy here is truly an art form celebrated with quiet elegance.",
    highlight: "Gracious staff · Exquisite slow-cooked gastronomy",
  },
  {
    id: "njass",
    author: "N. Jass",
    location: "United States",
    contributions: "71 contributions",
    date: "July 2019",
    tripType: "Friends",
    rating: 5,
    title: "Warm, Romantic Beverly Hills Hideaway",
    quote:
      "A cozy, candlelit hideaway nestled in Beverly Hills. The food was deeply flavorful, and the main courses were unforgettable—especially the signature honey lamb tagine. The young manager made our visit so delightful: she had a warm, radiant smile and was wonderfully hospitable.",
    highlight: "Signature Lamb Shank · Radiant candlelit room",
  },
  {
    id: "verified-couples",
    author: "Verified Diner",
    location: "Couples Dining",
    contributions: "Verified Patron",
    date: "January 2019",
    tripType: "Romantic Dinner",
    rating: 5,
    title: "Exceptional Cuisine & Dietary Care",
    quote:
      "The food was exceptional. The chef and host were very warm, engaging, and remarkably accommodating with dietary requirements and allergies. A picturesque, intimate hideaway in Beverly Hills with true culinary passion.",
    highlight: "Allergy accommodating · Picturesque romantic setting",
  },
];

export default function ClientReviews() {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextReview = () => {
    setActiveIdx((prev) => (prev + 1) % REAL_REVIEWS.length);
  };

  const prevReview = () => {
    setActiveIdx((prev) => (prev - 1 + REAL_REVIEWS.length) % REAL_REVIEWS.length);
  };

  const current = REAL_REVIEWS[activeIdx];

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-[#0C0B0B] border-t border-[#D4AF37]/15 relative overflow-hidden">
      {/* Subtle warm champagne glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[450px] ambient-glow-center pointer-events-none opacity-50" />

      <div className="site-container max-w-5xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181615] border border-[#D4AF37]/30 mb-4 shadow-sm">
            <Quote size={13} className="text-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-[10px] sm:text-xs uppercase tracking-[0.28em] font-semibold"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Guest Reflections
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-wide mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Word of Mouth in <span className="text-[#D4AF37] italic">Beverly Hills</span>
          </h2>

          <div className="flex items-center justify-center gap-3 text-[#D4AF37] text-sm my-4 select-none">
            <span className="h-[1px] w-12 bg-gradient-to-l from-[#D4AF37]/60 to-transparent" />
            <span>✦</span>
            <span className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />
          </div>

          <p className="text-[#A3A3A3] text-xs sm:text-sm font-light leading-relaxed">
            Unfiltered impressions from verified patrons of our intimate Robertson Boulevard lounge.
          </p>
        </motion.div>

        {/* Featured Review Spotlight Card */}
        <div className="relative mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="luxury-card p-6 sm:p-10 lg:p-14 relative shadow-2xl border border-[#D4AF37]/25 bg-[#141312]/90 backdrop-blur-xl"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/[0.08]">
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1F1C1A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-serif text-lg font-bold shrink-0">
                    {current.author.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-white text-base sm:text-lg font-medium">
                        {current.author}
                      </h4>
                      <span className="text-[10px] text-[#E07A5F] inline-flex items-center gap-1 bg-[#E07A5F]/10 px-2.5 py-0.5 rounded-full border border-[#E07A5F]/30 font-medium">
                        <CheckCircle2 size={10} /> Verified Patron
                      </span>
                    </div>
                    <p className="text-[11px] text-[#A3A3A3] mt-0.5">
                      {current.location} · {current.contributions}
                    </p>
                  </div>
                </div>

                {/* Rating Stars & Date */}
                <div className="flex flex-row md:flex-col items-start md:items-end justify-between gap-2">
                  <div className="flex items-center gap-1" title="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className="text-[#D4AF37] fill-[#D4AF37]"
                      />
                    ))}
                    <span className="ml-1.5 text-xs text-[#F9F9F9] font-semibold">5.0</span>
                  </div>
                  <span className="text-[11px] text-[#A3A3A3]">
                    {current.date} · {current.tripType}
                  </span>
                </div>
              </div>

              {/* Review Content */}
              <div className="py-6 sm:py-8">
                <h3
                  className="text-xl sm:text-2xl lg:text-3xl text-white font-normal mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  &ldquo;{current.title}&rdquo;
                </h3>

                <blockquote className="text-[#EDE8DF] text-sm sm:text-base lg:text-lg leading-relaxed font-light italic">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
              </div>

              {/* Card Footer: Highlight Badge */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-[11px] text-[#D4AF37]">
                  <span className="text-xs">✦</span>
                  <span className="font-medium tracking-wide">{current.highlight}</span>
                </div>

                <span className="text-[11px] text-[#737373] font-light">
                  Beverly Hills Diners’ Circle
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              {REAL_REVIEWS.map((r, i) => (
                <button
                  key={r.id}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIdx
                      ? "w-8 bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevReview}
                aria-label="Previous review"
                className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#161413] hover:border-[#D4AF37] hover:bg-[#221E1D] flex items-center justify-center text-[#EDE8DF] transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextReview}
                aria-label="Next review"
                className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#161413] hover:border-[#D4AF37] hover:bg-[#221E1D] flex items-center justify-center text-[#EDE8DF] transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
