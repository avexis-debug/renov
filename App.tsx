
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const handleProjectSelect = useCallback((id: number) => {
    setSelectedProjectId(id);
  }, []);

  const handleBackToHome = useCallback(() => {
    setSelectedProjectId(null);
    // Smooth scroll to top when coming back
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId);

  return (
    <div className="min-h-screen bg-cream selection:bg-gold selection:text-white">
      <Header />
      
      <main className="transition-all duration-500">
        {selectedProject ? (
          // Individual Project Page
          <ProjectDetail 
            project={selectedProject} 
            onBack={handleBackToHome} 
          />
        ) : (
          // Home Page
          <>
            <Hero />
            <About />
            <Services />
            <VideoSection />
            <Projects onProjectSelect={handleProjectSelect} />
            <Testimonials />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
