"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, X, ChevronLeft, ChevronRight, ArrowUpRight, Layers } from "lucide-react";

const projects = [
  {
    id: 4,
    title: "MAPApp",
    category: "Healthcare Analytics",
    tagline: "Enterprise Financial Intelligence Platform",
    description: "Healthcare financial analytics platform enabling healthcare members to benchmark MAP Key metrics, submit data, and generate executive reports.",
    longDescription:
      "MAPApp is a full-scale enterprise healthcare financial analytics platform built for healthcare members. It empowers healthcare organizations to track, benchmark, and improve financial performance using standardized MAP Keys metrics. Features include validated data submission workflows, peer-group and org-group builders, customizable SSRS-backed report generation, opportunity analysis, real-time notifications via Azure Service Bus, and comprehensive user management — all secured with MFA, SAML 2.0 SSO, and granular role-based access control.",
    technologies: ["Angular 12", ".NET Core", "Azure", "SQL Server", "CQRS / MediatR", "SSRS", "Azure Service Bus", "Hangfire", "SAML 2.0", "Entity Framework"],
    liveUrl: "https://mapapp.carecloud.com/",
    color: "from-emerald-500 to-teal-600",
    images: [
      "/projects/mapapp/01.png",
      "/projects/mapapp/02.png",
      "/projects/mapapp/03.png",
      "/projects/mapapp/04.png",
    ],
    features: [
      "MAP Key financial metrics tracking & peer benchmarking",
      "Validated data file submission with error reporting",
      "Peer group & organization group builder",
      "Customizable report generation (Excel, PDF export)",
      "Opportunity analysis & performance comparisons",
      "MFA + SAML 2.0 SSO with role-based access control",
      "Real-time notifications via Azure Service Bus",
      "Background job scheduling with Hangfire",
    ],
  },
  {
    id: 1,
    title: "CStore CEO",
    category: "Enterprise Solution",
    tagline: "Convenience Store Management Platform",
    description: "Comprehensive multi-location convenience store management system with real-time inventory, advanced POS integration, and analytics.",
    longDescription:
      "CStore CEO is a comprehensive convenience store management platform that streamlines operations across multiple locations. It features real-time inventory management, advanced POS integration, employee scheduling, detailed analytics dashboards, automated reporting, and vendor management — serving thousands of store operators daily.",
    technologies: ["Angular", ".NET Core", "SQL Server", "Azure", "Microservices", "Kubernetes", "Elasticsearch", "RabbitMQ"],
    liveUrl: "https://app.cstoreceo.com/",
    color: "from-violet-500 to-purple-700",
    images: [
      "/projects/cstore/preview.webp",
      "/projects/cstore/preview (1).webp",
      "/projects/cstore/preview (2).webp",
      "/projects/cstore/preview (3).webp",
      "/projects/cstore/preview (4).webp",
      "/projects/cstore/preview (5).webp",
    ],
    features: [
      "Real-time inventory tracking & alerts",
      "Multi-location management dashboard",
      "Advanced analytics & KPI reporting",
      "Employee scheduling & time tracking",
      "Automated inventory reordering",
      "POS hardware integration",
    ],
  },
  {
    id: 2,
    title: "SquadTrip",
    category: "Social Platform",
    tagline: "Group Travel Planning Made Easy",
    description: "Collaborative travel planning platform where groups and families co-plan trips with shared itineraries, expense splitting, and voting.",
    longDescription:
      "SquadTrip reimagines group travel planning with a real-time collaborative platform. Friends and families can co-create itineraries, vote on accommodations, split expenses automatically, and communicate via built-in group chat — eliminating the chaos of coordinating travel across multiple chat threads.",
    technologies: ["React", ".NET Core", "SQL Server", "Azure", "SignalR", "Microservices"],
    liveUrl: "https://squadtrip.com/",
    color: "from-sky-500 to-blue-600",
    images: [
      "/projects/squadtrip/Screenshot 2025-08-12 010403.jpg",
      "/projects/squadtrip/Screenshot 2025-08-12 010424.jpg",
      "/projects/squadtrip/Screenshot 2025-08-12 010451.jpg",
      "/projects/squadtrip/Screenshot 2025-08-12 010512.jpg",
    ],
    features: [
      "Real-time collaborative trip planning",
      "Group chat with push notifications",
      "Smart expense splitting calculator",
      "Accommodation & activity voting",
      "Shared itinerary with drag-and-drop",
      "Secure payment integration",
    ],
  },
  {
    id: 3,
    title: "POS PAmeric",
    category: "Retail Solution",
    tagline: "Modern Point-of-Sale System",
    description: "Sophisticated POS system for retail businesses with inventory management, loyalty programs, and detailed sales analytics.",
    longDescription:
      "POS PAmeric is a full-featured point-of-sale system built for retail operations. It handles high-volume checkouts, manages inventory in real-time, powers customer loyalty programs, and generates actionable sales analytics — all within a clean, fast interface that minimizes training time.",
    technologies: ["React", ".NET Core", "AWS", "SQL Server", "Redis", "Payment APIs"],
    liveUrl: "http://pos.pameric.com/",
    color: "from-amber-500 to-orange-600",
    images: [
      "/projects/pos/Picture1.png",
      "/projects/pos/Picture2.png",
      "/projects/pos/Picture3.png",
      "/projects/pos/Picture4.png",
      "/projects/pos/Picture5.png",
      "/projects/pos/Picture6.png",
    ],
    features: [
      "High-speed checkout with barcode scanning",
      "Real-time inventory management",
      "Customer loyalty & rewards program",
      "Multi-payment processing (card, cash, wallet)",
      "Sales analytics & reporting dashboard",
      "Custom receipt & invoice generation",
    ],
  },
];

