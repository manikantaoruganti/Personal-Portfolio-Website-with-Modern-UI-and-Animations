import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { name } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface py-8 text-center text-textSecondary text-sm border-t border-border">
      <div className="container mx-auto px-4">
        <p>&copy; {currentYear} {name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
