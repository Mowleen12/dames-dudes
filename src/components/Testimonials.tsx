import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { REVIEWS_DATA } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    })
  };

  return (
    <section id="reviews" className="relative py-24 bg-luxury-black border-t border-white/5 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-gold-dark/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-luxury-gold" />
            <span className="font-serif text-xs uppercase tracking-[0.3em] text-luxury-gold font-medium">
              VERIFIED GOOGLE FEEDBACK
            </span>
            <span className="h-[1px] w-8 bg-luxury-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Words From Our <span className="text-gold-gradient">Esteemed Guests</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/60 font-light leading-relaxed">
            Discover why Dames & Dudes stands out. We hold an active 4.9⭐ average from over 500+ glowing Delhi reviews. Here is what they share:
          </p>
        </div>

        {/* Testimonial Sliding Stage */}
        <div className="relative max-w-4xl mx-auto min-h-[350px] sm:min-h-[280px] flex items-center justify-center">
          
          {/* Slider control left */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] sm:left-[-50px] z-20 p-3 sm:p-4 rounded-full border border-white/10 hover:border-luxury-gold/50 bg-matte-black text-white hover:text-luxury-gold transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Slider control right */}
          <button
            onClick={handleNext}
            className="absolute right-[-20px] sm:right-[-50px] z-20 p-3 sm:p-4 rounded-full border border-white/10 hover:border-luxury-gold/50 bg-matte-black text-white hover:text-luxury-gold transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel Slide container */}
          <div className="w-full overflow-hidden relative py-6 px-4">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full glass-panel backdrop-blur-md rounded-xs p-8 sm:p-12 border border-luxury-gold/15 shadow-[0_10px_40px_rgba(0,0,0,0.8)] relative text-center flex flex-col items-center justify-center min-h-[220px]"
              >
                {/* 1. Backdrop giant quotation marks */}
                <div className="absolute top-6 left-8 text-luxury-gold/5 pointer-events-none z-0">
                  <Quote className="w-24 h-24 fill-current" />
                </div>
                <div className="absolute bottom-6 right-8 text-luxury-gold/5 pointer-events-none z-0 rotate-180">
                  <Quote className="w-24 h-24 fill-current" />
                </div>

                {/* 2. Floating Star Rating */}
                <div className="flex items-center gap-1.5 mb-6 relative z-10">
                  {Array.from({ length: REVIEWS_DATA[activeIndex].rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-luxury-gold fill-luxury-gold drop-shadow-[0_0_8px_#D4AF37]"
                    />
                  ))}
                </div>

                {/* 3. Review Quote Text */}
                <blockquote className="font-serif text-lg sm:text-2xl text-white font-medium italic tracking-wide leading-relaxed mb-8 max-w-2xl relative z-10">
                  "{REVIEWS_DATA[activeIndex].text}"
                </blockquote>

                {/* 4. Customer Info Footer */}
                <div className="relative z-10 flex flex-col items-center">
                  <span className="signboard-font font-bold text-base sm:text-lg text-gold-gradient tracking-widest">
                    {REVIEWS_DATA[activeIndex].name}
                  </span>
                  
                  <div className="flex items-center gap-2 mt-1 font-sans text-[10px] text-white/50 tracking-widest uppercase">
                    <span>{REVIEWS_DATA[activeIndex].role}</span>
                    <span>·</span>
                    <span>{REVIEWS_DATA[activeIndex].date}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination indicator dots */}
        <div className="flex justify-center items-center gap-2.5 mt-8 relative z-10">
          {REVIEWS_DATA.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > activeIndex ? 1 : -1);
                setActiveIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex 
                  ? "w-8 bg-gold-gradient" 
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
