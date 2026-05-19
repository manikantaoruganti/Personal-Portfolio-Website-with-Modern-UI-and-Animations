import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-serif font-bold text-primary mb-12 text-center"
      >
        My Projects
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-surface p-8 rounded-2xl shadow-lg border border-border flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 group"
          >
            <div>
              <h3 className="text-2xl font-serif font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-textSecondary text-md mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.stack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-background rounded-full text-textSecondary text-xs font-medium border border-border group-hover:border-secondary transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-start gap-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-accent transition-colors duration-300 transform hover:scale-105 text-sm font-medium"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300 transform hover:scale-105 text-sm font-medium"
                aria-label={`View live demo of ${project.title}`}
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
