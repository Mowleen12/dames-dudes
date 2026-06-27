import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

interface PreloaderProps {
  onComplete: () => void;
}

const BRAND_MESSAGES = [
  "CRAFTING PRECISION",
  "DEFINING ELEGANCE",
  "REVEALING BEAUTY",
  "WELCOME TO THE EXTRAORDINARY"
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Increment progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 600); // Allow exit animation to play
          }, 450);
          return 100;
        }
        // Random elegant increment steps
        const step = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + step, 100);
      });
    }, 120);

    // Swap messages
    const msgInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % BRAND_MESSAGES.length);
    }, 600);

    return () => {
      clearInterval(interval);
      clearInterval(msgInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="preloader"
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-luxury-black text-white"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
        >
          {/* Subtle gold grid/light leak in the background */}
          <div className="absolute inset-0 bg-radial-at-c from-gold-dark/10 via-transparent to-transparent opacity-50" />
          <div className="absolute inset-0 bg-noise pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            {/* Pulsing Logo */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <Logo className="w-24 h-24 sm:w-28 sm:h-28" glow={true} />
            </motion.div>

            {/* Display Typography */}
            <motion.h1
              initial={{ letterSpacing: "0.2em", opacity: 0 }}
              animate={{ letterSpacing: "0.35em", opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="signboard-font text-2xl sm:text-3xl text-gold-gradient font-bold mb-2 tracking-[0.3em]"
            >
              DAMES & DUDES
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.4 }}
              className="font-serif text-xs text-champagne tracking-widest uppercase mb-10"
            >
              UNISEX SALON
            </motion.p>

            {/* Brand text slideshow */}
            <div className="h-6 overflow-hidden mb-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={messageIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.5 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-[10px] font-sans font-medium tracking-[0.25em] text-white"
                >
                  {BRAND_MESSAGES[messageIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Loading Bar & Counter Container */}
            <div className="w-48 sm:w-56">
              <div className="flex justify-between items-center mb-2 font-mono text-xs text-luxury-gold/75 tracking-widest">
                <span>LOADING</span>
                <span>{progress}%</span>
              </div>
              
              {/* Outer bar */}
              <div className="relative w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
                {/* Inner progress */}
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gold-gradient"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeInOut" }}
                />
                
                {/* Glowing lens flare point */}
                <motion.div
                  className="absolute top-0 h-full w-4 bg-white blur-xs opacity-70"
                  style={{ left: `calc(${progress}% - 8px)` }}
                  transition={{ ease: "easeInOut" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
