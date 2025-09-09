import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    const mailtoLink = `mailto:hassanjaved405@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "hassanjaved405@gmail.com",
      link: "mailto:hassanjaved405@gmail.com"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+92 311 7731810",
      link: "tel:+923117731810"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Islamabad, Pakistan",
      link: null
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Hassan Javed",
      link: "https://www.linkedin.com/in/hassan-javed-50541a111/"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-title"
        >
          Get In Touch
        </motion.h2>
        
        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="contact-intro-title">Let's work together</h3>
            <p className="contact-intro-text">
              I'm currently available for freelance projects and full-time opportunities. 
              Feel free to reach out if you have an interesting project or just want to connect!
            </p>
            
            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="contact-info-item"
                >
                  <div className="contact-info-icon">{info.icon}</div>
                  <div className="contact-info-details">
                    <p className="contact-info-label">{info.label}</p>
                    {info.link ? (
                      <a 
                        href={info.link}
                        target={info.label === "LinkedIn" ? "_blank" : undefined}
                        rel={info.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                        className="contact-info-link"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="contact-info-value">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-group">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="contact-input"
                />
              </div>
              <div className="contact-form-group">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="contact-input"
                />
              </div>
              <div className="contact-form-group">
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="contact-input"
                />
              </div>
              <div className="contact-form-group">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your Message"
                  required
                  className="contact-textarea"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="contact-submit-btn"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;