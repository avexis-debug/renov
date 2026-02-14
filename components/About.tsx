
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="presentation" className="py-24 px-6 bg-cream">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <div className="flex flex-col gap-2">
           <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500">QUI SOMMES NOUS ?</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight uppercase tracking-wider serif">
          VOTRE EXPERT RÉNOVATION À CHARLEROI
        </h2>

        <div className="text-gray-500 text-sm md:text-base leading-loose max-w-3xl">
          <p className="mb-6">
            Acteur incontournable de la rénovation dans la région de <span className="text-gold font-semibold">Charleroi</span> et du <span className="text-gold font-semibold">Hainaut</span>, Noia Rénovation sublime vos espaces de vie depuis plus de 5 ans. 
            Nous comprenons les spécificités architecturales carolos pour proposer des solutions sur-mesure.
          </p>
          <p>
            Notre équipe d'artisans passionnés intervient partout : de Gosselies à Marcinelle, en passant par Mont-sur-Marchienne. 
            Nous marions l'esthétique contemporaine à la durabilité pour des projets qui font la fierté de notre métropole.
          </p>
        </div>

        <button className="border border-gold text-gold px-10 py-3 text-xs font-bold tracking-[0.2em] hover:bg-gold hover:text-white transition-all uppercase rounded">
          DÉCOUVRIR NOTRE EXPERTISE
        </button>
      </div>
    </section>
  );
};

export default About;
