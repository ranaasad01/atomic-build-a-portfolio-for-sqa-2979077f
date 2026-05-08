"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 as Github, Briefcase as Linkedin } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navBg = scrolled
    ? "bg-white/90 dark:bg-[#0f172a]/95 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-700/50"
    : "bg-transparent";

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + navBg}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => handleNavClick("#home")} className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                AJ
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-lg hidden sm:block">
                Alex<span className="text-sky-400">Johnson</span>
              </span>
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={
                      "relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 " +
                      (isActive
                        ? "text-sky-400"
                        : "text-slate-600 dark:text-slate-300 hover:text-sky-400 dark:hover:text-sky-400")
                    }
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-sky-400 rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex p-2 text-slate-500 dark:text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex p-2 text-slate-500 dark:text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <ThemeToggle />
              <a
                href="/resume.pdf"
                download
                className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-sky-400 to-indigo-500 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                Resume
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-sky-400 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white dark:bg-[#0f172a] border-b border-slate-200 dark:border-slate-700 shadow-xl lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={
                      "text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors " +
                      (isActive
                        ? "bg-sky-50 dark:bg-sky-900/20 text-sky-500"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800")
                    }
                  >
                    {link.label}
                  </button>
                );
              })}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center gap-3 px-4">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-sky-400 transition-colors">
                  <Github size={18} />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-sky-400 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="/resume.pdf" download className="ml-auto flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-sky-400 to-indigo-500 text-white text-sm font-semibold rounded-lg">
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
