"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
      style={{ backgroundColor: isDark ? "#38bdf8" : "#cbd5e1" }}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center text-xs"
        style={{ left: isDark ? "calc(100% - 22px)" : "2px" }}
      >
        {isDark ? "🌙" : "☀️"}
      </motion.div>
    </button>
  );
}
