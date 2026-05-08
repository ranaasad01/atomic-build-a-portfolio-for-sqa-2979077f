"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { SOCIAL_LINKS } from "@/lib/constants";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email address";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.trim().length < 20) errs.message = "Message must be at least 20 characters";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setFormState("loading");
    // Simulate sending (replace with EmailJS integration)
    await new Promise((r) => setTimeout(r, 1800));
    setFormState("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setFormState("idle"), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((er) => ({ ...er, [e.target.name]: "" }));
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0f172a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project that needs quality assurance? Looking for a dedicated QA engineer? I&apos;d love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: SOCIAL_LINKS.email, href: "mailto:" + SOCIAL_LINKS.email },
                  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: null },
                  { icon: Phone, label: "Availability", value: "Mon–Fri, 9am–6pm PST", href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-sky-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wide mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-slate-700 dark:text-slate-300 hover:text-sky-400 transition-colors text-sm font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wide">Follow Me</h4>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
                  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
                  { icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:border-sky-400/50 hover:text-sky-400 hover:bg-sky-400/5 transition-all"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="bg-gradient-to-br from-sky-400/10 to-indigo-500/10 border border-sky-400/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-semibold text-sm">Open to Opportunities</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Currently available for full-time roles, contract work, and consulting engagements in QA engineering.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-8 border border-slate-200 dark:border-slate-700/50">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={"w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition-all text-sm " + (errors.name ? "border-red-400" : "border-slate-200 dark:border-slate-700")}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={"w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition-all text-sm " + (errors.email ? "border-red-400" : "border-slate-200 dark:border-slate-700")}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject <span className="text-red-400">*</span>
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={"w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition-all text-sm " + (errors.subject ? "border-red-400" : "border-slate-200 dark:border-slate-700")}
                >
                  <option value="">Select a subject...</option>
                  <option value="job-opportunity">Job Opportunity</option>
                  <option value="freelance-project">Freelance / Contract Project</option>
                  <option value="consulting">QA Consulting</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className={"w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition-all text-sm resize-none " + (errors.message ? "border-red-400" : "border-slate-200 dark:border-slate-700")}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === "loading" || formState === "success"}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-sky-400 to-indigo-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-sky-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formState === "loading" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : formState === "success" ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : formState === "error" ? (
                  <>
                    <AlertCircle size={18} />
                    Try Again
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {formState === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-emerald-400 text-sm mt-4"
                >
                  Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
