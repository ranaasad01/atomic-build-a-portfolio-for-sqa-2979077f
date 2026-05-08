"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Code2 as Github, ExternalLink, CheckCircle, Bug, FileText } from 'lucide-react';
import { PROJECTS } from "@/lib/constants";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

const CATEGORIES = ["All", "Test Automation", "API Testing", "Performance Testing", "Mobile Testing", "Security Testing", "DevOps QA"];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.p variants={fadeInUp} className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Portfolio
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Real-world QA projects showcasing automation frameworks, testing strategies, and quality engineering solutions.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={
                "px-4 py-2 rounded-lg text-sm font-medium transition-all " +
                (activeFilter === cat
                  ? "bg-gradient-to-r from-sky-400 to-indigo-500 text-white shadow-lg shadow-sky-500/25"
                  : "bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50 hover:border-sky-400/50 hover:text-sky-400")
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
  stats: { testCases: number; coverage: string; bugsFound: number };
  highlights: string[];
  github: string | null;
  demo: string | null;
  image: string;
}

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={scaleIn}
      className="bg-white dark:bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/50 hover:border-sky-400/30 transition-all hover:shadow-xl hover:shadow-sky-500/10 group flex flex-col"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute top-3 right-3 px-2.5 py-1 bg-sky-400/90 text-white text-xs font-semibold rounded-lg backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center p-2 bg-slate-50 dark:bg-slate-700/30 rounded-lg">
            <div className="flex items-center justify-center gap-1 text-sky-400 mb-0.5">
              <FileText size={12} />
              <span className="text-xs font-bold">{project.stats.testCases}</span>
            </div>
            <div className="text-xs text-slate-500">Test Cases</div>
          </div>
          <div className="text-center p-2 bg-slate-50 dark:bg-slate-700/30 rounded-lg">
            <div className="flex items-center justify-center gap-1 text-emerald-400 mb-0.5">
              <CheckCircle size={12} />
              <span className="text-xs font-bold">{project.stats.coverage}</span>
            </div>
            <div className="text-xs text-slate-500">Coverage</div>
          </div>
          <div className="text-center p-2 bg-slate-50 dark:bg-slate-700/30 rounded-lg">
            <div className="flex items-center justify-center gap-1 text-red-400 mb-0.5">
              <Bug size={12} />
              <span className="text-xs font-bold">{project.stats.bugsFound}</span>
            </div>
            <div className="text-xs text-slate-500">Bugs Found</div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-sky-400/10 text-sky-400 text-xs rounded-md border border-sky-400/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Highlights toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-sky-400 hover:text-sky-300 transition-colors mb-3 text-left"
        >
          {expanded ? "▲ Hide highlights" : "▼ Show highlights"}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-1.5 mb-4 overflow-hidden"
            >
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <span className="w-1 h-1 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                  {h}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Links */}
        <div className="flex gap-3 mt-auto pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-sky-400 transition-colors"
            >
              <Github size={15} />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-sky-400 transition-colors"
            >
              <ExternalLink size={15} />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
