import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about-title"
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <p>
              I'm a Full Stack Developer with over 4 years of experience in building scalable web applications. 
              My expertise spans across modern frontend frameworks like React.js and Angular, combined with 
              robust backend development using .NET and various database technologies.
            </p>
            <p>
              Currently working at Paranox Technologies in Islamabad, I lead full-stack development initiatives, 
              ensuring seamless integration between frontend and backend systems. I specialize in cloud technologies 
              including Azure, AWS, and Kubernetes, with hands-on experience in containerization and microservices architecture.
            </p>
            <p>
              My approach combines technical excellence with strong collaboration skills, having worked in 
              Agile environments throughout my career. I focus on performance optimization, security best 
              practices, and delivering high-quality software solutions using modern DevOps practices.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-stats"
          >
            <div className="about-stat-card">
              <h3 className="about-stat-number">4+</h3>
              <p className="about-stat-label">Years Experience</p>
            </div>
            <div className="about-stat-card">
              <h3 className="about-stat-number">15+</h3>
              <p className="about-stat-label">Projects Completed</p>
            </div>
            <div className="about-stat-card">
              <h3 className="about-stat-number">20+</h3>
              <p className="about-stat-label">Technologies</p>
            </div>
            <div className="about-stat-card">
              <h3 className="about-stat-number">3</h3>
              <p className="about-stat-label">Companies</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;