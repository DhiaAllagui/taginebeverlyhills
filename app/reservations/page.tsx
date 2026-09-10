"use client";

import { useState, useMemo, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  CheckCircle,
  Sparkles,
  ChevronDown,
  HelpCircle,
  Calendar as CalendarIcon,
  Clock,
  Users,
  Heart,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { submitReservation } from "../lib/form-actions";
import LoadingSpinner from "../components/LoadingSpinner";
import SubpageBackground from "../components/SubpageBackground";

export default function ReservationsPage() {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);

  // Timezone-safe local YYYY-MM-DD formatter
  const getLocalDateString = (d: Date = new Date()) => {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const minDateStr = useMemo(() => getLocalDateString(new Date()), []);
  const dateInputRef = useRef<HTMLInputElement>(null);

  // Form State
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState(() => getLocalDateString(new Date()));
  const [serviceType, setServiceType] = useState<"dinner" | "lunch">("dinner");
  const [time, setTime] = useState("7:30 PM");
  const [seatingPreference, setSeatingPreference] = useState("Romantic Velvet Booth");

  // Guest Contact Info
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [occasion, setOccasion] = useState("Date Night");
  const [dietary, setDietary] = useState<string[]>(["100% Halal"]);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Rolling Quick Date Shortcuts (Always accurate, no UTC drift or skipped weeks)
  const quickDates = useMemo(() => {
    const today = new Date();
    const list = [];

    // Day 0: Tonight
    list.push({
      label: "Tonight",
      sub: today.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      val: getLocalDateString(today),
    });

    // Day 1: Tomorrow
    const d1 = new Date(today);
    d1.setDate(today.getDate() + 1);
    list.push({
      label: "Tomorrow",
      sub: d1.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      val: getLocalDateString(d1),
    });

    // Day 2: Next Day
    const d2 = new Date(today);
    d2.setDate(today.getDate() + 2);
    list.push({
      label: d2.toLocaleDateString("en-US", { weekday: "short" }),
      sub: d2.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      val: getLocalDateString(d2),
    });

    // Day 3: Day + 3
    const d3 = new Date(today);
    d3.setDate(today.getDate() + 3);
    list.push({
      label: d3.toLocaleDateString("en-US", { weekday: "short" }),
      sub: d3.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      val: getLocalDateString(d3),
    });

    return list;
  }, []);

  const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8+"];

  const dinnerTimes = [
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
  ];

  const lunchTimes = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM"];

  const seatingOptions = [
    { label: "Romantic Velvet Booth", desc: "Secluded & intimate" },
    { label: "Candlelit Dining Table", desc: "Atmospheric center" },
    { label: "5-Course Tasting Table", desc: "Chef's curated journey" },
  ];

  const occasionOptions = [
    "Date Night",
    "Anniversary",
    "Birthday",
    "Business Dinner",
    "Casual Evening",
  ];

  const dietaryOptions = ["100% Halal", "Gluten-Free", "Vegan", "Nut Allergy", "Dairy-Free"];

  const toggleDietary = (item: string) => {
    setDietary((prev) =>
      prev.includes(item) ? prev.filter((d) => d !== item) : [...prev, item]
    );
  };

  const faqs = [
    {
      q: "Do you require a deposit or credit card hold?",
      a: "No deposit is required for parties under 8 guests. For large parties (8+) or full private buyouts, our maître d' will coordinate directly with you.",
    },
    {
      q: "Is all meat Halal certified?",
      a: "Yes, 100% of meats served at Tagine Beverly Hills are certified Halal, thoughtfully sourced and prepared according to authentic culinary heritage.",
    },
    {
      q: "Can I request a specific table or booth?",
      a: "Yes. Simply select 'Romantic Velvet Booth' or note your seating preference in the form, and our concierge will prioritize your choice.",
    },
    {
      q: "What is your cancellation policy?",
      a: "Reservations can be modified or cancelled free of charge at any time. We simply ask for 2 hours notice so another guest may enjoy the table.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const compiledNotes = [
      `Seating: ${seatingPreference}`,
      dietary.length > 0 ? `Dietary: ${dietary.join(", ")}` : "",
      notes ? `Special Notes: ${notes}` : "",
    ]
      .filter(Boolean)
      .join(" | ");

    try {
      await submitReservation({
        name,
        phone,
        email,
        guests,
        date,
        time,
        occasion,
        notes: compiledNotes,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Reservation submission error:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Human-readable formatted date
  const formattedDisplayDate = useMemo(() => {
    if (!date) return "Select a date";
    try {
      const parts = date.split("-");
      const d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
      return d.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return date;
    }
  }, [date]);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#F9F9F9] pt-28 sm:pt-32 md:pt-36 pb-24 sm:pb-32 overflow-hidden">
      {/* Page Background: bg.png */}
      <SubpageBackground />

      {/* Ambient Lighting Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] ambient-glow-top pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[350px] ambient-glow-amber pointer-events-none opacity-30" />

      <div className="site-container max-w-5xl relative z-10 flex flex-col gap-10 sm:gap-14">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center px-2 sm:px-0"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181615] border border-[#D4AF37]/30 mb-5 shadow-sm">
            <Sparkles size={13} className="text-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Intimate Candlelit Dining · Only 35 Seats
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal tracking-wide mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Reserve Your <span className="text-[#D4AF37] italic">Table</span>
          </h1>

          <p className="text-[#A3A3A3] text-xs sm:text-sm font-light max-w-md mx-auto leading-relaxed">
            Instant table request in under 30 seconds. No deposits, free cancellation, 100% Halal certified.
          </p>

          {/* Quick Step Indicators */}
          {!submitted && (
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  currentStep === 1
                    ? "bg-[#D4AF37] text-[#0A0A0A] font-semibold shadow-[0_0_15px_rgba(212,175,55,0.35)]"
                    : "bg-[#161413] text-[#A3A3A3] border border-white/[0.08] hover:text-white"
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-[#0A0A0A]/20 flex items-center justify-center text-[10px]">
                  1
                </span>
                <span>Select Table &amp; Time</span>
              </button>

              <span className="text-white/20">─</span>

              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  currentStep === 2
                    ? "bg-[#D4AF37] text-[#0A0A0A] font-semibold shadow-[0_0_15px_rgba(212,175,55,0.35)]"
                    : "bg-[#161413] text-[#A3A3A3] border border-white/[0.08] hover:text-white"
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-[#0A0A0A]/20 flex items-center justify-center text-[10px]">
                  2
                </span>
                <span>Guest Details &amp; Confirm</span>
              </button>
            </div>
          )}
        </motion.div>

        {/* ─── Reservation Experience ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Booking Panel (8 Cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                /* Confirmed State */
                <motion.div
                  key="confirmed"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="luxury-card p-8 sm:p-12 text-center flex flex-col items-center border border-[#D4AF37]/40 shadow-2xl"
                >
                  <div className="w-16 h-16 rounded-full bg-[#E07A5F]/15 border border-[#E07A5F] flex items-center justify-center text-[#E07A5F] mb-6 shadow-[0_0_30px_rgba(224,122,95,0.35)]">
                    <CheckCircle size={32} />
                  </div>
                  <h2
                    className="text-2xl sm:text-3xl text-white font-normal mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Table Request Received
                  </h2>
                  <p className="text-sm text-[#A3A3A3] font-light max-w-md mb-6 leading-relaxed">
                    Thank you, <span className="text-white font-medium">{name}</span>. Your table request has been logged. Our maître d&apos; will contact you at <span className="text-[#D4AF37]">{phone}</span> to confirm your seating.
                  </p>

                  {/* Summary Box */}
                  <div className="p-5 rounded-xl bg-[#141312] border border-[#D4AF37]/25 max-w-md w-full mb-6 text-xs flex flex-col gap-2.5 text-left">
                    <div className="flex justify-between border-b border-white/[0.06] pb-2">
                      <span className="text-[#A3A3A3]">Party Size:</span>
                      <span className="text-white font-medium">{guests} Guests</span>
                    </div>
                    <div className="flex justify-between border-b border-white/[0.06] pb-2">
                      <span className="text-[#A3A3A3]">Date &amp; Time:</span>
                      <span className="text-[#D4AF37] font-medium">{formattedDisplayDate} at {time}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/[0.06] pb-2">
                      <span className="text-[#A3A3A3]">Seating Area:</span>
                      <span className="text-white font-medium">{seatingPreference}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A3A3A3]">Location:</span>
                      <span className="text-white font-medium">132 N Robertson Blvd, Beverly Hills</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                      href="tel:+13103607535"
                      className="btn-gold text-xs py-3 px-6 inline-flex items-center gap-2"
                    >
                      <Phone size={13} />
                      <span>Call Maître D&apos; Dino</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setCurrentStep(1);
                      }}
                      className="btn-outline text-xs py-3 px-6"
                    >
                      Book Another Table
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Active Wizard */
                <div className="luxury-card p-6 sm:p-10 border border-[#D4AF37]/25 shadow-2xl">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 15 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-8"
                    >
                      {/* 1. Party Size */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <label
                            className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold flex items-center gap-2"
                            style={{ fontFamily: "'Cinzel', serif" }}
                          >
                            <Users size={14} /> Party Size
                          </label>
                          <span className="text-xs text-[#A3A3A3] font-light">
                            {guests === "8+" ? "Large Party (8+)" : `${guests} Guests`}
                          </span>
                        </div>
                        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                          {guestOptions.map((opt) => {
                            const isSelected = guests === opt;
                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => setGuests(opt)}
                                className={`py-3 rounded-xl text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                                  isSelected
                                    ? "bg-gradient-to-r from-[#E07A5F] to-[#D96B43] text-white border-[#F4A261] shadow-[0_0_18px_rgba(224,122,95,0.45)] scale-105"
                                    : "bg-[#161413] border-[#D4AF37]/20 text-[#EDE8DF] hover:border-[#D4AF37] hover:bg-[#221E1D]"
                                }`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* 2. Date Selection with Fast Shortcuts */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <label
                            className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold flex items-center gap-2"
                            style={{ fontFamily: "'Cinzel', serif" }}
                          >
                            <CalendarIcon size={14} /> Date
                          </label>
                          <span className="text-xs text-[#D4AF37] font-medium">
                            {formattedDisplayDate}
                          </span>
                        </div>

                        {/* Quick Day Shortcuts */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                          {quickDates.map((qd) => {
                            const isSelected = date === qd.val;
                            return (
                              <button
                                key={qd.label}
                                type="button"
                                onClick={() => setDate(qd.val)}
                                className={`py-2 px-3 rounded-lg text-xs transition-all duration-200 border text-center cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                                  isSelected
                                    ? "bg-[#D4AF37] text-[#0A0A0A] border-[#F3E5AB] font-semibold shadow-[0_0_14px_rgba(212,175,55,0.35)]"
                                    : "bg-[#161413] border-white/[0.08] text-[#EDE8DF] hover:border-[#D4AF37]/50 hover:bg-[#1E1C1A]"
                                }`}
                              >
                                <span className="font-semibold text-[12px]">{qd.label}</span>
                                <span
                                  className={`text-[10px] ${
                                    isSelected ? "text-[#0A0A0A]/75 font-medium" : "text-[#A3A3A3]"
                                  }`}
                                >
                                  {qd.sub}
                                </span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Custom Date Input Console */}
                        <div
                          onClick={() => {
                            try {
                              dateInputRef.current?.showPicker?.();
                            } catch {
                              dateInputRef.current?.focus();
                            }
                          }}
                          className="relative flex items-center justify-between p-3.5 bg-[#141312] hover:bg-[#1C1A19] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-xl cursor-pointer transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-3 pointer-events-none">
                            <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0A0A0A] transition-colors">
                              <CalendarIcon size={16} />
                            </div>
                            <div className="flex flex-col text-left">
                              <span className="text-[10px] uppercase tracking-wider text-[#A3A3A3] font-medium">
                                Or Choose Another Date
                              </span>
                              <span className="text-xs font-semibold text-white group-hover:text-[#F3E5AB]">
                                {formattedDisplayDate}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 text-[11px] text-[#D4AF37] font-medium pointer-events-none group-hover:translate-x-0.5 transition-transform">
                            <span>Open Calendar</span>
                            <ArrowRight size={12} />
                          </div>

                          {/* Native Date Input Overlay - full hit-test area for cross-platform click */}
                          <input
                            ref={dateInputRef}
                            type="date"
                            value={date}
                            min={minDateStr}
                            onChange={(e) => {
                              if (e.target.value) setDate(e.target.value);
                            }}
                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                            aria-label="Choose reservation date"
                          />
                        </div>
                      </div>

                      {/* 3. Seating Time (Lunch / Dinner Toggle + Clean Pills) */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <label
                            className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold flex items-center gap-2"
                            style={{ fontFamily: "'Cinzel', serif" }}
                          >
                            <Clock size={14} /> Service &amp; Time Slot
                          </label>

                          {/* Service Toggle */}
                          <div className="flex items-center gap-1 p-1 bg-[#141312] border border-[#D4AF37]/25 rounded-lg text-[10px] uppercase tracking-wider font-semibold">
                            <button
                              type="button"
                              onClick={() => {
                                setServiceType("dinner");
                                setTime("7:30 PM");
                              }}
                              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                                serviceType === "dinner"
                                  ? "bg-[#D4AF37] text-[#0A0A0A]"
                                  : "text-[#A3A3A3] hover:text-white"
                              }`}
                            >
                              Dinner
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setServiceType("lunch");
                                setTime("12:30 PM");
                              }}
                              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                                serviceType === "lunch"
                                  ? "bg-[#D4AF37] text-[#0A0A0A]"
                                  : "text-[#A3A3A3] hover:text-white"
                              }`}
                            >
                              Lunch
                            </button>
                          </div>
                        </div>

                        {/* Time Pills Grid */}
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
                          {(serviceType === "dinner" ? dinnerTimes : lunchTimes).map((t) => {
                            const isSelected = time === t;
                            return (
                              <button
                                key={t}
                                type="button"
                                onClick={() => setTime(t)}
                                className={`py-3 px-2 rounded-xl text-xs font-semibold transition-all duration-200 border text-center cursor-pointer ${
                                  isSelected
                                    ? "bg-gradient-to-r from-[#E07A5F] to-[#D96B43] text-white border-[#F4A261] shadow-[0_0_16px_rgba(224,122,95,0.4)] scale-105"
                                    : "bg-[#161413] border-[#D4AF37]/20 text-[#EDE8DF] hover:border-[#D4AF37] hover:bg-[#221E1D]"
                                }`}
                              >
                                {t}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* 4. Seating Preference */}
                      <div>
                        <label
                          className="block text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3"
                          style={{ fontFamily: "'Cinzel', serif" }}
                        >
                          Seating Preference
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {seatingOptions.map((opt) => {
                            const isSelected = seatingPreference === opt.label;
                            return (
                              <button
                                key={opt.label}
                                type="button"
                                onClick={() => setSeatingPreference(opt.label)}
                                className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                                  isSelected
                                    ? "bg-[#181615] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.25)]"
                                    : "bg-[#141312] border-white/[0.08] hover:border-[#D4AF37]/40"
                                }`}
                              >
                                <span className={`text-xs font-medium block ${isSelected ? "text-[#D4AF37]" : "text-white"}`}>
                                  {opt.label}
                                </span>
                                <span className="text-[10px] text-[#A3A3A3] font-light mt-0.5 block">
                                  {opt.desc}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Advance to Step 2 Button */}
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="btn-gold w-full py-4 text-xs tracking-[0.22em] flex items-center justify-center gap-2 shadow-lg"
                        >
                          <span>Continue to Guest Details</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.form
                      key="step2"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-6 sm:gap-8"
                    >
                      {/* Step Header */}
                      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                        <div>
                          <h3
                            className="text-lg text-white font-normal"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            Guest Contact Information
                          </h3>
                          <p className="text-xs text-[#A3A3A3] font-light">
                            Instant SMS &amp; email confirmation will be sent here.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1"
                        >
                          <ArrowLeft size={12} />
                          <span>Change Time/Date</span>
                        </button>
                      </div>

                      {/* Inputs */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="text-[10px] uppercase tracking-wider text-[#A3A3A3] block mb-1.5 font-medium">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Julian Hayes"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="luxury-input text-xs py-3 px-4"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] uppercase tracking-wider text-[#A3A3A3] block mb-1.5 font-medium">
                            Mobile Phone *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="(310) 555-0199"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="luxury-input text-xs py-3 px-4"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] uppercase tracking-wider text-[#A3A3A3] block mb-1.5 font-medium">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="name@domain.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="luxury-input text-xs py-3 px-4"
                          />
                        </div>
                      </div>

                      {/* Special Occasion Pills */}
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-[#D4AF37] block mb-2 font-semibold">
                          Special Occasion (Optional)
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {occasionOptions.map((occ) => {
                            const isSelected = occasion === occ;
                            return (
                              <button
                                key={occ}
                                type="button"
                                onClick={() => setOccasion(occ)}
                                className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all border cursor-pointer ${
                                  isSelected
                                    ? "bg-[#D4AF37] text-[#0A0A0A] border-[#F3E5AB] font-semibold shadow-sm"
                                    : "bg-[#161413] border-white/[0.08] text-[#A3A3A3] hover:border-[#D4AF37]/40 hover:text-white"
                                }`}
                              >
                                {occ}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Dietary Preferences Multi-Select */}
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-[#D4AF37] block mb-2 font-semibold">
                          Dietary Preferences (Click all that apply)
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {dietaryOptions.map((diet) => {
                            const isChecked = dietary.includes(diet);
                            return (
                              <button
                                key={diet}
                                type="button"
                                onClick={() => toggleDietary(diet)}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all border cursor-pointer ${
                                  isChecked
                                    ? "bg-[#E07A5F]/20 text-[#E07A5F] border-[#E07A5F]"
                                    : "bg-[#141312] text-[#A3A3A3] border-white/[0.08] hover:border-white/20"
                                }`}
                              >
                                {isChecked ? `✓ ${diet}` : `+ ${diet}`}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Optional Notes */}
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-[#A3A3A3] block mb-1.5 font-medium">
                          Notes / Requests for Maître d&apos; (Optional)
                        </label>
                        <textarea
                          rows={2}
                          placeholder="Favorite corner booth, champagne upon arrival, anniversary flowers, etc."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="luxury-input text-xs py-2.5 px-4 resize-none"
                        />
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-4 pt-2">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="btn-outline text-xs py-3.5 px-6 shrink-0"
                        >
                          <ArrowLeft size={13} className="mr-1.5" />
                          Back
                        </button>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-gold flex-1 py-4 text-xs tracking-[0.24em] flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(212,175,55,0.4)] disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <>
                              <LoadingSpinner size="sm" />
                              <span>Securing Your Table...</span>
                            </>
                          ) : (
                            <>
                              <span>Confirm Table Request</span>
                              <CheckCircle size={14} />
                            </>
                          )}
                        </button>
                      </div>
                    </motion.form>
                  )}
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar: Live Reservation Summary & Concierge Guarantee (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Live Summary Card */}
            <div className="luxury-card p-6 border border-[#D4AF37]/35 shadow-xl flex flex-col gap-5 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
                <span
                  className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Table Summary
                </span>
                <span className="w-2 h-2 rounded-full bg-[#E07A5F] animate-pulse" />
              </div>

              <div className="flex flex-col gap-3.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#A3A3A3] flex items-center gap-2">
                    <Users size={13} className="text-[#D4AF37]" /> Guests:
                  </span>
                  <span className="text-white font-medium">{guests} Guests</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#A3A3A3] flex items-center gap-2">
                    <CalendarIcon size={13} className="text-[#D4AF37]" /> Date:
                  </span>
                  <span className="text-[#D4AF37] font-medium">{formattedDisplayDate}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#A3A3A3] flex items-center gap-2">
                    <Clock size={13} className="text-[#D4AF37]" /> Time:
                  </span>
                  <span className="text-white font-medium">{time}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#A3A3A3] flex items-center gap-2">
                    <Heart size={13} className="text-[#D4AF37]" /> Seating:
                  </span>
                  <span className="text-white font-medium text-right">{seatingPreference}</span>
                </div>
              </div>

              {/* Guarantees */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-2 text-[11px] text-[#A3A3A3]">
                <div className="flex items-center gap-2 text-[#EDE8DF]">
                  <ShieldCheck size={14} className="text-[#D4AF37] shrink-0" />
                  <span>No Booking Fees · Free Cancellation</span>
                </div>
                <div className="flex items-center gap-2 text-[#EDE8DF]">
                  <Sparkles size={14} className="text-[#D4AF37] shrink-0" />
                  <span>100% Halal Certified Organic Cuisine</span>
                </div>
              </div>
            </div>

            {/* Direct Phone Concierge Card */}
            <div className="luxury-card p-6 border border-white/[0.08] shadow-md flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
                Need Immediate Seating?
              </span>
              <p className="text-xs text-[#A3A3A3] font-light leading-relaxed">
                For same-night seating or parties of 8+, call our maître d&apos; directly:
              </p>
              <a
                href="tel:+13103607535"
                className="btn-outline py-2.5 px-4 text-xs tracking-wider flex items-center justify-center gap-2 text-[#D4AF37] hover:text-white"
              >
                <Phone size={13} />
                <span>Call (310) 360-7535</span>
              </a>
            </div>
          </div>
        </div>

        {/* ─── Intimate Dining Room Experience Gallery ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-8">
          <div className="luxury-card overflow-hidden group border border-[#D4AF37]/20">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/beverly-hills-lounge-booth.png"
                alt="Candlelit dining lounge at Tagine Beverly Hills"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-4 right-4">
                <p
                  className="text-white text-xs font-medium"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem" }}
                >
                  Candlelit Tables
                </p>
                <p className="text-[10px] text-[#A3A3A3]">Warm, romantic intimacy</p>
              </div>
            </div>
          </div>

          <div className="luxury-card overflow-hidden group border border-[#D4AF37]/20">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/honey-lamb-shank-luxury.png"
                alt="Slow braised feasts at Tagine"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-4 right-4">
                <p
                  className="text-white text-xs font-medium"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem" }}
                >
                  Slow-Braised Feasts
                </p>
                <p className="text-[10px] text-[#A3A3A3]">Handcrafted clay tagines</p>
              </div>
            </div>
          </div>

          <div className="luxury-card overflow-hidden group border border-[#D4AF37]/20">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/p1000898-2048x1152.jpg"
                alt="Beverly Hills sanctuary layout"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-4 right-4">
                <p
                  className="text-white text-xs font-medium"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem" }}
                >
                  Beverly Hills Sanctuary
                </p>
                <p className="text-[10px] text-[#A3A3A3]">Exclusive 12-table layout</p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Frequently Asked Questions ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 pt-4"
        >
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181615] border border-[#D4AF37]/25 mb-3">
              <HelpCircle size={12} className="text-[#D4AF37]" />
              <span
                className="text-[#D4AF37] text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Guest Inquiries &amp; Details
              </span>
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl text-white font-normal tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Frequently Asked <span className="text-[#D4AF37] italic">Questions</span>
            </h2>
          </div>

          <div className="flex flex-col gap-3 max-w-3xl mx-auto w-full">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl border border-white/[0.08] bg-[#141312] hover:border-[#D4AF37]/35 transition-colors overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-medium text-[#EDE8DF] flex items-center gap-3">
                      <span className="text-[#D4AF37] text-xs">✦</span>
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-[#D4AF37]"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#A3A3A3] font-light leading-relaxed border-t border-white/[0.04]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
