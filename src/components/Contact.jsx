import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { email, phone, github, linkedin } = portfolioData.personalInfo;

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-serif font-bold text-primary mb-12 text-center"
      >
        Get In Touch
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="bg-surface p-8 md:p-12 rounded-2xl shadow-lg border border-border text-center"
      >
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-textSecondary mb-8 leading-relaxed">
          I'm always open to new opportunities, collaborations, and interesting discussions. Feel free to reach out!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <motion.a
            variants={itemVariants}
            href={`mailto:${email}`}
            className="flex items-center justify-center gap-4 p-6 bg-background rounded-xl border border-border hover:border-primary hover:text-primary transition-all duration-300 group"
            aria-label={`Send an email to ${email}`}
          >
            <FaEnvelope className="text-3xl text-secondary group-hover:text-primary transition-colors duration-300" />
            <span className="text-lg font-medium text-text group-hover:text-primary transition-colors duration-300">{email}</span>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href={`tel:${phone}`}
            className="flex items-center justify-center gap-4 p-6 bg-background rounded-xl border border-border hover:border-primary hover:text-primary transition-all duration-300 group"
            aria-label={`Call ${phone}`}
          >
            <FaPhoneAlt className="text-3xl text-secondary group-hover:text-primary transition-colors duration-300" />
            <span className="text-lg font-medium text-text group-hover:text-primary transition-colors duration-300">{phone}</span>
          </motion.a>
        </div>

        <motion.div variants={itemVariants} className="flex justify-center space-x-8">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-primary transition-colors duration-300 transform hover:scale-125"
            aria-label="Visit my GitHub profile"
          >
            <FaGithub className="text-4xl" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-primary transition-colors duration-300 transform hover:scale-125"
            aria-label="Visit my LinkedIn profile"
          >
            <FaLinkedin className="text-4xl" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
