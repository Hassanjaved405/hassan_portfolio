"use client";

import { motion } from "framer-motion";

import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { LogoMark } from "./Logo";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/Hassanjaved405", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/hassan-javed-50541a111/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hassanjaved405@gmail.com", label: "Email" },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-gray-950 dark:bg-[#020510] text-gray-400 overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #667eea, #764ba2, #f093fb, transparent)" }} />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-40 rounded-full blur-[80px] opacity-10"
        style={{ background: "radial-gradient(circle, #764ba2, transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <LogoMark size={36} />
              <span className="text-xl font-bold gradient-text">Hassan.</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              Full Stack Developer crafting enterprise-grade web applications with modern
              technologies and a passion for clean, performant code.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" }); }}
                    className="text-sm text-gray-500 hover:text-purple-400 transition-colors hover:translate-x-1 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-purple-400 transition-all duration-300 overflow-hidden" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & socials */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Connect</h4>
            <div className="space-y-2 mb-5">
              <a href="mailto:hassanjaved405@gmail.com" className="block text-sm text-gray-500 hover:text-purple-400 transition-colors">
                hassanjaved405@gmail.com
              </a>
              <a href="tel:+923117731810" className="block text-sm text-gray-500 hover:text-purple-400 transition-colors">
                +92 311 7731810
              </a>
              <p className="text-sm text-gray-600">Islamabad, Pakistan</p>
            </div>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 rounded-xl bg-gray-800 text-gray-400 hover:bg-purple-900/50 hover:text-purple-400 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-800/50">
          <p className="text-xs text-gray-600 flex items-center gap-1.5">
            © {new Date().getFullYear()} Hassan Javed · Built with
            <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
            using Next.js & Tailwind CSS
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-3 sm:py-2 rounded-xl bg-gray-800 hover:bg-purple-900/50 text-gray-400 hover:text-purple-400 text-xs font-medium transition-all min-h-[44px] sm:min-h-0"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
