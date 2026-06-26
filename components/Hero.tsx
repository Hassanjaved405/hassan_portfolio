"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, ExternalLink } from "lucide-react";

const TITLES = [
  "Full Stack Developer",
  "React & Angular Expert",
  ".NET Architect",
  "Cloud Engineer",
  "Enterprise Builder",
];

const TECH_BADGES = [
  { label: "React", color: "#61dafb", bg: "rgba(97,218,251,0.12)", angle: 0 },
  { label: ".NET", color: "#9b4dca", bg: "rgba(155,77,202,0.12)", angle: 72 },
  { label: "Azure", color: "#0078d4", bg: "rgba(0,120,212,0.12)", angle: 144 },
  { label: "Angular", color: "#dd0031", bg: "rgba(221,0,49,0.12)", angle: 216 },
  { label: "SQL", color: "#e8823d", bg: "rgba(232,130,61,0.12)", angle: 288 },
];

const STATS = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
];

const Hero = () => {
  const [titleIdx, setTitleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typewriter
  useEffect(() => {
    const full = TITLES[titleIdx];

    if (!deleting && text === full) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setTitleIdx((i) => (i + 1) % TITLES.length);
      return;
    }

    const t = setTimeout(
      () => setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)),
      deleting ? 45 : 90
    );
    return () => clearTimeout(t);
  }, [text, deleting, titleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#050816]"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
          style={{ background: "radial-gradient(circle, #667eea, #764ba2)" }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-15 blur-[120px]"
          style={{ background: "radial-gradient(circle, #06b6d4, #7c3aed)" }} />
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full opacity-10 blur-[80px]"
          style={{ background: "radial-gradient(circle, #f093fb, #764ba2)" }} />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(rgba(124,58,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left ── */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-800/50 bg-purple-50 dark:bg-purple-900/20 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                  Available for opportunities
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-3 leading-tight"
              >
                Hi, I&apos;m{" "}
                <span className="gradient-text">Hassan</span>
                <br />
                <span className="text-gray-900 dark:text-white">Javed</span>
              </motion.h1>

              {/* Typewriter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="h-10 flex items-center mb-6"
              >
                <span className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 font-light">
                  {text}
                  <span className="typewriter-cursor" />
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg"
              >
                I architect and build enterprise-grade web applications — from real-time POS
                systems and healthcare analytics platforms to collaborative travel apps.
                Specializing in React, Angular, .NET, and Azure cloud solutions.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  <span>View My Work</span>
                </motion.a>
                <motion.a
                  href="/Hassan_Javed_Resume_C.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline flex items-center gap-2"
                >
                  <Download size={18} />
                  Download CV
                </motion.a>
              </motion.div>

              {/* Social */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
                className="flex items-center gap-3 mb-10"
              >
                <a
                  href="https://github.com/Hassanjaved405"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:scale-110"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hassan-javed-50541a111/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110"
                >
                  <Linkedin size={18} />
                </a>
                <span className="h-5 w-px bg-gray-300 dark:bg-slate-700 mx-1" />
                <span className="text-sm text-gray-500 dark:text-gray-500">Islamabad, Pakistan</span>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
                className="grid grid-cols-3 gap-2 sm:gap-4"
              >
                {STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    className="text-center p-2 sm:p-3 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800"
                  >
                    <div className="text-2xl font-bold gradient-text">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* ── Right ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full spin-slow"
                style={{ background: "conic-gradient(from 0deg, transparent 0%, rgba(124,58,237,0.6) 30%, rgba(240,147,251,0.6) 60%, transparent 100%)", padding: "2px" }}>
                <div className="w-full h-full rounded-full bg-white dark:bg-[#050816]" />
              </div>

              {/* Inner rotating ring */}
              <div className="absolute inset-3 rounded-full spin-slow-reverse"
                style={{ background: "conic-gradient(from 180deg, transparent 0%, rgba(6,182,212,0.5) 30%, rgba(124,58,237,0.5) 60%, transparent 100%)", padding: "1.5px" }}>
                <div className="w-full h-full rounded-full bg-white dark:bg-[#050816]" />
              </div>

              {/* Center avatar */}
              <div className="absolute inset-6 rounded-full flex flex-col items-center justify-center"
                style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)" }}>
                <div className="absolute inset-0 rounded-full blur-xl opacity-60"
                  style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }} />
                <div className="relative flex flex-col items-center justify-center gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">HJ</span>
                  <span className="text-xs text-white/80 font-medium tracking-widest uppercase">Full Stack</span>
                </div>
                {/* Pulse rings */}
                <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping" style={{ animationDuration: "2s" }} />
              </div>

              {/* Orbiting tech badges */}
              {TECH_BADGES.map((badge, i) => {
                const rad = (badge.angle * Math.PI) / 180;
                const radius = 48;
                const x = 50 + radius * Math.cos(rad);
                const y = 50 + radius * Math.sin(rad);
                return (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.12, type: "spring", stiffness: 300 }}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                      className="px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm border whitespace-nowrap"
                      style={{
                        background: badge.bg,
                        color: badge.color,
                        borderColor: `${badge.color}40`,
                        boxShadow: `0 4px 15px ${badge.color}30`,
                      }}
                    >
                      {badge.label}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 rounded-full border border-gray-300 dark:border-slate-700 group-hover:border-purple-500/50 transition-colors"
          >
            <ArrowDown size={14} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
