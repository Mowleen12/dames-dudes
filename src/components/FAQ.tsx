import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQ_DATA } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-24 bg-luxury-black border-t border-white/5 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-radial from-gold-dark/3 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-luxury-gold" />
            <span className="font-serif text-xs uppercase tracking-[0.3em] text-luxury-gold font-medium">
              COMMON INQUIRIES & HELP
            </span>
            <span className="h-[1px] w-8 bg-luxury-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/60 font-light leading-relaxed">
            Everything you need to know about booking, our safety standards, custom salon treatments, and products.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`rounded-xs border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-matte-black/60 border-luxury-gold/50 shadow-[0_5px_20px_rgba(212,175,55,0.06)]"
                    : "bg-matte-black/30 border-white/5 hover:border-white/15"
                }`}
              >
                {/* Header Question */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors duration-300 ${
                      isOpen ? "text-luxury-gold" : "text-white/40"
                    }`} />
                    <span className={`font-serif font-bold text-sm sm:text-base tracking-wide transition-colors duration-300 ${
                      isOpen ? "text-gold-gradient" : "text-white"
                    }`}>
                      {faq.question}
                    </span>
                  </div>

                  {/* Interactive Open/Close visual indicators */}
                  <div className={`p-1.5 rounded-full border shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? "border-luxury-gold/40 bg-luxury-gold/10 text-luxury-gold rotate-180" 
                      : "border-white/10 text-white/40"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible Answer container */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 border-t border-white/5">
                        <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
