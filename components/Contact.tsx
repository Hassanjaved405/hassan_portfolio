"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hassanjaved405@gmail.com",
    href: "mailto:hassanjaved405@gmail.com",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 311 7731810",
    href: "tel:+923117731810",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Islamabad, Pakistan",
    href: null,
    color: "from-pink-500 to-rose-600",
  },
];

const socials = [
  {
    icon: Github,
    href: "https://github.com/Hassanjaved405",
    label: "GitHub",
    color: "hover:bg-gray-900 hover:text-white",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/hassan-javed-50541a111/",
    label: "LinkedIn",
    color: "hover:bg-blue-600 hover:text-white",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hassanjaved405@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section bg-white dark:bg-[#050816] relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-10"
        style={{ background: "radial-gradient(circle, #667eea, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[100px] opacity-10"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }} />

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
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Drop me a message and let&apos;s build something great.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Get In Touch</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Whether you need a complete product built from scratch, want to modernize
                an existing system, or just want to chat about technology — I&apos;m here.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 group hover:border-purple-200 dark:hover:border-purple-800 transition-all hover:-translate-y-0.5"
                  >
                    <div className={`flex-shrink-0 p-2.5 rounded-xl bg-gradient-to-br ${item.color} shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mb-0.5">{item.label}</p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.value}</p>
                    </div>
                    {item.href && <ArrowRight className="w-4 h-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </motion.div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="block">{content}</a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Socials */}
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Find me on</p>
              <div className="flex gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-xl border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-400 transition-all ${s.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="p-4 rounded-2xl border border-green-200 dark:border-green-900/40 bg-green-50 dark:bg-green-900/10">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-green-700 dark:text-green-400">Available Now</span>
              </div>
              <p className="text-xs text-green-600 dark:text-green-500">
                Open to full-time, contract, and freelance opportunities.
              </p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-3xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Your email client should open shortly. I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Hassan Javed"
                        className="input-field w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="hello@example.com"
                        className="input-field w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project inquiry / collaboration"
                      className="input-field w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project, timeline, and budget..."
                      className="input-field w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center gap-2 py-4 text-base"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </motion.button>

                  <p className="text-center text-xs text-gray-500 dark:text-gray-500">
                    I typically respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
