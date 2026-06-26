"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Target, Award, TrendingUp, Code2, Layers, Zap } from "lucide-react";

const stats = [
  { icon: Award, value: 5, suffix: "+", label: "Years of Experience", color: "from-violet-500 to-purple-600" },
  { icon: Target, value: 50, suffix: "+", label: "Projects Delivered", color: "from-cyan-500 to-blue-600" },
  { icon: Users, value: 30, suffix: "+", label: "Happy Clients", color: "from-pink-500 to-rose-600" },
  { icon: TrendingUp, value: 99, suffix: "%", label: "Success Rate", color: "from-amber-500 to-orange-600" },
];

const highlights = [
  {
    icon: Code2,
    title: "Frontend Excellence",
    text: "Pixel-perfect UIs with React, Angular, TypeScript, and modern CSS — optimized for performance and accessibility.",
  },
  {
    icon: Layers,
    title: "Backend Architecture",
    text: "Scalable APIs and microservices with .NET Core, CQRS patterns, and clean architecture principles.",
  },
  {
    icon: Zap,
    title: "Cloud & DevOps",
    text: "Azure-native deployments with CI/CD pipelines, containerization, and Kubernetes orchestration.",
  },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCountUp(stat.value, 1800, inView);
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative overflow-hidden rounded-2xl p-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-sm glow-card group transition-all duration-300"
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-t-2xl`} />
      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="text-4xl font-black text-gray-900 dark:text-white mb-1">
        {count}<span className="gradient-text">{stat.suffix}</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</p>
      <div className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity blur-2xl`} />
    </motion.div>
  );
}

const About = () => {
  return (
    <section id="about" className="section bg-gray-50/50 dark:bg-[#080c1a] relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10"
        style={{ background: "radial-gradient(circle, #667eea, transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Crafting <span className="gradient-text">Digital Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Full-stack engineer passionate about building software that makes a real difference
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left — story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p className="text-lg">
                With <strong className="text-gray-900 dark:text-white font-semibold">5+ years of hands-on experience</strong>, I specialize in
                building enterprise-level web applications from the ground up. My work spans
                convenience store management platforms, healthcare financial analytics, social
                travel apps, and retail POS systems — each serving thousands of real users daily.
              </p>
              <p>
                My approach combines deep technical expertise with strong product thinking.
                I don&apos;t just write code — I architect solutions that scale, perform, and endure.
                Whether it&apos;s optimizing a slow SQL query, designing a clean microservices
                boundary, or crafting a pixel-perfect UI, I bring the same level of care to every layer.
              </p>
              <p>
                I thrive in collaborative environments and have a track record of leading
                front-to-back development cycles, mentoring peers, and shipping under tight deadlines
                without cutting corners on quality.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4 pt-2">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:border-purple-200 dark:hover:border-purple-800 transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg gradient-main flex items-center justify-center shadow-sm">
                    <h.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">{h.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{h.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl p-8 md:p-10 text-center"
          style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)" }}
        >
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Let&apos;s Build Something Extraordinary
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Open to full-time roles, freelance projects, and technical consulting.
              Let&apos;s discuss how I can help your vision become reality.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-8 py-3 bg-white text-purple-700 rounded-full font-bold hover:bg-purple-50 transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-8 py-3 bg-white/20 backdrop-blur text-white rounded-full font-bold border border-white/30 hover:bg-white/30 transition-all"
              >
                See My Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
