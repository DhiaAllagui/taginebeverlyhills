"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle, Send } from "lucide-react";
import { InstagramIcon, FacebookIcon, YelpIcon } from "../components/SocialIcons";
import { submitInquiry } from "../lib/form-actions";
import LoadingSpinner from "../components/LoadingSpinner";
import SubpageBackground from "../components/SubpageBackground";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitInquiry({
        formType: "General Contact Inquiry",
        name,
        email,
        subject,
        message,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Contact submission error:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#F9F9F9] pt-28 sm:pt-32 md:pt-36 pb-24 sm:pb-32 overflow-hidden">
      {/* Page Background: bg.png */}
      <SubpageBackground />

      {/* Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] ambient-glow-top pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[350px] ambient-glow-amber pointer-events-none opacity-25" />

      <div className="site-container max-w-5xl relative z-10 flex flex-col gap-14 sm:gap-18 lg:gap-22">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181615] border border-[#D4AF37]/30 mb-6 shadow-sm">
            <MapPin size={13} className="text-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Beverly Hills Lounge
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal tracking-wide mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Get in <span className="text-[#D4AF37] italic">Touch</span>
          </h1>

          <div className="gold-divider">
            <span className="text-[#D4AF37] text-xs">✦</span>
          </div>

          <p className="text-[#A3A3A3] text-sm md:text-base font-light leading-relaxed mt-2">
            If you have questions or special requests, please connect with us in whichever way is most convenient. We are here to assist.
          </p>
        </motion.div>

        {/* ─── Info Cards ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="luxury-card p-6 sm:p-8 flex flex-col gap-3.5 border border-[#D4AF37]/20"
          >
            <div className="w-12 h-12 rounded-full bg-[#181615] border border-[#D4AF37]/35 flex items-center justify-center text-[#D4AF37] mb-2 shadow-sm">
              <MapPin size={20} />
            </div>
            <h3
              className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Our Address
            </h3>
            <p className="text-xs sm:text-sm text-[#EDE8DF] leading-relaxed font-light">
              132 N Robertson Blvd<br />
              Beverly Hills, CA 90211
            </p>
            <a
              href="https://maps.google.com/?q=132+N+Robertson+Blvd+Beverly+Hills+CA+90211"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#D4AF37] hover:underline block pt-2 font-medium"
            >
              Get Directions →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="luxury-card p-6 sm:p-8 flex flex-col gap-3.5 border border-[#D4AF37]/20"
          >
            <div className="w-12 h-12 rounded-full bg-[#181615] border border-[#D4AF37]/35 flex items-center justify-center text-[#D4AF37] mb-2 shadow-sm">
              <Clock size={20} />
            </div>
            <h3
              className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Dinner Service
            </h3>
            <div className="text-xs sm:text-sm text-[#EDE8DF] font-light flex flex-col gap-1.5">
              <p>Mon – Thu: 12:00 PM – 10:00 PM</p>
              <p>Fri – Sat: 12:00 PM – 11:00 PM</p>
              <p>Sunday: 12:00 PM – 9:00 PM</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="luxury-card p-6 sm:p-8 flex flex-col gap-3.5 border border-[#D4AF37]/20"
          >
            <div className="w-12 h-12 rounded-full bg-[#181615] border border-[#D4AF37]/35 flex items-center justify-center text-[#D4AF37] mb-2 shadow-sm">
              <Phone size={20} />
            </div>
            <h3
              className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Direct Concierge
            </h3>
            <div className="text-xs sm:text-sm text-[#EDE8DF] flex flex-col gap-1.5">
              <a href="tel:+13103607535" className="hover:text-[#D4AF37] block font-medium">
                (310) 360-7535
              </a>
              <a href="mailto:Dino@taginebeverlyhills.com" className="hover:text-[#D4AF37] block">
                Dino@taginebeverlyhills.com
              </a>
              <p className="text-[#A3A3A3] text-xs pt-1">Valet parking on Robertson Blvd</p>
            </div>
          </motion.div>
        </div>

        {/* ─── Map & Message Form ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 luxury-card overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[480px] shadow-2xl min-h-[260px] relative border border-[#D4AF37]/25"
          >
            <iframe
              title="Tagine Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.9!2d-118.381!3d34.077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s132+N+Robertson+Blvd%2C+Beverly+Hills%2C+CA+90211!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              loading="lazy"
              style={{
                border: 0,
                filter: "invert(92%) hue-rotate(180deg) saturate(0.25) brightness(0.85)",
              }}
            />

            <div className="absolute inset-0 z-[5]" aria-hidden="true" />

            {/* Restaurant marker label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10 flex flex-col items-center pointer-events-none">
              <div className="px-3 py-1.5 rounded-lg bg-[#0A0A0A]/95 border border-[#D4AF37]/60 text-white text-[10px] uppercase tracking-wider font-semibold whitespace-nowrap shadow-xl backdrop-blur-md">
                Tagine Beverly Hills
              </div>
              <div className="w-0.5 h-4 bg-[#D4AF37]" />
              <div className="w-3 h-3 rounded-full bg-[#D4AF37] border-2 border-[#0A0A0A] shadow-[0_0_10px_rgba(212,175,55,0.9)]" />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 luxury-card p-6 sm:p-10 lg:p-12 shadow-2xl border border-[#D4AF37]/25"
          >
            <h3
              className="text-xl sm:text-2xl lg:text-3xl text-white font-normal mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Send a Concierge Note
            </h3>
            <p className="text-xs sm:text-sm text-[#A3A3A3] font-light mb-8">
              Inquiries regarding private dinners, table requests, press, or wine reservations.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-8 sm:py-12 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#E07A5F]/15 border border-[#E07A5F] flex items-center justify-center text-[#E07A5F] mb-5 shadow-[0_0_20px_rgba(224,122,95,0.35)]">
                    <CheckCircle size={32} />
                  </div>
                  <h4
                    className="text-xl sm:text-2xl lg:text-3xl text-white font-normal mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Message Received
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] mb-8">
                    Our hospitality team will respond to {email} promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline text-xs px-8 py-3 cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="luxury-input"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="luxury-input"
                    />
                  </div>

                  <div>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="luxury-input"
                    >
                      <option value="General Inquiry">General Hospitality Inquiry</option>
                      <option value="Private Dining">Private Dining / Buyout Request</option>
                      <option value="Press / Media">Press &amp; Media Inquiry</option>
                      <option value="Sommelier / Wine">Sommelier &amp; Wine Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      rows={5}
                      required
                      placeholder="How may we assist you?..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="luxury-input resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold w-full py-4 text-xs font-semibold tracking-widest disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <LoadingSpinner size="sm" />
                          Transmitting...
                        </span>
                      ) : (
                        "Send Concierge Message"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ─── Follow Us ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="luxury-card p-6 sm:p-10 text-center border border-[#D4AF37]/20"
        >
          <span
            className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold block mb-2"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Connect
          </span>
          <h3
            className="text-xl sm:text-2xl lg:text-3xl text-white font-normal mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Social Channels
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="https://www.instagram.com/tagine_beverlyhills/?hl=eg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#161413] border border-[#D4AF37]/30 text-xs text-white hover:border-[#D4AF37] hover:bg-[#221E1D] transition-all tracking-wider font-medium"
            >
              <InstagramIcon className="w-5 h-5" />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/chebenameur/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#161413] border border-[#D4AF37]/30 text-xs text-white hover:border-[#D4AF37] hover:bg-[#221E1D] transition-all tracking-wider font-medium"
            >
              <FacebookIcon className="w-5 h-5" />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.yelp.com/biz/tagine-beverly-hills-beverly-hills"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#161413] border border-[#D4AF37]/30 text-xs text-white hover:border-[#D4AF37] hover:bg-[#221E1D] transition-all tracking-wider font-medium"
            >
              <YelpIcon className="w-5 h-5" />
              <span>Yelp Reviews</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
