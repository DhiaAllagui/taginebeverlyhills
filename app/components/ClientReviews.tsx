"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

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
    title: "Incredible",
    quote:
      "I've been to a number of Moroccan restaurants and I've always had amazing food, but this place is off the charts. We didn't do the tasting menu this time, but I will definitely be back to make sure I check it out because this food is fantastic!! Mia is an amazing server too, so be sure to ask for her!",
    highlight: "Food is off the charts · Fantastic hospitality",
  },
  {
    id: "ricks",
    author: "RickS50496",
    location: "Mequon, Wisconsin",
    contributions: "8 contributions",
    date: "March 2019",
    tripType: "Solo Dining",
    rating: 5,
    title: "Wonderful Experience!",
    quote:
      "We dined at Ryan Gosling's restaurant, Tagine, tonight. Not a flashy or loud place, but the food and service were wonderful. We shared several appetizers and an entrée, all were excellent. The dessert was a perfect finish. The chef personally brought out several courses and explained the spices and ingredients. A truly beautiful personal touch! I will definitely return on our next visit.",
    highlight: "Chef table visit · Warm spices & ingredients",
  },
  {
    id: "connector",
    author: "Connector65337",
    location: "Los Angeles, California",
    contributions: "14 contributions",
    date: "March 2019",
    tripType: "Family",
    rating: 5,
    title: "Love for Moroccan Cuisine",
    quote:
      "I had such a wonderful evening at Tagine. Our servers and entire team could not have been more gracious and welcoming. The food was absolutely delicious. Moroccan cuisine is truly an art form that deserves to be celebrated.",
    highlight: "Gracious staff · Exceptional Moroccan flavors",
  },
  {
    id: "njass",
    author: "NJass",
    location: "United States",
    contributions: "71 contributions",
    date: "July 2019",
    tripType: "Friends",
    rating: 5,
    title: "Warm, Romantic Ambiance",
    quote:
      "Cozy, comfortable restaurant nestled in Beverly Hills. The food was deeply flavorful, and the main courses were delicious—especially the signature lamb tagine. The young manager made our visit so delightful: she had a warm, radiant smile and was wonderfully hospitable. She truly lights up the room.",
    highlight: "Signature Lamb Tagine · Radiant hospitality",
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
    highlight: "Allergy accommodating · Picturesque setting",
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
    <section className="py-24 sm:py-32 lg:py-44 bg-[#111211] border-t border-white/5 relative overflow-hidden">
      {/* Subtle Moroccan Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[450px] ambient-glow-center pointer-events-none opacity-40" />

      <div className="site-container max-w-5xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#94BA26]/30 mb-4 shadow-sm">
            <Quote size={13} className="text-[#94BA26]" />
            <span
              className="text-[#94BA26] text-[10px] sm:text-xs uppercase tracking-[0.28em] font-semibold"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Real Guest Reflections
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-wide mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Word of Mouth in <span className="text-[#94BA26] italic">Beverly Hills</span>
          </h2>

          <div className="flex items-center justify-center gap-3 text-[#94BA26] text-lg my-4 select-none">
            <span className="h-[1px] w-12 bg-gradient-to-l from-[#94BA26]/60 to-transparent" />
            <span>✻</span>
            <span className="h-[1px] w-12 bg-gradient-to-r from-[#94BA26]/60 to-transparent" />
          </div>

          <p className="text-[#9C9B94] text-xs sm:text-sm font-light leading-relaxed">
            Unfiltered impressions from verified patrons who have dined in our candlelit dining room.
          </p>
        </motion.div>

        {/* Featured Review Spotlight Card */}
        <div className="relative mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="luxury-card p-6 sm:p-10 lg:p-14 relative shadow-2xl border border-white/10 bg-[#161816]/90 backdrop-blur-md"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/[0.06]">
                {/* Author Info & Tripadvisor rating bubbles */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#94BA26]/15 border border-[#94BA26]/40 flex items-center justify-center text-[#94BA26] font-serif text-lg font-bold shrink-0">
                    {current.author.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-white text-base sm:text-lg font-medium">
                        {current.author}
                      </h4>
                      <span className="text-[10px] text-[#94BA26] inline-flex items-center gap-1 bg-[#94BA26]/10 px-2 py-0.5 rounded-full border border-[#94BA26]/20">
                        <CheckCircle2 size={10} /> Verified Diner
                      </span>
                    </div>
                    <p className="text-[11px] text-[#9C9B94] mt-0.5">
                      {current.location} · {current.contributions}
                    </p>
                  </div>
                </div>

                {/* Rating Bubble Display & Date */}
                <div className="flex flex-row md:flex-col items-start md:items-end justify-between gap-2">
                  <div className="flex items-center gap-1.5" title="5 of 5 rating bubbles">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-full bg-[#00AA6C] flex items-center justify-center shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
                      </span>
                    ))}
                    <span className="ml-1 text-xs text-white/90 font-medium">5.0</span>
                  </div>
                  <span className="text-[11px] text-[#9C9B94]">
                    {current.date} · {current.tripType}
                  </span>
                </div>
              </div>

              {/* Review Content */}
              <div className="py-6 sm:py-8">
                <h3
                  className="text-xl sm:text-2xl lg:text-3xl text-white font-normal mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  &ldquo;{current.title}&rdquo;
                </h3>

                <blockquote className="text-[#EFECE6]/90 text-sm sm:text-base lg:text-lg leading-relaxed font-light italic">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
              </div>

              {/* Card Footer: Highlight Badge */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-[11px] text-[#94BA26]">
                  <span className="text-xs">✦</span>
                  <span className="font-medium tracking-wide">{current.highlight}</span>
                </div>

                <span className="text-[11px] text-[#9C9B94]/70 font-light">
                  Tripadvisor Verified Review
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              {REAL_REVIEWS.map((r, i) => (
                <button
                  key={r.id}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIdx === i ? "w-8 bg-[#94BA26]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevReview}
                aria-label="Previous review"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] hover:bg-[#94BA26]/20 hover:border-[#94BA26] flex items-center justify-center text-white transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextReview}
                aria-label="Next review"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] hover:bg-[#94BA26]/20 hover:border-[#94BA26] flex items-center justify-center text-white transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Multi-review Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
          {REAL_REVIEWS.slice(0, 3).map((rev, idx) => (
            <div
              key={rev.id}
              onClick={() => setActiveIdx(idx)}
              className={`luxury-card p-6 cursor-pointer transition-all duration-300 ${
                activeIdx === idx
                  ? "border-[#94BA26]/60 bg-white/[0.04]"
                  : "border-white/[0.06] hover:border-[#94BA26]/30 bg-white/[0.02]"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-xs font-semibold">{rev.author}</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="w-2 h-2 rounded-full bg-[#00AA6C]" />
                  ))}
                </div>
              </div>
              <h5
                className="text-white text-sm font-medium mb-1.5 line-clamp-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}
              >
                &ldquo;{rev.title}&rdquo;
              </h5>
              <p className="text-[11px] text-[#9C9B94] line-clamp-3 leading-relaxed font-light">
                {rev.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
