import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about, education, experience } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
          <img
            src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Placeholder Pexels image
            alt="Manikanta Venkateswarlu Oruganti Avatar"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary shadow-2xl transform hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </motion.div>

        <div className="space-y-8">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 text-center lg:text-left">
            About Me
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-textSecondary leading-relaxed text-center lg:text-left">
            {about.bio}
          </motion.p>

          <motion.div variants={itemVariants} className="bg-surface p-6 rounded-2xl shadow-lg border border-border">
            <h3 className="text-2xl font-serif font-semibold text-white mb-4">Education</h3>
            <p className="text-lg text-textSecondary">
              <span className="font-medium text-primary">{education.degree}</span> at {education.institution}
            </p>
            <p className="text-md text-textSecondary">{education.years} | CGPA: {education.cgpa}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-surface p-6 rounded-2xl shadow-lg border border-border">
            <h3 className="text-2xl font-serif font-semibold text-white mb-4">Experience</h3>
            {experience.map((exp, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <p className="text-lg text-textSecondary">
                  <span className="font-medium text-primary">{exp.title}</span> at {exp.company}
                </p>
                <p className="text-md text-textSecondary mb-2">{exp.duration}</p>
                <ul className="list-disc list-inside text-textSecondary space-y-1">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-md">{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface p-6 rounded-2xl shadow-lg border border-border">
              <h3 className="text-2xl font-serif font-semibold text-white mb-4">Current Focus</h3>
              <p className="text-lg text-textSecondary">{about.currentWork}</p>
            </div>
            <div className="bg-surface p-6 rounded-2xl shadow-lg border border-border">
              <h3 className="text-2xl font-serif font-semibold text-white mb-4">Learning Goals</h3>
              <p className="text-lg text-textSecondary">{about.currentLearning}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
