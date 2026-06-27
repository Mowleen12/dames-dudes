import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Phone, Sparkles, Send, CheckCircle2, AlertCircle, Clock, MapPin } from "lucide-react";
import { SERVICES_DATA } from "../data";

export default function Appointment() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full Name is required";
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      errors.phone = "Please enter a valid phone number";
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.service) errors.service = "Please select a service";
    if (!formData.date) errors.date = "Please select a preferred date";
    if (!formData.time) errors.time = "Please select a preferred time";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury API booking response
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      // Reset Form
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        time: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="appointment" className="relative py-24 bg-luxury-black border-t border-white/5 overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-gold-dark/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-luxury-gold" />
            <span className="font-serif text-xs uppercase tracking-[0.3em] text-luxury-gold font-medium">
              THE VIP RESERVATION STAGE
            </span>
            <span className="h-[1px] w-8 bg-luxury-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Secure Your <span className="text-gold-gradient">Luxury Session</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/60 font-light leading-relaxed">
            Select your preferred treatment, date, and specialist. Our concierge team will immediately review your request and confirm your reservation slot via WhatsApp or Phone call.
          </p>
        </div>

        {/* Split grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Calendar & Concierge Illustration Info */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Custom Interactive Calendar Illustration */}
            <div className="glass-panel rounded-xs p-6 sm:p-8 border-gold-glow overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xs bg-luxury-gold/10 text-luxury-gold">
                  <Calendar className="w-5 h-5 animate-pulse" />
                </div>
                <div className="text-left">
                  <span className="font-mono text-[9px] text-white/55 tracking-widest block">SECURE SYSTEM</span>
                  <span className="font-serif text-sm font-bold text-white uppercase tracking-wider">LIVE SLOT DISCOVERY</span>
                </div>
              </div>

              {/* Mock Calendar Grid to look highly refined and editorial */}
              <div className="bg-luxury-black/60 p-4 rounded-xs border border-white/5 text-center mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-xs font-bold text-luxury-gold tracking-widest">JUNE 2026</span>
                  <span className="font-mono text-[9px] text-white/40">TODAY IS SATURDAY</span>
                </div>
                
                {/* Week days */}
                <div className="grid grid-cols-7 gap-2 text-[10px] font-bold text-white/50 tracking-wider mb-2">
                  <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                </div>
                
                {/* Dummy Dates */}
                <div className="grid grid-cols-7 gap-2 font-mono text-[11px]">
                  <span className="text-white/20">22</span>
                  <span className="text-white/25">23</span>
                  <span className="text-white/25">24</span>
                  <span className="text-white/25">25</span>
                  <span className="text-white/30">26</span>
                  <span className="text-luxury-gold border border-luxury-gold/30 bg-luxury-gold/5 font-black rounded-xs">27</span>
                  <span className="text-white">28</span>
                  <span className="text-white">29</span>
                  <span className="text-white">30</span>
                  <span className="text-white/30">01</span>
                  <span className="text-white/30">02</span>
                  <span className="text-white/30">03</span>
                  <span className="text-white/30">04</span>
                  <span className="text-white/30">05</span>
                </div>
              </div>

              {/* Service details and contact hooks */}
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-xs uppercase text-white tracking-wider block">OPENING HOURS</span>
                    <span className="text-xs text-white/60">Mon - Sun: 9:00 AM – 9:00 PM</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-xs uppercase text-white tracking-wider block">OUR PREMISES</span>
                    <span className="text-xs text-white/60">Mayur Vihar Phase-3, Delhi (Above Aao Ji Aao)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-xs uppercase text-white tracking-wider block">FAST-TRACK BOOKINGS</span>
                    <span className="text-xs text-white/60">Call directly at: 09871555303</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote badge block */}
            <div className="glass-panel p-6 rounded-xs border border-white/5 text-left relative overflow-hidden">
              <span className="font-serif italic text-sm text-champagne leading-relaxed block mb-3">
                "We respect your time. D&D bookings guarantee zero wait times on arrival, a clean sterilized chair, and direct access to your preferred stylist."
              </span>
              <span className="font-mono text-[9px] font-bold text-luxury-gold tracking-widest block uppercase">
                - CONCIERGE TEAM, DAMES & DUDES
              </span>
            </div>
          </motion.div>

          {/* Right Column: Premium Booking Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="glass-panel rounded-xs p-6 sm:p-10 border border-white/5 relative bg-matte-black/40">
              
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 text-left">
                Book Your Transformation
              </h3>
              <p className="font-sans text-xs text-white/50 tracking-wide font-light mb-8 text-left border-b border-white/5 pb-4">
                Please complete the following details. Fields marked with <span className="text-luxury-gold">*</span> are required.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="appointment-name" className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                      Full Name <span className="text-luxury-gold">*</span>
                    </label>
                    <input
                      id="appointment-name"
                      type="text"
                      name="name"
                      placeholder="e.g. Yash Sharma"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-luxury-black/80 border text-sm text-white px-4 py-3.5 rounded-xs focus:outline-none focus:border-luxury-gold transition-colors ${
                        formErrors.name ? "border-red-500" : "border-white/10 hover:border-white/20"
                      }`}
                    />
                    {formErrors.name && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" /> {formErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="appointment-phone" className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                      Phone Number <span className="text-luxury-gold">*</span>
                    </label>
                    <input
                      id="appointment-phone"
                      type="tel"
                      name="phone"
                      placeholder="e.g. 9871555303"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full bg-luxury-black/80 border text-sm text-white px-4 py-3.5 rounded-xs focus:outline-none focus:border-luxury-gold transition-colors ${
                        formErrors.phone ? "border-red-500" : "border-white/10 hover:border-white/20"
                      }`}
                    />
                    {formErrors.phone && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" /> {formErrors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="appointment-email" className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                      Email Address <span className="text-white/40">(Optional)</span>
                    </label>
                    <input
                      id="appointment-email"
                      type="email"
                      name="email"
                      placeholder="e.g. email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-luxury-black/80 border text-sm text-white px-4 py-3.5 rounded-xs focus:outline-none focus:border-luxury-gold transition-colors ${
                        formErrors.email ? "border-red-500" : "border-white/10 hover:border-white/20"
                      }`}
                    />
                    {formErrors.email && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" /> {formErrors.email}
                      </span>
                    )}
                  </div>

                  {/* Service selection field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="appointment-service" className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                      Preferred Service <span className="text-luxury-gold">*</span>
                    </label>
                    <select
                      id="appointment-service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full bg-luxury-black/80 border text-sm text-white px-4 py-3.5 rounded-xs focus:outline-none focus:border-luxury-gold transition-colors appearance-none ${
                        formErrors.service ? "border-red-500" : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      <option value="" disabled className="text-white/30 bg-luxury-black">Select Treatment</option>
                      {SERVICES_DATA.map(s => (
                        <option key={s.id} value={s.name} className="text-white bg-luxury-black">
                          {s.name} ({s.price})
                        </option>
                      ))}
                    </select>
                    {formErrors.service && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" /> {formErrors.service}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Preferred Date */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="appointment-date" className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                      Preferred Date <span className="text-luxury-gold">*</span>
                    </label>
                    <input
                      id="appointment-date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className={`w-full bg-luxury-black/80 border text-sm text-white px-4 py-3.5 rounded-xs focus:outline-none focus:border-luxury-gold transition-colors ${
                        formErrors.date ? "border-red-500" : "border-white/10 hover:border-white/20"
                      }`}
                    />
                    {formErrors.date && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" /> {formErrors.date}
                      </span>
                    )}
                  </div>

                  {/* Preferred Time */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="appointment-time" className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                      Preferred Time <span className="text-luxury-gold">*</span>
                    </label>
                    <input
                      id="appointment-time"
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className={`w-full bg-luxury-black/80 border text-sm text-white px-4 py-3.5 rounded-xs focus:outline-none focus:border-luxury-gold transition-colors ${
                        formErrors.time ? "border-red-500" : "border-white/10 hover:border-white/20"
                      }`}
                    />
                    {formErrors.time && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" /> {formErrors.time}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="appointment-message" className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                    Additional Instructions <span className="text-white/40">(Optional)</span>
                  </label>
                  <textarea
                    id="appointment-message"
                    name="message"
                    rows={3}
                    placeholder="e.g. Any skin allergies, specific hair director request (e.g. Rohit Kumar) or wedding package preferences..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-luxury-black/80 border border-white/10 hover:border-white/20 text-sm text-white px-4 py-3.5 rounded-xs focus:outline-none focus:border-luxury-gold transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="appointment-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 py-4 mt-4 rounded-xs bg-gold-gradient text-xs font-bold text-luxury-black tracking-widest uppercase hover:brightness-110 shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.5)] transition-all duration-300 scale-100 hover:scale-[1.02] active:scale-98 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-luxury-black border-t-transparent rounded-full animate-spin" />
                      RESERVING YOUR SLOT...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      SECURE VIP RESERVATION
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Modal Overlay */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            id="booking-success-modal"
            className="fixed inset-0 z-100 bg-luxury-black/90 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-md glass-panel p-8 sm:p-10 rounded-xs border-gold-glow text-center flex flex-col items-center"
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
            >
              <div className="bg-gold-gradient p-4 rounded-full text-luxury-black mb-6 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="font-mono text-[9px] text-luxury-gold tracking-[0.25em] uppercase block mb-1">
                RESERVATION CONFIRMED
              </span>
              
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Your Luxury Slot is Secured!
              </h3>
              
              <p className="font-sans text-sm text-white/75 font-light leading-relaxed mb-6">
                Thank you for reserving your session with Dames & Dudes. Our salon coordinator is preparing your schedule. We will reach out to you via call or WhatsApp within 15 minutes to finalize your timing!
              </p>

              <button
                onClick={() => setShowSuccess(false)}
                className="w-full py-3.5 bg-gold-gradient text-xs font-bold text-luxury-black tracking-widest uppercase hover:brightness-110 shadow-md transition-all rounded-xs"
              >
                Return to Site
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
