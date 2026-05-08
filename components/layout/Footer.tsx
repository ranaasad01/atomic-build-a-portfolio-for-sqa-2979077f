"use client";

import { Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail, Download, Heart, ArrowUp } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0f1e] border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                AJ
              </div>
              <span className="font-bold text-white text-lg">
                Alex<span className="text-sky-400">Johnson</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-5">
              Senior SQA Engineer passionate about delivering flawless software through intelligent automation and rigorous quality practices.
            </p>
            <div className="flex gap-3">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center hover:border-sky-400/50 hover:text-sky-400 transition-all">
                <Github size={16} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center hover:border-sky-400/50 hover:text-sky-400 transition-all">
                <Linkedin size={16} />
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center hover:border-sky-400/50 hover:text-sky-400 transition-all">
                <Twitter size={16} />
              </a>
              <a href={"mailto:" + SOCIAL_LINKS.email} aria-label="Email"
                className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center hover:border-sky-400/50 hover:text-sky-400 transition-all">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Actions */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Quick Actions</h4>
            <div className="space-y-3">
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 text-sm hover:text-sky-400 transition-colors"
              >
                <Download size={14} />
                Download Resume
              </a>
              <a
                href={"mailto:" + SOCIAL_LINKS.email}
                className="flex items-center gap-2 text-sm hover:text-sky-400 transition-colors"
              >
                <Mail size={14} />
                Send Email
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-sky-400 transition-colors"
              >
                <Linkedin size={14} />
                Connect on LinkedIn
              </a>
            </div>

            {/* Availability */}
            <div className="mt-6 p-3 bg-emerald-400/10 border border-emerald-400/20 rounded-xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs font-semibold">Available for hire</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 flex items-center gap-1">
            &copy; {new Date().getFullYear()} Alex Johnson. Built with{" "}
            <Heart size={12} className="text-red-400 fill-red-400" />
            {" "}and Next.js
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-slate-500 hover:text-sky-400 transition-colors group"
            aria-label="Back to top"
          >
            Back to top
            <span className="w-6 h-6 rounded-lg border border-slate-700 flex items-center justify-center group-hover:border-sky-400/50 transition-colors">
              <ArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
