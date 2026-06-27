import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Scissors, Wind, Palette, Sparkles, Layers, Zap, Flame, 
  Flower, Activity, Heart, Crown, Sparkle, Smile, Footprints, Coffee 
} from "lucide-react";
import { SERVICES_DATA } from "../data";
import { Service } from "../types";

// Dynamic Lucide icon lookup helper
const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case "Scissors": return <Scissors className="w-5 h-5" />;
    case "Wind": return <Wind className="w-5 h-5" />;
    case "Palette": return <Palette className="w-5 h-5" />;
    case "Sparkles": return <Sparkles className="w-5 h-5" />;
    case "Layers": return <Layers className="w-5 h-5" />;
    case "Zap": return <Zap className="w-5 h-5" />;
    case "Flame": return <Flame className="w-5 h-5" />;
    case "Flower": return <Flower className="w-5 h-5" />;
    case "Activity": return <Activity className="w-5 h-5" />;
    case "Heart": return <Heart className="w-5 h-5" />;
    case "Crown": return <Crown className="w-5 h-5" />;
    case "Sparkle": return <Sparkle className="w-5 h-5" />;
    case "Smile": return <Smile className="w-5 h-5" />;
    case "Footprints": return <Footprints className="w-5 h-5" />;
    case "Coffee": return <Coffee className="w-5 h-5" />;
    default: return <Scissors className="w-5 h-5" />;
  }
};

const CATEGORIES = [
  { id: "all", label: "ALL DISCIPLINES" },
  { id: "hair", label: "HAIR ARTISTRY" },
  { id: "skincare", label: "SKIN & FACIALS" },
  { id: "makeup", label: "BRIDAL & MAKEUP" },
  { id: "grooming", label: "MALE GROOMING" },
  { id: "nails", label: "NAILS & THERAPIES" }
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = activeCategory === "all" 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  const handleBookNow = (serviceName: string) => {
    const appointmentSection = document.querySelector("#appointment");
    if (appointmentSection) {
      // Prefill service selector in the appointment form if possible
      const selectElem = document.getElementById("appointment-service") as HTMLSelectElement;
      if (selectElem) {
        selectElem.value = serviceName;
      }
      // Smooth Scroll
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

  return (
    <section id="services" className="relative py-24 bg-matte-black/60 border-t border-white/5 overflow-hidden">
      {/* Glow spots */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-at-c from-gold-dark/5 via-transparent to-transparent opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-luxury-gold" />
            <span className="font-serif text-xs uppercase tracking-[0.3em] text-luxury-gold font-medium">
              THE SPA TARIFF & MENU
            </span>
            <span className="h-[1px] w-8 bg-luxury-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Our Premium <span className="text-gold-gradient">Salon Services</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/60 font-light leading-relaxed">
            Experience complete beauty, skin, and grooming transformations. Every service includes specialized scalp or face analysis, luxury import formulations, and sterilized surgical-grade tools.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-xs relative border ${
                activeCategory === cat.id
                  ? "border-luxury-gold text-luxury-black bg-gold-gradient shadow-[0_0_15px_rgba(212,175,55,0.25)]"
                  : "border-white/10 text-white/70 bg-white/3 hover:border-luxury-gold/50 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid with Animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -15 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative h-full flex flex-col justify-between glass-panel backdrop-blur-md rounded-xs p-6 sm:p-8 hover:border-luxury-gold/40 hover:shadow-[0_12px_30px_rgba(212,175,55,0.15)] transition-all duration-500 overflow-hidden"
              >
                {/* Subtle gold lightning shimmer on hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Background watermarked gold glowing circle */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-luxury-gold/2 group-hover:bg-luxury-gold/5 blur-xl transition-all duration-500" />

                <div>
                  {/* Top: Icon & Duration */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xs border border-luxury-gold/25 text-luxury-gold bg-luxury-gold/5 group-hover:bg-gold-gradient group-hover:text-luxury-black transition-all duration-500 shadow-[0_0_10px_rgba(212,175,55,0.05)]">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase bg-white/5 px-2.5 py-1 rounded-full">
                      {service.duration}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl font-bold tracking-wide text-white group-hover:text-gold-gradient transition-colors duration-300 mb-3">
                    {service.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/60 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom: Price & Call to Action */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">From</span>
                    <span className="font-display text-2xl font-bold tracking-wide text-white group-hover:text-luxury-gold transition-colors duration-300">
                      {service.price}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => handleBookNow(service.name)}
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-luxury-gold group-hover:text-champagne transition-colors duration-300 relative py-1"
                  >
                    BOOK NOW
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-gold/50 group-hover:bg-champagne transform scale-x-50 group-hover:scale-x-100 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
