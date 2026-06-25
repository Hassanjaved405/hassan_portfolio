"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Code2, Database, Cloud, Layers, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    color: "from-cyan-500 to-blue-600",
    glow: "rgba(6,182,212,0.2)",
    skills: ["React.js", "Angular 12+", "TypeScript", "Next.js", "HTML5 / CSS3", "Tailwind CSS", "Bootstrap", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Code2,
    color: "from-violet-500 to-purple-700",
    glow: "rgba(124,58,237,0.2)",
    skills: [".NET Core", "ASP.NET", "C#", "Web API", "RESTful APIs", "JWT / OAuth", "SignalR", "Hangfire"],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.2)",
    skills: ["SQL Server", "T-SQL", "Entity Framework", "Query Optimization", "Stored Procedures", "Elasticsearch", "Redis", "Data Modeling"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-sky-500 to-indigo-600",
    glow: "rgba(14,165,233,0.2)",
    skills: ["Microsoft Azure", "AWS", "Docker", "Kubernetes", "Azure Service Bus", "Azure Functions", "CI/CD", "Azure Blob Storage"],
  },
  {
    title: "Architecture",
    icon: Layers,
    color: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.2)",
    skills: ["Microservices", "CQRS / MediatR", "Clean Architecture", "RabbitMQ", "API Design", "Performance Tuning", "Security Best Practices", "SSRS"],
  },
  {
    title: "Tools & Methods",
    icon: GitBranch,
    color: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.2)",
    skills: ["Git / GitHub", "Bitbucket", "Agile / Scrum", "Jira", "Swagger", "Postman", "Azure DevOps", "Code Review"],
  },
];

const coreSkills = [
  { name: "Full Stack Development", level: 95, color: "#667eea" },
  { name: "Cloud Architecture (Azure)", level: 88, color: "#06b6d4" },
  { name: "Database Design & Optimization", level: 92, color: "#10b981" },
  { name: "API Development & Integration", level: 95, color: "#764ba2" },
  { name: "Frontend Engineering", level: 90, color: "#f093fb" },
  { name: "Backend / .NET Core", level: 93, color: "#f59e0b" },
];

function SkillBar({ skill, index }: { skill: typeof coreSkills[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-sm font-bold" style={{ color: skill.color }}>{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-gray-100 dark:bg-slate-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="h-full rounded-full relative overflow-hidden"
          style={{ background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color})` }}
        >
          <div className="absolute inset-0 shimmer" />
        </motion.div>
      </div>
    </div>
  );
}

const Skills = () => {
  return (
    <section id="skills" className="section bg-white dark:bg-[#050816] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[100px] opacity-10"
        style={{ background: "radial-gradient(circle, #764ba2, transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 mb-4">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise across the full product lifecycle
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative group rounded-2xl p-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 overflow-hidden transition-all duration-300 glow-card"
              >
                {/* Glow bg */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${cat.glow}, transparent 70%)` }} />

                <div className="relative">
                  <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${cat.color} mb-4 shadow-md`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, si) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.06 + si * 0.04 }}
                        viewport={{ once: true }}
                        className="skill-tag px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Proficiency bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl p-8 md:p-10 bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Core <span className="gradient-text">Proficiency</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12">
            {coreSkills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
