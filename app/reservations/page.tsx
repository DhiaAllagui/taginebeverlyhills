"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CheckCircle, Clock, MapPin, Sparkles, Calendar as CalendarIcon, Users, Check } from "lucide-react";

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  });
  const [time, setTime] = useState("7:30 PM");
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [occasion, setOccasion] = useState("Date Night");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const guestOptions = [
    { label: "1 Guest", val: "1" },
    { label: "2 Guests", val: "2" },
    { label: "3 Guests", val: "3" },
    { label: "4 Guests", val: "4" },
    { label: "5 Guests", val: "5" },
    { label: "6 Guests", val: "6" },
    { label: "7 Guests", val: "7" },
    { label: "8+ Guests", val: "8+" },
  ];

  const dinnerTimes = ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"];
  const lunchTimes = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM"];
  const occasions = ["Date Night", "Anniversary Celebration", "Birthday", "Business Dinner", "Casual Dining"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="relative min-h-screen bg-[#141514] text-[#EFECE6] py-32 sm:py-40 lg:py-48 overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] ambient-glow-top pointer-events-none" />

      <div className="site-container max-w-4xl relative z-10 flex flex-col gap-16 sm:gap-20">
        {/* ─── Header with Generous Spacing ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#94BA26]/30 mb-6">
            <Sparkles size={13} className="text-[#94BA26]" />
            <span className="text-[#94BA26] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
              Intimate Candlelit Dining
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-wide mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Table <span className="text-[#94BA26] italic">Reservations</span>
          </h1>

          <div className="gold-divider my-6">
            <span className="text-[#94BA26] text-xs">✦</span>
          </div>

          <p className="text-[#9C9B94] text-xs sm:text-sm font-light max-w-lg mx-auto leading-relaxed mt-4">
            Due to our intimate seating of only a few curated tables, advance reservations are warmly recommended.
          </p>
        </motion.div>

        {/* ─── Spacious Reservation Card ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="luxury-card p-8 sm:p-14 lg:p-20 relative shadow-2xl"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="confirmed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#94BA26]/15 border border-[#94BA26] flex items-center justify-center text-[#94BA26] mb-6 shadow-[0_0_30px_rgba(148,186,38,0.3)]">
                  <CheckCircle size={32} />
                </div>
                <h2 className="text-3xl sm:text-4xl text-white font-light mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Reservation Requested
                </h2>
                <p className="text-sm text-[#9C9B94] font-light max-w-md mb-8 leading-relaxed">
                  Thank you, <span className="text-white font-medium">{name}</span>. We have reserved your request for{" "}
                  <span className="text-[#94BA26] font-medium">{guests} guests</span> on{" "}
                  <span className="text-white font-medium">{date}</span> at{" "}
                  <span className="text-white font-medium">{time}</span> ({occasion}).
                </p>

                <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 max-w-sm w-full mb-10 text-xs text-[#9C9B94] flex flex-col gap-2.5">
                  <div className="flex justify-between">
                    <span>Guest Contact:</span>
                    <span className="text-white font-medium">{phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="text-white font-medium">132 N Robertson Blvd</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Confirmation:</span>
                    <span className="text-[#94BA26] font-medium">SMS & Phone verification</span>
                  </div>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline text-xs px-8 py-3"
                >
                  Book Another Table
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-12 sm:gap-16">
                {/* 1. Party Size */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <label className="text-xs uppercase tracking-widest text-[#94BA26] font-medium" style={{ fontFamily: "'Cinzel', serif" }}>
                      1. Select Party Size
                    </label>
                    <span className="text-xs text-[#EFECE6]/80 font-light">
                      {guests === "8+" ? "Private Event / Buyout" : `${guests} Guests Selected`}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                    {guestOptions.map((opt) => {
                      const isSelected = guests === opt.val;
                      return (
                        <button
                          key={opt.val}
                          type="button"
                          onClick={() => setGuests(opt.val)}
                          className={`py-4 px-4 rounded-xl text-xs font-medium transition-all duration-200 border shadow-sm ${
                            isSelected
                              ? "bg-[#94BA26] text-[#0E100E] border-[#94BA26] font-semibold shadow-[0_0_20px_rgba(148,186,38,0.4)]"
                              : "bg-zinc-900/80 border-zinc-700/50 text-[#D4D2C9] hover:bg-[#94BA26]/20 hover:border-[#94BA26] hover:text-white hover:-translate-y-0.5"
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Date & Occasion */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#94BA26] font-medium mb-3.5" style={{ fontFamily: "'Cinzel', serif" }}>
                      2. Choose Date
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setDate(e.target.value)}
                      className="luxury-input cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#94BA26] font-medium mb-3.5" style={{ fontFamily: "'Cinzel', serif" }}>
                      Special Occasion
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="luxury-input cursor-pointer"
                    >
                      {occasions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 3. Seating Time */}
                <div className="flex flex-col gap-8">
                  <div className="flex items-center justify-between">
                    <label className="text-xs uppercase tracking-widest text-[#94BA26] font-medium" style={{ fontFamily: "'Cinzel', serif" }}>
                      3. Select Seating Time
                    </label>
                    <span className="text-xs text-[#94BA26] font-medium">
                      Selected: {time}
                    </span>
                  </div>

                  {/* Dinner */}
                  <div className="flex flex-col gap-4">
                    <span className="text-[11px] text-[#9C9B94] uppercase tracking-wider block font-light">
                      Dinner Service (Candlelit)
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-3.5">
                      {dinnerTimes.map((t) => {
                        const isSelected = time === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setTime(t)}
                            className={`py-3.5 rounded-lg text-xs font-medium transition-all duration-200 border shadow-sm ${
                              isSelected
                                ? "bg-[#94BA26]/25 border-[#94BA26] text-[#94BA26] font-semibold shadow-[0_0_15px_rgba(148,186,38,0.3)]"
                                : "bg-zinc-900/80 border-zinc-700/50 text-[#D4D2C9] hover:bg-[#94BA26]/20 hover:border-[#94BA26] hover:text-white hover:-translate-y-0.5"
                            }`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Lunch */}
                  <div className="flex flex-col gap-4 pt-4">
                    <span className="text-[11px] text-[#9C9B94] uppercase tracking-wider block font-light">
                      Lunch Service (Tue – Fri)
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
                      {lunchTimes.map((t) => {
                        const isSelected = time === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setTime(t)}
                            className={`py-3.5 rounded-lg text-xs font-medium transition-all duration-200 border shadow-sm ${
                              isSelected
                                ? "bg-[#94BA26]/25 border-[#94BA26] text-[#94BA26] font-semibold shadow-[0_0_15px_rgba(148,186,38,0.3)]"
                                : "bg-zinc-900/80 border-zinc-700/50 text-[#D4D2C9] hover:bg-[#94BA26]/20 hover:border-[#94BA26] hover:text-white hover:-translate-y-0.5"
                            }`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 4. Guest Details */}
                <div className="border-t border-white/10 pt-12 flex flex-col gap-8">
                  <label className="block text-xs uppercase tracking-widest text-[#94BA26] font-medium" style={{ fontFamily: "'Cinzel', serif" }}>
                    4. Guest Information
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="luxury-input"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number *"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="luxury-input"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="luxury-input"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <input
                      type="text"
                      placeholder="Special table requests or dietary restrictions (optional)..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="luxury-input text-xs"
                    />
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-10 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full sm:w-auto min-w-[320px] py-4 text-xs font-semibold tracking-widest"
                  >
                    {isSubmitting ? "Securing Table..." : "Confirm Table Reservation"}
                  </button>
                  <p className="text-[11px] text-[#9C9B94]/70 mt-4 font-light">
                    No deposit required. Our maître d&apos; will send an instant SMS confirmation.
                  </p>
                </div>
              </form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ─── Phone & Location Concierge Bar with Dedicated Spacing ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="luxury-card p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-5 text-left">
            <div className="w-14 h-14 rounded-full bg-[#94BA26]/10 border border-[#94BA26]/30 flex items-center justify-center text-[#94BA26] shrink-0">
              <Phone size={22} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-base font-medium">
                Prefer direct personal booking?
              </h3>
              <p className="text-xs text-[#9C9B94] font-light">
                Call our maître d&apos; directly for parties of 8+ or same-day inquiries:
              </p>
            </div>
          </div>

          <a
            href="tel:+13103607535"
            className="btn-gold text-xs px-7 py-3.5 shrink-0"
          >
            (310) 360-7535
          </a>
        </motion.div>
      </div>
    </div>
  );
}
