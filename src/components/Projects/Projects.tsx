import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Food Reserve Agency",
      description: "Enterprise procurement management system for government food reserve agency, digitizing agricultural commodity purchasing operations across multiple regions.",
      image: "/food_reserve_preview.png",
      technologies: [".NET Core 8", "Entity Framework Core", "SQL Server", "React", "TypeScript", "Chart.js"],
      features: [
        "Multi-level hierarchical data management (Region → District → Satellite → Farmer)",
        "Advanced MT (Metric Ton) filtering system for commercial crop tracking",
        "Real-time dashboard with purchase trends and regional breakdowns",
        "Batch operations for efficient data processing",
        "Performance optimizations reducing query times from minutes to seconds"
      ]
    },
    {
      id: 2,
      title: "Klinik Healthcare System",
      description: "Full-stack healthcare management platform streamlining clinic operations and enhancing patient care through digital solutions.",
      image: "/kilinic_preview.png",
      technologies: ["Angular 18", ".NET 8", "Azure AD B2C", "Entity Framework Core", "JWT", "OAuth 2.0"],
      features: [
        "Patient registration and management system",
        "Real-time messaging between healthcare providers and patients",
        "Azure AD B2C integration with social login (Google, Facebook)",
        "Role-based access control with route guards",
        "Server-side rendering for improved SEO and performance"
      ]
    },
    {
      id: 3,
      title: "GroupTravel Platform",
      description: "Enterprise group travel management SaaS platform that streamlines organization, coordination, and financial management of group trips.",
      image: "/group_travel_preview.png",
      technologies: [".NET 9", "Angular 17", "SQL Server", "NgRx", "JWT", "SendGrid"],
      features: [
        "Advanced user management with multi-provider authentication",
        "Complete trip lifecycle management with capacity control",
        "Financial management with expense tracking and bill splitting",
        "Real-time notifications with priority-based system",
        "Analytics dashboard with comprehensive metrics"
      ]
    },
    {
      id: 4,
      title: "CStore CEO Dashboard",
      description: "Comprehensive convenience store management system with real-time analytics, inventory tracking, and business intelligence reporting.",
      image: "/CStore CEO/preview.webp",
      technologies: ["React.js", ".NET Core", "SQL Server", "Azure", "SignalR"],
      features: [
        "Real-time sales analytics and reporting",
        "Inventory management with automated alerts",
        "Multi-store management capabilities",
        "Employee performance tracking",
        "Customer behavior analytics"
      ]
    },
    {
      id: 5,
      title: "POS Pameric System",
      description: "Modern point-of-sale system with inventory management, sales analytics, and customer relationship management features.",
      image: "/POS PAmeric/Picture1.png",
      technologies: ["Angular", "ASP.NET", "PostgreSQL", "Docker", "RabbitMQ"],
      features: [
        "Fast transaction processing",
        "Offline mode with sync capabilities",
        "Multi-payment method support",
        "Loyalty program integration",
        "Advanced reporting dashboard"
      ]
    },
    {
      id: 6,
      title: "Squad Trip Platform",
      description: "Travel planning and group coordination platform with itinerary management, expense tracking, and real-time collaboration features.",
      image: "/Squad trip/Screenshot 2025-08-12 010403.jpg",
      technologies: ["React.js", "Node.js", "MongoDB", "AWS", "Socket.io"],
      features: [
        "Collaborative trip planning",
        "Real-time expense splitting",
        "Interactive itinerary builder",
        "Group chat and notifications",
        "Weather and location integration"
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="projects-title"
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23374151"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-family="sans-serif" font-size="20"%3EProject Image%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-tags">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="project-tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="project-tech-more">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="project-modal-content">
              <div className="project-modal-header">
                <h3 className="project-modal-title">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="project-modal-close"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="project-modal-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23374151"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-family="sans-serif" font-size="20"%3EProject Image%3C/text%3E%3C/svg%3E';
                }}
              />

              <p className="project-modal-description">{selectedProject.description}</p>

              <div className="project-modal-section">
                <h4 className="project-modal-section-title">Key Features</h4>
                <ul className="project-features-list">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-modal-section">
                <h4 className="project-modal-section-title">Technologies Used</h4>
                <div className="project-modal-tech-tags">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="project-modal-tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;