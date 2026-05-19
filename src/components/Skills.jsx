import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as DiIcons from 'react-icons/di';

const getIconComponent = (iconName) => {
  const FaIcon = FaIcons[iconName];
  const SiIcon = SiIcons[iconName];
  const DiIcon = DiIcons[iconName];
  if (FaIcon) return FaIcon;
  if (SiIcon) return SiIcon;
  if (DiIcon) return DiIcon;
  return null; // Fallback if icon not found
};

const Skills = () => {
  const { skills, competitiveProgramming } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
        My Skills
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* Languages */}
        <motion.div variants={itemVariants} className="bg-surface p-8 rounded-2xl shadow-lg border border-border hover:border-primary transition-all duration-300">
          <h3 className="text-2xl font-serif font-semibold text-white mb-6 flex items-center gap-3">
            <FaIcons.FaCode className="text-primary" /> Languages
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.languages.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-background rounded-full text-textSecondary text-sm font-medium border border-border hover:border-secondary transition-colors duration-200">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Frontend */}
        <motion.div variants={itemVariants} className="bg-surface p-8 rounded-2xl shadow-lg border border-border hover:border-primary transition-all duration-300">
          <h3 className="text-2xl font-serif font-semibold text-white mb-6 flex items-center gap-3">
            <FaIcons.FaLaptopCode className="text-primary" /> Frontend
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.frontend.map((skill, index) => {
              const Icon = getIconComponent(`Si${skill.replace(/\s/g, '')}`);
              return (
                <span key={index} className="flex items-center gap-2 px-4 py-2 bg-background rounded-full text-textSecondary text-sm font-medium border border-border hover:border-secondary transition-colors duration-200">
                  {Icon && <Icon className="text-secondary" />} {skill}
                </span>
              );
            })}
          </div>
        </motion.div>

        {/* Backend */}
        <motion.div variants={itemVariants} className="bg-surface p-8 rounded-2xl shadow-lg border border-border hover:border-primary transition-all duration-300">
          <h3 className="text-2xl font-serif font-semibold text-white mb-6 flex items-center gap-3">
            <FaIcons.FaServer className="text-primary" /> Backend
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.backend.map((skill, index) => {
              const Icon = getIconComponent(`Si${skill.replace(/\s/g, '')}`);
              return (
                <span key={index} className="flex items-center gap-2 px-4 py-2 bg-background rounded-full text-textSecondary text-sm font-medium border border-border hover:border-secondary transition-colors duration-200">
                  {Icon && <Icon className="text-secondary" />} {skill}
                </span>
              );
            })}
          </div>
        </motion.div>

        {/* Database */}
        <motion.div variants={itemVariants} className="bg-surface p-8 rounded-2xl shadow-lg border border-border hover:border-primary transition-all duration-300">
          <h3 className="text-2xl font-serif font-semibold text-white mb-6 flex items-center gap-3">
            <FaIcons.FaDatabase className="text-primary" /> Database
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.database.map((skill, index) => {
              const Icon = getIconComponent(`Si${skill.replace(/\s/g, '')}`);
              return (
                <span key={index} className="flex items-center gap-2 px-4 py-2 bg-background rounded-full text-textSecondary text-sm font-medium border border-border hover:border-secondary transition-colors duration-200">
                  {Icon && <Icon className="text-secondary" />} {skill}
                </span>
              );
            })}
          </div>
        </motion.div>

        {/* Core */}
        <motion.div variants={itemVariants} className="bg-surface p-8 rounded-2xl shadow-lg border border-border hover:border-primary transition-all duration-300">
          <h3 className="text-2xl font-serif font-semibold text-white mb-6 flex items-center gap-3">
            <FaIcons.FaBrain className="text-primary" /> Core Concepts
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.core.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-background rounded-full text-textSecondary text-sm font-medium border border-border hover:border-secondary transition-colors duration-200">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div variants={itemVariants} className="bg-surface p-8 rounded-2xl shadow-lg border border-border hover:border-primary transition-all duration-300">
          <h3 className="text-2xl font-serif font-semibold text-white mb-6 flex items-center gap-3">
            <FaIcons.FaTools className="text-primary" /> Tools
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.tools.map((skill, index) => {
              const Icon = getIconComponent(`Si${skill.replace(/\s/g, '')}`);
              return (
                <span key={index} className="flex items-center gap-2 px-4 py-2 bg-background rounded-full text-textSecondary text-sm font-medium border border-border hover:border-secondary transition-colors duration-200">
                  {Icon && <Icon className="text-secondary" />} {skill}
                </span>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Competitive Programming */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="mt-16 bg-surface p-8 rounded-2xl shadow-lg border border-border hover:border-primary transition-all duration-300"
      >
        <motion.h3 variants={itemVariants} className="text-3xl font-serif font-bold text-primary mb-8 text-center flex items-center justify-center gap-3">
          <FaIcons.FaTrophy className="text-accent" /> Competitive Programming
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {Object.entries(competitiveProgramming).map(([platform, details], index) => (
            <motion.div variants={itemVariants} key={index} className="p-4 bg-background rounded-xl border border-border hover:border-secondary transition-colors duration-200">
              <p className="text-xl font-semibold text-white mb-2">{platform}</p>
              {typeof details === 'object' ? (
                Object.entries(details).map(([key, value]) => (
                  <p key={key} className="text-textSecondary text-md">
                    <span className="font-medium text-primary">{key}:</span> {value}
                  </p>
                ))
              ) : (
                <p className="text-textSecondary text-md">{details}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
