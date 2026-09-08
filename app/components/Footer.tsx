import Link from "next/link";
import TagineLogo from "./TagineLogo";
import { Phone, MapPin, Mail, Calendar } from "lucide-react";
import { InstagramIcon, FacebookIcon, YelpIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#0D0E0D] border-t border-white/[0.08] pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 mt-auto relative">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-20 items-start pb-12 sm:pb-16 border-b border-white/[0.08]">
          {/* Logo, Address & Socials */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <TagineLogo size="sm" />
            <p className="text-xs text-[#9C9B94] leading-relaxed font-light">
              132 N Robertson Blvd<br />
              Beverly Hills, CA 90211
            </p>
            <div className="flex flex-col gap-2 text-xs text-[#EFECE6]">
              <a href="tel:+13103607535" className="hover:text-[#94BA26] transition-colors flex items-center gap-2">
                <Phone size={13} className="text-[#94BA26]" />
                <span>(310) 360-7535</span>
              </a>
              <a href="mailto:Dino@taginebeverlyhills.com" className="hover:text-[#94BA26] transition-colors flex items-center gap-2">
                <Mail size={13} className="text-[#94BA26]" />
                <span>Dino@taginebeverlyhills.com</span>
              </a>
            </div>

            {/* Social Follow Us */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#94BA26] font-semibold block mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
                Follow Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/tagine_beverlyhills/?hl=eg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tagine Instagram"
                  className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center p-1.5 hover:border-[#94BA26]/60 hover:bg-white/[0.08] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/chebenameur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tagine Facebook"
                  className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center p-1.5 hover:border-[#94BA26]/60 hover:bg-white/[0.08] transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.yelp.com/biz/tagine-beverly-hills-beverly-hills"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tagine Yelp Reviews"
                  className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center p-1.5 hover:border-[#94BA26]/60 hover:bg-white/[0.08] transition-colors"
                >
                  <YelpIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-4 font-light">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#94BA26] font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
              Dinner Service
            </h4>
            <div className="flex flex-col gap-3 text-xs text-[#9C9B94]">
              <div>
                <span className="text-white block font-medium">Monday – Thursday</span>
                12:00 PM – 10:00 PM
              </div>
              <div>
                <span className="text-white block font-medium">Friday – Saturday</span>
                12:00 PM – 11:00 PM
              </div>
              <div>
                <span className="text-white block font-medium">Sunday</span>
                12:00 PM – 9:00 PM
              </div>
            </div>
          </div>

          {/* Links & Booking */}
          <div className="flex flex-col gap-4 sm:gap-5">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#94BA26] font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
              Explore
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs text-[#9C9B94]">
              <Link href="/menu" className="hover:text-[#94BA26] transition-colors">Menu & Wine</Link>
              <Link href="/reservations" className="hover:text-[#94BA26] transition-colors">Reservations</Link>
              <Link href="/chef-ben" className="hover:text-[#94BA26] transition-colors">Chef Ben</Link>
              <Link href="/catering" className="hover:text-[#94BA26] transition-colors">Catering</Link>
              <Link href="/gift-cards" className="hover:text-[#94BA26] transition-colors">Gift Cards</Link>
              <Link href="/contact" className="hover:text-[#94BA26] transition-colors">Contact</Link>
            </div>
            <div className="pt-3">
              <Link href="/reservations" className="btn-gold text-[10px] px-6 py-2.5 tracking-[0.2em]">
                Book a Table
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-[#9C9B94]/60 gap-3 sm:gap-4 font-light text-center sm:text-left">
          <p>© {new Date().getFullYear()} Tagine Beverly Hills. All rights reserved.</p>
          <p className="tracking-wider uppercase text-[10px]" style={{ fontFamily: "'Cinzel', serif" }}>
            Authentic Moroccan Fine Dining · Beverly Hills, CA
          </p>
        </div>
      </div>
    </footer>
  );
}
