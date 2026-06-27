import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, Ticket, ArrowRight, Star } from "lucide-react";
import { OFFERS_DATA } from "../data";
import { Offer } from "../types";

export default function Offers() {
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const handleCopyCode = (id: string, code?: string) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2500);
  };

  const handleApplyOffer = (offerTitle: string, code?: string) => {
    const appointmentSection = document.getElementById("appointment");
    if (appointmentSection) {
      // Prefill service selector or message in the form
      const msgElem = document.getElementById("appointment-message") as HTMLTextAreaElement;
      if (msgElem) {
        msgElem.value = `I'd like to avail the "${offerTitle}" ${code ? `(Promo Code: ${code})` : ""}.`;
      }
      
      // Scroll to appointment form
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = appointmentSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Decorative labels for the diagonal gold ribbons
  const getRibbonLabel = (index: number) => {
    switch (index) {
      case 0: return "POPULAR";
      case 1: return "VIP BRIDAL";
      case 2: return "COMBO SAVE";
      case 3: return "MEMBERSHIP";
      default: return "SPECIAL";
    }
  };

  return (
    <section id="offers" className="relative py-24 bg-matte-black/60 border-t border-white/5 overflow-hidden">
      <div className="absolute left-10 bottom-1/4 w-80 h-80 bg-gold-dark/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-luxury-gold" />
            <span className="font-serif text-xs uppercase tracking-[0.3em] text-luxury-gold font-medium">
              EXCLUSIVE OFFERS & CODES
            </span>
            <span className="h-[1px] w-8 bg-luxury-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Promotions & <span className="text-gold-gradient">Luxury Packages</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/60 font-light leading-relaxed">
            Elevate your lifestyle with our premium, limited-edition bundles and annual VIP programs. Copy the promo codes below to secure your discount at checkout.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {OFFERS_DATA.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative glass-panel backdrop-blur-md rounded-xs p-6 sm:p-10 border border-white/5 hover:border-luxury-gold/45 hover:shadow-[0_15px_35px_rgba(212,175,55,0.12)] transition-all duration-500 overflow-hidden flex flex-col justify-between h-full min-h-[280px]"
            >
              {/* 1. Diagonal Gold Ribbon Corner Effect */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none z-10">
                <div className="absolute top-[18px] right-[-24px] w-32 rotate-45 bg-gold-gradient text-[8px] font-bold tracking-[0.2em] text-luxury-black text-center py-1 border-y border-luxury-gold/30 shadow-md">
                  {getRibbonLabel(index)}
                </div>
              </div>

              {/* 2. Glow effect behind discount */}
              <div className="absolute -left-10 -top-10 w-32 h-32 bg-luxury-gold/3 rounded-full blur-2xl group-hover:bg-luxury-gold/6 transition-all duration-500" />

              <div>
                {/* Badge Category Header */}
                <span className="font-mono text-[9px] text-white/45 tracking-[0.2em] uppercase block mb-2">
                  D&D LOUNGE ENTRÉE · VALUE PACKAGE
                </span>

                {/* Offer Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-gold-gradient transition-colors duration-300 mb-2">
                  {offer.title}
                </h3>

                {/* Subheading text */}
                <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed font-light mb-6">
                  {offer.tagline}
                </p>

                {/* Bold Discount text */}
                <div className="font-display text-3xl sm:text-4xl font-black text-gold-gradient tracking-wider mb-6 flex items-center gap-2">
                  <Star className="w-5 h-5 text-luxury-gold fill-luxury-gold shrink-0 animate-pulse" />
                  {offer.discount}
                </div>
              </div>

              {/* Bottom bar with Promo Code and Apply Button */}
              <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-auto">
                {/* Interactive Promo Code box */}
                {offer.code ? (
                  <div className="flex items-center justify-between border border-luxury-gold/30 rounded-xs bg-luxury-black p-2 px-3 gap-3">
                    <div className="flex items-center gap-2">
                      <Ticket className="w-4 h-4 text-luxury-gold" />
                      <span className="font-mono text-xs font-bold text-champagne tracking-widest uppercase">
                        {offer.code}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopyCode(offer.id, offer.code)}
                      className="p-1.5 rounded-xs hover:bg-white/5 text-white/60 hover:text-luxury-gold transition-all duration-300 relative group"
                      aria-label="Copy Promo Code"
                    >
                      <AnimatePresence mode="wait">
                        {copiedCodeId === offer.id ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                          >
                            <Check className="w-3.5 h-3.5 text-green-500" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {/* Tooltip */}
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 px-2 py-0.5 rounded-xs bg-luxury-black text-[8px] font-mono tracking-widest text-white/95 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                        {copiedCodeId === offer.id ? "COPIED" : "COPY CODE"}
                      </span>
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-[10px] font-mono text-white/40 tracking-widest">
                    <span>*NO CODE REQUIRED FOR PLAN</span>
                  </div>
                )}

                {/* Apply Coupon Button */}
                <button
                  onClick={() => handleApplyOffer(offer.title, offer.code)}
                  className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xs border border-white/10 hover:border-luxury-gold/50 bg-white/3 hover:bg-luxury-gold/5 text-xs font-bold uppercase tracking-widest text-white hover:text-luxury-gold transition-all duration-300 scale-100 hover:scale-[1.03]"
                >
                  Apply Package
                  <ArrowRight className="w-3.5 h-3.5 text-luxury-gold" />
                </button>
              </div>

              {/* Little Terms footer */}
              <p className="font-sans text-[10px] text-white/40 italic font-light mt-4">
                *Terms: {offer.terms}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
