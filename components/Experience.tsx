"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Briefcase, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "eWorx International",
    companyUrl: "#",
    location: "Islamabad, Pakistan",
    period: "Sep 2025 – Present",
    type: "Full-time",
    color: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.15)",
    description:
      "Leading full-stack modernization and feature development across enterprise applications — migrating legacy Web Forms to modern Angular architecture while delivering robust .NET backend services on Azure in an Agile team environment.",
    achievements: [
      "Architecting and executing end-to-end modernization of legacy ASP.NET Web Forms applications to Angular, significantly improving maintainability and user experience",
      "Implementing enterprise-grade SSO (Single Sign-On) authentication, unifying identity management across multiple internal platforms",
      "Developing scalable .NET Core backend services with clean architecture patterns deployed on Azure cloud infrastructure",
      "Designing and optimizing SQL Server schemas and queries to support high-performance data operations",
      "Building responsive, component-driven Angular UIs from design to production across the full development lifecycle",
      "Participating in Agile ceremonies — sprint planning, daily standups, retrospectives, and peer code reviews",
    ],
    stack: ["Angular", ".NET Core", "Azure", "SQL Server", "SSO / OAuth", "Web Forms Migration"],
  },
  {
    title: "Full Stack Developer",
    company: "Paranox Technologies",
    companyUrl: "#",
    location: "Islamabad, Pakistan",
    period: "Nov 2024 – Sep 2025",
    type: "Full-time",
    color: "from-violet-500 to-purple-700",
    glow: "rgba(124,58,237,0.15)",
    description:
      "Leading full-stack development of enterprise web applications, driving seamless integration between client-facing interfaces and robust backend systems for high-traffic production environments.",
    achievements: [
      "Architected and delivered responsive web applications with React.js and Angular, significantly boosting user engagement metrics",
      "Led end-to-end full-stack development ensuring seamless front-end/back-end integration across complex workflows",
      "Designed scalable .NET Core backend systems with a focus on security, performance, and maintainability",
      "Engineered and optimized RESTful APIs handling high-volume concurrent data operations",
      "Implemented enterprise-grade authentication and authorization with JWT, OAuth2, and role-based access control",
      "Diagnosed and resolved critical production issues, improving overall system reliability and uptime",
    ],
    stack: ["React.js", "Angular", ".NET Core", "Azure", "SQL Server", "REST APIs"],
  },
  {
    title: "Full Stack Developer",
    company: "IzyLogic",
    companyUrl: "#",
    location: "Gujranwala, Pakistan",
    period: "Oct 2022 – Oct 2024",
    type: "Full-time",
    color: "from-cyan-500 to-blue-600",
    glow: "rgba(6,182,212,0.15)",
    description:
      "Delivered full-stack solutions across multiple client projects, owning both UI engineering and server-side development from requirements through production deployment.",
    achievements: [
      "Developed and maintained production-grade React.js web applications serving thousands of daily users",
      "Built responsive, accessible UI components that improved cross-device user experience",
      "Integrated 15+ third-party APIs and SDKs to extend application functionality",
      "Reduced initial page load time by 40% via code splitting, lazy loading, and bundle optimization",
      "Designed and implemented .NET Core backend services with clean architecture patterns",
      "Created RESTful APIs with comprehensive Swagger documentation for team and client use",
      "Implemented JWT and session-based authentication ensuring secure access across all environments",
      "Optimized database schema and queries, reducing average query execution time by 60%",
    ],
    stack: ["React.js", ".NET Core", "SQL Server", "Docker", "AWS", "Entity Framework"],
  },
  {
    title: "Frontend Developer",
    company: "Xebex",
    companyUrl: "#",
    location: "Lahore, Pakistan",
    period: "Jan 2021 – Sep 2022",
    type: "Full-time",
    color: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.15)",
    description:
      "Started my professional career building modern, responsive websites using React, establishing a strong foundation in frontend best practices, collaboration, and iterative delivery.",
    achievements: [
      "Collaborated with senior developers to build new websites from scratch using React, JavaScript, HTML5, and CSS3",
      "Implemented mobile-first responsive design, ensuring flawless rendering across all device sizes",
      "Developed and maintained reusable React component libraries, accelerating team delivery velocity",
      "Ensured all code was well-documented, reusable, and adhered to company-wide coding standards",
      "Participated actively in daily standups, sprint planning, and code reviews in an Agile environment",
    ],
    stack: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "GitHub"],
  },
];

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-30px" }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-8 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center">
        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} shadow-lg ring-4 ring-white dark:ring-slate-950`}>
          <div className={`w-full h-full rounded-full bg-gradient-to-br ${exp.color} animate-ping opacity-40`} />
        </div>
      </div>

      <div
        className="rounded-2xl border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition-all duration-300 glow-card"
        style={{ boxShadow: expanded ? `0 0 30px ${exp.glow}` : "" }}
      >
        {/* Header */}
        <div
          className="p-6 cursor-pointer"
          onClick={() => setExpanded((v) => !v)}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className={`flex-shrink-0 p-2.5 rounded-xl bg-gradient-to-br ${exp.color} shadow-md`}>
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-0.5">{exp.title}</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`font-semibold text-transparent bg-clip-text bg-gradient-to-r ${exp.color}`}>
                    {exp.company}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400">
                    {exp.type}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>
            <button className="flex-shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
              {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {exp.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs rounded-md bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 border-t border-gray-100 dark:border-slate-800">
                <p className="text-gray-600 dark:text-gray-400 mt-4 mb-4 text-sm leading-relaxed">
                  {exp.description}
                </p>
                <ul className="space-y-2.5">
                  {exp.achievements.map((a, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className={`flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.color}`} />
                      {a}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

const Experience = () => {
  return (
    <section id="experience" className="section bg-gray-50/50 dark:bg-[#080c1a] relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-[100px] opacity-10"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 mb-4">
            Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            5+ years building enterprise software across diverse industries
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/60 via-cyan-500/40 to-transparent ml-0" />

          <div className="space-y-6 lg:pl-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Education note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 p-5 rounded-2xl border border-dashed border-purple-200 dark:border-purple-800/40 bg-purple-50/50 dark:bg-purple-900/10 flex items-start gap-4"
        >
          <div className="flex-shrink-0 p-2 rounded-lg gradient-main shadow-sm">
            <ExternalLink className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">
              Bachelor of Science — Computer Science
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              University of Gujrat • Graduated 2018
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
