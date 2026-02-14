
import React, { useEffect } from 'react';
import { ChevronLeft, CheckCircle2, MapPin } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute top-10 left-6 md:left-12 z-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all"
          >
            <ChevronLeft size={18} />
            <span className="text-[10px] font-bold tracking-widest uppercase">Retour</span>
          </button>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <span className="text-gold text-[10px] font-bold tracking-[0.5em] uppercase mb-4 animate-fade-in">PROJET D'ARCHITECTURE</span>
          <h1 className="text-white text-3xl md:text-6xl font-bold uppercase tracking-widest max-w-4xl serif animate-fade-in">
            {project.title}
          </h1>
          <div className="flex items-center gap-2 text-white/70 mt-6 text-[11px] tracking-widest uppercase">
            <MapPin size={14} className="text-gold" />
            {project.location}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Text */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-widest mb-6 serif">Le Concept</h2>
              <p className="text-gray-500 leading-relaxed text-lg italic">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-6">Détails du projet</h3>
                <ul className="flex flex-col gap-4">
                  {project.features?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Images Gallery */}
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-widest mb-2 serif">Portfolio</h2>
            <div className="grid grid-cols-2 gap-4">
              {project.gallery?.map((img, i) => (
                <div key={i} className={`overflow-hidden rounded-xl ${i === 0 ? 'col-span-2' : ''}`}>
                  <img 
                    src={img} 
                    alt={`Gallery ${i}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 uppercase tracking-widest mb-8 serif">Ce projet vous inspire ?</h2>
          <p className="text-gray-500 mb-10 uppercase text-xs tracking-widest">
            Contactez Noia Rénovation pour donner vie à vos idées les plus ambitieuses à Charleroi.
          </p>
          <button className="bg-gold text-white px-12 py-4 font-bold tracking-[0.2em] text-xs hover:bg-gray-800 transition-all uppercase rounded-full shadow-xl">
            DEMANDER UN DEVIS GRATUIT
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
