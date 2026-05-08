"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Download } from 'lucide-react';
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from "@/lib/animations";

const HIGHLIGHTS = [
  "ISTQB Advanced Level Certified Test Automation Engineer",
  "Expert in Selenium, Cypress, Playwright & Appium automation",
  "Proficient in API testing with Postman, REST Assured & SoapUI",
  "Performance testing with JMeter, Gatling & k6",
  "CI/CD integration with Jenkins, GitHub Actions & Docker",
  "Agile/Scrum practitioner with strong collaboration skills",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0f172a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Get to know me
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            About <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">Me</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Avatar + Stats */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-sky-400/30 shadow-2xl shadow-sky-500/20">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5622AQGMvnXGYBKSvw/feedshare-shrink_800/B56ZwqcRsEH0Ac-/0/1770238581731?e=2147483647&v=beta&t=Fod04ULJTfAgYd7Lzjq8ApUSpugp7IYsY_KgR6MiPSE"
                  alt="Alex Johnson - SQA Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-sky-400 to-indigo-500 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-bold">
                6+ Years
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-2xl border border-sky-400/20 -z-10" />
              <div className="absolute -inset-6 rounded-2xl border border-indigo-500/10 -z-10" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {[
                { value: "6+", label: "Years Experience", color: "from-sky-400 to-blue-500" },
                { value: "2,400+", label: "Bugs Discovered", color: "from-indigo-400 to-purple-500" },
                { value: "8,000+", label: "Test Cases Written", color: "from-emerald-400 to-teal-500" },
                { value: "35+", label: "Projects Tested", color: "from-orange-400 to-amber-500" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700/50 text-center"
                >
                  <div className={"text-2xl font-bold bg-gradient-to-r " + stat.color + " bg-clip-text text-transparent"}>
                    {stat.value}
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Ensuring Software Excellence,{" "}
                <span className="text-sky-400">One Test at a Time</span>
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  I&apos;m <strong className="text-slate-900 dark:text-white">Alex Johnson</strong>, a Senior Software Quality Assurance Engineer
                  with over 6 years of experience building robust testing strategies for web, mobile, and API-driven applications.
                  I specialize in test automation architecture, performance engineering, and embedding quality throughout the SDLC.
                </p>
                <p>
                  My approach to QA goes beyond finding bugs — I partner with development teams to{" "}
                  <strong className="text-sky-400">prevent defects from ever reaching production</strong>. By designing
                  intelligent automation frameworks, establishing quality gates in CI/CD pipelines, and fostering a
                  culture of quality, I help teams ship faster with confidence.
                </p>
                <p>
                  When I&apos;m not writing test scripts or analyzing failure patterns, I contribute to the QA community
                  through blog posts, open-source testing tools, and mentoring aspiring QA engineers.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Core Competencies</h4>
              <ul className="grid sm:grid-cols-2 gap-2">
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle size={16} className="text-sky-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-400 to-indigo-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-sky-500/25"
              >
                Hire Me
              </button>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 border border-sky-400/50 text-sky-400 font-semibold rounded-xl hover:bg-sky-400/10 transition-all"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
