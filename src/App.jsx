import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load main sections for performance optimization
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<div className="h-screen bg-background flex items-center justify-center text-text">Loading...</div>}>
          <section id="home" className="min-h-screen flex items-center justify-center">
            <Hero />
          </section>
          <section id="about" className="py-20 md:py-28 lg:py-36 bg-surface">
            <About />
          </section>
          <section id="skills" className="py-20 md:py-28 lg:py-36 bg-background">
            <Skills />
          </section>
          <section id="projects" className="py-20 md:py-28 lg:py-36 bg-surface">
            <Projects />
          </section>
          <section id="contact" className="py-20 md:py-28 lg:py-36 bg-background">
            <Contact />
          </section>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
