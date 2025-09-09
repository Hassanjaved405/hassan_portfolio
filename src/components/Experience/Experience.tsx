import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Full Stack Developer",
      company: "Paranox Technologies",
      location: "Islamabad, Pakistan",
      period: "Nov 2024 - Present",
      responsibilities: [
        "Designed and developed responsive web applications using React.js and Angular",
        "Led full-stack development ensuring seamless integration between systems",
        "Built scalable .NET backend solutions with high security and performance",
        "Created and optimized RESTful APIs for efficient data handling",
        "Implemented robust authentication and authorization mechanisms"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "IzyLogic",
      location: "Gujranwala, Pakistan",
      period: "Oct 2022 - Oct 2024",
      responsibilities: [
        "Developed and maintained responsive web applications using React.js",
        "Integrated third-party APIs and libraries for enhanced functionality",
        "Optimized application performance through code splitting and lazy loading",
        "Designed and maintained server-side applications using .NET",
        "Ensured data integrity through database design and optimization"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Xebex",
      location: "Lahore, Pakistan",
      period: "Jan 2021 - Sep 2022",
      responsibilities: [
        "Created new websites from scratch using React, JavaScript, HTML, CSS",
        "Implemented responsive design techniques for cross-device compatibility",
        "Ensured code quality with proper documentation and best practices",
        "Used GitHub for version control and participated in daily standups"
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="experience-title"
        >
          Professional Experience
        </motion.h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="experience-item"
            >
              <div className="experience-header">
                <div className="experience-info">
                  <h3 className="experience-job-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company} - {exp.location}</p>
                </div>
                <p className="experience-period">{exp.period}</p>
              </div>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;