type Project = typeof projects[0];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [imgIdx, setImgIdx] = useState(0);
  const prev = () => setImgIdx((i) => (i === 0 ? project.images.length - 1 : i - 1));
  const next = () => setImgIdx((i) => (i === project.images.length - 1 ? 0 : i + 1));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white dark:bg-slate-950 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-gray-100 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image carousel */}
        <div className="relative h-72 sm:h-96 bg-gray-100 dark:bg-slate-900 rounded-t-3xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={imgIdx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image src={project.images[imgIdx]} alt={`${project.title} screenshot`} fill className="object-contain" />
            </motion.div>
          </AnimatePresence>

          {project.images.length > 1 && (
            <>
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 shadow hover:scale-110 transition-transform">
                <ChevronLeft size={20} className="text-gray-700 dark:text-gray-300" />
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 shadow hover:scale-110 transition-transform">
                <ChevronRight size={20} className="text-gray-700 dark:text-gray-300" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={`h-1.5 rounded-full transition-all ${i === imgIdx ? "w-6 bg-purple-500" : "w-1.5 bg-gray-400/60"}`}
                  />
                ))}
              </div>
            </>
          )}

          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 shadow hover:scale-110 transition-transform"
          >
            <X size={18} className="text-gray-700 dark:text-gray-300" />
          </button>

          <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.color} shadow`}>
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-7 sm:p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{project.title}</h3>
            <p className="text-sm text-purple-500 dark:text-purple-400 font-medium mb-3">{project.tagline}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.longDescription}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-7">
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">Key Features</h4>
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className={`flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${project.color}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <ExternalLink size={16} />
            <span>Visit Live Site</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section bg-gray-50/50 dark:bg-[#080c1a] relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full blur-[100px] opacity-10"
        style={{ background: "radial-gradient(circle, #f093fb, transparent)" }} />

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
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade applications I&apos;ve designed and built for real businesses
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
              onClick={() => setSelected(project)}
            >
              <div className="h-full flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 glow-card transition-all duration-300">
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-slate-800">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.color} shadow-md`}>
                    {project.category}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-full p-3 shadow-xl">
                      <Layers className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{project.title}</h3>
                  <p className="text-xs text-purple-500 dark:text-purple-400 font-medium mb-3">{project.tagline}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md text-xs bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400">
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-slate-800">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={14} />
                      View Live
                    </a>
                    <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500 group-hover:text-purple-500 transition-colors">
                      Details
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
