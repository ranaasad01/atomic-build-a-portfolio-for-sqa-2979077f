"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  };

  const testimonial = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Social Proof
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            What People{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
              Say
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Feedback from colleagues, managers, and stakeholders I&apos;ve had the pleasure of working with.
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white dark:bg-slate-800/50 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-700/50 shadow-xl"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8 relative">
                  <span className="absolute -top-4 -left-2 text-6xl text-sky-400/20 font-serif leading-none">&ldquo;</span>
                  <span className="relative z-10">{testimonial.quote}</span>
                  <span className="absolute -bottom-8 right-0 text-6xl text-sky-400/20 font-serif leading-none">&rdquo;</span>
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-sky-400/30 bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sky-400 text-sm font-medium">{testimonial.role}</div>
                    <div className="text-slate-500 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-sky-400/50 hover:text-sky-400 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={"transition-all rounded-full " + (i === current ? "w-8 h-2.5 bg-sky-400" : "w-2.5 h-2.5 bg-slate-300 dark:bg-slate-600 hover:bg-sky-400/50")}
                  aria-label={"Go to testimonial " + (i + 1)}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-sky-400/50 hover:text-sky-400 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
