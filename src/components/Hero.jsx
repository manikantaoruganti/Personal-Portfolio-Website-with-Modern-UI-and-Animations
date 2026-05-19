import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { portfolioData } from '../data/portfolioData';
import { ParallaxBanner } from 'react-scroll-parallax';

const Hero = () => {
  const { name, title } = portfolioData.personalInfo;

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <ParallaxBanner
      layers={[
        {
          image: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Updated background image
          speed: -20, // Background moves slower than scroll
          expanded: false, // Prevents image from being too large initially
        },
      ]}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Blobs */}
      <div className="animated-blob-1 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="animated-blob-2 bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2"></div>
      <div className="animated-blob-3 top-1/2 right-1/3 -translate-y-1/2"></div>

      <div className="relative z-10 text-center p-6 md:p-10 max-w-4xl mx-auto glassmorphism rounded-3xl border-primary/20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={heroVariants}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white leading-tight">
            Hi, I'm <span className="text-primary">{name}</span>
          </h1>
          <p className="text-xl md:text-3xl lg:text-4xl font-medium text-textSecondary">
            {title}
          </p>
          <p className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto">
            {portfolioData.personalInfo.heroBio}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-accent transition-all duration-300 transform hover:scale-105 cursor-pointer text-lg"
              aria-label="View My Work"
            >
              View My Work
            </Link>
            <a
              href="/resume.pdf" // Placeholder for resume
              download="Manikanta_Oruganti_Resume.pdf"
              className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 text-lg"
              aria-label="Download Resume"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </ParallaxBanner>
  );
};

export default Hero;
