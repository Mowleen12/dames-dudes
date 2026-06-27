import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { INTERIOR_SHOWCASE_IMAGES } from "../data";

export default function InteriorShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % INTERIOR_SHOWCASE_IMAGES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? INTERIOR_SHOWCASE_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % INTERIOR_SHOWCASE_IMAGES.length);
  };

  return (
    <section id="interior" className="relative py-24 bg-matte-black/60 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-luxury-gold" />
            <span className="font-serif text-xs uppercase tracking-[0.3em] text-luxury-gold font-medium">
              THE DESIGN SHOWCASE
            </span>
            <span className="h-[1px] w-8 bg-luxury-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Inside the <span className="text-gold-gradient">Luxury Lounge</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/60 font-light leading-relaxed">
            Take a virtual tour of our architect-designed unisex sanctuary. Styled with fine black marble, customized modular gold paneling, and orthopedic reclining leather chairs.
          </p>
        </div>

        {/* Large Parallax Horizontal Slider */}
        <div className="relative aspect-16/10 md:aspect-21/9 w-full max-w-6xl mx-auto rounded-xs overflow-hidden border border-luxury-gold/20 shadow-2xl bg-black">
          
          {/* Autoplay Image Stage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={INTERIOR_SHOWCASE_IMAGES[currentIndex].url}
                alt={INTERIOR_SHOWCASE_IMAGES[currentIndex].title}
                className="w-full h-full object-cover select-none brightness-90 contrast-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Deep Cinematic Overlay Vignette */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
              
              {/* Bottom Room Label overlay */}
              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-10 text-left">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="glass-panel backdrop-blur-md p-4 sm:p-6 rounded-xs border border-luxury-gold/30 flex items-center gap-4"
                >
                  <div className="bg-gold-gradient p-2.5 rounded-full text-luxury-black shrink-0">
                    <Eye className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-luxury-gold tracking-[0.25em] uppercase block">
                      ZONE {currentIndex + 1}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white tracking-wide">
                      {INTERIOR_SHOWCASE_IMAGES[currentIndex].title}
                    </h3>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls Left */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full border border-white/10 hover:border-luxury-gold/50 bg-luxury-black/60 hover:bg-luxury-black text-white hover:text-luxury-gold transition-all cursor-pointer shadow-lg active:scale-90"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Navigation Controls Right */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full border border-white/10 hover:border-luxury-gold/50 bg-luxury-black/60 hover:bg-luxury-black text-white hover:text-luxury-gold transition-all cursor-pointer shadow-lg active:scale-90"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slider Progress Bar Overlay */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 pointer-events-none">
            <motion.div
              key={currentIndex}
              className="h-full bg-gold-gradient"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5.5, ease: "linear" }}
            />
          </div>
        </div>

        {/* Small slide index dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {INTERIOR_SHOWCASE_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-6 bg-gold-gradient" : "w-2 bg-white/25"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
