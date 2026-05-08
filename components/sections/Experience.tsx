"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { EXPERIENCE } from "@/lib/constants";
import { staggerContainer, fadeInUp, fadeInLeft } from "@/lib/animations";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#0f172a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Career Journey
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Work{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            A track record of delivering quality across startups, scale-ups, and enterprise organizations.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400/50 via-indigo-500/30 to-transparent" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {EXPERIENCE.map((job, index) => (
              <TimelineItem key={job.company} job={job} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface Job {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  logo: string;
  responsibilities: string[];
}

function TimelineItem({ job, index }: { job: Job; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeInLeft}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: index * 0.1 }}
      className="relative pl-16 sm:pl-20"
    >
      {/* Timeline dot */}
      <div className="absolute left-4 sm:left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 border-4 border-white dark:border-[#0f172a] shadow-lg shadow-sky-500/30 -translate-x-1/2" />

      <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50 hover:border-sky-400/30 transition-all hover:shadow-lg hover:shadow-sky-500/5 group">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center shrink-0">
              <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-400 transition-colors">
                {job.role}
              </h3>
              <p className="text-sky-400 font-semibold text-sm">{job.company}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-sky-400/10 text-sky-400 text-xs font-medium rounded-full border border-sky-400/20">
              <Calendar size={11} />
              {job.duration}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 text-xs font-medium rounded-full">
              <MapPin size={11} />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-400/10 text-indigo-400 text-xs font-medium rounded-full border border-indigo-400/20">
              <Briefcase size={11} />
              {job.type}
            </span>
          </div>
        </div>

        {/* Responsibilities */}
        <ul className="space-y-2">
          {job.responsibilities.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
