import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Compass, Star, Users, ShieldCheck, Award } from "lucide-react";

const HERO_SLIDES = [
  {
    url: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1920&h=1080&q=80",
    title: "Luxury Lounge",
    subtitle: "A Sanctuary of Modern Elegance"
  },
  {
    url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1920&h=1080&q=80",
    title: "Master Artistry",
    subtitle: "Exquisite Hair Transformations"
  },
  {
    url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1920&h=1080&q=80",
    title: "Precision Cutting",
    subtitle: "Sharpening Gentlemen's Indulgence"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Generate 25 floating gold spark coordinates
  const sparks = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 8 + 4,
    delay: Math.random() * 4
  }));

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-luxury-black pt-20">
      
      {/* 1. Cinematic Background Slider (Ken Burns & Fading) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {/* Ken Burns Effect Image */}
            <motion.img
              src={HERO_SLIDES[currentSlide].url}
              alt={HERO_SLIDES[currentSlide].title}
              className="w-full h-full object-cover origin-center scale-[1.03]"
              initial={{ scale: 1.02 }}
              animate={{ scale: 1.12 }}
              transition={{ duration: 7.5, ease: "linear" }}
              referrerPolicy="no-referrer"
            />
            
            {/* Elegant Cinematic Overlays (radial light gradient + deep bottom vignette) */}
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-luxury-black/60 to-luxury-black/95" />
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-luxury-black via-luxury-black/75 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-luxury-black/80 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. Background Noise Texture */}
      <div className="absolute inset-0 bg-noise pointer-events-none z-1" />

      {/* 3. Floating Gold Sparks Particle Layer */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            className="absolute rounded-full bg-gold-gradient shadow-[0_0_6px_rgba(212,175,55,0.8)]"
            style={{
              width: spark.size,
              height: spark.size,
              left: `${spark.x}%`,
              top: `${spark.y}%`
            }}
            animate={{
              y: ["0px", "-100px", "0px"],
              x: ["0px", "20px", "-20px", "0px"],
              opacity: [0.1, 0.8, 0.1]
            }}
            transition={{
              duration: spark.duration,
              delay: spark.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* 4. Luxury Moving Light Streaks */}
      <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden opacity-30">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-luxury-gold/5 to-transparent rotate-45 animate-streak" />
      </div>

      {/* 5. Center Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center text-center mt-12 mb-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Subtle Backlit Badge Logo */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-6"
          >
            <div className="p-3 rounded-full border border-luxury-gold/20 bg-transparent backdrop-blur-md">
              <span className="font-serif text-[10px] text-luxury-gold tracking-[0.4em] uppercase font-semibold">
                ESTABLISHED 2012 · DELHI
              </span>
            </div>
          </motion.div>

          {/* DAMES & DUDES Header (Signboard inspired style) */}
          <motion.div
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          >
            <h1 className="signboard-font text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-widest text-gold-gradient drop-shadow-[0_6px_15px_rgba(0,0,0,0.9)] relative select-none">
              DAMES & DUDES
              {/* Gold double geometric line underline */}
              <div className="flex items-center justify-center gap-2 mt-3 mb-2">
                <div className="h-[1px] w-12 sm:w-20 bg-gold-gradient opacity-60" />
                <div className="w-2 h-2 rotate-45 border border-luxury-gold bg-luxury-black" />
                <div className="h-[1px] w-12 sm:w-20 bg-gold-gradient opacity-60" />
              </div>
            </h1>
          </motion.div>

          {/* Luxury Unisex Salon tagline */}
          <motion.p
            initial={{ letterSpacing: "0.2em", opacity: 0 }}
            animate={{ letterSpacing: "0.4em", opacity: 0.9 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="font-serif text-lg sm:text-2xl text-white tracking-[0.3em] font-medium uppercase mb-6"
          >
            Luxury Unisex Salon
          </motion.p>

          {/* Cinematic quote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="italic font-sans text-sm sm:text-lg text-champagne tracking-wider max-w-xl mx-auto mb-10 font-light"
          >
            "Life is more beautiful when you meet the right hairdresser."
          </motion.p>

          {/* Luxury CTA Action Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            {/* Book Appointment button */}
            <button
              onClick={() => handleScrollTo("#appointment")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xs bg-gold-gradient text-xs font-bold text-luxury-black tracking-widest uppercase hover:brightness-110 shadow-[0_4px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_4px_35px_rgba(212,175,55,0.6)] transition-all duration-300 scale-100 hover:scale-[1.04] active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>

            {/* Explore Services button */}
            <button
              onClick={() => handleScrollTo("#services")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xs border border-white/20 hover:border-luxury-gold/80 bg-white/5 hover:bg-luxury-gold/5 text-xs font-bold text-white tracking-widest uppercase hover:text-luxury-gold shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300 scale-100 hover:scale-[1.04] active:scale-95 cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              Explore Services
            </button>
          </motion.div>
        </div>
      </div>

      {/* 6. Floating Statistics Panel (Glassmorphism Cards at Hero Bottom) */}
      <div className="relative z-10 w-full bg-linear-to-t from-luxury-black to-transparent pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6"
          >
            {/* Rating */}
            <div className="glass-panel backdrop-blur-md rounded-xs p-4 sm:p-5 flex flex-col justify-center items-center text-center hover:border-luxury-gold/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(212,175,55,0.08)]">
              <Star className="w-5 h-5 text-luxury-gold mb-2 fill-luxury-gold" />
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-gold-gradient">⭐ 4.9</span>
              <span className="font-serif text-[10px] tracking-widest uppercase text-white/50 mt-1">Google Rating</span>
            </div>

            {/* Happy Clients */}
            <div className="glass-panel backdrop-blur-md rounded-xs p-4 sm:p-5 flex flex-col justify-center items-center text-center hover:border-luxury-gold/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(212,175,55,0.08)]">
              <Users className="w-5 h-5 text-luxury-gold mb-2" />
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-gold-gradient">5,000+</span>
              <span className="font-serif text-[10px] tracking-widest uppercase text-white/50 mt-1">Happy Clients</span>
            </div>

            {/* Professional Stylists */}
            <div className="glass-panel backdrop-blur-md rounded-xs p-4 sm:p-5 flex flex-col justify-center items-center text-center hover:border-luxury-gold/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(212,175,55,0.08)]">
              <Award className="w-5 h-5 text-luxury-gold mb-2" />
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-gold-gradient">15+</span>
              <span className="font-serif text-[10px] tracking-widest uppercase text-white/50 mt-1">Elite Stylists</span>
            </div>

            {/* Luxury Experience */}
            <div className="glass-panel backdrop-blur-md rounded-xs p-4 sm:p-5 flex flex-col justify-center items-center text-center hover:border-luxury-gold/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(212,175,55,0.08)]">
              <ShieldCheck className="w-5 h-5 text-luxury-gold mb-2" />
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-gold-gradient">100%</span>
              <span className="font-serif text-[10px] tracking-widest uppercase text-white/50 mt-1">Luxury Hygiene</span>
            </div>

            {/* Years of Excellence */}
            <div className="col-span-2 lg:col-span-1 glass-panel backdrop-blur-md rounded-xs p-4 sm:p-5 flex flex-col justify-center items-center text-center hover:border-luxury-gold/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(212,175,55,0.08)]">
              <Compass className="w-5 h-5 text-luxury-gold mb-2" />
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-gold-gradient">14+ Years</span>
              <span className="font-serif text-[10px] tracking-widest uppercase text-white/50 mt-1">Delhi Legacy</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
