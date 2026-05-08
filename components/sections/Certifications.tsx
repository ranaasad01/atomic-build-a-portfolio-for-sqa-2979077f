"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Award } from 'lucide-react';
import { CERTIFICATIONS } from "@/lib/constants";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-[#0f172a] relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Credentials
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise in software testing, quality assurance, and cloud technologies.
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CERTIFICATIONS.map((cert) => (
            <CertCard key={cert.name} cert={cert} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-sky-400/10 to-indigo-500/10 border border-sky-400/20 rounded-2xl">
            <Award size={20} className="text-sky-400" />
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Currently pursuing{" "}
              <strong className="text-sky-400">ISTQB Expert Level – Test Management</strong> certification
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface Cert {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  badge: string;
  color: string;
  description: string;
  verifyUrl: string;
}

function CertCard({ cert }: { cert: Cert }) {
  return (
    <motion.div
      variants={scaleIn}
      className="relative bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50 hover:border-sky-400/30 transition-all hover:shadow-xl hover:shadow-sky-500/10 group overflow-hidden"
    >
      {/* Background gradient */}
      <div className={"absolute top-0 right-0 w-32 h-32 bg-gradient-to-br " + cert.color + " opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity"} />

      {/* Badge */}
      <div className={"w-14 h-14 rounded-2xl bg-gradient-to-br " + cert.color + " flex items-center justify-center text-2xl shadow-lg mb-4"}>
        {cert.badge}
      </div>

      {/* Content */}
      <h3 className="font-bold text-slate-900 dark:text-white text-sm leading-snug mb-2 group-hover:text-sky-400 transition-colors">
        {cert.name}
      </h3>
      <p className="text-sky-400 font-semibold text-sm mb-1">{cert.issuer}</p>
      <p className="text-slate-500 dark:text-slate-400 text-xs mb-3">{cert.description}</p>

      {/* Meta */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500 mb-4">
        <span>Issued: {cert.date}</span>
        <span className="font-mono text-xs">{cert.credentialId.slice(0, 16)}...</span>
      </div>

      {/* Verify link */}
      <a
        href={cert.verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 transition-colors font-medium"
      >
        <ExternalLink size={12} />
        Verify Credential
      </a>
    </motion.div>
  );
}
