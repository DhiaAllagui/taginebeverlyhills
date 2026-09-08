"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TagineLogo from "../components/TagineLogo";
import { CheckCircle, Phone, Sparkles, Gift, ArrowRight } from "lucide-react";
import { openMailto } from "../lib/form-actions";
import LoadingSpinner from "../components/LoadingSpinner";

const amounts = ["$100", "$150", "$250", "$500", "Custom"];

export default function GiftCardsPage() {
  const [selectedAmount, setSelectedAmount] = useState("$150");
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [recipient, setRecipient] = useState("");
  const [personalNote, setPersonalNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const displayAmount = selectedAmount === "Custom" ? (customAmount ? `$${customAmount}` : "$—") : selectedAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `Gift Certificate Order — ${displayAmount}`;
    const body = [
      `Dear Tagine Concierge,`,
      ``,
      `I would like to order a Tagine dining gift certificate.`,
      ``,
      `Certificate Value: ${displayAmount}`,
      recipient ? `Recipient: ${recipient}` : "",
      personalNote ? `Personal Message:\n${personalNote}` : "",
      ``,
      `Purchaser Information:`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      ``,
      `Please contact me to complete payment and delivery.`,
    ].join("\n");

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      openMailto(subject, body);
    }, 800);
  };

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

      {/* Background Hero Banner — Authentic Moroccan Pattern */}
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

      {/* Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] ambient-glow-top pointer-events-none" />

      <div className="site-container max-w-4xl relative z-10 flex flex-col gap-16 sm:gap-20">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center px-2 sm:px-0"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#94BA26]/30 mb-5">
            <Gift size={13} className="text-[#94BA26]" />
            <span className="text-[#94BA26] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
              Bespoke Dining Gift Passes
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wide mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Gift <span className="text-[#94BA26] italic">Cards</span>
          </h1>

          <div className="gold-divider">
            <span className="text-[#94BA26] text-xs">✦</span>
          </div>

          <p className="text-[#9C9B94] text-xs sm:text-sm font-light max-w-md mx-auto leading-relaxed">
            Bestow the romance of an intimate candlelit culinary journey at Tagine Beverly Hills.
          </p>
        </motion.div>

        {/* ─── Visual Certificate & Order Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Certificate Mockup with official image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center gap-4"
          >
            <div className="w-full max-w-[380px] rounded-2xl overflow-hidden border-2 border-[#94BA26]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(148,186,38,0.2)] relative group bg-[#181918]">
              <div className="relative aspect-[1983/793] w-full">
                <Image
                  src="/images/giftcard.png"
                  alt="Tagine Gift Certificate Card"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-2.5 right-3.5 flex items-center gap-2">
                  <span className="text-xl sm:text-2xl text-white font-light tracking-wide bg-[#141514]/85 px-3 py-0.5 rounded-lg border border-[#94BA26]/40" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {displayAmount}
                  </span>
                </div>
              </div>
            </div>
            {recipient && (
              <p className="text-xs text-[#94BA26] italic text-center">
                Prepared for {recipient}
              </p>
            )}
            <p className="text-[11px] text-[#9C9B94] text-center font-light">
              Redeemable for dinner, tasting menus, and private wine pairings. Never expires.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 luxury-card p-5 sm:p-8 lg:p-10"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-8 sm:py-10 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#94BA26]/15 border border-[#94BA26] flex items-center justify-center text-[#94BA26] mb-5 shadow-[0_0_30px_rgba(148,186,38,0.3)]">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl text-white font-light mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Gift Certificate Requested
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9C9B94] max-w-sm mb-6 leading-relaxed">
                    Thank you, <span className="text-white font-medium">{name}</span>. Our dining concierge will contact you at <span className="text-[#94BA26]">{phone || email}</span> to complete payment for your <span className="text-white font-medium">{displayAmount}</span> dining pass.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline text-xs px-6 py-2.5">
                    Order Another Gift Pass
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                  {/* Amount Selector */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#94BA26] font-medium mb-3.5" style={{ fontFamily: "'Cinzel', serif" }}>
                      Select Value
                    </label>
                    <div className="flex flex-wrap gap-2.5 sm:gap-3.5 lg:gap-4">
                      {amounts.map((amt) => {
                        const isSelected = selectedAmount === amt;
                        return (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => setSelectedAmount(amt)}
                            className={`flex-1 min-w-[64px] sm:min-w-[70px] py-2.5 sm:py-3 px-3 sm:px-3.5 rounded-lg text-[11px] sm:text-xs font-semibold tracking-wider transition-all duration-300 border shadow-sm ${
                              isSelected
                                ? "bg-[#94BA26] text-[#0E100E] border-[#94BA26] font-semibold shadow-[0_0_18px_rgba(148,186,38,0.35)]"
                                : "bg-zinc-900/80 border-zinc-700/50 text-[#D4D2C9] hover:bg-[#94BA26]/20 hover:border-[#94BA26] hover:text-white hover:-translate-y-0.5"
                            }`}
                          >
                            {amt}
                          </button>
                        );
                      })}
                    </div>

                    {selectedAmount === "Custom" && (
                      <div className="mt-4">
                        <input
                          type="number"
                          placeholder="Enter custom dollar amount (e.g. 350)"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="luxury-input text-xs"
                          min="50"
                        />
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-white/70 font-light mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="luxury-input"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-white/70 font-light mb-2">
                        Your Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(310) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="luxury-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-white/70 font-light mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="luxury-input"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-white/70 font-light mb-2">
                        Recipient Name (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Recipient's Name"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        className="luxury-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/70 font-light mb-2">
                      Personal Message (Printed on Certificate)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Wishing you an extraordinary evening in Beverly Hills..."
                      value={personalNote}
                      onChange={(e) => setPersonalNote(e.target.value)}
                      className="luxury-input resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold w-full sm:w-auto py-4 text-xs font-semibold tracking-widest disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <LoadingSpinner size="sm" />
                          Sending...
                        </span>
                      ) : (
                        <>
                          Request {displayAmount} Gift Pass
                          <ArrowRight size={14} className="ml-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ─── Immediate Phone Help ─── */}
        <div className="text-center text-xs text-[#9C9B94] font-light border-t border-white/5 pt-10">
          <p className="mb-2">Need immediate digital delivery or corporate bulk gifting?</p>
          <a
            href="tel:+13103607535"
            className="inline-flex items-center gap-2 text-white hover:text-[#94BA26] font-medium transition-colors"
          >
            <Phone size={14} className="text-[#94BA26]" /> Call (310) 360-7535
          </a>
        </div>
      </div>
    </div>
  );
}
