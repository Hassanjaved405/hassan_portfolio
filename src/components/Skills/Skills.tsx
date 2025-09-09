import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  color: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      skills: ["React.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      color: "from-purple-500 to-pink-500",
      skills: [".NET Core", "ASP.NET MVC", "Node.js", "RESTful APIs", "GraphQL", "Microservices", "RabbitMQ"]
    },
    {
      title: "Database",
      icon: "🗄️",
      color: "from-green-500 to-teal-500",
      skills: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "Database Optimization", "Query Performance Tuning"]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      color: "from-orange-500 to-red-500",
      skills: ["Azure", "AWS", "Kubernetes", "Docker", "Azure Blob Storage", "AWS S3", "CI/CD", "Jenkins"]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      color: "from-indigo-500 to-purple-500",
      skills: ["Git", "GitHub", "Bitbucket", "JWT", "OAuth", "Agile/Scrum", "JIRA", "Postman"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="skills-title"
        >
          Technical Skills
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="skills-category"
            >
              <div className={`skills-icon ${category.title.toLowerCase()}`}>
                {category.icon}
              </div>
              <h3 className="skills-category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;