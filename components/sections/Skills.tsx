"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Technical Expertise
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Skills &{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit built over 6+ years of hands-on QA engineering across diverse domains and tech stacks.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILLS.map((category) => (
            <SkillCategory key={category.category} category={category} isInView={isInView} />
          ))}
        </motion.div>

        {/* Tool badges */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.p variants={fadeInUp} className="text-center text-slate-500 dark:text-slate-400 text-sm uppercase tracking-widest mb-6">
            Also proficient with
          </motion.p>
          <motion.div variants={staggerContainer} className="flex flex-wrap justify-center gap-3">
            {[
              "Selenium Grid", "TestNG", "JUnit 5", "Cucumber BDD", "Gherkin",
              "Allure Reports", "Extent Reports", "Maven", "Gradle", "npm",
              "VS Code", "IntelliJ IDEA", "Figma", "Confluence", "Slack",
              "Kibana", "Splunk", "New Relic", "Datadog", "PagerDuty",
            ].map((tool) => (
              <motion.span
                key={tool}
                variants={scaleIn}
                className="px-3 py-1.5 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 text-sm rounded-lg hover:border-sky-400/50 hover:text-sky-400 transition-colors cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

interface SkillCategoryProps {
  category: (typeof SKILLS)[0];
  isInView: boolean;
}

function SkillCategory({ category, isInView }: SkillCategoryProps) {
  return (
    <motion.div
      variants={scaleIn}
      className="bg-white dark:bg-slate-800/40 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50 hover:border-sky-400/30 transition-all hover:shadow-lg hover:shadow-sky-500/5 group"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={"w-10 h-10 rounded-xl bg-gradient-to-br " + category.color + " flex items-center justify-center text-lg shadow-lg"}>
          {category.icon}
        </div>
        <h3 className="font-bold text-slate-900 dark:text-white text-sm">{category.category}</h3>
      </div>

      <div className="space-y-3">
        {category.skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} isInView={isInView} />
        ))}
      </div>
    </motion.div>
  );
}

function SkillBar({ skill, isInView }: { skill: { name: string; level: number }; isInView: boolean }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-slate-700 dark:text-slate-300">{skill.name}</span>
        <span className="text-xs text-sky-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-slate-100 dark:bg-slate-700/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: skill.level + "%" } : { width: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="h-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-500"
        />
      </div>
    </div>
  );
}
