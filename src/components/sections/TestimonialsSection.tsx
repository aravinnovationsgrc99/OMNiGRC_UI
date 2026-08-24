"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, Award } from "lucide-react";

const testimonials = [
  {
    quote:
      "OMNiGRC completely redefined our SOC 2 Type II experience. What usually takes 6 months of grueling manual effort took us less than 3 weeks. The continuous telemetry and automated evidence collection are pure magic.",
    name: "Vikram Malhotra",
    role: "VP of Engineering & Security",
    company: "FinFlow Technologies",
    metrics: "SOC 2 Type II ready in 18 days",
  },
  {
    quote:
      "Managing ISO 27001 alongside HIPAA and GDPR used to be a nightmare of duplicate spreadsheets. OMNiGRC mapped our controls once and auto-collected 98% of evidence natively. Our auditors were blown away.",
    name: "Sarah Jenkins",
    role: "Chief Information Security Officer",
    company: "HealthCore Systems",
    metrics: "Saved 200+ hours of audit prep",
  },
  {
    quote:
      "The Autonomous TPRM engine has drastically accelerated our enterprise sales cycles. We used to spend days filling security questionnaires. Now OMNiGRC AI auto-fills them in minutes with verified proof.",
    name: "Arjun Mehta",
    role: "Head of GRC & Security",
    company: "SaaSify Global",
    metrics: "5x faster deal closure rate",
  },
  {
    quote:
      "We needed ISO 42001 AI governance compliance fast for our AI models. OMNiGRC provided a live AI model registry and risk framework out-of-the-box. Exceptional platform and support.",
    name: "Elena Rostova",
    role: "Lead Security Architect",
    company: "NexusAI Labs",
    metrics: "ISO 42001 certified in 4 weeks",
  },
  {
    quote:
      "As a fast-growing startup, we didn't have a dedicated compliance team. OMNiGRC acted as our autonomous compliance team from day one. I cannot recommend them enough.",
    name: "David Chen",
    role: "Co-founder & CTO",
    company: "CloudVault Inc.",
    metrics: "Zero audit findings in Year 1",
  },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative bg-[#0B0F17] py-16 sm:py-24 border-t border-slate-800 overflow-hidden"
    >
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-yellow mb-3 font-semibold">
            CUSTOMER SUCCESS & REVIEWS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Here&apos;s what our customers say
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl 2xl:max-w-5xl mx-auto relative min-h-[300px] sm:min-h-[320px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-3xl border border-brand-orange/40 bg-slate-900/90 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl relative"
            >
              <Quote className="h-10 w-10 sm:h-12 sm:w-12 text-brand-orange/20 absolute top-6 right-6 sm:right-8 pointer-events-none" />

              <div className="flex items-center gap-1 text-brand-gold mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-brand-gold" />
                ))}
                <span className="ml-2 text-xs font-mono text-slate-400">5.0 G2 Verified Rating</span>
              </div>

              <p className="text-base sm:text-xl lg:text-2xl text-slate-100 font-medium leading-relaxed mb-6 sm:mb-8 italic">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-slate-800 pt-4 sm:pt-6 gap-3 sm:gap-4">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-xs text-brand-peach font-mono">
                    {testimonials[currentIndex].role} — {testimonials[currentIndex].company}
                  </p>
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-brand-green/15 border border-brand-green/30 text-xs font-mono font-semibold text-brand-green flex items-center gap-2">
                  <Award className="h-4 w-4" /> {testimonials[currentIndex].metrics}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls & Dots */}
          <div className="flex items-center justify-between mt-6 sm:mt-8 px-2 sm:px-4">
            {/* Dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "w-8 bg-brand-orange" : "w-2.5 bg-slate-700 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                className="p-2.5 sm:p-3 rounded-full border border-slate-800 bg-slate-900 text-slate-300 hover:border-brand-orange hover:bg-slate-800 hover:text-white transition-all shadow-md active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 sm:p-3 rounded-full border border-slate-800 bg-slate-900 text-slate-300 hover:border-brand-orange hover:bg-slate-800 hover:text-white transition-all shadow-md active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
