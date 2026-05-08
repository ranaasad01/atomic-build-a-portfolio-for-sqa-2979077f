"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ChevronDown, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter } from 'lucide-react';
import { SOCIAL_LINKS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const TYPED_WORDS = ["QA Engineer", "Test Automation Expert", "Quality Advocate", "Bug Hunter"];

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0f1e] via-[#0f172a] to-[#1a1040]"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-400/10 border border-sky-400/30 text-sky-400 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={fadeInUp}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Alex{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Johnson
              </span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300">
              <span className="text-sky-400">{"<"}</span>
              <TypedText words={TYPED_WORDS} />
              <span className="text-sky-400">{"/>"}</span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-slate-400 text-lg sm:text-xl leading-relaxed"
          >
            Passionate about delivering{" "}
            <span className="text-sky-400 font-semibold">flawless software</span> through
            rigorous testing, intelligent automation, and a relentless pursuit of quality.
            6+ years turning bugs into features — before users ever see them.
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6 sm:gap-10 py-4"
          >
            {[
              { value: "6+", label: "Years Exp." },
              { value: "2,400+", label: "Bugs Found" },
              { value: "8,000+", label: "Test Cases" },
              { value: "35+", label: "Projects" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleScroll("contact")}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-400 to-indigo-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:-translate-y-0.5"
            >
              <Mail size={18} />
              Get In Touch
            </button>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-8 py-4 border border-sky-400/50 text-sky-400 font-semibold rounded-xl hover:bg-sky-400/10 transition-all hover:-translate-y-0.5"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-slate-700 text-slate-400 hover:text-sky-400 hover:border-sky-400/50 transition-all hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-slate-700 text-slate-400 hover:text-sky-400 hover:border-sky-400/50 transition-all hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-slate-700 text-slate-400 hover:text-sky-400 hover:border-sky-400/50 transition-all hover:-translate-y-0.5"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => handleScroll("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-sky-400 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}

function TypedText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const current = words[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words]);

  return (
    <span className="text-white min-w-[280px] text-left">
      {displayed}
      <span className="inline-block w-0.5 h-7 bg-sky-400 ml-1 animate-pulse" />
    </span>
  );
}

// Need useState import
import { useState, useEffect } from "react";
