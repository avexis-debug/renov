
import React from 'react';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  onProjectSelect: (id: number) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  // Only display the first 3 projects as requested
  const displayedProjects = PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-4 block animate-pulse">RÉALISATIONS D'EXCEPTION</span>
          <h2 className="text-4xl font-bold text-gray-800 uppercase tracking-widest serif">NOS PROJETS PHARE À CHARLEROI</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {displayedProjects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer flex flex-col items-center text-center"
              onClick={() => onProjectSelect(project.id)}
            >
              <div className="relative w-full h-[450px] overflow-hidden rounded-2xl shadow-sm mb-6 bg-white">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500 border border-white px-4 py-2">
                    Voir le projet
                  </span>
                </div>
              </div>
              <div className="px-4">
                <h3 className="text-[13px] font-bold tracking-widest uppercase text-gray-800 mb-2 leading-relaxed group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-[10px] tracking-widest text-gray-400 uppercase">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="bg-gold text-white px-10 py-3 text-xs font-bold tracking-[0.2em] hover:bg-gray-800 transition-all uppercase rounded-full shadow-lg">
            TOUS NOS CHANTIERS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
